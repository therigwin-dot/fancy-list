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
      error: ''
    };
  }

  public componentDidMount(): void {
    this.loadListData();
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
          backgroundColor: this.hexToRgba(backgroundColor, backgroundAlpha),
          borderRadius: this.getShapeRadius(shape)
        };
      case 'gradient':
        return {
          background: this.getGradientStyle(gradientDirection, gradientColor1, gradientColor2, gradientAlpha),
          borderRadius: this.getShapeRadius(shape)
        };
      case 'image':
        return {
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: this.getShapeRadius(shape)
        };
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

  private hexToRgba(hex: string, alpha: number): string {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    const normalizedAlpha = 1 - (alpha / 100);
    return `rgba(${r},${g},${b},${normalizedAlpha})`;
  }

  private isValidImageUrl(url: string): boolean {
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const lowerUrl = url.toLowerCase();
    return validExtensions.some(ext => lowerUrl.endsWith(ext));
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

    return {
      fontFamily: font.family,
      fontSize: font.size,
      color: font.color,
      ...this.getTextDecoration(font.formatting)
    };
  }

  private getTextDecoration(formatting: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
  }): React.CSSProperties {
    return {
      fontWeight: formatting.bold ? 'bold' : 'normal',
      fontStyle: formatting.italic ? 'italic' : 'normal',
      textDecoration: [
        formatting.underline ? 'underline' : '',
        formatting.strikethrough ? 'line-through' : ''
      ].filter(Boolean).join(' ') || 'none'
    };
  }

  private renderTitle(): React.ReactElement | null {
    const { titleSettings } = this.props;
    
    // If no titleSettings, render a default title (like Compare backup)
    if (!titleSettings) {
      return (
        <div className={styles.titleContainer}>
          <div className={styles.titleText}>
            Fancy List
          </div>
        </div>
      );
    }
    
    // If titleSettings exists but disabled, don't render
    if (!titleSettings.enabled) {
      return null;
    }

    // Safe property access with fallbacks
    const webPartTitle = titleSettings.webPartTitle || 'Fancy List';
    const showDivider = titleSettings.showDivider || false;
    const backgroundType = titleSettings.backgroundType || 'solid';
    const imageUrl = titleSettings.imageUrl || '';
    
    // Check for invalid image URL
    if (backgroundType === 'image' && imageUrl && !this.isValidImageUrl(imageUrl)) {
      return (
        <div className={styles.titleContainer} style={this.getBackgroundStyle()}>
          <div className={styles.titleError}>
            <div className={styles.errorTitle} style={this.getTitleStyle()}>
              Invalid Image URL
            </div>
            <div className={styles.errorMessage}>
              Please provide a valid image file (.jpg, .jpeg, .png, .gif, .webp)
            </div>
          </div>
          {showDivider && <div className={styles.titleDivider} />}
        </div>
      );
    }

    return (
      <div className={styles.titleContainer} style={this.getBackgroundStyle()}>
        <div className={styles.titleText} style={this.getTitleStyle()}>
          {webPartTitle}
        </div>
        {showDivider && <div className={styles.titleDivider} />}
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
        {/* Category Filter Pills */}
        <div className={styles.categoryFilters}>
          {this.props.showAllCategories && (
            <button
              className={`${styles.categoryPill} ${selectedCategory === 'all' ? styles.active : ''}`}
              onClick={() => this.handleCategoryClick('all')}
            >
              All
            </button>
          )}
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryPill} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => this.handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

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
