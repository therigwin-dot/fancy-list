export interface IFancyListProps {
  // List and field configuration
  selectedListId: string;
  categoryField: string;
  subjectField: string;
  descriptionField: string;
  
  // Display settings
  showAllCategories: boolean;
  defaultExpanded: boolean;
  
  // Theme and styling
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  
  // Context
  context: any; // SPFx context for data access
  
  // Title Settings
  titleSettings?: {
    enabled: boolean;
    webPartTitle: string;
    shape: 'square' | 'rounded' | 'pill';
    showDivider: boolean;
    backgroundType: 'solid' | 'gradient' | 'image';
    backgroundColor: string;
    backgroundAlpha: number;
    gradientDirection: string;
    gradientColor1: string;
    gradientColor2: string;
    gradientAlpha: number;
    imageUrl: string;
    imageAlpha: number;
    font: {
      family: string;
      size: string;
      color: string;
      formatting: {
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strikethrough: boolean;
      };
      alignment?: 'left' | 'center' | 'right' | 'justify';
    };
  };
}
