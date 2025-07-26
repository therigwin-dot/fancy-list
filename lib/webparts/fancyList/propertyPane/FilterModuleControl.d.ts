import * as React from 'react';
import { ShapeOption } from './ShapePickerControl';
export interface FilterModuleControlProps {
    label?: string;
    settings?: {
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
    };
    onPropertyChange?: (propertyPath: string, newValue: any) => void;
}
export declare const FilterModuleControl: React.FC<FilterModuleControlProps>;
//# sourceMappingURL=FilterModuleControl.d.ts.map