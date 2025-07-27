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
    if (!titleSettings) return {};
    
    const { backgroundType, backgroundColor, backgroundAlpha, gradientDirection, 
            gradientColor1, gradientColor2, gradientAlpha, imageUrl } = titleSettings;
    
    switch (backgroundType) {
      case 'solid':
        return {
          backgroundColor: this.hexToRgba(backgroundColor, backgroundAlpha),
          borderRadius: this.getShapeRadius(titleSettings.shape)
        };
      case 'gradient':
        return {
          background: this.getGradientStyle(gradientDirection, gradientColor1, gradientColor2, gradientAlpha),
          borderRadius: this.getShapeRadius(titleSettings.shape)
        };
      case 'image':
        return {
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: this.getShapeRadius(titleSettings.shape)
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

  public render(): React.ReactElement<IFancyListProps> {
    const { loading, error, categories, selectedCategory, expandedItems } = this.state;
    const filteredItems = this.getFilteredItems();
    
    // Temporary usage to prevent TypeScript unused function warnings
    // These will be used in Phase 3
    if (this.props.titleSettings) {
      this.getBackgroundStyle();
      this.getShapeRadius('rounded');
      this.getGradientStyle('left-right', '#ff0000', '#00ff00', 50);
      this.hexToRgba('#ff0000', 50);
      this.isValidImageUrl('test.jpg');
    }

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
