export interface IFancyListProps {
    selectedListId: string;
    categoryField: string;
    subjectField: string;
    descriptionField: string;
    showAllCategories: boolean;
    defaultExpanded: boolean;
    isDarkTheme: boolean;
    environmentMessage: string;
    hasTeamsContext: boolean;
    userDisplayName: string;
    context: any;
    titleSettings?: {
        enabled: boolean;
        webPartTitle: string;
        shape: 'square' | 'rounded' | 'pill';
        backgroundType: 'solid' | 'gradient' | 'image';
        backgroundColor: string;
        backgroundAlpha: number;
        gradientDirection: string;
        gradientColor1: string;
        gradientColor2: string;
        gradientAlpha: number;
        imageUrl: string;
        imageAlpha: number;
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
            alignment?: 'left' | 'center' | 'right' | 'justify';
        };
    };
    filterSettings?: {
        enableFilters: boolean;
        defaultFilterSelection?: string;
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
        shape: string;
        backgroundShape: 'square' | 'rounded' | 'pill';
        showAllCategories: boolean;
        background: {
            type: string;
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
    };
    categorySectionSettings?: {
        sectionType: 'category';
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
        icons: {
            enabled: boolean;
            iconPosition: 'left' | 'right';
            collapsedIcon: string;
            expandedIcon: string;
        };
    };
    subjectSectionSettings?: {
        sectionType: 'subject';
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
        icons: {
            enabled: boolean;
            iconPosition: 'left' | 'right';
            collapsedIcon: string;
            expandedIcon: string;
        };
    };
    descriptionSectionSettings?: {
        sectionType: 'description';
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
    };
}
//# sourceMappingURL=IFancyListProps.d.ts.map