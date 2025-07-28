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
        testValuesButtonText: string;
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
        testValues: {
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
                type: "gradient";
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
            shape: "pill";
            showDivider: boolean;
            autoExpand: boolean;
            hoverColor: string;
            iconSettings: {
                enabled: boolean;
                iconPosition: "right";
                collapsedIcon: string;
                expandedIcon: string;
            };
        };
    };
    subjectSectionSettings: {
        sectionType: "subject";
        resetButtonText: string;
        testValuesButtonText: string;
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
        testValues: {
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
            shape: "square";
            showDivider: boolean;
            autoExpand: boolean;
            hoverColor: string;
            iconSettings: {
                enabled: boolean;
                iconPosition: "right";
                collapsedIcon: string;
                expandedIcon: string;
            };
        };
    };
    descriptionSectionSettings: {
        sectionType: "description";
        resetButtonText: string;
        testValuesButtonText: string;
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
        testValues: {
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
                type: "image";
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
            shape: "pill";
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
    };
    aboutInfo: {
        version: string;
        description: string;
        userStory: string;
        features: string[];
    };
    TESTING_VALUES: ({
        page: number;
        section: string;
        controls: ({
            control: string;
            value: boolean;
            description: string;
            timing: number;
            dependency: null;
        } | {
            control: string;
            value: boolean;
            description: string;
            timing: number;
            dependency: string;
        } | {
            control: string;
            value: string;
            description: string;
            timing: number;
            dependency: null;
        } | {
            control: string;
            value: string;
            description: string;
            timing: number;
            dependency: string;
        } | {
            control: string;
            value: number;
            description: string;
            timing: number;
            dependency: string;
        })[];
    } | {
        page: number;
        section: string;
        controls: ({
            control: string;
            value: string;
            description: string;
            timing: number;
            dependency: null;
        } | {
            control: string;
            value: string[];
            description: string;
            timing: number;
            dependency: null;
        })[];
    })[];
};
export default DEFAULTS_CONFIG;
//# sourceMappingURL=DEFAULTS_CONFIG.d.ts.map