import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { Slider } from '@fluentui/react/lib/Slider';
import { PrimaryButton } from '@fluentui/react/lib/Button';

import { FontControl } from './FontControl';
import { ColorPickerControl } from './ColorPickerControl';
import { ShapePickerControl, ShapeOption } from './ShapePickerControl';
import DEFAULTS_CONFIG from '../DEFAULTS_CONFIG';

export interface FilterModuleControlProps {
  label?: string;
  settings?: {
    font: {
      family: string;
      size: string;
      formatting: {
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strikethrough: boolean;
      };
    };
    activeColors: {
      background: string;
      font: string;
    };
    inactiveColors: {
      background: string;
      font: string;
    };
    shape: ShapeOption;
    showDivider: boolean;
    backgroundType: 'solid' | 'gradient' | 'image';
    backgroundColor: string;
    backgroundAlpha: number;
    gradientDirection: string;
    gradientColor1: string;
    gradientColor2: string;
    gradientAlpha: number;
    imageUrl: string;
    imageAlpha: number;
  };
  onPropertyChange?: (propertyPath: string, newValue: any) => void;
}

export const FilterModuleControl: React.FC<FilterModuleControlProps> = ({ 
  label, 
  settings = {
    font: {
      family: 'Segoe UI',
      size: '12px',
      formatting: {
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false
      }
    },
    activeColors: {
      background: '#0078d4',
      font: '#fff'
    },
    inactiveColors: {
      background: '#f3f2f1',
      font: '#323130'
    },
    shape: 'pill',
    showDivider: false,
    backgroundType: 'solid',
    backgroundColor: '#ffffff',
    backgroundAlpha: 0,
    gradientDirection: 'left-right',
    gradientColor1: '#ffffff',
    gradientColor2: '#0f46d1',
    gradientAlpha: 0,
    imageUrl: '',
    imageAlpha: 0
  },
  onPropertyChange 
}) => {
  const [enabled, setEnabled] = React.useState(true);
  const handlePropertyChange = (propertyPath: string, newValue: any) => {
    if (onPropertyChange) {
      onPropertyChange(propertyPath, newValue);
    }
  };

  const handleFontChange = (fields: {
    fontFamily?: string;
    fontSize?: string;
    formatting?: {
      bold: boolean;
      italic: boolean;
      underline: boolean;
      strikethrough: boolean;
    };
  }) => {
    if (fields.fontFamily) handlePropertyChange('font.family', fields.fontFamily);
    if (fields.fontSize) handlePropertyChange('font.size', fields.fontSize);
    if (fields.formatting) handlePropertyChange('font.formatting', fields.formatting);
  };

  const backgroundTypeOptions: IDropdownOption[] = [
    { key: 'solid', text: 'Solid' },
    { key: 'gradient', text: 'Gradient' },
    { key: 'image', text: 'Image' }
  ];

  const gradientDirectionOptions: IDropdownOption[] = [
    { key: 'to bottom', text: 'Top to Bottom' },
    { key: 'left-right', text: 'Left to Right' },
    { key: 'to bottom right', text: 'Top Left to Bottom Right' },
    { key: 'to bottom left', text: 'Top Right to Bottom Left' },
    { key: 'radial', text: 'Radial' }
  ];

  const handleSwapColors = () => {
    const tempColor = settings.gradientColor1;
    handlePropertyChange('gradientColor1', settings.gradientColor2);
    handlePropertyChange('gradientColor2', tempColor);
  };



  return (
    <div style={{ marginBottom: 16 }}>
      {/* Bold Header */}
      <div style={{
        fontSize: '16px',
        fontWeight: '600',
        color: '#323130',
        marginBottom: '12px'
      }}>
        Filter Configuration
      </div>

      {/* Help Description Text */}
      <div style={{
        fontSize: '14px',
        color: '#666',
        lineHeight: '1.4',
        marginBottom: '16px'
      }}>
        {DEFAULTS_CONFIG.filterSettings.description}
      </div>

      {/* 1. Enabled Toggle */}
      <div style={{ marginBottom: 16 }}>
        <Toggle
          label="Enabled"
          checked={enabled}
          onText="On"
          offText="Off"
          onChange={(_, checked) => {
            setEnabled(checked || false);
          }}
        />
      </div>

      {/* Conditional rendering for all other controls when enabled */}
      {enabled && (
        <>
          {/* 2. Filter Font Control */}
          <div style={{ marginBottom: 16 }}>
            <FontControl
              label="Filter Font"
              fontFamily={settings.font.family}
              fontSize={settings.font.size}
              formatting={settings.font.formatting}
              onChange={handleFontChange}
            />
          </div>

          {/* 3. Active Filter Colors */}
          <div style={{ marginBottom: 16 }}>
            <label style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#323130',
              marginBottom: '8px',
              display: 'block'
            }}>
              Active Filter Colors
            </label>
            <div style={{ marginBottom: 8 }}>
              <ColorPickerControl
                color={settings.activeColors.background}
                field="activeBackground"
                label="Active Background Color"
                onChange={(field: string, newColor: string) => handlePropertyChange('activeColors.background', newColor)}
              />
            </div>
            <div style={{ marginBottom: 8 }}>
              <ColorPickerControl
                color={settings.activeColors.font}
                field="activeFont"
                label="Active Font Color"
                onChange={(field: string, newColor: string) => handlePropertyChange('activeColors.font', newColor)}
              />
            </div>
          </div>

          {/* 4. Inactive Filter Colors */}
          <div style={{ marginBottom: 16 }}>
            <label style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#323130',
              marginBottom: '8px',
              display: 'block'
            }}>
              Inactive Filter Colors
            </label>
            <div style={{ marginBottom: 8 }}>
              <ColorPickerControl
                color={settings.inactiveColors.background}
                field="inactiveBackground"
                label="Inactive Background Color"
                onChange={(field: string, newColor: string) => handlePropertyChange('inactiveColors.background', newColor)}
              />
            </div>
            <div style={{ marginBottom: 8 }}>
              <ColorPickerControl
                color={settings.inactiveColors.font}
                field="inactiveFont"
                label="Inactive Font Color"
                onChange={(field: string, newColor: string) => handlePropertyChange('inactiveColors.font', newColor)}
              />
            </div>
          </div>

          {/* 5. Filter Shape Control */}
          <div style={{ marginBottom: 16 }}>
            <ShapePickerControl
              value={settings.shape}
              label="Filter Shape"
              onChange={(newShape) => handlePropertyChange('shape', newShape)}
            />
          </div>

          {/* 6. Filter Background Type Dropdown */}
          <div style={{ marginBottom: 16 }}>
            <Dropdown
              label="Filter Background Type"
              options={backgroundTypeOptions}
              selectedKey={settings.backgroundType}
              onChange={(_, option) => handlePropertyChange('backgroundType', option?.key)}
            />
          </div>

          {/* 7. Solid Background Controls */}
          {settings.backgroundType === 'solid' && (
            <>
              <div style={{ marginBottom: 16 }}>
                <ColorPickerControl
                  color={settings.backgroundColor}
                  field="backgroundColor"
                  label="Filter Background Color"
                  onChange={(field: string, newColor: string) => handlePropertyChange('backgroundColor', newColor)}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#323130',
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  Filter Background Transparency
                </label>
                <Slider
                  min={0}
                  max={100}
                  value={settings.backgroundAlpha}
                  onChange={(value) => handlePropertyChange('backgroundAlpha', value)}
                  showValue={true}
                  valueFormat={(value) => `${value}%`}
                />
              </div>
            </>
          )}

          {/* 8. Gradient Background Controls */}
          {settings.backgroundType === 'gradient' && (
            <>
              <div style={{ marginBottom: 16 }}>
                <Dropdown
                  label="Gradient Direction"
                  options={gradientDirectionOptions}
                  selectedKey={settings.gradientDirection}
                  onChange={(_, option) => handlePropertyChange('gradientDirection', option?.key)}
                />
              </div>
              <div style={{ marginBottom: 8 }}>
                <button
                  type="button"
                  onClick={handleSwapColors}
                  style={{
                    padding: '4px 8px',
                    border: '1px solid #0078d4',
                    borderRadius: '4px',
                    background: '#e5f1fb',
                    color: '#0078d4',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Swap Colors
                </button>
              </div>
              <div style={{ marginBottom: 16 }}>
                <ColorPickerControl
                  color={settings.gradientColor1}
                  field="gradientColor1"
                  label="Gradient Color 1"
                  onChange={(field: string, newColor: string) => handlePropertyChange('gradientColor1', newColor)}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <ColorPickerControl
                  color={settings.gradientColor2}
                  field="gradientColor2"
                  label="Gradient Color 2"
                  onChange={(field: string, newColor: string) => handlePropertyChange('gradientColor2', newColor)}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#323130',
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  Gradient Transparency
                </label>
                <Slider
                  min={0}
                  max={100}
                  value={settings.gradientAlpha}
                  onChange={(value) => handlePropertyChange('gradientAlpha', value)}
                  showValue={true}
                  valueFormat={(value) => `${value}%`}
                />
              </div>
            </>
          )}

          {/* 9. Image Background Controls */}
          {settings.backgroundType === 'image' && (
            <>
              <div style={{ marginBottom: 16 }}>
                <label style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#323130',
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  Image URL
                </label>
                <TextField
                  value={settings.imageUrl}
                  onChange={(_, newValue) => handlePropertyChange('imageUrl', newValue || '')}
                  placeholder="Enter image URL"
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#323130',
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  Image Transparency
                </label>
                <Slider
                  min={0}
                  max={100}
                  value={settings.imageAlpha}
                  onChange={(value) => handlePropertyChange('imageAlpha', value)}
                  showValue={true}
                  valueFormat={(value) => `${value}%`}
                />
              </div>
            </>
          )}

          {/* 10. Show Filter Divider Toggle */}
          <div style={{ marginBottom: 16 }}>
            <Toggle
              label="Show Filter Divider"
              checked={settings.showDivider}
              onText="On"
              offText="Off"
              onChange={(_, checked) => handlePropertyChange('showDivider', checked)}
            />
          </div>

          {/* 11. Reset Button */}
          <div style={{ marginTop: 16 }}>
            <PrimaryButton 
              text="Reset Filter Formatting" 
              onClick={() => {
                // Does nothing - will implement after testing
              }} 
            />
          </div>
        </>
      )}

    </div>
  );
}; 