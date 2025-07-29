export interface IListItem {
  id: number;
  category: string;
  subject: string;
  description: string;
  descriptionType?: 'text' | 'image' | 'richtext';
  attachments?: Array<{
    fileName: string;
    serverRelativeUrl: string;
    fileSize?: number;
  }>;
  rawDescription?: any; // Raw SharePoint field data for type detection
} 