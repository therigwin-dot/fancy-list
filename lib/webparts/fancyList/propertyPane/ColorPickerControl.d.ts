import * as React from 'react';
export interface ColorPickerControlProps {
    color: string;
    field: string;
    label: string;
    onChange: (field: string, newColor: string) => void;
    disabled?: boolean;
}
export declare const ColorPickerControl: React.FC<ColorPickerControlProps>;
//# sourceMappingURL=ColorPickerControl.d.ts.map