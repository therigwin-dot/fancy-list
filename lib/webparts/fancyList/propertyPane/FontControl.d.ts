import * as React from 'react';
export interface FontControlProps {
    fontFamily: string;
    fontSize: string;
    formatting: {
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strikethrough: boolean;
    };
    alignment?: 'left' | 'center' | 'right' | 'justify';
    onChange: (fields: {
        fontFamily?: string;
        fontSize?: string;
        formatting?: {
            bold: boolean;
            italic: boolean;
            underline: boolean;
            strikethrough: boolean;
        };
        alignment?: 'left' | 'center' | 'right' | 'justify';
    }) => void;
    label?: string;
}
export declare const FontControl: React.FC<FontControlProps>;
//# sourceMappingURL=FontControl.d.ts.map