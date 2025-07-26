import { Version } from '@microsoft/sp-core-library';
import { type IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface IFancyListWebPartProps {
    selectedListId: string;
    categoryField: string;
    subjectField: string;
    descriptionField: string;
    showAllCategories: boolean;
    defaultExpanded: boolean;
    webPartTitle: string;
    webPartTitleColor: string;
    webPartTitleFont: string;
    webPartTitleFontSize: string;
    webPartTitleFormatting: {
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strikethrough: boolean;
    };
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
        formatting: {
            bold: boolean;
            italic: boolean;
            underline: boolean;
            strikethrough: boolean;
        };
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
        formatting: {
            bold: boolean;
            italic: boolean;
            underline: boolean;
            strikethrough: boolean;
        };
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
    private _isDarkTheme;
    private _environmentMessage;
    private _lists;
    private _fields;
    private _fieldsLoadedForList;
    private _loadingLists;
    private _loadingFields;
    private readonly TESTING_DEFAULTS;
    render(): void;
    onPropertyPaneConfigurationStart(): Promise<void>;
    onPropertyPaneFieldChanged(propertyPath: string, oldValue: unknown, newValue: unknown): Promise<void>;
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