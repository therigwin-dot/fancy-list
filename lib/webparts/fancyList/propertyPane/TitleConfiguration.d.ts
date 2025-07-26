import * as React from 'react';
import { ShapeOption } from './ShapePickerControl';
export interface TitleConfigurationProps {
    label?: string;
    settings?: {
        webPartTitle: string;
        shape: ShapeOption;
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