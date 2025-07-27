import * as React from 'react';
import { ShapeOption } from './ShapePickerControl';
export interface TitleConfigurationProps {
    label?: string;
    settings?: {
        enabled: boolean;
        webPartTitle: string;
        shape: ShapeOption;
        showDivider: boolean;
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
            formatting: {
                bold: boolean;
                italic: boolean;
                underline: boolean;
                strikethrough: boolean;
            };
            color: string;
        };
    };
    onPropertyChange?: (propertyPath: string, newValue: any) => void;
}
export declare const TitleConfiguration: React.FC<TitleConfigurationProps>;
//# sourceMappingURL=TitleConfiguration.d.ts.map