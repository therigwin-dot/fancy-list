import * as React from 'react';
export type SectionType = 'category' | 'subject' | 'description';
export interface IconSettings {
    enabled: boolean;
    iconPosition: 'left' | 'right';
    collapsedIcon: string;
    expandedIcon: string;
}
export interface SectionSettings {
    sectionType: SectionType;
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
    iconSettings: IconSettings;
}
export interface SectionModuleControlProps {
    sectionType: SectionType;
    sectionSettings: SectionSettings;
    onChange: (settings: SectionSettings) => void;
    label?: string;
}
export declare const SectionModuleControl: React.FC<SectionModuleControlProps>;
//# sourceMappingURL=SectionModuleControl.d.ts.map