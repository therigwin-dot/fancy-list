import { TitleSettings, FilterSettings } from './FancyListWebPart';
export declare const DEFAULTS_CONFIG: {
    listConfiguration: {
        selectedListId: string;
        categoryField: string;
        subjectField: string;
        descriptionField: string;
        showAllCategories: boolean;
        defaultExpanded: boolean;
    };
    titleSettings: TitleSettings;
    filterSettings: FilterSettings;
    categorySectionSettings: {
        sectionType: "category";
        resetButtonText: string;
        description: string;
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
            alignment: string;
        };
        background: {
            type: "solid";
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
        shape: "rounded";
        showDivider: boolean;
        autoExpand: boolean;
        hoverColor: string;
        iconSettings: {
            enabled: boolean;
            iconPosition: "left";
            collapsedIcon: string;
            expandedIcon: string;
        };
    };
    subjectSectionSettings: {
        sectionType: "subject";
        resetButtonText: string;
        description: string;
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
            alignment: string;
        };
        background: {
            type: "solid";
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
        shape: "rounded";
        showDivider: boolean;
        autoExpand: boolean;
        hoverColor: string;
        iconSettings: {
            enabled: boolean;
            iconPosition: "left";
            collapsedIcon: string;
            expandedIcon: string;
        };
    };
    descriptionSectionSettings: {
        sectionType: "description";
        resetButtonText: string;
        description: string;
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
            alignment: string;
        };
        background: {
            type: "solid";
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
        shape: "rounded";
        showDivider: boolean;
        autoExpand: boolean;
        hoverColor: string;
        iconSettings: {
            enabled: boolean;
            iconPosition: "left";
            collapsedIcon: string;
            expandedIcon: string;
        };
    };
    aboutInfo: {
        version: string;
        description: string;
        userStory: string;
        features: string[];
    };
};
export default DEFAULTS_CONFIG;
//# sourceMappingURL=DEFAULTS_CONFIG.d.ts.map