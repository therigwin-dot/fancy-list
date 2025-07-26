import * as React from 'react';
import { ColorPicker, IColor } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import { IconButton } from '@fluentui/react/lib/Button';

export interface ColorPickerControlProps {
  color: string;
  field: string;
  label: string;
  onChange: (field: string, newColor: string) => void;
  disabled?: boolean;
}

export const ColorPickerControl: React.FC<ColorPickerControlProps> = ({ color, field, label, onChange, disabled }) => {
  const [currentColor, setCurrentColor] = React.useState<string>(color || '#ffffff');
  const [pickerVisible, setPickerVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    setCurrentColor(color || '#ffffff');
  }, [color]);

  const handleHexChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
    if (!newValue) return;
    setCurrentColor(newValue);
    onChange(field, newValue);
  };

  const handleColorChange = (ev: React.SyntheticEvent<HTMLElement>, newColor: IColor): void => {
    setCurrentColor(newColor.str);
    onChange(field, newColor.str);
  };

  return (
    <div style={{ marginBottom: 12 }}>
      {label && (
        <label style={{ 
          fontSize: '14px',
          fontWeight: '600',
          color: '#323130',
          marginBottom: '8px',
          display: 'block'
        }}>
          {label}
        </label>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <TextField
          value={currentColor}
          onChange={handleHexChange}
          disabled={disabled}
          styles={{ root: { width: 100 } }}
          placeholder="#RRGGBB"
          title="Type a hex color code (e.g., #ff0000 for red)"
        />
        <div
          style={{ width: 24, height: 24, borderRadius: 4, border: '1px solid #ccc', background: currentColor }}
          aria-label="Current color preview"
          title="Current color preview"
        />
        <IconButton
          iconProps={{ iconName: 'Color' }}
          title="Click to open color picker"
          ariaLabel="Open color picker"
          onClick={() => setPickerVisible(v => !v)}
          disabled={disabled}
        />
        <IconButton
          iconProps={{ iconName: 'Help' }}
          title="You can type a hex code, use the color picker, or use any 3rd party color picker tool (e.g., MS Powertoys Color Picker)."
          ariaLabel="Help with color picker"
          onClick={() => {
            window.open('https://www.bing.com/search?q=PowerToys+Color+Picker', '_blank');
          }}
          styles={{
            root: { minWidth: 'auto', width: 20, height: 20, padding: 0, fontSize: 12 },
            icon: { fontSize: 12 }
          }}
        />
      </div>
      {pickerVisible && (
        <div style={{ marginTop: 8, zIndex: 1000, position: 'relative' }}>
          <ColorPicker
            color={currentColor}
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