import * as React from 'react';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { Slider } from '@fluentui/react/lib/Slider';
import { TextField } from '@fluentui/react/lib/TextField';
import { ColorPickerControl } from './ColorPickerControl';

export interface BackgroundType {
  type: 'solid' | 'gradient' | 'image';
}

export interface IBackgroundPickerControlProps {
  label: string;
  selectedKey: string;
  onPropertyChange: (propertyPath: string, newValue: string | number) => void;
  disabled?: boolean;
  // Solid background properties
  solidBackgroundColor?: string;
  solidBackgroundAlpha?: number;
  // Gradient background properties
  gradientDirection?: string;
  gradientColor1?: string;
  gradientColor2?: string;
  gradientAlpha?: number;
  // Image background properties
  imageUrl?: string;
  imageAlpha?: number;
}

export const BackgroundPickerControl: React.FC<IBackgroundPickerControlProps> = (props) => {
  const backgroundTypeOptions: IDropdownOption[] = [
    { key: 'solid', text: 'Solid Color' },
    { key: 'gradient', text: 'Gradient' },
    { key: 'image', text: 'Image' }
  ];

  const gradientDirectionOptions: IDropdownOption[] = [
    { key: 'left-right', text: 'Left to Right' },
    { key: 'top-bottom', text: 'Top to Bottom' },
    { key: 'diagonal', text: 'Diagonal' },
    { key: 'radial', text: 'Radial' }
  ];

  const handleBackgroundTypeChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
    if (option) {
      props.onPropertyChange('backgroundType', option.key as string);
    }
  };

  const handleGradientDirectionChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
    if (option) {
      props.onPropertyChange('gradientDirection', option.key as string);
    }
  };

  return (
    <div style={{ marginBottom: 12 }}>
      {/* Background Type Dropdown */}
      <label style={{ fontWeight: 600 }}>{props.label}</label>
      <Dropdown
        options={backgroundTypeOptions}
        selectedKey={props.selectedKey}
        onChange={handleBackgroundTypeChange}
        disabled={props.disabled}
        styles={{ root: { marginTop: 4, marginBottom: 16 } }}
      />

                {/* Solid Background Controls */}
          {props.selectedKey === 'solid' && (
            <div style={{ marginBottom: 16 }}>
              <h4 style={{ margin: '8px 0', fontSize: '14px', fontWeight: '600' }}>Solid Background</h4>
              <ColorPickerControl
                color={props.solidBackgroundColor || '#ffffff'}
                field="solidBackgroundColor"
                label="Background Color"
                onChange={props.onPropertyChange}
                disabled={props.disabled}
              />
              <div style={{ marginTop: 8 }}>
                <label style={{ fontWeight: 600, fontSize: '12px' }}>Transparency</label>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={props.solidBackgroundAlpha || 0}
                  onChange={(value: number) => props.onPropertyChange('solidBackgroundAlpha', value)}
                  disabled={props.disabled}
                  styles={{ root: { marginTop: 4 } }}
                />
              </div>
            </div>
          )}

          {/* Gradient Background Controls */}
          {props.selectedKey === 'gradient' && (
            <div style={{ marginBottom: 16 }}>
              <h4 style={{ margin: '8px 0', fontSize: '14px', fontWeight: '600' }}>Gradient Background</h4>
              <div style={{ marginBottom: 8 }}>
                <label style={{ fontWeight: 600, fontSize: '12px' }}>Direction</label>
                <Dropdown
                  options={gradientDirectionOptions}
                  selectedKey={props.gradientDirection || 'left-right'}
                  onChange={handleGradientDirectionChange}
                  disabled={props.disabled}
                  styles={{ root: { marginTop: 4 } }}
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  const tempColor1 = props.gradientColor1 || '#ffffff';
                  const tempColor2 = props.gradientColor2 || '#0f46d1';
                  props.onPropertyChange('gradientColor1', tempColor2);
                  props.onPropertyChange('gradientColor2', tempColor1);
                }}
                style={{
                  backgroundColor: '#0078d4',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  marginTop: '8px'
                }}
                disabled={props.disabled}
              >
                Swap Colors
              </button>
              <ColorPickerControl
                color={props.gradientColor1 || '#ffffff'}
                field="gradientColor1"
                label="Color 1"
                onChange={props.onPropertyChange}
                disabled={props.disabled}
              />
              <ColorPickerControl
                color={props.gradientColor2 || '#0f46d1'}
                field="gradientColor2"
                label="Color 2"
                onChange={props.onPropertyChange}
                disabled={props.disabled}
              />
              <div style={{ marginTop: 8 }}>
                <label style={{ fontWeight: 600, fontSize: '12px' }}>Transparency</label>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={props.gradientAlpha || 0}
                  onChange={(value: number) => props.onPropertyChange('gradientAlpha', value)}
                  disabled={props.disabled}
                  styles={{ root: { marginTop: 4 } }}
                />
              </div>
            </div>
          )}

          {/* Image Background Controls */}
          {props.selectedKey === 'image' && (
            <div style={{ marginBottom: 16 }}>
              <h4 style={{ margin: '8px 0', fontSize: '14px', fontWeight: '600' }}>Image Background</h4>
              <div style={{ marginBottom: 8 }}>
                <label style={{ fontWeight: 600, fontSize: '12px' }}>Image URL</label>
                <TextField
                  value={props.imageUrl || ''}
                  onChange={(e, newValue) => props.onPropertyChange('imageUrl', newValue || '')}
                  disabled={props.disabled}
                  styles={{ root: { marginTop: 4 } }}
                  placeholder="Enter image URL"
                />
              </div>
              <div style={{ marginTop: 8 }}>
                <label style={{ fontWeight: 600, fontSize: '12px' }}>Transparency</label>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={props.imageAlpha || 0}
                  onChange={(value: number) => props.onPropertyChange('imageAlpha', value)}
                  disabled={props.disabled}
                  styles={{ root: { marginTop: 4 } }}
                />
              </div>
            </div>
          )}
    </div>
  );
};

export default BackgroundPickerControl; 