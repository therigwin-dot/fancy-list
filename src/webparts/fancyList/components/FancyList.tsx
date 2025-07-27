import * as React from 'react';
import styles from './FancyList.module.scss';
import type { IFancyListProps } from './IFancyListProps';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { IListItem } from './IListItem';

interface IFancyListState {
  items: IListItem[];
  categories: string[];
  selectedCategory: string;
  expandedItems: Set<number>;
  loading: boolean;
  error: string;
  titleImageError: boolean;
  titleImageValidationError: string | null; // For file type validation
  titleImageLoadError: boolean; // For load failures
  filterImageValidationError: string | null; // For filter file type validation
  filterImageLoadError: boolean; // For filter load failures
}

export default class FancyList extends React.Component<IFancyListProps, IFancyListState> {
  constructor(props: IFancyListProps) {
    super(props);
    this.state = {
      items: [],
      categories: [],
      selectedCategory: 'all',
      expandedItems: new Set(),
      loading: false,
      error: '',
      titleImageError: false,
      titleImageValidationError: null,
      titleImageLoadError: false,
      filterImageValidationError: null,
      filterImageLoadError: false
    };
  }

  public componentDidMount(): void {
    this.loadListData();
    this.checkTitleImage();
    this.checkFilterImage();
  }

  public componentDidUpdate(prevProps: IFancyListProps): void {
    if (prevProps.selectedListId !== this.props.selectedListId ||
        prevProps.categoryField !== this.props.categoryField ||
        prevProps.subjectField !== this.props.subjectField ||
        prevProps.descriptionField !== this.props.descriptionField) {
      this.loadListData();
    }
    
    // Refresh expanded state when defaultExpanded changes
    if (prevProps.defaultExpanded !== this.props.defaultExpanded) {
      this.setState(prevState => ({
        expandedItems: this.props.defaultExpanded ? 
          new Set(prevState.items.map(item => item.id)) : 
          new Set()
      }));
    }

    // Image loading detection for title section
    if (prevProps.titleSettings?.imageUrl !== this.props.titleSettings?.imageUrl ||
        prevProps.titleSettings?.backgroundType !== this.props.titleSettings?.backgroundType) {
      this.checkTitleImage();
    }
    
    // Image loading detection for filter section
    if (prevProps.filterSettings?.background?.image !== this.props.filterSettings?.background?.image ||
        prevProps.filterSettings?.background?.type !== this.props.filterSettings?.background?.type) {
      this.checkFilterImage();
    }
  }

  private async loadListData(): Promise<void> {
    if (!this.props.selectedListId) {
      this.setState({ items: [], categories: [], error: 'Please select a list in the web part properties.' });
      return;
    }
    if (!this.props.categoryField) {
      this.setState({ items: [], categories: [], error: 'Please select a Category field in the web part properties.' });
      return;
    }
    if (!this.props.subjectField) {
      this.setState({ items: [], categories: [], error: 'Please select a Subject field in the web part properties.' });
      return;
    }
    if (!this.props.descriptionField) {
      this.setState({ items: [], categories: [], error: 'Please select a Description field in the web part properties.' });
      return;
    }

    this.setState({ loading: true, error: '' });

    try {
      const response: SPHttpClientResponse = await this.props.context.spHttpClient.get(
        `${this.props.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${this.props.selectedListId}')/items?$select=${this.props.categoryField},${this.props.subjectField},${this.props.descriptionField}&$orderby=${this.props.categoryField},${this.props.subjectField}`,
        SPHttpClient.configurations.v1
      );

      if (!response.ok) {
        throw new Error(`Failed to load list data: ${response.statusText}`);
      }

      const data = await response.json();
      const items: IListItem[] = data.value.map((item: any, index: number) => ({
        id: item.Id || index,
        category: item[this.props.categoryField] || 'Uncategorized',
        subject: item[this.props.subjectField] || 'No Subject',
        description: item[this.props.descriptionField] || ''
      }));

      const categories = Array.from(new Set(items.map(item => item.category))).sort();
      
      this.setState({
        items,
        categories,
        expandedItems: this.props.defaultExpanded ? new Set(Array.from(items, item => item.id)) : new Set()
      });
    } catch (error) {
      this.setState({ error: `Error loading data: ${error.message}` });
    } finally {
      this.setState({ loading: false });
    }
  }

