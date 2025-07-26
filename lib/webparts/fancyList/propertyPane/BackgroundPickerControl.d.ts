import * as React from 'react';
export interface BackgroundPickerControlProps {
    defaultValues: {
        type: 'solid' | 'gradient' | 'image';
        color?: string;
        alpha?: number;
        image?: string;
        imageAlpha?: number;
        gradientDirection?: string;
        gradientColor1?: string;
        gradientAlpha1?: number;
        gradientColor2?: string;
        gradientAlpha2?: number;
    };
    fields: {
        type: string;
        color: string;
        alpha: string;
        image: string;
        imageAlpha: string;
        gradientDirection: string;
        gradientColor1: string;
        gradientAlpha1: string;
        gradientColor2: string;
        gradientAlpha2: string;
    };
    label: string;
    onChange: (fields: Record<string, string | number | undefined>) => void;
}
export declare const BackgroundPickerControl: React.FC<BackgroundPickerControlProps>;
//# sourceMappingURL=BackgroundPickerControl.d.ts.map