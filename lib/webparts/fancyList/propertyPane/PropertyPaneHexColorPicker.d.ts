import { IPropertyPaneField } from '@microsoft/sp-property-pane';
export interface IPropertyPaneHexColorPickerProps {
    label: string;
    value: string;
    onPropertyChange: (propertyPath: string, oldValue: string, newValue: string) => void;
    key: string;
    disabled?: boolean;
    propertyPath: string;
}
export declare function PropertyPaneHexColorPicker(targetProperty: string, properties: IPropertyPaneHexColorPickerProps): IPropertyPaneField<IPropertyPaneHexColorPickerProps>;
//# sourceMappingURL=PropertyPaneHexColorPicker.d.ts.map