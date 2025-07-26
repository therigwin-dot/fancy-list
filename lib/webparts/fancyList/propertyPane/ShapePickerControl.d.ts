import * as React from 'react';
export type ShapeOption = 'square' | 'rounded' | 'pill';
interface ShapePickerControlProps {
    value: ShapeOption;
    label?: string;
    onChange: (newShape: ShapeOption) => void;
    disabled?: boolean;
}
export declare const ShapePickerControl: React.FC<ShapePickerControlProps>;
export {};
//# sourceMappingURL=ShapePickerControl.d.ts.map