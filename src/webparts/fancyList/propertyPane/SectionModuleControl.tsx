import * as React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { Slider } from '@fluentui/react/lib/Slider';
import { TextField } from '@fluentui/react/lib/TextField';
import { IconControl } from './IconControl';
import { ShapePickerControl } from './ShapePickerControl';
import { FontControl } from './FontControl';
import { ColorPickerControl } from './ColorPickerControl';
import DEFAULTS_CONFIG from '../DEFAULTS_CONFIG';

export type SectionType = 'category' | 'subject' | 'description';

export interface IconSettings {
  enabled: boolean;
  iconPosition: 'left' | 'right';
  collapsedIcon: string;
  expandedIcon: string;
}

export interface SectionSettings {
  sectionType: SectionType;
  resetButtonText: string;
  description: string;
  font: {
    family: string;
    size: string;
    color: string;
    formatting: { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean; };
  };
  background: {
    type: 'solid' | 'gradient' | 'image';
    color: string;
    alpha: number;
    image: string;
    imageAlpha: number;
    gradientDirection: string;
    gradientColor1: string;
    gradientAlpha1: number;
    gradientColor2: string;
    gradientAlpha2: number;
  };
  shape: 'square' | 'rounded' | 'pill';
  showDivider: boolean;
  autoExpand: boolean;
  hoverColor: string;
  iconSettings: IconSettings;
}

export interface SectionModuleControlProps {
  sectionType: SectionType;
  sectionSettings: SectionSettings;
  onChange: (settings: SectionSettings) => void;
  label?: string;
}

