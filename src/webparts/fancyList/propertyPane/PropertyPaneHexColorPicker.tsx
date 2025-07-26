import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IPropertyPaneField, PropertyPaneFieldType } from '@microsoft/sp-property-pane';
import { ColorPicker, IColor } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import { IconButton } from '@fluentui/react/lib/Button';

export interface IPropertyPaneHexColorPickerProps {
  label: string;
  value: string;
  onPropertyChange: (propertyPath: string, oldValue: string, newValue: string) => void;
  key: string;
  disabled?: boolean;
  propertyPath: string;
}

const PropertyPaneHexColorPickerComponent: React.FC<IPropertyPaneHexColorPickerProps> = (props) => {
  const [color, setColor] = React.useState<string>(props.value || '#ffffff');
  const [pickerVisible, setPickerVisible] = React.useState<boolean>(false);

  React.useEffect((): void => {
    setColor(props.value || '#ffffff');
  }, [props.value]);

  const handleHexChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
    if (!newValue) return;
    setColor(newValue);
    props.onPropertyChange(props.propertyPath, props.value, newValue);
  };

  const handleColorChange = (ev: React.SyntheticEvent<HTMLElement>, newColor: IColor): void => {
    setColor(newColor.str);
    props.onPropertyChange(props.propertyPath, props.value, newColor.str);
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ fontWeight: 600 }}>{props.label}</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <TextField
          value={color}
          onChange={handleHexChange}
          disabled={props.disabled}
          styles={{ root: { width: 100 } }}
          placeholder="#RRGGBB"
          title="Type a hex color code (e.g., #ff0000 for red)"
        />
        <div
          style={{ width: 24, height: 24, borderRadius: 4, border: '1px solid #ccc', background: color }}
          aria-label="Current color preview"
          title="Current color preview"
        />
        <IconButton
          iconProps={{ iconName: 'Color' }}
          title="Click to open color picker"
          ariaLabel="Open color picker"
          onClick={(): void => setPickerVisible(v => !v)}
          disabled={props.disabled}
        />
        <IconButton
          iconProps={{ iconName: 'Help' }}
          title="You can type a hex code, use the color picker, or use any 3rd party color picker tool (e.g., MS Powertoys Color Picker)."
          ariaLabel="Help with color picker"
          onClick={(): void => {
            window.open('https://www.bing.com/search?q=PowerToys+Color+Picker', '_blank');
          }}
          styles={{
            root: { 
              minWidth: 'auto', 
              width: 20, 
              height: 20, 
              padding: 0,
              fontSize: 12
            },
            icon: { fontSize: 12 }
          }}
        />
      </div>
      {pickerVisible && (
        <div style={{ marginTop: 8, zIndex: 1000, position: 'relative' }}>
          <ColorPicker
            color={color}
            onChange={handleColorChange}
            alphaType="none"
            showPreview={true}
            strings={{
              hex: 'Hex',
              red: 'Red',
              green: 'Green',
              blue: 'Blue',
              alpha: 'Alpha',
              transparency: 'Transparency',
              hue: 'Hue',
              svAriaValueFormat: 'Saturation {0} percent, value {1} percent',
              svAriaDescription: 'Use left and right arrow keys to set saturation. Use up and down arrow keys to set value.'
            }}
          />
        </div>
      )}
    </div>
  );
};

export function PropertyPaneHexColorPicker(targetProperty: string, properties: IPropertyPaneHexColorPickerProps): IPropertyPaneField<IPropertyPaneHexColorPickerProps> {
  return {
    type: PropertyPaneFieldType.Custom,
    targetProperty,
    properties: {
      key: properties.key,
      label: properties.label,
      value: properties.value,
      onPropertyChange: properties.onPropertyChange,
      disabled: properties.disabled,
      propertyPath: properties.propertyPath,
      onRender: (elem: HTMLElement, ctx: unknown, changeCallback: (() => void) | undefined): void => {
        const onChange = (propertyPath: string, oldValue: string, newValue: string): void => {
          properties.onPropertyChange(propertyPath, oldValue, newValue);
          if (changeCallback) changeCallback();
        };
        ReactDOM.render(
          <PropertyPaneHexColorPickerComponent {...properties} onPropertyChange={onChange} />,
          elem
        );
      },
      onDispose: (elem: HTMLElement): void => {
        ReactDOM.unmountComponentAtNode(elem);
      }
    } as IPropertyPaneHexColorPickerProps & {
      onRender: (elem: HTMLElement, ctx: unknown, changeCallback: (() => void) | undefined) => void;
      onDispose: (elem: HTMLElement) => void;
    }
  };
} 