  private handleCategoryClick = (category: string): void => {
    this.setState({ selectedCategory: category });
  }

  private handleItemToggle = (itemId: number): void => {
    const newExpandedItems = new Set(this.state.expandedItems);
    if (newExpandedItems.has(itemId)) {
      newExpandedItems.delete(itemId);
    } else {
      newExpandedItems.add(itemId);
    }
    this.setState({ expandedItems: newExpandedItems });
  }

  private getFilteredItems(): IListItem[] {
    if (this.state.selectedCategory === 'all') {
      return this.state.items;
    }
    return this.state.items.filter(item => item.category === this.state.selectedCategory);
  }

  // Title Rendering Utility Functions

  private getBackgroundStyle(): React.CSSProperties {
    const { titleSettings } = this.props;
    
    if (!titleSettings) {
      return {};
    }
    
    // Safe property access with fallbacks
    const backgroundType = titleSettings.backgroundType || 'solid';
    const backgroundColor = titleSettings.backgroundColor || '#ffffff';
    const backgroundAlpha = titleSettings.backgroundAlpha || 0;
    const gradientDirection = titleSettings.gradientDirection || 'left-right';
    const gradientColor1 = titleSettings.gradientColor1 || '#ffffff';
    const gradientColor2 = titleSettings.gradientColor2 || '#000000';
    const gradientAlpha = titleSettings.gradientAlpha || 0;
    const imageUrl = titleSettings.imageUrl || '';
    const shape = titleSettings.shape || 'rounded';
    
    switch (backgroundType) {
      case 'solid':
        return {
          backgroundColor: this.hexToRgba(backgroundColor, backgroundAlpha / 100), // Normalize alpha: 0-100 to 0-1
          borderRadius: this.getShapeRadius(shape)
        };
      case 'gradient':
        return {
          background: this.getGradientStyle(gradientDirection, gradientColor1, gradientColor2, gradientAlpha / 100), // Normalize alpha: 0-100 to 0-1
          borderRadius: this.getShapeRadius(shape)
        };
      case 'image':
        if (imageUrl) {
          return {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: this.getShapeRadius(shape)
          };
        } else {
          return {
            backgroundColor: '#ffffff', // Simple white background for empty/invalid URLs
            borderRadius: this.getShapeRadius(shape)
          };
        }
      default:
        return {};
    }
  }

  private getShapeRadius(shape: 'square' | 'rounded' | 'pill'): string {
    switch (shape) {
      case 'square': return '0px';
      case 'rounded': return '4px';
      case 'pill': return '20px';
      default: return '4px';
    }
  }

  private getGradientStyle(direction: string, color1: string, color2: string, alpha: number): string {
    const rgba1 = this.hexToRgba(color1, alpha);
    const rgba2 = this.hexToRgba(color2, alpha);
    
    switch (direction) {
      case 'to bottom': return `linear-gradient(to bottom, ${rgba1}, ${rgba2})`;
      case 'left-right': return `linear-gradient(to right, ${rgba1}, ${rgba2})`;
      case 'to bottom right': return `linear-gradient(to bottom right, ${rgba1}, ${rgba2})`;
      case 'to bottom left': return `linear-gradient(to bottom left, ${rgba1}, ${rgba2})`;
      case 'radial': return `radial-gradient(circle, ${rgba1}, ${rgba2})`;
      default: return `linear-gradient(to right, ${rgba1}, ${rgba2})`;
    }
  }

  // Filter utility methods (like Title component pattern)
  private getFilterBorderRadius(shape: string): string {
    return shape === 'square' ? '0px'
      : shape === 'pill' ? '999px'
      : '16px'; // rounded default
  }

