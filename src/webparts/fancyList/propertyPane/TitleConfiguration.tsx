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

export interface TitleConfigurationProps {
  label?: string;
  settings?: {
    webPartTitle: string;
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
    font: {
      family: string;
      size: string;
      formatting: {
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strikethrough: boolean;
      };
      color: string;
    };
  };
  onPropertyChange?: (propertyPath: string, newValue: any) => void;
}

export const TitleConfiguration: React.FC<TitleConfigurationProps> = ({ 
  label, 
  settings = {
    webPartTitle: 'Fancy List',
    shape: 'rounded',
    showDivider: false,
    backgroundType: 'solid',
    backgroundColor: '#ffffff',
    backgroundAlpha: 100,
    gradientDirection: 'left-right',
    gradientColor1: '#0078d4',
    gradientColor2: '#ffffff',
    gradientAlpha: 100,
    imageUrl: '',
    imageAlpha: 100,
    font: {
      family: 'Segoe UI',
      size: '24px',
      formatting: {
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false
      },
      color: '#323130'
    }
  },
  onPropertyChange 
}) => {
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

  const handleReset = () => {
    // Do NOT reset webPartTitle (preserve current title text) per design
    handlePropertyChange('shape', DEFAULTS_CONFIG.titleSettings.shape);
    handlePropertyChange('showDivider', DEFAULTS_CONFIG.titleSettings.showDivider);
    handlePropertyChange('backgroundType', DEFAULTS_CONFIG.titleSettings.background.type);
    handlePropertyChange('backgroundColor', DEFAULTS_CONFIG.titleSettings.background.color);
    handlePropertyChange('backgroundAlpha', DEFAULTS_CONFIG.titleSettings.background.alpha);
    handlePropertyChange('gradientDirection', DEFAULTS_CONFIG.titleSettings.background.gradientDirection);
    handlePropertyChange('gradientColor1', DEFAULTS_CONFIG.titleSettings.background.gradientColor1);
    handlePropertyChange('gradientColor2', DEFAULTS_CONFIG.titleSettings.background.gradientColor2);
    handlePropertyChange('gradientAlpha', DEFAULTS_CONFIG.titleSettings.background.gradientAlpha1);
    handlePropertyChange('imageUrl', DEFAULTS_CONFIG.titleSettings.background.image);
    handlePropertyChange('imageAlpha', DEFAULTS_CONFIG.titleSettings.background.imageAlpha);
    handleFontChange({
      fontFamily: DEFAULTS_CONFIG.titleSettings.font.family,
      fontSize: DEFAULTS_CONFIG.titleSettings.font.size,
      formatting: DEFAULTS_CONFIG.titleSettings.font.formatting
    });
    handlePropertyChange('font.color', DEFAULTS_CONFIG.titleSettings.font.color);
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
        Title Configuration
      </div>

      {/* Help Description Text */}
      <div style={{
        fontSize: '14px',
        color: '#666',
        lineHeight: '1.4',
        marginBottom: '16px'
      }}>
        Customize the web parts title text, font, color, background, and shape settings. Use the reset button to put the default look and feel back in place. Use the Back and Next buttons to switch to a different configuration page.
      </div>

      {/* 1. Title Font Control */}
      <div style={{ marginBottom: 16 }}>
        <FontControl
          fontFamily={settings.font.family}
          fontSize={settings.font.size}
          formatting={settings.font.formatting}
          onChange={handleFontChange}
        />
      </div>

      {/* 2. Color and Text Controls */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        gap: '8px',
        marginBottom: 16 
      }}>
        <ColorPickerControl
          color={settings.font.color}
          field="titleColor"
          label=""
          onChange={(field: string, newColor: string) => handlePropertyChange('font.color', newColor)}
        />
        <TextField
          value={settings.webPartTitle}
          onChange={(_, newValue) => handlePropertyChange('webPartTitle', newValue || '')}
          placeholder="Enter title text"
          styles={{ root: { flex: '1 1 auto' } }}
        />
      </div>

      {/* 6. Background Controls Container */}
      <div style={{ 
        backgroundColor: '#f3f2f1', 
        padding: '12px', 
        borderRadius: '4px',
        marginBottom: 16 
      }}>
        {/* Background Header with Type Dropdown */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '8px',
          marginBottom: '12px'
        }}>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#323130'
          }}>
            Background
          </div>
          <Dropdown
            label=""
            options={backgroundTypeOptions}
            selectedKey={settings.backgroundType}
            onChange={(_, option) => handlePropertyChange('backgroundType', option?.key)}
            styles={{ root: { minWidth: 120 } }}
          />
        </div>

        {/* 7. Solid Background Controls */}
        {settings.backgroundType === 'solid' && (
          <div style={{ marginBottom: 16 }}>
            <ColorPickerControl
              color={settings.backgroundColor}
              field="backgroundColor"
              label=""
              onChange={(field: string, newColor: string) => handlePropertyChange('backgroundColor', newColor)}
            />
          </div>
        )}

              {/* 8. Gradient Background Controls */}
        {settings.backgroundType === 'gradient' && (
          <>
            <div style={{ marginBottom: 16 }}>
              <Dropdown
                label="Direction"
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
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              marginBottom: 16 
            }}>
              <ColorPickerControl
                color={settings.gradientColor1}
                field="gradientColor1"
                label=""
                onChange={(field: string, newColor: string) => handlePropertyChange('gradientColor1', newColor)}
              />
              <ColorPickerControl
                color={settings.gradientColor2}
                field="gradientColor2"
                label=""
                onChange={(field: string, newColor: string) => handlePropertyChange('gradientColor2', newColor)}
              />
            </div>
          </>
        )}

              {/* 9. Image Background Controls */}
        {settings.backgroundType === 'image' && (
          <div style={{ marginBottom: 16 }}>
            <label style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#323130',
              marginBottom: '8px',
              display: 'block'
            }}>
              URL
            </label>
            <TextField
              value={settings.imageUrl}
              onChange={(_, newValue) => handlePropertyChange('imageUrl', newValue || '')}
              placeholder="Enter image URL"
            />
          </div>
        )}

        {/* Unified Transparency Slider - Always Shown */}
        <div style={{ marginBottom: 16 }}>
          <label style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#323130',
            marginBottom: '8px',
            display: 'block'
          }}>
            Transparency
          </label>
          <Slider
            min={0}
            max={100}
            value={
              settings.backgroundType === 'solid' ? settings.backgroundAlpha :
              settings.backgroundType === 'gradient' ? settings.gradientAlpha :
              settings.imageAlpha
            }
            onChange={(value) => {
              if (settings.backgroundType === 'solid') {
                handlePropertyChange('backgroundAlpha', value);
              } else if (settings.backgroundType === 'gradient') {
                handlePropertyChange('gradientAlpha', value);
              } else {
                handlePropertyChange('imageAlpha', value);
              }
            }}
            showValue={true}
            valueFormat={(value) => `${value}%`}
          />
        </div>
      </div>

      {/* 4. Shape Control */}
      <div style={{ marginBottom: 16 }}>
        <ShapePickerControl
          value={settings.shape}
          label=""
          onChange={(newShape) => handlePropertyChange('shape', newShape)}
        />
      </div>

      {/* 5. Show Divider Toggle */}
      <div style={{ marginBottom: 16 }}>
        <Toggle
          label="Divider"
          inlineLabel={true}
          checked={settings.showDivider}
          onText="On"
          offText="Off"
          onChange={(_, checked) => handlePropertyChange('showDivider', checked)}
        />
      </div>

      {/* Reset Button */}
      <div style={{ marginTop: 16 }}>
        <PrimaryButton text={DEFAULTS_CONFIG.titleSettings.resetButtonText} onClick={handleReset} />
      </div>
    </div>
  );
}; 