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
    alignment?: 'left' | 'center' | 'right' | 'justify';
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
  const [previewColor1, setPreviewColor1] = React.useState<string>('#ffffff');
  const [previewColor2, setPreviewColor2] = React.useState<string>('#000000');
  
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
    
    // Reset by directly updating the entire settings object
    // This ensures all properties are properly reset to their default values
    onChange(defaultSettings);
    
    console.log(`Reset ${sectionType} settings to defaults`);
  };

  const handleTestValues = () => {
    // Get the test values for this section type
    let testSettings: SectionSettings;
    
    switch (sectionType) {
      case 'category':
        testSettings = {
          ...DEFAULTS_CONFIG.categorySectionSettings,
          ...DEFAULTS_CONFIG.categorySectionSettings.testValues
        } as SectionSettings;
        break;
      case 'subject':
        testSettings = {
          ...DEFAULTS_CONFIG.subjectSectionSettings,
          ...DEFAULTS_CONFIG.subjectSectionSettings.testValues
        } as SectionSettings;
        break;
      case 'description':
        testSettings = {
          ...DEFAULTS_CONFIG.descriptionSectionSettings,
          ...DEFAULTS_CONFIG.descriptionSectionSettings.testValues
        } as SectionSettings;
        break;
      default:
        console.error(`Unknown section type: ${sectionType}`);
        return;
    }
    
    // Apply test values by updating the entire settings object
    onChange(testSettings);
    
    console.log(`Applied test values to ${sectionType} settings`);
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
    // Use individual property updates like Title Control
    const newSettings = { ...sectionSettings };
    
    // Handle nested property paths
    const pathParts = propertyPath.split('.');
    let current: any = newSettings;
    
    for (let i = 0; i < pathParts.length - 1; i++) {
      current = current[pathParts[i]];
    }
    
    current[pathParts[pathParts.length - 1]] = newValue;
    
    // Update the specific property in the parent component
    switch (propertyPath) {
      case 'autoExpand':
        newSettings.autoExpand = newValue;
        break;
      case 'showDivider':
        newSettings.showDivider = newValue;
        break;
      case 'shape':
        newSettings.shape = newValue;
        break;
      case 'font.family':
        newSettings.font.family = newValue;
        break;
      case 'font.size':
        newSettings.font.size = newValue;
        break;
      case 'font.color':
        newSettings.font.color = newValue;
        break;
      case 'font.formatting':
        newSettings.font.formatting = newValue;
        break;
      case 'font.alignment':
        newSettings.font.alignment = newValue;
        break;
      case 'background.type':
        newSettings.background.type = newValue;
        break;
      case 'background.color':
        newSettings.background.color = newValue;
        break;
      case 'background.alpha':
        newSettings.background.alpha = newValue;
        break;
      case 'background.image':
        newSettings.background.image = newValue;
        break;
      case 'background.imageAlpha':
        newSettings.background.imageAlpha = newValue;
        break;
      case 'background.gradientDirection':
        newSettings.background.gradientDirection = newValue;
        break;
      case 'background.gradientColor1':
        newSettings.background.gradientColor1 = newValue;
        break;
      case 'background.gradientColor2':
        newSettings.background.gradientColor2 = newValue;
        break;
      case 'background.gradientAlpha1':
        newSettings.background.gradientAlpha1 = newValue;
        break;
      case 'background.gradientAlpha2':
        newSettings.background.gradientAlpha2 = newValue;
        break;
      case 'iconSettings':
        newSettings.iconSettings = newValue;
        break;
    }
    
    onChange(newSettings);
  };

  const handleFontChange = (fields: {
    fontFamily?: string;
    fontSize?: string;
    formatting?: { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean; };
    alignment?: 'left' | 'center' | 'right' | 'justify';
  }) => {
    const newSettings = { ...sectionSettings };
    if (fields.fontFamily) newSettings.font.family = fields.fontFamily;
    if (fields.fontSize) newSettings.font.size = fields.fontSize;
    if (fields.formatting) newSettings.font.formatting = fields.formatting;
    if (fields.alignment) newSettings.font.alignment = fields.alignment;
    onChange(newSettings);
  };

  const handleSwapColors = () => {
    // Swap actual gradient colors
    const newSettings = { ...sectionSettings };
    const tempColor = newSettings.background.gradientColor1;
    newSettings.background.gradientColor1 = newSettings.background.gradientColor2;
    newSettings.background.gradientColor2 = tempColor;
    onChange(newSettings);
    
    // Swap preview colors
    const tempPreview = previewColor1;
    setPreviewColor1(previewColor2);
    setPreviewColor2(tempPreview);
  };

  const getGradientPreview = (direction: string, color1: string, color2: string): string => {
    switch(direction) {
      case 'to bottom': return `linear-gradient(to bottom, ${color1}, ${color2})`;
      case 'left-right': return `linear-gradient(to right, ${color1}, ${color2})`;
      case 'to bottom right': return `linear-gradient(to bottom right, ${color1}, ${color2})`;
      case 'to bottom left': return `linear-gradient(to bottom left, ${color1}, ${color2})`;
      case 'radial': return `radial-gradient(circle, ${color1}, ${color2})`;
      default: return `linear-gradient(to right, ${color1}, ${color2})`;
    }
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
        <div style={{ 
          backgroundColor: '#f3f2f1', 
          padding: '12px', 
          borderRadius: '4px',
          marginBottom: 16 
        }}>
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
        <div style={{ 
          display: 'flex', 
          gap: '24px',
          marginBottom: 16 
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#323130',
              marginBottom: '8px'
            }}>
              Auto Expand
            </div>
            <Toggle
              label=""
              inlineLabel={true}
              checked={sectionSettings.autoExpand}
              onText="On"
              offText="Off"
              onChange={(_, checked) => handlePropertyChange('autoExpand', checked)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#323130',
              marginBottom: '8px'
            }}>
              Divider
            </div>
            <Toggle
              label=""
              inlineLabel={true}
              checked={sectionSettings.showDivider}
              onText="On"
              offText="Off"
              onChange={(_, checked) => handlePropertyChange('showDivider', checked)}
            />
          </div>
        </div>
      )}

      {/* 3. Font Control */}
      <div style={{ marginBottom: 16 }}>
        <FontControl
          label=""
          fontFamily={sectionSettings.font.family}
          fontSize={sectionSettings.font.size}
          formatting={sectionSettings.font.formatting}
          alignment={sectionSettings.font.alignment}
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

      {/* 5. Background Controls Container */}
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
            selectedKey={sectionSettings.background.type}
            onChange={(_, option) => handlePropertyChange('background.type', option?.key)}
            styles={{ root: { minWidth: 120 } }}
          />
        </div>

        {/* 5. Solid Background Controls */}
        {sectionSettings.background.type === 'solid' && (
          <div style={{ marginBottom: 16 }}>
            <ColorPickerControl
              color={sectionSettings.background.color}
              field="backgroundColor"
              label=""
              onChange={(field: string, newColor: string) => handlePropertyChange('background.color', newColor)}
            />
          </div>
        )}

              {/* 5. Gradient Background Controls */}
        {sectionSettings.background.type === 'gradient' && (
          <>
            <div style={{ marginBottom: 16 }}>
              <Dropdown
                label="Direction"
                options={gradientDirectionOptions}
                selectedKey={sectionSettings.background.gradientDirection}
                onChange={(_, option) => handlePropertyChange('background.gradientDirection', option?.key)}
              />
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              marginBottom: 8 
            }}>
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
              <div
                style={{
                  width: '190px',
                  height: '32px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  background: getGradientPreview(sectionSettings.background.gradientDirection, previewColor1, previewColor2)
                }}
                title="Gradient direction preview (click Swap Colors to reverse)"
              />
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              marginBottom: 16 
            }}>
              <ColorPickerControl
                color={sectionSettings.background.gradientColor1}
                field="gradientColor1"
                label=""
                onChange={(field: string, newColor: string) => handlePropertyChange('background.gradientColor1', newColor)}
              />
              <ColorPickerControl
                color={sectionSettings.background.gradientColor2}
                field="gradientColor2"
                label=""
                onChange={(field: string, newColor: string) => handlePropertyChange('background.gradientColor2', newColor)}
              />
            </div>
          </>
        )}

              {/* 5. Image Background Controls */}
        {sectionSettings.background.type === 'image' && (
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
              value={sectionSettings.background.image}
              onChange={(_, newValue) => handlePropertyChange('background.image', newValue || '')}
              placeholder="Enter image URL"
            />
          </div>
                )}

        {/* Unified Transparency Slider */}
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
              sectionSettings.background.type === 'solid' ? sectionSettings.background.alpha :
              sectionSettings.background.type === 'gradient' ? sectionSettings.background.gradientAlpha1 :
              sectionSettings.background.imageAlpha
            }
            onChange={(value) => {
              if (sectionSettings.background.type === 'solid') {
                handlePropertyChange('background.alpha', value);
              } else if (sectionSettings.background.type === 'gradient') {
                handlePropertyChange('background.gradientAlpha1', value);
              } else {
                handlePropertyChange('background.imageAlpha', value);
              }
            }}
            showValue={true}
            valueFormat={(value) => `${value}%`}
          />
        </div>
      </div>

      {/* 7. Shape Picker Control */}
      <div style={{ marginBottom: 16 }}>
        <ShapePickerControl
          label=""
          value={sectionSettings.shape}
          onChange={(shape) => handlePropertyChange('shape', shape)}
        />
      </div>



      {/* Reset and Test Values Buttons */}
      <div style={{ marginTop: 16, display: 'flex', gap: '8px' }}>
        <PrimaryButton 
          text={sectionSettings.resetButtonText} 
          onClick={handleReset}
        />
        <PrimaryButton 
          text={(() => {
            switch (sectionType) {
              case 'category': return DEFAULTS_CONFIG.categorySectionSettings.testValuesButtonText;
              case 'subject': return DEFAULTS_CONFIG.subjectSectionSettings.testValuesButtonText;
              case 'description': return DEFAULTS_CONFIG.descriptionSectionSettings.testValuesButtonText;
              default: return 'Test Values';
            }
          })()} 
          onClick={handleTestValues}
        />
      </div>
    </div>
  );
}; 