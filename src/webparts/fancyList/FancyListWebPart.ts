import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneLabel
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { SPHttpClient } from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';

import * as strings from 'FancyListWebPartStrings';
import FancyList from './components/FancyList';
import { IFancyListProps } from './components/IFancyListProps';

export interface IFancyListWebPartProps {
  selectedListId: string;
  categoryField: string;
  subjectField: string;
  descriptionField: string;
  showAllCategories: boolean;
  defaultExpanded: boolean;
  // Additional properties for the 7-page framework
  webPartTitle: string;
  webPartTitleColor: string;
  webPartTitleFont: string;
  webPartTitleFontSize: string;
  webPartTitleFormatting: { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean };
  webPartTitleBackgroundType: 'solid' | 'gradient' | 'image';
  webPartTitleBackgroundColor: string;
  webPartTitleBackgroundAlpha: number;
  webPartTitleBackgroundImage: string;
  webPartTitleBackgroundImageAlpha: number;
  webPartTitleBackgroundGradientDirection: string;
  webPartTitleBackgroundGradientColor1: string;
  webPartTitleBackgroundGradientAlpha1: number;
  webPartTitleBackgroundGradientColor2: string;
  webPartTitleBackgroundGradientAlpha2: number;
  showTitleDivider: boolean;
  titleSettings: TitleSettings;
  filterSettings: FilterSettings;
  context: WebPartContext;
}

export interface TitleSettings {
  resetButtonText: string;
  description: string;
  webPartTitle: string;
  font: {
    family: string;
    size: string;
    color: string;
    formatting: { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean; };
  };
  background: {
    type: 'solid' | 'gradient' | 'image';
    color: string;
    alpha: number;
    image: string;
    imageAlpha: number;
    gradientDirection: string;
    gradientColor1: string;
    gradientAlpha1: number;
    gradientColor2: string;
    gradientAlpha2: number;
  };
  showDivider: boolean;
}

export interface FilterSettings {
  resetButtonText: string;
  description: string;
  enableFilters: boolean;
  showAllCategories: boolean;
  font: {
    family: string;
    size: string;
    formatting: { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean; };
  };
  activeColors: {
    background: string;
    font: string;
  };
  inactiveColors: {
    background: string;
    font: string;
  };
  shape: 'square' | 'rounded' | 'pill';
  background: {
    type: 'solid' | 'gradient' | 'image';
    color: string;
    alpha: number;
    image: string;
    imageAlpha: number;
    gradientDirection: string;
    gradientColor1: string;
    gradientAlpha1: number;
    gradientColor2: string;
    gradientAlpha2: number;
  };
  showDivider: boolean;
}

