import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneToggle,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { SPHttpClient } from '@microsoft/sp-http';

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

  public async onPropertyPaneFieldChanged(propertyPath: string): Promise<void> {
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
    } else if (propertyPath === 'defaultExpanded') {
      // Refresh the web part when expand setting changes
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
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
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
                PropertyPaneToggle('showAllCategories', {
                  label: 'Show "All" Category Option',
                  onText: 'On',
                  offText: 'Off'
                }),
                PropertyPaneToggle('defaultExpanded', {
                  label: 'Expand Panels by Default',
                  onText: 'On',
                  offText: 'Off'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
