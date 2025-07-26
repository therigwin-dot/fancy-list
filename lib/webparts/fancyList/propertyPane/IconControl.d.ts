import * as React from 'react';
export interface IconSettings {
    enabled: boolean;
    iconPosition: 'left' | 'right';
    collapsedIcon: string;
    expandedIcon: string;
}
export interface IconControlProps {
    label?: string;
    settings: IconSettings;
    onChange: (settings: IconSettings) => void;
}
export declare const IconControl: React.FC<IconControlProps>;
//# sourceMappingURL=IconControl.d.ts.map