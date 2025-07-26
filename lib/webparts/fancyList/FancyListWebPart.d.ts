import { Version } from '@microsoft/sp-core-library';
import { type IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
export interface IFancyListWebPartProps {
    selectedListId: string;
    categoryField: string;
    subjectField: string;
    descriptionField: string;
    showAllCategories: boolean;
    defaultExpanded: boolean;
}
export default class FancyListWebPart extends BaseClientSideWebPart<IFancyListWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    private _lists;
    private _fields;
    private _fieldsLoadedForList;
    private _loadingLists;
    private _loadingFields;
    render(): void;
    onPropertyPaneConfigurationStart(): Promise<void>;
    onPropertyPaneFieldChanged(propertyPath: string): Promise<void>;
    protected onInit(): Promise<void>;
    private _getEnvironmentMessage;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    private _loadLists;
    private _loadFields;
    private _getAvailableFieldsForCategory;
    private _getAvailableFieldsForSubject;
    private _getAvailableFieldsForDescription;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=FancyListWebPart.d.ts.map