  private getTextDecoration(formatting: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
  }): string {
    let decoration = '';
    if (formatting.underline) decoration += 'underline ';
    if (formatting.strikethrough) decoration += 'line-through';
    return decoration.trim() || 'none';
  }

  private getFilterBackgroundStyle(filterSettings: any): React.CSSProperties {
    const { background } = filterSettings;

    if (background.type === 'solid') {
      return {
        background: this.hexToRgba(background.color, 1 - (background.alpha / 100)) // Invert alpha: 0% = opaque (alpha 1), 100% = transparent (alpha 0)
      };
    } else if (background.type === 'gradient') {
      return {
        background: this.getGradientStyle(
          background.gradientDirection,
          background.gradientColor1,
          background.gradientColor2,
          1 - (background.gradientAlpha1 / 100) // Invert alpha: 0% = opaque (alpha 1), 100% = transparent (alpha 0)
        )
      };
    } else if (background.type === 'image') {
      return {
        background: `linear-gradient(rgba(0,0,0,${background.alpha / 100}), rgba(0,0,0,${background.alpha / 100})), url(${background.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }
    return {};
  }

  // Add filter image error state management (like Title component)
  private checkFilterImage(): void {
    const { filterSettings } = this.props;
    
    if (filterSettings?.background?.type === 'image' && filterSettings.background.image) {
      // Validate file type
      const validationError = this.validateImageFileType(filterSettings.background.image);
      this.setState({ 
        filterImageValidationError: validationError,
        filterImageLoadError: false 
      });
      
      if (!validationError) {
        // Test image loading
        const img = new Image();
        img.onload = () => {
          this.setState({ 
            filterImageLoadError: false,
            filterImageValidationError: null 
          });
        };
        img.onerror = () => {
          this.setState({ 
            filterImageLoadError: true,
            filterImageValidationError: null 
          });
        };
        img.src = filterSettings.background.image;
      }
    } else {
      this.setState({ 
        filterImageValidationError: null,
        filterImageLoadError: false 
      });
    }
  }

  private hexToRgba(hex: string, alpha: number): string {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    const normalizedAlpha = alpha; // Fixed: alpha is already normalized (0-1) from getFilterBackgroundStyle
    return `rgba(${r},${g},${b},${normalizedAlpha})`;
  }



  private validateImageFileType(url: string): string | null {
    if (!url) return null;
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const lowerUrl = url.toLowerCase();
    const hasValidExtension = validExtensions.some(ext => lowerUrl.endsWith(ext));
    return hasValidExtension ? null : 'Not a valid image type';
  }

  private checkTitleImage(): void {
    const { titleSettings } = this.props;
    
    if (titleSettings?.backgroundType === 'image' && titleSettings?.imageUrl) {
      // Check file type first
      const validationError = this.validateImageFileType(titleSettings.imageUrl);
      this.setState({ titleImageValidationError: validationError });
      
      if (validationError) {
        this.setState({ titleImageLoadError: false, titleImageError: false });
        return;
      }
      
      // If file type is valid, check loading
      this.setState({ titleImageLoadError: false, titleImageError: false });
      
      const img = new Image();
      img.onload = () => {
        this.setState({ titleImageLoadError: false, titleImageError: false });
      };
      img.onerror = () => {
        this.setState({ titleImageLoadError: true, titleImageError: true });
      };
      img.src = titleSettings.imageUrl;
    } else {
      this.setState({ 
        titleImageError: false, 
        titleImageValidationError: null, 
        titleImageLoadError: false 
      });
    }
  }

  // Title Rendering Methods

  private getTitleStyle(): React.CSSProperties {
    const { titleSettings } = this.props;
    
    if (!titleSettings || !titleSettings.enabled) {
      return {};
    }
    
    // Safe property access with fallbacks
    const font = titleSettings.font || {
      family: 'Arial',
      size: '16px',
      color: '#000000',
      formatting: {
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false
      }
    };

    // Helper function to get text decoration (like Compare backup)
    const getTextDecoration = (formatting: {
      bold: boolean;
      italic: boolean;
      underline: boolean;
      strikethrough: boolean;
    }): string => {
      let decoration = '';
      if (formatting.underline) decoration += 'underline ';
      if (formatting.strikethrough) decoration += 'line-through';
      return decoration.trim() || 'none';
    };

    return {
      ...this.getBackgroundStyle(),
      fontFamily: font.family,
      fontSize: font.size,
      color: font.color,
      fontWeight: font.formatting.bold ? 'bold' : 'normal',
      fontStyle: font.formatting.italic ? 'italic' : 'normal',
      textDecoration: getTextDecoration(font.formatting),
      textAlign: font.alignment || 'left',
      marginBottom: '0.5em',
      lineHeight: 1.2,
      position: 'relative'
    };
  }



  private renderTitle(): React.ReactElement | null {
    const { titleSettings } = this.props;
    const { titleImageError } = this.state;
    
            console.log('🔍 TITLE DEBUG:', {
          titleSettings: titleSettings,
          enabled: titleSettings?.enabled,
          willRender: titleSettings?.enabled !== false
        }, 'TITLE SETTINGS FULL:', titleSettings);
    
    // If no titleSettings, render a default title (like Compare backup)
    if (!titleSettings) {
      return (
        <div style={this.getTitleStyle()}>
          Fancy List
        </div>
      );
    }
    
    // If titleSettings exists but disabled, don't render
    if (!titleSettings.enabled) {
      return null;
    }

    // Safe property access with fallbacks
    const webPartTitle = titleSettings.webPartTitle;
    const backgroundType = titleSettings.backgroundType || 'solid';
    const imageUrl = titleSettings.imageUrl || '';
    const imageAlpha = titleSettings.imageAlpha || 0;
    
    // Don't render title if webPartTitle is null, undefined, or empty
    if (!webPartTitle || webPartTitle.trim() === '') {
      return null;
    }

    return (
      <div style={this.getTitleStyle()}>
        {/* Layer 1: Transparency overlay for valid images */}
        {backgroundType === 'image' && imageUrl && !titleImageError && 
         imageAlpha !== undefined && imageAlpha > 0 && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `rgba(255,255,255,${imageAlpha / 100})`,
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
        )}
        
        {/* Layer 2: Title text */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          {webPartTitle}
        </div>
      </div>
    );
  }

  public render(): React.ReactElement<IFancyListProps> {
    const { loading, error, categories, selectedCategory, expandedItems } = this.state;
    const filteredItems = this.getFilteredItems();
    
    if (loading) {
      return (
        <div className={styles.fancyList}>
          <div className={styles.loading}>Loading...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className={styles.fancyList}>
          <div className={styles.error}>{error}</div>
        </div>
      );
    }

    return (
      <div className={styles.fancyList}>
        {this.renderTitle()}
        
        {/* Title Image Error Message - positioned below title section */}
        {(this.state.titleImageValidationError || this.state.titleImageLoadError || 
          (this.props.titleSettings?.backgroundType === 'image' && !this.props.titleSettings?.imageUrl)) && (
          <div
            style={{
              fontSize: '12px',
              fontFamily: 'Arial, sans-serif',
              color: '#000000',
              textAlign: 'right',
              marginTop: '8px',
              marginBottom: '8px'
            }}
          >
            {this.state.titleImageValidationError || 
             (this.state.titleImageLoadError ? 'Unable to access URL' : '') ||
             'Please enter an image URL'}
          </div>
        )}
        
        {/* Title Divider - positioned between title and filters */}
        {this.props.titleSettings?.showDivider && (
          <div style={{ 
            height: '1px', 
            backgroundColor: 'rgba(0, 0, 0, 0.1)', 
            marginTop: '12px',
            marginBottom: '12px'
          }} />
        )}
        {/* Category Filter Pills */}
        {console.log('🔍 FILTER DEBUG:', {
          filterSettings: this.props.filterSettings,
          enabled: this.props.filterSettings?.enableFilters,
          willRender: this.props.filterSettings?.enableFilters === true,
          backgroundAlpha: this.props.filterSettings?.background?.alpha,
          gradientAlpha: this.props.filterSettings?.background?.gradientAlpha1
        }, 'FILTER SETTINGS FULL:', this.props.filterSettings)}
        {this.props.filterSettings?.enableFilters && (
          <>
            <div
              className={styles.categoryFilters}
              style={{
                ...this.getFilterBackgroundStyle(this.props.filterSettings),
                position: 'relative',
                padding: '12px',
                marginBottom: '12px'
              }}
            >
              {/* Layer 1: Transparency overlay for image backgrounds */}
              {this.props.filterSettings?.background?.type === 'image' && 
               this.props.filterSettings?.background?.image && 
               !this.state.filterImageValidationError && 
               !this.state.filterImageLoadError && 
               this.props.filterSettings?.background?.imageAlpha !== undefined && 
               this.props.filterSettings?.background?.imageAlpha > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `rgba(255,255,255,${(this.props.filterSettings?.background?.imageAlpha || 0) / 100})`,
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                />
              )}
              
              {/* Layer 2: Filter buttons */}
              <div style={{ 
                position: 'relative', 
                zIndex: 2,
                textAlign: this.props.filterSettings?.font?.alignment || 'left'
              }}>
                {this.props.showAllCategories && (
                  <button
                    className={`${styles.categoryPill} ${selectedCategory === 'all' ? styles.active : ''}`}
                    style={{
                      background: selectedCategory === 'all' ? this.props.filterSettings?.activeColors?.background : this.props.filterSettings?.inactiveColors?.background,
                      color: selectedCategory === 'all' ? this.props.filterSettings?.activeColors?.font : this.props.filterSettings?.inactiveColors?.font,
                      fontFamily: this.props.filterSettings?.font?.family,
                      fontSize: this.props.filterSettings?.font?.size,
                      fontWeight: this.props.filterSettings?.font?.formatting?.bold ? 'bold' : 'normal',
                      fontStyle: this.props.filterSettings?.font?.formatting?.italic ? 'italic' : 'normal',
                      textDecoration: this.getTextDecoration(this.props.filterSettings?.font?.formatting || { bold: false, italic: false, underline: false, strikethrough: false }),
                      borderRadius: this.getFilterBorderRadius(this.props.filterSettings?.shape || 'rounded'),
                      border: 'none',
                      padding: '8px 16px',
                      margin: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => this.handleCategoryClick('all')}
                  >
                    All
                  </button>
                )}
                {categories.map(category => (
                  <button
                    key={category}
                    className={`${styles.categoryPill} ${selectedCategory === category ? styles.active : ''}`}
                    style={{
                      background: selectedCategory === category ? this.props.filterSettings?.activeColors?.background : this.props.filterSettings?.inactiveColors?.background,
                      color: selectedCategory === category ? this.props.filterSettings?.activeColors?.font : this.props.filterSettings?.inactiveColors?.font,
                      fontFamily: this.props.filterSettings?.font?.family,
                      fontSize: this.props.filterSettings?.font?.size,
                      fontWeight: this.props.filterSettings?.font?.formatting?.bold ? 'bold' : 'normal',
                      fontStyle: this.props.filterSettings?.font?.formatting?.italic ? 'italic' : 'normal',
                      textDecoration: this.getTextDecoration(this.props.filterSettings?.font?.formatting || { bold: false, italic: false, underline: false, strikethrough: false }),
                      borderRadius: this.getFilterBorderRadius(this.props.filterSettings?.shape || 'rounded'),
                      border: 'none',
                      padding: '8px 16px',
                      margin: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => this.handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Image Error Message - positioned below filter section */}
            {(this.state.filterImageValidationError || this.state.filterImageLoadError || 
              (this.props.filterSettings?.background?.type === 'image' && !this.props.filterSettings?.background?.image)) && (
              <div
                style={{
                  fontSize: '12px',
                  fontFamily: 'Arial, sans-serif',
                  color: '#000000',
                  textAlign: 'right',
                  marginTop: '8px',
                  marginBottom: '8px'
                }}
              >
                {this.state.filterImageValidationError || 
                 (this.state.filterImageLoadError ? 'Unable to access URL' : '') ||
                 'Please enter an image URL'}
              </div>
            )}

            {/* Filter Divider - positioned between filters and list items */}
            {this.props.filterSettings?.showDivider && (
              <div style={{
                height: '1px',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                marginTop: '12px',
                marginBottom: '12px'
              }} />
            )}
          </>
        )}

        {/* Collapsible Items */}
        <div className={styles.itemsContainer}>
          {filteredItems.map(item => (
            <div key={item.id} className={styles.itemPanel}>
              <button
                className={styles.itemHeader}
                onClick={() => this.handleItemToggle(item.id)}
                aria-expanded={expandedItems.has(item.id) ? "true" : "false"}
              >
                <span className={styles.itemSubject}>{item.subject}</span>
                <span className={styles.expandIcon}>
                  {expandedItems.has(item.id) ? '−' : '+'}
                </span>
              </button>
              {expandedItems.has(item.id) && (
                <div className={styles.itemContent}>
                  <div 
                    className={styles.itemDescription}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
