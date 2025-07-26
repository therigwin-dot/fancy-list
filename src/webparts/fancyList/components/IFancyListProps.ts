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
}