export const SectionModuleControl: React.FC<SectionModuleControlProps> = ({ 
  sectionType, 
  sectionSettings, 
  onChange, 
  label 
}) => {
  
  const handleReset = () => {
    // Get the default settings for this section type
    let defaultSettings: SectionSettings;
    
    switch (sectionType) {
      case 'category':
        defaultSettings = DEFAULTS_CONFIG.categorySectionSettings as SectionSettings;
        break;
      case 'subject':
        defaultSettings = DEFAULTS_CONFIG.subjectSectionSettings as SectionSettings;
        break;
      case 'description':
        defaultSettings = DEFAULTS_CONFIG.descriptionSectionSettings as SectionSettings;
        break;
      default:
        console.error(`Unknown section type: ${sectionType}`);
        return;
    }
    
    // Reset to default settings
    onChange(defaultSettings);
    
    console.log(`Reset ${sectionType} settings to defaults`);
  };

  const getSectionTitle = () => {
    switch (sectionType) {
      case 'category': return 'Category Section Configuration';
      case 'subject': return 'Subject Section Configuration';
      case 'description': return 'Description Section Configuration';
      default: return 'Section Configuration';
    }
  };

  const getSectionDescription = () => {
    return sectionSettings.description;
  };

  const handlePropertyChange = (propertyPath: string, newValue: any) => {
    const newSettings = { ...sectionSettings };
    
    // Handle nested property paths
    const pathParts = propertyPath.split('.');
    let current: any = newSettings;
    
    for (let i = 0; i < pathParts.length - 1; i++) {
      current = current[pathParts[i]];
    }
    
    current[pathParts[pathParts.length - 1]] = newValue;
    onChange(newSettings);
  };

  const handleFontChange = (fields: {
    fontFamily?: string;
    fontSize?: string;
    formatting?: { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean; };
  }) => {
    const newSettings = { ...sectionSettings };
    if (fields.fontFamily) newSettings.font.family = fields.fontFamily;
    if (fields.fontSize) newSettings.font.size = fields.fontSize;
    if (fields.formatting) newSettings.font.formatting = fields.formatting;
    onChange(newSettings);
  };

  const handleSwapColors = () => {
    const newSettings = { ...sectionSettings };
    const tempColor = newSettings.background.gradientColor1;
    newSettings.background.gradientColor1 = newSettings.background.gradientColor2;
    newSettings.background.gradientColor2 = tempColor;
    onChange(newSettings);
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

  return (
    <div style={{ marginBottom: 16 }}>
      {/* Bold Header */}
      <div style={{
        fontSize: '16px',
        fontWeight: '600',
        color: '#323130',
        marginBottom: '12px'
      }}>
        {getSectionTitle()}
      </div>

      {/* Help Description Text */}
      <div style={{
        fontSize: '14px',
        color: '#666',
        lineHeight: '1.4',
        marginBottom: '16px'
      }}>
        {getSectionDescription()}
      </div>

      {/* 1. Icon Control - Only show for Category and Subject */}
      {sectionType !== 'description' && (
        <div style={{ marginBottom: 16 }}>
          <IconControl
            label="Expand/Collapse Icons"
            settings={sectionSettings.iconSettings}
            onChange={(iconSettings) => {
              const newSettings = { ...sectionSettings, iconSettings };
              onChange(newSettings);
            }}
          />
        </div>
      )}

      {/* 2. Auto Expand and Show Divider Toggles - Hide for Description */}
      {sectionType !== 'description' && (
        <div style={{ display: 'flex', gap: '16px', marginBottom: 16 }}>
          <Toggle
            label="Auto Expand"
            checked={sectionSettings.autoExpand}
            onText="On"
            offText="Off"
            onChange={(_, checked) => handlePropertyChange('autoExpand', checked)}
          />
          <Toggle
            label="Show Divider"
            checked={sectionSettings.showDivider}
            onText="On"
            offText="Off"
            onChange={(_, checked) => handlePropertyChange('showDivider', checked)}
          />
        </div>
      )}

      {/* 3. Font Control */}
      <div style={{ marginBottom: 16 }}>
        <FontControl
          label=""
          fontFamily={sectionSettings.font.family}
          fontSize={sectionSettings.font.size}
          formatting={sectionSettings.font.formatting}
          onChange={handleFontChange}
        />
      </div>

      {/* 4. Font Color Control */}
      <div style={{ marginBottom: 16 }}>
        <ColorPickerControl
          color={sectionSettings.font.color}
          field="fontColor"
          label=""
          onChange={(field: string, newColor: string) => handlePropertyChange('font.color', newColor)}
        />
      </div>

      {/* 5. Background Type Dropdown */}
      <div style={{ marginBottom: 16 }}>
        <Dropdown
          label="Background Type"
          options={backgroundTypeOptions}
          selectedKey={sectionSettings.background.type}
          onChange={(_, option) => handlePropertyChange('background.type', option?.key)}
        />
      </div>

      {/* 5. Solid Background Controls */}
      {sectionSettings.background.type === 'solid' && (
        <>
          <div style={{ marginBottom: 16 }}>
            <ColorPickerControl
              color={sectionSettings.background.color}
              field="backgroundColor"
              label="Background Color"
              onChange={(field: string, newColor: string) => handlePropertyChange('background.color', newColor)}
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
              Background Transparency
            </label>
            <Slider
              min={0}
              max={100}
              value={sectionSettings.background.alpha}
              onChange={(value) => handlePropertyChange('background.alpha', value)}
              showValue={true}
              valueFormat={(value) => `${value}%`}
            />
          </div>
        </>
      )}

      {/* 5. Gradient Background Controls */}
      {sectionSettings.background.type === 'gradient' && (
        <>
          <div style={{ marginBottom: 16 }}>
            <Dropdown
              label="Gradient Direction"
              options={gradientDirectionOptions}
              selectedKey={sectionSettings.background.gradientDirection}
              onChange={(_, option) => handlePropertyChange('background.gradientDirection', option?.key)}
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
              color={sectionSettings.background.gradientColor1}
              field="gradientColor1"
              label="Gradient Color 1"
              onChange={(field: string, newColor: string) => handlePropertyChange('background.gradientColor1', newColor)}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <ColorPickerControl
              color={sectionSettings.background.gradientColor2}
              field="gradientColor2"
              label="Gradient Color 2"
              onChange={(field: string, newColor: string) => handlePropertyChange('background.gradientColor2', newColor)}
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
              value={sectionSettings.background.gradientAlpha1}
              onChange={(value) => handlePropertyChange('background.gradientAlpha1', value)}
              showValue={true}
              valueFormat={(value) => `${value}%`}
            />
          </div>
        </>
      )}

      {/* 5. Image Background Controls */}
      {sectionSettings.background.type === 'image' && (
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
              value={sectionSettings.background.image}
              onChange={(_, newValue) => handlePropertyChange('background.image', newValue || '')}
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
              value={sectionSettings.background.imageAlpha}
              onChange={(value) => handlePropertyChange('background.imageAlpha', value)}
              showValue={true}
              valueFormat={(value) => `${value}%`}
            />
          </div>
        </>
      )}

      {/* 7. Shape Picker Control */}
      <div style={{ marginBottom: 16 }}>
        <ShapePickerControl
          label="Shape"
          value={sectionSettings.shape}
          onChange={(shape) => handlePropertyChange('shape', shape)}
        />
      </div>

      {/* 8. Hover Color Control */}
      <div style={{ marginBottom: 16 }}>
        <ColorPickerControl
          color={sectionSettings.hoverColor}
          field="hoverColor"
          label="Hover Color"
          onChange={(field: string, newColor: string) => handlePropertyChange('hoverColor', newColor)}
        />
      </div>

      {/* Reset Button */}
      <div style={{ marginTop: 16 }}>
        <PrimaryButton 
          text={sectionSettings.resetButtonText} 
          onClick={handleReset}
        />
      </div>
    </div>
  );
}; 