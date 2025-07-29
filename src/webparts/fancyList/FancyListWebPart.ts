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
  titleSettings: TitleSettings;
  filterSettings: FilterSettings;
  categorySectionSettings: SectionSettings;
  subjectSectionSettings: SectionSettings;
  descriptionSectionSettings: SectionSettings;
  context: WebPartContext;
}

export interface TitleSettings {
  resetButtonText: string;
  testValuesButtonText: string;
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
  divideSpace: number;
  testValues: {
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
    divideSpace: number;
  };
}

export interface FilterSettings {
  resetButtonText: string;
  testValuesButtonText: string;
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
  divideSpace: number;
  testValues: {
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
    divideSpace: number;
  };
}

export interface SectionSettings {
  sectionType: 'category' | 'subject' | 'description';
  resetButtonText: string;
  testValuesButtonText: string;
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
  divideSpace: number;
  autoExpand: boolean;
  hoverColor: string;
  iconSettings: {
    enabled: boolean;
    iconPosition: 'left' | 'right';
    collapsedIcon: string;
    expandedIcon: string;
  };
  testValues: {
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
    divideSpace: number;
    autoExpand: boolean;
    hoverColor: string;
    iconSettings: {
      enabled: boolean;
      iconPosition: 'left' | 'right';
      collapsedIcon: string;
      expandedIcon: string;
    };
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
  // Helper methods for Page 1 structured testing
  private getPage1Controls() {
    return DEFAULTS_CONFIG.TESTING_VALUES[0];
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async processPage1Controls() {
    const page1Data = this.getPage1Controls();
    
    for (const control of page1Data.controls) {
      // Set the property value using switch statement to avoid TypeScript errors
      switch (control.control) {
        case 'selectedListId':
          this.properties.selectedListId = control.value as string;
          // Special handling for list selection (load fields)
          try {
            this._fields = await this._loadFields(control.value as string);
            this._fieldsLoadedForList = control.value as string;
            console.log('🔍 Test Defaults - Available fields after list selection:', this._fields);
          } catch (error) {
            console.error('Error loading fields:', error);
          }
          break;
        case 'categoryField':
          this.properties.categoryField = control.value as string;
          console.log('🔍 Test Defaults - Available fields for Category dropdown:', this._getAvailableFieldsForCategory());
          break;
        case 'subjectField':
          this.properties.subjectField = control.value as string;
          console.log('🔍 Test Defaults - Available fields for Subject dropdown:', this._getAvailableFieldsForSubject());
          break;
        case 'descriptionField':
          this.properties.descriptionField = control.value as string;
          console.log('🔍 Test Defaults - Available fields for Description dropdown:', this._getAvailableFieldsForDescription());
          break;
        case 'showAllCategories':
          this.properties.showAllCategories = control.value as boolean;
          break;
        case 'defaultExpanded':
          this.properties.defaultExpanded = control.value as boolean;
          break;
        default:
          console.log(`Unknown control: ${control.control}`);
          break;
      }
      
      // Refresh property pane
      this.context.propertyPane.refresh();
      
      // Wait for the specified timing
      await this.delay(control.timing);
    }
  }

  public render(): void {
    // Map individual properties to the format expected by FancyList component
    // Use default values if properties are undefined
    // Map title properties to the format expected by FancyList component
    const titleSettings = {
      enabled: this.properties.titleSettings?.enabled ?? DEFAULTS_CONFIG.titleSettings.enabled,
      webPartTitle: this.properties.webPartTitle ?? '',
      shape: this.properties.titleSettings?.shape ?? DEFAULTS_CONFIG.titleSettings.shape,
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
      },
      divideSpace: this.properties.titleSettings?.divideSpace ?? DEFAULTS_CONFIG.titleSettings.divideSpace
    };

    // Map filter properties to the format expected by FancyList component
    const filterSettings = {
      enableFilters: this.properties.filterSettings?.enableFilters ?? DEFAULTS_CONFIG.filterSettings.enableFilters,
      defaultFilterSelection: this.properties.filterSettings?.defaultFilterSelection ?? DEFAULTS_CONFIG.filterSettings.defaultFilterSelection,
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
      divideSpace: this.properties.filterSettings?.divideSpace ?? DEFAULTS_CONFIG.filterSettings.divideSpace
    };

    // Map category section properties to the format expected by FancyList component
    const categorySectionSettings = {
      sectionType: 'category' as const,
      resetButtonText: this.properties.categorySectionSettings?.resetButtonText ?? DEFAULTS_CONFIG.categorySectionSettings.resetButtonText,
      description: this.properties.categorySectionSettings?.description ?? DEFAULTS_CONFIG.categorySectionSettings.description,
      font: {
        family: this.properties.categorySectionSettings?.font?.family ?? DEFAULTS_CONFIG.categorySectionSettings.font.family,
        size: this.properties.categorySectionSettings?.font?.size ?? DEFAULTS_CONFIG.categorySectionSettings.font.size,
        color: this.properties.categorySectionSettings?.font?.color ?? DEFAULTS_CONFIG.categorySectionSettings.font.color,
        formatting: this.properties.categorySectionSettings?.font?.formatting ?? DEFAULTS_CONFIG.categorySectionSettings.font.formatting,
        alignment: (this.properties.categorySectionSettings?.font?.alignment ?? DEFAULTS_CONFIG.categorySectionSettings.font.alignment) as 'left' | 'center' | 'right' | 'justify' | undefined
      },
      background: {
        type: this.properties.categorySectionSettings?.background?.type ?? DEFAULTS_CONFIG.categorySectionSettings.background.type,
        color: this.properties.categorySectionSettings?.background?.color ?? DEFAULTS_CONFIG.categorySectionSettings.background.color,
        alpha: this.properties.categorySectionSettings?.background?.alpha ?? DEFAULTS_CONFIG.categorySectionSettings.background.alpha,
        image: this.properties.categorySectionSettings?.background?.image ?? DEFAULTS_CONFIG.categorySectionSettings.background.image,
        imageAlpha: this.properties.categorySectionSettings?.background?.imageAlpha ?? DEFAULTS_CONFIG.categorySectionSettings.background.imageAlpha,
        gradientDirection: this.properties.categorySectionSettings?.background?.gradientDirection ?? DEFAULTS_CONFIG.categorySectionSettings.background.gradientDirection,
        gradientColor1: this.properties.categorySectionSettings?.background?.gradientColor1 ?? DEFAULTS_CONFIG.categorySectionSettings.background.gradientColor1,
        gradientAlpha1: this.properties.categorySectionSettings?.background?.gradientAlpha1 ?? DEFAULTS_CONFIG.categorySectionSettings.background.gradientAlpha1,
        gradientColor2: this.properties.categorySectionSettings?.background?.gradientColor2 ?? DEFAULTS_CONFIG.categorySectionSettings.background.gradientColor2,
        gradientAlpha2: this.properties.categorySectionSettings?.background?.gradientAlpha2 ?? DEFAULTS_CONFIG.categorySectionSettings.background.gradientAlpha2
      },
      shape: this.properties.categorySectionSettings?.shape ?? DEFAULTS_CONFIG.categorySectionSettings.shape,
      autoExpand: this.properties.categorySectionSettings?.autoExpand ?? DEFAULTS_CONFIG.categorySectionSettings.autoExpand,
      hoverColor: this.properties.categorySectionSettings?.hoverColor ?? DEFAULTS_CONFIG.categorySectionSettings.hoverColor,
      icons: {
        enabled: this.properties.categorySectionSettings?.iconSettings?.enabled ?? DEFAULTS_CONFIG.categorySectionSettings.iconSettings.enabled,
        iconPosition: this.properties.categorySectionSettings?.iconSettings?.iconPosition ?? DEFAULTS_CONFIG.categorySectionSettings.iconSettings.iconPosition,
        collapsedIcon: this.properties.categorySectionSettings?.iconSettings?.collapsedIcon ?? DEFAULTS_CONFIG.categorySectionSettings.iconSettings.collapsedIcon,
        expandedIcon: this.properties.categorySectionSettings?.iconSettings?.expandedIcon ?? DEFAULTS_CONFIG.categorySectionSettings.iconSettings.expandedIcon
      },
      divideSpace: this.properties.categorySectionSettings?.divideSpace ?? DEFAULTS_CONFIG.categorySectionSettings.divideSpace
    };

    // Map subject section properties to the format expected by FancyList component
    const subjectSectionSettings = {
      sectionType: 'subject' as const,
      resetButtonText: this.properties.subjectSectionSettings?.resetButtonText ?? DEFAULTS_CONFIG.subjectSectionSettings.resetButtonText,
      description: this.properties.subjectSectionSettings?.description ?? DEFAULTS_CONFIG.subjectSectionSettings.description,
      font: {
        family: this.properties.subjectSectionSettings?.font?.family ?? DEFAULTS_CONFIG.subjectSectionSettings.font.family,
        size: this.properties.subjectSectionSettings?.font?.size ?? DEFAULTS_CONFIG.subjectSectionSettings.font.size,
        color: this.properties.subjectSectionSettings?.font?.color ?? DEFAULTS_CONFIG.subjectSectionSettings.font.color,
        formatting: this.properties.subjectSectionSettings?.font?.formatting ?? DEFAULTS_CONFIG.subjectSectionSettings.font.formatting,
        alignment: (this.properties.subjectSectionSettings?.font?.alignment ?? DEFAULTS_CONFIG.subjectSectionSettings.font.alignment) as 'left' | 'center' | 'right' | 'justify' | undefined
      },
      background: {
        type: this.properties.subjectSectionSettings?.background?.type ?? DEFAULTS_CONFIG.subjectSectionSettings.background.type,
        color: this.properties.subjectSectionSettings?.background?.color ?? DEFAULTS_CONFIG.subjectSectionSettings.background.color,
        alpha: this.properties.subjectSectionSettings?.background?.alpha ?? DEFAULTS_CONFIG.subjectSectionSettings.background.alpha,
        image: this.properties.subjectSectionSettings?.background?.image ?? DEFAULTS_CONFIG.subjectSectionSettings.background.image,
        imageAlpha: this.properties.subjectSectionSettings?.background?.imageAlpha ?? DEFAULTS_CONFIG.subjectSectionSettings.background.imageAlpha,
        gradientDirection: this.properties.subjectSectionSettings?.background?.gradientDirection ?? DEFAULTS_CONFIG.subjectSectionSettings.background.gradientDirection,
        gradientColor1: this.properties.subjectSectionSettings?.background?.gradientColor1 ?? DEFAULTS_CONFIG.subjectSectionSettings.background.gradientColor1,
        gradientAlpha1: this.properties.subjectSectionSettings?.background?.gradientAlpha1 ?? DEFAULTS_CONFIG.subjectSectionSettings.background.gradientAlpha1,
        gradientColor2: this.properties.subjectSectionSettings?.background?.gradientColor2 ?? DEFAULTS_CONFIG.subjectSectionSettings.background.gradientColor2,
        gradientAlpha2: this.properties.subjectSectionSettings?.background?.gradientAlpha2 ?? DEFAULTS_CONFIG.subjectSectionSettings.background.gradientAlpha2
      },
      shape: this.properties.subjectSectionSettings?.shape ?? DEFAULTS_CONFIG.subjectSectionSettings.shape,
      autoExpand: this.properties.subjectSectionSettings?.autoExpand ?? DEFAULTS_CONFIG.subjectSectionSettings.autoExpand,
      hoverColor: this.properties.subjectSectionSettings?.hoverColor ?? DEFAULTS_CONFIG.subjectSectionSettings.hoverColor,
      icons: {
        enabled: this.properties.subjectSectionSettings?.iconSettings?.enabled ?? DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.enabled,
        iconPosition: this.properties.subjectSectionSettings?.iconSettings?.iconPosition ?? DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.iconPosition,
        collapsedIcon: this.properties.subjectSectionSettings?.iconSettings?.collapsedIcon ?? DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.collapsedIcon,
        expandedIcon: this.properties.subjectSectionSettings?.iconSettings?.expandedIcon ?? DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.expandedIcon
      },
      divideSpace: this.properties.subjectSectionSettings?.divideSpace ?? DEFAULTS_CONFIG.subjectSectionSettings.divideSpace
    };

    // Map description section properties to the format expected by FancyList component
    const descriptionSectionSettings = {
      sectionType: 'description' as const,
      resetButtonText: this.properties.descriptionSectionSettings?.resetButtonText ?? DEFAULTS_CONFIG.descriptionSectionSettings.resetButtonText,
      description: this.properties.descriptionSectionSettings?.description ?? DEFAULTS_CONFIG.descriptionSectionSettings.description,
      font: {
        family: this.properties.descriptionSectionSettings?.font?.family ?? DEFAULTS_CONFIG.descriptionSectionSettings.font.family,
        size: this.properties.descriptionSectionSettings?.font?.size ?? DEFAULTS_CONFIG.descriptionSectionSettings.font.size,
        color: this.properties.descriptionSectionSettings?.font?.color ?? DEFAULTS_CONFIG.descriptionSectionSettings.font.color,
        formatting: this.properties.descriptionSectionSettings?.font?.formatting ?? DEFAULTS_CONFIG.descriptionSectionSettings.font.formatting,
        alignment: (this.properties.descriptionSectionSettings?.font?.alignment ?? DEFAULTS_CONFIG.descriptionSectionSettings.font.alignment) as 'left' | 'center' | 'right' | 'justify' | undefined
      },
      background: {
        type: this.properties.descriptionSectionSettings?.background?.type ?? DEFAULTS_CONFIG.descriptionSectionSettings.background.type,
        color: this.properties.descriptionSectionSettings?.background?.color ?? DEFAULTS_CONFIG.descriptionSectionSettings.background.color,
        alpha: this.properties.descriptionSectionSettings?.background?.alpha ?? DEFAULTS_CONFIG.descriptionSectionSettings.background.alpha,
        image: this.properties.descriptionSectionSettings?.background?.image ?? DEFAULTS_CONFIG.descriptionSectionSettings.background.image,
        imageAlpha: this.properties.descriptionSectionSettings?.background?.imageAlpha ?? DEFAULTS_CONFIG.descriptionSectionSettings.background.imageAlpha,
        gradientDirection: this.properties.descriptionSectionSettings?.background?.gradientDirection ?? DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientDirection,
        gradientColor1: this.properties.descriptionSectionSettings?.background?.gradientColor1 ?? DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientColor1,
        gradientAlpha1: this.properties.descriptionSectionSettings?.background?.gradientAlpha1 ?? DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientAlpha1,
        gradientColor2: this.properties.descriptionSectionSettings?.background?.gradientColor2 ?? DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientColor2,
        gradientAlpha2: this.properties.descriptionSectionSettings?.background?.gradientAlpha2 ?? DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientAlpha2
      },
      shape: this.properties.descriptionSectionSettings?.shape ?? DEFAULTS_CONFIG.descriptionSectionSettings.shape,
      autoExpand: this.properties.descriptionSectionSettings?.autoExpand ?? DEFAULTS_CONFIG.descriptionSectionSettings.autoExpand,
      hoverColor: this.properties.descriptionSectionSettings?.hoverColor ?? DEFAULTS_CONFIG.descriptionSectionSettings.hoverColor,
      icons: {
        enabled: this.properties.descriptionSectionSettings?.iconSettings?.enabled ?? DEFAULTS_CONFIG.descriptionSectionSettings.iconSettings.enabled,
        iconPosition: this.properties.descriptionSectionSettings?.iconSettings?.iconPosition ?? DEFAULTS_CONFIG.descriptionSectionSettings.iconSettings.iconPosition,
        collapsedIcon: this.properties.descriptionSectionSettings?.iconSettings?.collapsedIcon ?? DEFAULTS_CONFIG.descriptionSectionSettings.iconSettings.collapsedIcon,
        expandedIcon: this.properties.descriptionSectionSettings?.iconSettings?.expandedIcon ?? DEFAULTS_CONFIG.descriptionSectionSettings.iconSettings.expandedIcon
      },
      divideSpace: this.properties.descriptionSectionSettings?.divideSpace ?? DEFAULTS_CONFIG.descriptionSectionSettings.divideSpace
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
        filterSettings: filterSettings,
        categorySectionSettings: categorySectionSettings,
        subjectSectionSettings: subjectSectionSettings,
        descriptionSectionSettings: descriptionSectionSettings
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
    // Filter for Lists only - exclude Document Libraries (BaseTemplate 101) and Page Libraries (BaseTemplate 119)
    // Include only regular Lists (BaseTemplate 100) and Event Lists (BaseTemplate 106)
    const url = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists?$filter=Hidden eq false and (BaseTemplate eq 100 or BaseTemplate eq 106)&$select=Id,Title,BaseTemplate,TemplateFeatureId`;
    console.log('🔍 LIST DEBUG - Loading lists from URL:', url);
    
    const response = await this.context.spHttpClient.get(url, SPHttpClient.configurations.v1);
    const data = await response.json();
    
    console.log('🔍 LIST DEBUG - Raw API response:', data);
    console.log('🔍 LIST DEBUG - Total items returned:', data.value.length);
    
    // Log each list with its template info
    data.value.forEach((list: any, index: number) => {
      console.log(`🔍 LIST DEBUG - Item ${index + 1}:`, {
        Title: list.Title,
        Id: list.Id,
        BaseTemplate: list.BaseTemplate,
        TemplateFeatureId: list.TemplateFeatureId
      });
    });
    
    const filteredLists = data.value.map((list: any) => ({ key: list.Title, text: list.Title }));
    console.log('🔍 LIST DEBUG - Final filtered lists:', filteredLists);
    
    return filteredLists;
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
                  label: 'Select List',
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
                              try {
                                // Process Page 1 controls using structured data
                                await this.processPage1Controls();
                                
                                // Set the title text to "Testing Fancy List" (from Page 2 data)
                                this.properties.webPartTitle = 'Testing Fancy List';
                                if (changeCallback) changeCallback();
                                this.context.propertyPane.refresh();
                                
                                console.log('Page 1 testing completed successfully');
                              } catch (error) {
                                console.error('Error during Page 1 testing:', error);
                              }
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
                            },
                            divideSpace: this.properties.titleSettings?.divideSpace ?? DEFAULTS_CONFIG.titleSettings.divideSpace
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
                              case 'divideSpace':
                                this.properties.titleSettings.divideSpace = newValue;
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
                              backgroundType: this.properties.filterSettings?.background.type || DEFAULTS_CONFIG.filterSettings.background.type,
                              backgroundColor: this.properties.filterSettings?.background.color || DEFAULTS_CONFIG.filterSettings.background.color,
                              backgroundAlpha: this.properties.filterSettings?.background.alpha || DEFAULTS_CONFIG.filterSettings.background.alpha,
                              gradientDirection: this.properties.filterSettings?.background.gradientDirection || DEFAULTS_CONFIG.filterSettings.background.gradientDirection,
                              gradientColor1: this.properties.filterSettings?.background.gradientColor1 || DEFAULTS_CONFIG.filterSettings.background.gradientColor1,
                              gradientColor2: this.properties.filterSettings?.background.gradientColor2 || DEFAULTS_CONFIG.filterSettings.background.gradientColor2,
                              gradientAlpha: this.properties.filterSettings?.background.gradientAlpha1 || DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1,
                              imageUrl: this.properties.filterSettings?.background.image || DEFAULTS_CONFIG.filterSettings.background.image,
                              imageAlpha: this.properties.filterSettings?.background.imageAlpha || DEFAULTS_CONFIG.filterSettings.background.imageAlpha,
                              divideSpace: this.properties.filterSettings?.divideSpace ?? DEFAULTS_CONFIG.filterSettings.divideSpace
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
                                case 'divideSpace':
                                  console.log('🔄 WEBPART DEBUG: divideSpace property changed to:', newValue);
                                  this.properties.filterSettings.divideSpace = newValue;
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
            description: 'About'
          },
          groups: [
            {
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
              groupName: 'Features',
              groupFields: [
                PropertyPaneLabel('features1', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.features[0]}`
                }),
                PropertyPaneLabel('features2', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.features[1]}`
                }),
                PropertyPaneLabel('features3', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.features[2]}`
                }),
                PropertyPaneLabel('features4', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.features[3]}`
                }),
                PropertyPaneLabel('features5', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.features[4]}`
                }),
                PropertyPaneLabel('features6', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.features[5]}`
                }),
                PropertyPaneLabel('features7', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.features[6]}`
                }),
                PropertyPaneLabel('features8', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.features[7]}`
                }),
                PropertyPaneLabel('features9', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.features[8]}`
                })
              ]
            },
            {
              groupName: 'Known Issues',
              groupFields: [
                PropertyPaneLabel('knownIssues1', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.knownIssues[0]}`
                }),
                PropertyPaneLabel('knownIssues2', {
                  text: `${DEFAULTS_CONFIG.aboutInfo.knownIssues[1]}`
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
