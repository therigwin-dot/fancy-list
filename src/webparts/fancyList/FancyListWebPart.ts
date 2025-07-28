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
import DEFAULTS_CONFIG from './DEFAULTS_CONFIG';
import { TitleConfiguration } from './propertyPane/TitleConfiguration';
import { FilterModuleControl } from './propertyPane/FilterModuleControl';
import { SectionModuleControl } from './propertyPane/SectionModuleControl';


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
  webPartTitleAlignment?: 'left' | 'center' | 'right' | 'justify';
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
  categorySectionSettings: SectionSettings;
  subjectSectionSettings: SectionSettings;
  descriptionSectionSettings: SectionSettings;
  context: WebPartContext;
}

export interface TitleSettings {
  resetButtonText: string;
  description: string;
  enabled: boolean;
  webPartTitle: string;
  font: {
    family: string;
    size: string;
    color: string;
    formatting: { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean; };
    alignment?: 'left' | 'center' | 'right' | 'justify';
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
  shape: 'square' | 'rounded' | 'pill';
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
    alignment?: 'left' | 'center' | 'right' | 'justify';
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
  backgroundShape: 'square' | 'rounded' | 'pill';
  defaultFilterSelection: string;
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

export interface SectionSettings {
  sectionType: 'category' | 'subject' | 'description';
  resetButtonText: string;
  description: string;
  font: {
    family: string;
    size: string;
    color: string;
    formatting: { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean; };
    alignment?: 'left' | 'center' | 'right' | 'justify';
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
  shape: 'square' | 'rounded' | 'pill';
  showDivider: boolean;
  autoExpand: boolean;
  hoverColor: string;
  iconSettings: {
    enabled: boolean;
    iconPosition: 'left' | 'right';
    collapsedIcon: string;
    expandedIcon: string;
  };
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
  private _previousListId: string = '';

  // Testing defaults for Page 1
  private readonly TESTING_DEFAULTS = {
    selectedListId: 'Events',
    categoryField: 'Location',
    subjectField: 'Title',
    descriptionField: 'Description'
  };

  public render(): void {
    // Map individual properties to the format expected by FancyList component
    // Use default values if properties are undefined
    const titleSettings = {
      enabled: this.properties.titleSettings?.enabled ?? DEFAULTS_CONFIG.titleSettings.enabled,
      webPartTitle: this.properties.webPartTitle ?? '',
      shape: this.properties.titleSettings?.shape ?? DEFAULTS_CONFIG.titleSettings.shape,
      showDivider: this.properties.showTitleDivider ?? DEFAULTS_CONFIG.titleSettings.showDivider,
      backgroundType: this.properties.webPartTitleBackgroundType ?? DEFAULTS_CONFIG.titleSettings.background.type,
      backgroundColor: this.properties.webPartTitleBackgroundColor ?? DEFAULTS_CONFIG.titleSettings.background.color,
      backgroundAlpha: this.properties.webPartTitleBackgroundAlpha ?? DEFAULTS_CONFIG.titleSettings.background.alpha,
      gradientDirection: this.properties.webPartTitleBackgroundGradientDirection ?? DEFAULTS_CONFIG.titleSettings.background.gradientDirection,
      gradientColor1: this.properties.webPartTitleBackgroundGradientColor1 ?? DEFAULTS_CONFIG.titleSettings.background.gradientColor1,
      gradientColor2: this.properties.webPartTitleBackgroundGradientColor2 ?? DEFAULTS_CONFIG.titleSettings.background.gradientColor2,
      gradientAlpha: this.properties.webPartTitleBackgroundGradientAlpha1 ?? DEFAULTS_CONFIG.titleSettings.background.gradientAlpha1,
      imageUrl: this.properties.webPartTitleBackgroundImage ?? DEFAULTS_CONFIG.titleSettings.background.image,
      imageAlpha: this.properties.webPartTitleBackgroundImageAlpha ?? DEFAULTS_CONFIG.titleSettings.background.imageAlpha,
      font: {
        family: this.properties.webPartTitleFont ?? DEFAULTS_CONFIG.titleSettings.font.family,
        size: this.properties.webPartTitleFontSize ?? DEFAULTS_CONFIG.titleSettings.font.size,
        color: this.properties.webPartTitleColor ?? DEFAULTS_CONFIG.titleSettings.font.color,
        formatting: this.properties.webPartTitleFormatting ?? DEFAULTS_CONFIG.titleSettings.font.formatting,
        alignment: this.properties.webPartTitleAlignment ?? DEFAULTS_CONFIG.titleSettings.font.alignment
      }
    };

    // Map filter properties to the format expected by FancyList component
    const filterSettings = {
      enableFilters: this.properties.filterSettings?.enableFilters ?? DEFAULTS_CONFIG.filterSettings.enableFilters,
      font: {
        family: this.properties.filterSettings?.font?.family ?? DEFAULTS_CONFIG.filterSettings.font.family,
        size: this.properties.filterSettings?.font?.size ?? DEFAULTS_CONFIG.filterSettings.font.size,
        color: '#605e5c', // Default filter font color
        formatting: this.properties.filterSettings?.font?.formatting ?? DEFAULTS_CONFIG.filterSettings.font.formatting,
        alignment: this.properties.filterSettings?.font?.alignment ?? DEFAULTS_CONFIG.filterSettings.font.alignment
      },
      activeColors: {
        background: this.properties.filterSettings?.activeColors?.background ?? DEFAULTS_CONFIG.filterSettings.activeColors.background,
        font: this.properties.filterSettings?.activeColors?.font ?? DEFAULTS_CONFIG.filterSettings.activeColors.font
      },
      inactiveColors: {
        background: this.properties.filterSettings?.inactiveColors?.background ?? DEFAULTS_CONFIG.filterSettings.inactiveColors.background,
        font: this.properties.filterSettings?.inactiveColors?.font ?? DEFAULTS_CONFIG.filterSettings.inactiveColors.font
      },
      shape: this.properties.filterSettings?.shape ?? DEFAULTS_CONFIG.filterSettings.shape,
      backgroundShape: this.properties.filterSettings?.backgroundShape ?? DEFAULTS_CONFIG.filterSettings.backgroundShape,
      showAllCategories: this.properties.filterSettings?.showAllCategories ?? DEFAULTS_CONFIG.filterSettings.showAllCategories,
      background: {
        type: this.properties.filterSettings?.background?.type ?? DEFAULTS_CONFIG.filterSettings.background.type,
        color: this.properties.filterSettings?.background?.color ?? DEFAULTS_CONFIG.filterSettings.background.color,
        alpha: this.properties.filterSettings?.background?.alpha ?? DEFAULTS_CONFIG.filterSettings.background.alpha,
        image: this.properties.filterSettings?.background?.image ?? DEFAULTS_CONFIG.filterSettings.background.image,
        imageAlpha: this.properties.filterSettings?.background?.imageAlpha ?? DEFAULTS_CONFIG.filterSettings.background.imageAlpha,
        gradientDirection: this.properties.filterSettings?.background?.gradientDirection ?? DEFAULTS_CONFIG.filterSettings.background.gradientDirection,
        gradientColor1: this.properties.filterSettings?.background?.gradientColor1 ?? DEFAULTS_CONFIG.filterSettings.background.gradientColor1,
        gradientAlpha1: this.properties.filterSettings?.background?.gradientAlpha1 ?? DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1,
        gradientColor2: this.properties.filterSettings?.background?.gradientColor2 ?? DEFAULTS_CONFIG.filterSettings.background.gradientColor2,
        gradientAlpha2: this.properties.filterSettings?.background?.gradientAlpha2 ?? DEFAULTS_CONFIG.filterSettings.background.gradientAlpha2
      },
      showDivider: this.properties.filterSettings?.showDivider ?? DEFAULTS_CONFIG.filterSettings.showDivider
    };

    const element: React.ReactElement<IFancyListProps> = React.createElement(
      FancyList,
      {
        selectedListId: this.properties.selectedListId,
        categoryField: this.properties.categoryField,
        subjectField: this.properties.subjectField,
        descriptionField: this.properties.descriptionField,
        showAllCategories: this.properties.filterSettings?.showAllCategories ?? DEFAULTS_CONFIG.filterSettings.showAllCategories,
        defaultExpanded: this.properties.defaultExpanded,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        context: this.context,
        titleSettings: titleSettings,
        filterSettings: filterSettings
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
      // Get the previous list name for comparison
      const previousList = this._lists.find(list => list.key === this._previousListId);
      const previousListName = previousList ? previousList.text : '';
      
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
      
      // Get the new list name
      const selectedList = this._lists.find(list => list.key === this.properties.selectedListId);
      const newListName = selectedList ? selectedList.text : '';
      
      // Update title text if:
      // 1. Title is currently empty/null, OR
      // 2. Title exactly matches the previous list name
      if ((!this.properties.webPartTitle || this.properties.webPartTitle.trim() === '') ||
          (this.properties.webPartTitle.trim() === previousListName)) {
        if (newListName) {
          this.properties.webPartTitle = newListName;
        }
      }
      
      // Store the current list ID as previous for next change
      this._previousListId = this.properties.selectedListId;
      
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
    // Category always shows all available fields
    return this._fields;
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
    // Subject shows all fields except the selected Category
    return this._fields.filter(field => field.key !== this.properties.categoryField);
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
    // Description shows all fields except Category and Subject
    return this._fields.filter(field => 
      field.key !== this.properties.categoryField && 
      field.key !== this.properties.subjectField
    );
  }

  private async _getAvailableCategories(): Promise<string[]> {
    console.log('🔄 CATEGORIES DEBUG: Getting categories for list:', this.properties.selectedListId);
    
    // Return empty array if no list is selected
    if (!this.properties.selectedListId) {
      console.log('🔄 CATEGORIES DEBUG: No list selected, returning empty array');
      return [];
    }
    
    // Return empty array if no category field is selected
    if (!this.properties.categoryField) {
      console.log('🔄 CATEGORIES DEBUG: No category field selected, returning empty array');
      return [];
    }
    
    try {
      // Query the list to get actual categories (same logic as FancyList component)
      const response = await this.context.spHttpClient.get(
        `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${this.properties.selectedListId}')/items?$select=${this.properties.categoryField}&$orderby=${this.properties.categoryField}`,
        SPHttpClient.configurations.v1
      );
      
      if (!response.ok) {
        console.log('🔄 CATEGORIES DEBUG: Failed to load list data:', response.statusText);
        return [];
      }
      
      const data = await response.json();
      const categories = Array.from(new Set(
        data.value.map((item: any) => (item[this.properties.categoryField] as string) || 'Uncategorized')
      )).sort() as string[];
      
      console.log('🔄 CATEGORIES DEBUG: Available categories:', categories);
      return categories;
    } catch (error) {
      console.log('🔄 CATEGORIES DEBUG: Error loading categories:', error);
      return [];
    }
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        // Page 1: List Configuration
        {
          groups: [
            {
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'page1Header',
                  properties: {
                    key: 'page1Header',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement('div', {
                          style: { 
                            fontSize: '16px',
                            fontWeight: '600',
                            color: 'rgb(50, 49, 48)',
                            marginBottom: '12px'
                          }
                        }, 'List Selection Configuration'),
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
                              
                              // Set the title text to "Testing Fancy List"
                              this.properties.webPartTitle = 'Testing Fancy List';
                              
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
        // Page 2: Title Section Configuration (TitleConfiguration Module)
        {
          groups: [
            {
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'titleConfiguration',
                  properties: {
                    key: 'titleConfiguration',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement(TitleConfiguration, {
                          label: 'Title Configuration',
                          settings: {
                            enabled: this.properties.titleSettings?.enabled || DEFAULTS_CONFIG.titleSettings.enabled,
                            webPartTitle: this.properties.webPartTitle || DEFAULTS_CONFIG.titleSettings.webPartTitle,
                            shape: this.properties.titleSettings?.shape || DEFAULTS_CONFIG.titleSettings.shape,
                            showDivider: this.properties.showTitleDivider || DEFAULTS_CONFIG.titleSettings.showDivider,
                            backgroundType: this.properties.webPartTitleBackgroundType || DEFAULTS_CONFIG.titleSettings.background.type,
                            backgroundColor: this.properties.webPartTitleBackgroundColor || DEFAULTS_CONFIG.titleSettings.background.color,
                            backgroundAlpha: this.properties.webPartTitleBackgroundAlpha || DEFAULTS_CONFIG.titleSettings.background.alpha,
                            gradientDirection: this.properties.webPartTitleBackgroundGradientDirection || DEFAULTS_CONFIG.titleSettings.background.gradientDirection,
                            gradientColor1: this.properties.webPartTitleBackgroundGradientColor1 || DEFAULTS_CONFIG.titleSettings.background.gradientColor1,
                            gradientColor2: this.properties.webPartTitleBackgroundGradientColor2 || DEFAULTS_CONFIG.titleSettings.background.gradientColor2,
                            gradientAlpha: this.properties.webPartTitleBackgroundGradientAlpha1 || DEFAULTS_CONFIG.titleSettings.background.gradientAlpha1,
                            imageUrl: this.properties.webPartTitleBackgroundImage || DEFAULTS_CONFIG.titleSettings.background.image,
                            imageAlpha: this.properties.webPartTitleBackgroundImageAlpha || DEFAULTS_CONFIG.titleSettings.background.imageAlpha,
                            font: {
                              family: this.properties.webPartTitleFont || DEFAULTS_CONFIG.titleSettings.font.family,
                              size: this.properties.webPartTitleFontSize || DEFAULTS_CONFIG.titleSettings.font.size,
                              formatting: this.properties.webPartTitleFormatting || DEFAULTS_CONFIG.titleSettings.font.formatting,
                              color: this.properties.webPartTitleColor || DEFAULTS_CONFIG.titleSettings.font.color,
                              alignment: this.properties.webPartTitleAlignment || DEFAULTS_CONFIG.titleSettings.font.alignment
                            }
                          },
                          onPropertyChange: (propertyPath: string, newValue: any) => {
                            // Handle property changes and update the web part properties
                            switch (propertyPath) {
                              case 'enabled':
                                if (!this.properties.titleSettings) this.properties.titleSettings = { ...DEFAULTS_CONFIG.titleSettings };
                                this.properties.titleSettings.enabled = newValue;
                                break;
                              case 'webPartTitle':
                                this.properties.webPartTitle = newValue;
                                break;
                              case 'shape':
                                if (!this.properties.titleSettings) this.properties.titleSettings = { ...DEFAULTS_CONFIG.titleSettings };
                                this.properties.titleSettings.shape = newValue;
                                break;
                              case 'showDivider':
                                this.properties.showTitleDivider = newValue;
                                break;
                              case 'backgroundType':
                                this.properties.webPartTitleBackgroundType = newValue;
                                break;
                              case 'backgroundColor':
                                this.properties.webPartTitleBackgroundColor = newValue;
                                break;
                              case 'backgroundAlpha':
                                this.properties.webPartTitleBackgroundAlpha = newValue;
                                break;
                              case 'gradientDirection':
                                this.properties.webPartTitleBackgroundGradientDirection = newValue;
                                break;
                              case 'gradientColor1':
                                this.properties.webPartTitleBackgroundGradientColor1 = newValue;
                                break;
                              case 'gradientColor2':
                                this.properties.webPartTitleBackgroundGradientColor2 = newValue;
                                break;
                              case 'gradientAlpha':
                                this.properties.webPartTitleBackgroundGradientAlpha1 = newValue;
                                break;
                              case 'imageUrl':
                                this.properties.webPartTitleBackgroundImage = newValue;
                                break;
                              case 'imageAlpha':
                                this.properties.webPartTitleBackgroundImageAlpha = newValue;
                                break;
                              case 'font.family':
                                this.properties.webPartTitleFont = newValue;
                                break;
                              case 'font.size':
                                this.properties.webPartTitleFontSize = newValue;
                                break;
                              case 'font.formatting':
                                this.properties.webPartTitleFormatting = newValue;
                                break;
                              case 'font.color':
                                this.properties.webPartTitleColor = newValue;
                                break;
                              case 'font.alignment':
                                this.properties.webPartTitleAlignment = newValue;
                                break;
                            }
                            if (changeCallback) changeCallback();
                            this.context.propertyPane.refresh();
                          }
                        }),
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
        // Page 3: Filter Buttons Configuration (FilterModuleControl)
        {
          groups: [
            {
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'filterConfiguration',
                  properties: {
                    key: 'filterConfiguration',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      // Load categories asynchronously and re-render when ready
                      this._getAvailableCategories().then(availableCategories => {
                        ReactDom.render(
                          React.createElement(FilterModuleControl, {
                            label: 'Filter Configuration',
                                                        settings: {
                                enableFilters: this.properties.filterSettings?.enableFilters ?? DEFAULTS_CONFIG.filterSettings.enableFilters,
                                font: {
                                  family: this.properties.filterSettings?.font.family || DEFAULTS_CONFIG.filterSettings.font.family,
                                  size: this.properties.filterSettings?.font.size || DEFAULTS_CONFIG.filterSettings.font.size,
                                  formatting: this.properties.filterSettings?.font.formatting || DEFAULTS_CONFIG.filterSettings.font.formatting,
                                  alignment: this.properties.filterSettings?.font.alignment || DEFAULTS_CONFIG.filterSettings.font.alignment
                                },
                              activeColors: {
                                background: this.properties.filterSettings?.activeColors.background || DEFAULTS_CONFIG.filterSettings.activeColors.background,
                                font: this.properties.filterSettings?.activeColors.font || DEFAULTS_CONFIG.filterSettings.activeColors.font
                              },
                              inactiveColors: {
                                background: this.properties.filterSettings?.inactiveColors.background || DEFAULTS_CONFIG.filterSettings.inactiveColors.background,
                                font: this.properties.filterSettings?.inactiveColors.font || DEFAULTS_CONFIG.filterSettings.inactiveColors.font
                              },
                              shape: this.properties.filterSettings?.shape || DEFAULTS_CONFIG.filterSettings.shape,
                              backgroundShape: this.properties.filterSettings?.backgroundShape || DEFAULTS_CONFIG.filterSettings.backgroundShape,
                              showAllCategories: this.properties.filterSettings?.showAllCategories ?? DEFAULTS_CONFIG.filterSettings.showAllCategories,
                              defaultFilterSelection: this.properties.filterSettings?.defaultFilterSelection ?? DEFAULTS_CONFIG.filterSettings.defaultFilterSelection,
                              showDivider: this.properties.filterSettings?.showDivider || DEFAULTS_CONFIG.filterSettings.showDivider,
                              backgroundType: this.properties.filterSettings?.background.type || DEFAULTS_CONFIG.filterSettings.background.type,
                              backgroundColor: this.properties.filterSettings?.background.color || DEFAULTS_CONFIG.filterSettings.background.color,
                              backgroundAlpha: this.properties.filterSettings?.background.alpha || DEFAULTS_CONFIG.filterSettings.background.alpha,
                              gradientDirection: this.properties.filterSettings?.background.gradientDirection || DEFAULTS_CONFIG.filterSettings.background.gradientDirection,
                              gradientColor1: this.properties.filterSettings?.background.gradientColor1 || DEFAULTS_CONFIG.filterSettings.background.gradientColor1,
                              gradientColor2: this.properties.filterSettings?.background.gradientColor2 || DEFAULTS_CONFIG.filterSettings.background.gradientColor2,
                              gradientAlpha: this.properties.filterSettings?.background.gradientAlpha1 || DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1,
                              imageUrl: this.properties.filterSettings?.background.image || DEFAULTS_CONFIG.filterSettings.background.image,
                              imageAlpha: this.properties.filterSettings?.background.imageAlpha || DEFAULTS_CONFIG.filterSettings.background.imageAlpha
                            },
                            availableCategories: availableCategories,
                            onPropertyChange: (propertyPath: string, newValue: any) => {
                              // Handle property changes and update the web part properties
                              if (!this.properties.filterSettings) {
                                this.properties.filterSettings = { ...DEFAULTS_CONFIG.filterSettings };
                              }
                              
                              switch (propertyPath) {
                                case 'enabled':
                                  this.properties.filterSettings.enableFilters = newValue;
                                  break;
                                case 'shape':
                                  this.properties.filterSettings.shape = newValue;
                                  break;
                                case 'backgroundShape':
                                  this.properties.filterSettings.backgroundShape = newValue;
                                  break;
                                case 'showDivider':
                                  this.properties.filterSettings.showDivider = newValue;
                                  break;
                                case 'backgroundType':
                                  this.properties.filterSettings.background.type = newValue;
                                  break;
                                case 'backgroundColor':
                                  this.properties.filterSettings.background.color = newValue;
                                  break;
                                case 'backgroundAlpha':
                                  this.properties.filterSettings.background.alpha = newValue;
                                  break;
                                case 'gradientDirection':
                                  this.properties.filterSettings.background.gradientDirection = newValue;
                                  break;
                                case 'gradientColor1':
                                  this.properties.filterSettings.background.gradientColor1 = newValue;
                                  break;
                                case 'gradientColor2':
                                  this.properties.filterSettings.background.gradientColor2 = newValue;
                                  break;
                                case 'gradientAlpha':
                                  this.properties.filterSettings.background.gradientAlpha1 = newValue;
                                  break;
                                case 'imageUrl':
                                  this.properties.filterSettings.background.image = newValue;
                                  break;
                                case 'imageAlpha':
                                  this.properties.filterSettings.background.imageAlpha = newValue;
                                  break;
                                case 'font.family':
                                  this.properties.filterSettings.font.family = newValue;
                                  break;
                                case 'font.size':
                                  this.properties.filterSettings.font.size = newValue;
                                  break;
                                case 'font.formatting':
                                  this.properties.filterSettings.font.formatting = newValue;
                                  break;
                                case 'font.alignment':
                                  this.properties.filterSettings.font.alignment = newValue;
                                  break;
                                case 'activeColors.background':
                                  this.properties.filterSettings.activeColors.background = newValue;
                                  break;
                                case 'activeColors.font':
                                  this.properties.filterSettings.activeColors.font = newValue;
                                  break;
                                case 'inactiveColors.background':
                                  this.properties.filterSettings.inactiveColors.background = newValue;
                                  break;
                                case 'inactiveColors.font':
                                  this.properties.filterSettings.inactiveColors.font = newValue;
                                  break;
                                case 'showAllCategories':
                                  console.log('🔄 WEBPART DEBUG: showAllCategories property changed to:', newValue);
                                  this.properties.filterSettings.showAllCategories = newValue;
                                  break;
                                case 'defaultFilterSelection':
                                  console.log('🔄 WEBPART DEBUG: defaultFilterSelection property changed to:', newValue);
                                  this.properties.filterSettings.defaultFilterSelection = newValue;
                                  break;
                              }
                              if (changeCallback) changeCallback();
                              this.context.propertyPane.refresh();
                            }
                          }),
                          elem
                        );
                      });
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
        // Page 4: Category Section Configuration
        {
          groups: [
            {
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'categorySectionConfiguration',
                  properties: {
                    key: 'categorySectionConfiguration',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement(SectionModuleControl, {
                          sectionType: 'category',
                          sectionSettings: this.properties.categorySectionSettings || DEFAULTS_CONFIG.categorySectionSettings,
                          onChange: (settings: SectionSettings) => {
                            this.properties.categorySectionSettings = settings;
                            if (changeCallback) changeCallback();
                            this.context.propertyPane.refresh();
                          }
                        }),
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
        // Page 5: Subject Section Configuration
        {
          groups: [
            {
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'subjectSectionConfiguration',
                  properties: {
                    key: 'subjectSectionConfiguration',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement(SectionModuleControl, {
                          sectionType: 'subject',
                          sectionSettings: this.properties.subjectSectionSettings || DEFAULTS_CONFIG.subjectSectionSettings,
                          onChange: (settings: SectionSettings) => {
                            this.properties.subjectSectionSettings = settings;
                            if (changeCallback) changeCallback();
                            this.context.propertyPane.refresh();
                          }
                        }),
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
        // Page 6: Description Section Configuration
        {
          groups: [
            {
              groupFields: [
                {
                  type: 1, // PropertyPaneFieldType.Custom
                  targetProperty: 'descriptionSectionConfiguration',
                  properties: {
                    key: 'descriptionSectionConfiguration',
                    onRender: (elem: HTMLElement, ctx: unknown, changeCallback?: () => void) => {
                      ReactDom.render(
                        React.createElement(SectionModuleControl, {
                          sectionType: 'description',
                          sectionSettings: this.properties.descriptionSectionSettings || DEFAULTS_CONFIG.descriptionSectionSettings,
                          onChange: (settings: SectionSettings) => {
                            this.properties.descriptionSectionSettings = settings;
                            if (changeCallback) changeCallback();
                            this.context.propertyPane.refresh();
                          }
                        }),
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
                  text: `Version: ${DEFAULTS_CONFIG.aboutInfo.version}`
                }),
                PropertyPaneLabel('description', {
                  text: DEFAULTS_CONFIG.aboutInfo.description
                })
              ]
            },
            {
              groupName: 'User Story',
              groupFields: [
                PropertyPaneLabel('userStory', {
                  text: DEFAULTS_CONFIG.aboutInfo.userStory
                })
              ]
            },
            {
              groupName: 'Features',
              groupFields: [
                PropertyPaneLabel('features1', {
                  text: `• ${DEFAULTS_CONFIG.aboutInfo.features[0]}`
                }),
                PropertyPaneLabel('features2', {
                  text: `• ${DEFAULTS_CONFIG.aboutInfo.features[1]}`
                }),
                PropertyPaneLabel('features3', {
                  text: `• ${DEFAULTS_CONFIG.aboutInfo.features[2]}`
                }),
                PropertyPaneLabel('features4', {
                  text: `• ${DEFAULTS_CONFIG.aboutInfo.features[3]}`
                }),
                PropertyPaneLabel('features5', {
                  text: `• ${DEFAULTS_CONFIG.aboutInfo.features[4]}`
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
