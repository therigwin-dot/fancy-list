import * as React from 'react';
export interface BackgroundType {
    type: 'solid' | 'gradient' | 'image';
}
export interface IBackgroundPickerControlProps {
    label: string;
    selectedKey: string;
    onPropertyChange: (propertyPath: string, newValue: string | number) => void;
    disabled?: boolean;
    solidBackgroundColor?: string;
    solidBackgroundAlpha?: number;
    gradientDirection?: string;
    gradientColor1?: string;
    gradientColor2?: string;
    gradientAlpha?: number;
    imageUrl?: string;
    imageAlpha?: number;
}
export declare const BackgroundPickerControl: React.FC<IBackgroundPickerControlProps>;
export default BackgroundPickerControl;
//# sourceMappingURL=BackgroundPickerControl.d.ts.map