export default class FancyListWebPart extends BaseClientSideWebPart<IFancyListWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  // Store dropdown options
  private _lists: { key: string, text: string }[] = [];
  private _fields: { key: string, text: string }[] = [];
  private _fieldsLoadedForList: string = '';
  private _loadingLists: boolean = false;
  private _loadingFields: boolean = false;

  // Testing defaults for Page 1
  private readonly TESTING_DEFAULTS = {
    selectedListId: 'Site Pages',
    categoryField: 'Title',
    subjectField: 'Title',
    descriptionField: 'Title'
  };

  public render(): void {
    const element: React.ReactElement<IFancyListProps> = React.createElement(
      FancyList,
      {
        selectedListId: this.properties.selectedListId,
        categoryField: this.properties.categoryField,
        subjectField: this.properties.subjectField,
        descriptionField: this.properties.descriptionField,
        showAllCategories: this.properties.showAllCategories,
        defaultExpanded: this.properties.defaultExpanded,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  public async onPropertyPaneConfigurationStart(): Promise<void> {
    // Load lists if not already loaded
    if (!this._lists.length && !this._loadingLists) {
      this._loadingLists = true;
      const lists = await this._loadLists();
      this._lists = lists;
      this._loadingLists = false;
      this.context.propertyPane.refresh();
    }
    // Load fields if a list is selected
    if (this.properties.selectedListId && this._fieldsLoadedForList !== this.properties.selectedListId && !this._loadingFields) {
      this._loadingFields = true;
      const fields = await this._loadFields(this.properties.selectedListId);
      this._fields = fields;
      this._fieldsLoadedForList = this.properties.selectedListId;
      this._loadingFields = false;
      this.context.propertyPane.refresh();
    }
  }

  public async onPropertyPaneFieldChanged(propertyPath: string, oldValue: unknown, newValue: unknown): Promise<void> {
    if (propertyPath === 'selectedListId') {
      // Clear field selections and reload fields
      this.properties.categoryField = '';
      this.properties.subjectField = '';
      this.properties.descriptionField = '';
      this._fields = [];
      this._fieldsLoadedForList = '';
      this._loadingFields = true;
      const fields = await this._loadFields(this.properties.selectedListId);
      this._fields = fields;
      this._fieldsLoadedForList = this.properties.selectedListId;
      this._loadingFields = false;
      this.context.propertyPane.refresh();
    } else if (propertyPath === 'categoryField') {
      // Clear subject and description when category changes
      this.properties.subjectField = '';
      this.properties.descriptionField = '';
      this.context.propertyPane.refresh();
    } else if (propertyPath === 'subjectField') {
      // Clear description when subject changes
      this.properties.descriptionField = '';
      this.context.propertyPane.refresh();
    }
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private async _loadLists(): Promise<{ key: string, text: string }[]> {
    const url = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists?$filter=Hidden eq false and BaseTemplate ne 544&$select=Id,Title`;
    const response = await this.context.spHttpClient.get(url, SPHttpClient.configurations.v1);
    const data = await response.json();
    return data.value.map((list: any) => ({ key: list.Title, text: list.Title }));
  }

  private async _loadFields(listTitle: string): Promise<{ key: string, text: string }[]> {
    if (!listTitle) return [];
    const url = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${listTitle}')/fields?$filter=Hidden eq false and ReadOnlyField eq false&$select=InternalName,Title,TypeAsString`;
    const response = await this.context.spHttpClient.get(url, SPHttpClient.configurations.v1);
    const data = await response.json();
    // Only allow text, choice, or multiline fields for mapping
    return data.value
      .filter((field: any) => ['Text', 'Choice', 'Note'].includes(field.TypeAsString))
      .map((field: any) => ({ key: field.InternalName, text: field.Title || field.InternalName }));
  }

  private _getAvailableFieldsForCategory(): { key: string, text: string }[] {
    if (!this.properties.selectedListId) {
      return [{ key: '', text: 'Select a list first' }];
    }
    if (this._loadingFields) {
      return [{ key: '', text: 'Loading...' }];
    }
    return this._fields.filter(field =>
      field.key !== this.properties.subjectField &&
      field.key !== this.properties.descriptionField
    );
  }

  private _getAvailableFieldsForSubject(): { key: string, text: string }[] {
    if (!this.properties.selectedListId) {
      return [{ key: '', text: 'Select a list first' }];
    }
    if (!this.properties.categoryField) {
      return [{ key: '', text: 'Select category field first' }];
    }
    if (this._loadingFields) {
      return [{ key: '', text: 'Loading...' }];
    }
    return this._fields.filter(field =>
      field.key !== this.properties.categoryField &&
      field.key !== this.properties.descriptionField
    );
  }

  private _getAvailableFieldsForDescription(): { key: string, text: string }[] {
    if (!this.properties.selectedListId) {
      return [{ key: '', text: 'Select a list first' }];
    }
    if (!this.properties.categoryField) {
      return [{ key: '', text: 'Select category field first' }];
    }
    if (!this.properties.subjectField) {
      return [{ key: '', text: 'Select subject field first' }];
    }
    if (this._loadingFields) {
      return [{ key: '', text: 'Loading...' }];
    }
    return this._fields.filter(field =>
      field.key !== this.properties.categoryField &&
      field.key !== this.properties.subjectField
    );
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    const WEBPART_VERSION = '1.0.0.0'; // Keep in sync with package-solution.json
    return {
      pages: [
        // Page 1: List Configuration
        {
          groups: [
            {
              groupName: 'List Configuration',
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'listConfigurationDescription',
                  properties: {
                    key: 'listConfigurationDescription',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement('div', {
                          style: { 
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '16px',
                            lineHeight: '1.4'
                          }
                        }, 'Select a SharePoint List or Document Library. Then using the drop downs first pick a Category. This is the top level and is Filterable. Next pick your Subject. This is quick description field. Finally pick a Description. This field can be multiline and include rich html components from the list or document library you select.'),
                        elem
                      );
                    },
                    onDispose: (elem: HTMLElement) => {
                      ReactDom.unmountComponentAtNode(elem);
                    }
                  }
                },
                PropertyPaneDropdown('selectedListId', {
                  label: 'Select List or Library',
                  options: this._lists.length ? this._lists : [{ key: '', text: this._loadingLists ? 'Loading...' : 'No lists found' }],
                  selectedKey: this.properties.selectedListId
                }),
                PropertyPaneDropdown('categoryField', {
                  label: 'Category Field (Required First)',
                  options: this._getAvailableFieldsForCategory(),
                  selectedKey: this.properties.categoryField,
                  disabled: !this.properties.selectedListId
                }),
                PropertyPaneDropdown('subjectField', {
                  label: 'Subject Field (Required Second)',
                  options: this._getAvailableFieldsForSubject(),
                  selectedKey: this.properties.subjectField,
                  disabled: !this.properties.selectedListId || !this.properties.categoryField
                }),
                PropertyPaneDropdown('descriptionField', {
                  label: 'Description Field (Required Third)',
                  options: this._getAvailableFieldsForDescription(),
                  selectedKey: this.properties.descriptionField,
                  disabled: !this.properties.selectedListId || !this.properties.categoryField || !this.properties.subjectField
                }),
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'page1Buttons',
                  properties: {
                    key: 'page1Buttons',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement('div', {
                          style: { 
                            marginTop: '16px', 
                            padding: '8px', 
                            borderTop: '1px solid #e1dfdd',
                            textAlign: 'center' as const
                          }
                        }, [
                          React.createElement('button', {
                            key: 'testDefaultsBtn',
                            style: {
                              backgroundColor: '#0078d4',
                              color: 'white',
                              border: 'none',
                              padding: '8px 16px',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: '600',
                              marginRight: '8px'
                            },
                            onClick: async () => {
                              // Set test defaults one by one
                              this.properties.selectedListId = this.TESTING_DEFAULTS.selectedListId;
                              if (changeCallback) changeCallback();
                              this.context.propertyPane.refresh();
                              
                              // Wait longer for the list to load, then load fields and set category field
                              setTimeout(async () => {
                                try {
                                  // Load fields for the selected list
                                  this._fields = await this._loadFields(this.TESTING_DEFAULTS.selectedListId);
                                  this._fieldsLoadedForList = this.TESTING_DEFAULTS.selectedListId;
                                  console.log('Loaded fields:', this._fields);
                                  console.log('Looking for description field:', this.TESTING_DEFAULTS.descriptionField);
                                  
                                  // Set category field
                                  this.properties.categoryField = this.TESTING_DEFAULTS.categoryField;
                                  if (changeCallback) changeCallback();
                                  this.context.propertyPane.refresh();
                                  
                                  // Wait longer, then set subject field
                                  setTimeout(async () => {
                                    this.properties.subjectField = this.TESTING_DEFAULTS.subjectField;
                                    if (changeCallback) changeCallback();
                                    this.context.propertyPane.refresh();
                                    
                                    // Wait longer, then set description field
                                    setTimeout(() => {
                                      console.log('Setting description field to:', this.TESTING_DEFAULTS.descriptionField);
                                      this.properties.descriptionField = this.TESTING_DEFAULTS.descriptionField;
                                      if (changeCallback) changeCallback();
                                      this.context.propertyPane.refresh();
                                      
                                      // Force another refresh after a short delay to ensure the value is set
                                      setTimeout(() => {
                                        console.log('Final refresh to ensure description field is set');
                                        this.context.propertyPane.refresh();
                                      }, 500);
                                    }, 2000);
                                  }, 2000);
                                } catch (error) {
                                  console.error('Error loading fields:', error);
                                }
                              }, 2000);
                            }
                          }, 'Test Defaults')
                        ]),
                        elem
                      );
                    },
                    onDispose: (elem: HTMLElement) => {
                      ReactDom.unmountComponentAtNode(elem);
                    }
                  }
                },
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'pageNavigation',
                  properties: {
                    key: 'pageNavigation',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement('div', {
                          style: { 
                            marginTop: '16px', 
                            padding: '8px', 
                            borderTop: '1px solid #e1dfdd',
                            fontSize: '14px',
                            color: '#323130'
                          }
                        }, [
                          React.createElement('div', { key: 'navTitle', style: { fontWeight: '600', marginBottom: '8px' } }, 'Page Navigation:'),
                          React.createElement('div', { key: 'page1', style: { marginBottom: '4px' } }, 'Page 1 - List Selection and Configuration'),
                          React.createElement('div', { key: 'page2', style: { marginBottom: '4px' } }, 'Page 2 - Title Configuration'),
                          React.createElement('div', { key: 'page3', style: { marginBottom: '4px' } }, 'Page 3 - Filter Configuration'),
                          React.createElement('div', { key: 'page4', style: { marginBottom: '4px' } }, 'Page 4 - Category Look and Feel'),
                          React.createElement('div', { key: 'page5', style: { marginBottom: '4px' } }, 'Page 5 - Subject Look and Feel'),
                          React.createElement('div', { key: 'page6', style: { marginBottom: '4px' } }, 'Page 6 - Description Look and Feel'),
                          React.createElement('div', { key: 'page7', style: { marginBottom: '4px' } }, 'Page 7 - About')
                        ]),
                        elem
                      );
                    },
                    onDispose: (elem: HTMLElement) => {
                      ReactDom.unmountComponentAtNode(elem);
                    }
                  }
                }
              ]
            }
          ]
        },
        // Page 2: Title Section Configuration (Placeholder)
        {
          header: {
            description: 'Title Section Configuration - Coming Soon'
          },
          groups: [
            {
              groupName: 'Title Section Settings',
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'titlePlaceholder',
                  properties: {
                    key: 'titlePlaceholder',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement('div', {
                          style: { 
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '16px',
                            lineHeight: '1.4',
                            padding: '16px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px',
                            border: '1px solid #e1dfdd'
                          }
                        }, 'Title Section Configuration - This page will be updated with interactive controls for styling the title section. Currently using default styling.'),
                        elem
                      );
                    },
                    onDispose: (elem: HTMLElement) => {
                      ReactDom.unmountComponentAtNode(elem);
                    }
                  }
                }
              ]
            }
          ]
        },
        // Page 3: Filter Buttons Configuration (Placeholder)
        {
          header: {
            description: 'Filter Buttons Configuration - Coming Soon'
          },
          groups: [
            {
              groupName: 'Filter Section Settings',
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'filterPlaceholder',
                  properties: {
                    key: 'filterPlaceholder',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement('div', {
                          style: { 
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '16px',
                            lineHeight: '1.4',
                            padding: '16px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px',
                            border: '1px solid #e1dfdd'
                          }
                        }, 'Filter Buttons Configuration - This page will be updated with interactive controls for styling filter buttons. Currently using default styling.'),
                        elem
                      );
                    },
                    onDispose: (elem: HTMLElement) => {
                      ReactDom.unmountComponentAtNode(elem);
                    }
                  }
                }
              ]
            }
          ]
        },
        // Page 4: Category Section Configuration (Placeholder)
        {
          header: {
            description: 'Category Section Configuration - Coming Soon'
          },
          groups: [
            {
              groupName: 'Category Section Settings',
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'categoryPlaceholder',
                  properties: {
                    key: 'categoryPlaceholder',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement('div', {
                          style: { 
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '16px',
                            lineHeight: '1.4',
                            padding: '16px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px',
                            border: '1px solid #e1dfdd'
                          }
                        }, 'Category Section Configuration - This page will be updated with interactive controls for styling Category sections. Currently using default styling.'),
                        elem
                      );
                    },
                    onDispose: (elem: HTMLElement) => {
                      ReactDom.unmountComponentAtNode(elem);
                    }
                  }
                }
              ]
            }
          ]
        },
        // Page 5: Subject Section Configuration (Placeholder)
        {
          header: {
            description: 'Subject Section Configuration - Coming Soon'
          },
          groups: [
            {
              groupName: 'Subject Section Settings',
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'subjectPlaceholder',
                  properties: {
                    key: 'subjectPlaceholder',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement('div', {
                          style: { 
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '16px',
                            lineHeight: '1.4',
                            padding: '16px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px',
                            border: '1px solid #e1dfdd'
                          }
                        }, 'Subject Section Configuration - This page will be updated with interactive controls for styling Subject sections. Currently using default styling.'),
                        elem
                      );
                    },
                    onDispose: (elem: HTMLElement) => {
                      ReactDom.unmountComponentAtNode(elem);
                    }
                  }
                }
              ]
            }
          ]
        },
        // Page 6: Description Section Configuration (Placeholder)
        {
          header: {
            description: 'Description Section Configuration - Coming Soon'
          },
          groups: [
            {
              groupName: 'Description Section Settings',
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'descriptionPlaceholder',
                  properties: {
                    key: 'descriptionPlaceholder',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement('div', {
                          style: { 
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '16px',
                            lineHeight: '1.4',
                            padding: '16px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px',
                            border: '1px solid #e1dfdd'
                          }
                        }, 'Description Section Configuration - This page will be updated with interactive controls for styling Description sections. Currently using default styling.'),
                        elem
                      );
                    },
                    onDispose: (elem: HTMLElement) => {
                      ReactDom.unmountComponentAtNode(elem);
                    }
                  }
                }
              ]
            }
          ]
        },
        // Page 7: About
        {
          header: {
            description: 'About the Fancy List Web Part'
          },
          groups: [
            {
              groupName: 'Version Information',
              groupFields: [
                PropertyPaneLabel('version', {
                  text: `Version: ${WEBPART_VERSION}`
                }),
                PropertyPaneLabel('description', {
                  text: 'Beta Basic Version - Display items from any SharePoint list or library with category filtering and collapsible panels'
                })
              ]
            },
            {
              groupName: 'User Story',
              groupFields: [
                PropertyPaneLabel('userStory', {
                  text: 'As a site owner, I want to configure a custom web part that displays items from any SharePoint list or document library with comprehensive styling options including customizable collapse/expand icons and intelligent document attachment support, so that I can organize content by categories and present subjects with rich descriptions and associated files in an engaging, collapsible layout that adapts to my site\'s theme or custom styling preferences.'
                })
              ]
            },
            {
              groupName: 'Features',
              groupFields: [
                PropertyPaneLabel('features1', {
                  text: '• Category filtering with collapsible panels'
                }),
                PropertyPaneLabel('features2', {
                  text: '• Only Individual Elements mode for styling (all other modes removed)'
                }),
                PropertyPaneLabel('features3', {
                  text: '• Intelligent document attachment support'
                }),
                PropertyPaneLabel('features4', {
                  text: '• Responsive design with theme integration'
                }),
                PropertyPaneLabel('features5', {
                  text: '• Customizable icons and styling options'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
