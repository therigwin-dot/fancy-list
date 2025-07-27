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
    enableFilters: boolean;
    font: {
      family: string;
      size: string;
      formatting: {
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strikethrough: boolean;
      };
      alignment?: 'left' | 'center' | 'right' | 'justify';
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
    showAllCategories: boolean;
    defaultFilterSelection: string;
    backgroundType: 'solid' | 'gradient' | 'image';
    backgroundColor: string;
    backgroundAlpha: number;
    gradientDirection: string;
    gradientColor1: string;
    gradientColor2: string;
    gradientAlpha: number;
    imageUrl: string;
    imageAlpha: number;
    backgroundShape: ShapeOption;
  };
  onPropertyChange?: (propertyPath: string, newValue: any) => void;
}

export const FilterModuleControl: React.FC<FilterModuleControlProps> = ({ 
  label, 
  settings = {
    enableFilters: true,
    font: {
      family: 'Segoe UI',
      size: '12px',
      formatting: {
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false
      },
      alignment: 'center'
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
    showAllCategories: true,
    defaultFilterSelection: 'All',
    backgroundType: 'solid',
    backgroundColor: '#ffffff',
    backgroundAlpha: 0,
    gradientDirection: 'left-right',
    gradientColor1: '#ffffff',
    gradientColor2: '#0f46d1',
    gradientAlpha: 0,
    imageUrl: '',
    imageAlpha: 0,
    backgroundShape: 'rounded'
  },
  onPropertyChange 
}) => {
  const [enabled, setEnabled] = React.useState(settings?.enableFilters ?? true);
  const [showAllToggle, setShowAllToggle] = React.useState(settings?.showAllCategories ?? true);
  const [defaultFilterDropdown, setDefaultFilterDropdown] = React.useState(settings?.defaultFilterSelection ?? 'All');
  
  // Keep local state in sync with settings
  React.useEffect(() => {
    console.log('🔄 PERSISTENCE DEBUG: settings.showAllCategories =', settings?.showAllCategories);
    console.log('🔄 PERSISTENCE DEBUG: Current showAllToggle =', showAllToggle);
    setShowAllToggle(settings?.showAllCategories ?? true);
  }, [settings?.showAllCategories]);
  const [previewColor1, setPreviewColor1] = React.useState<string>('#ffffff');
  const [previewColor2, setPreviewColor2] = React.useState<string>('#000000');
  
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
    alignment?: 'left' | 'center' | 'right' | 'justify';
  }) => {
    if (fields.fontFamily) handlePropertyChange('font.family', fields.fontFamily);
    if (fields.fontSize) handlePropertyChange('font.size', fields.fontSize);
    if (fields.formatting) handlePropertyChange('font.formatting', fields.formatting);
    if (fields.alignment) handlePropertyChange('font.alignment', fields.alignment);
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
    // Swap actual gradient colors
    const tempColor = settings.gradientColor1;
    handlePropertyChange('gradientColor1', settings.gradientColor2);
    handlePropertyChange('gradientColor2', tempColor);
    
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
          inlineLabel={true}
          checked={enabled}
          onText="On"
          offText="Off"
          onChange={(_, checked) => {
            setEnabled(checked || false);
            handlePropertyChange('enabled', checked || false);
          }}
        />
      </div>

      {/* Conditional rendering for all other controls when enabled */}
      {enabled && (
        <>
          {/* 2. Default Filter Selection Gray Box Container */}
          <div style={{ 
            backgroundColor: '#f3f2f1', 
            padding: '12px', 
            borderRadius: '4px',
            marginBottom: 16 
          }}>
            {/* Default Filter Selection Header */}
            <div style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#323130',
              marginBottom: '12px'
            }}>
              Default Filter Selection
            </div>

            {/* All Filter Toggle */}
            <div style={{ marginBottom: 16 }}>
              <Toggle
                label="Show 'All' Filter Button"
                inlineLabel={true}
                checked={showAllToggle}
                onText="On"
                offText="Off"
                onChange={(_, checked) => {
                  console.log('🔄 STEP 3 DEBUG: Toggle clicked, new value:', checked);
                  setShowAllToggle(checked || false);
                  handlePropertyChange('showAllCategories', checked);
                  
                  // Handle dropdown selection when "All" toggle changes
                  const testCategories = ['Category1', 'Category2', 'Category3'];
                  if (!checked && defaultFilterDropdown === 'All' && testCategories.length > 0) {
                    // "All" toggle turned OFF and current selection is "All" - change to first available filter
                    const firstFilter = testCategories[0];
                    console.log('🔄 TOGGLE DEBUG: Changing from "All" to first filter:', firstFilter);
                    setDefaultFilterDropdown(firstFilter);
                    handlePropertyChange('defaultFilterSelection', firstFilter);
                  }
                }}
              />
            </div>

            {/* Default Filter Selection Dropdown */}
            <div style={{ marginBottom: 16 }}>
              <Dropdown
                selectedKey={defaultFilterDropdown}
                options={(() => {
                  const testCategories = ['Category1', 'Category2', 'Category3'];
                  console.log('🔄 DROPDOWN DEBUG: Show all toggle:', showAllToggle);
                  console.log('🔄 DROPDOWN DEBUG: Test categories:', testCategories);
                  
                  if (showAllToggle) {
                    const options = [
                      { key: 'All', text: 'All' },
                      ...testCategories.map(cat => ({ key: cat, text: cat }))
                    ];
                    console.log('🔄 DROPDOWN DEBUG: Options with All:', options);
                    return options;
                  } else {
                    const options = testCategories.map(cat => ({ key: cat, text: cat }));
                    console.log('🔄 DROPDOWN DEBUG: Options without All:', options);
                    return options;
                  }
                })()}
                onChange={(_, option) => {
                  console.log('🔄 DROPDOWN DEBUG: Selected:', option?.key);
                  setDefaultFilterDropdown(option?.key as string || 'All');
                  handlePropertyChange('defaultFilterSelection', option?.key || 'All');
                }}
              />
            </div>
          </div>

          {/* 3. Button Gray Box Container */}
          <div style={{ 
            backgroundColor: '#f3f2f1', 
            padding: '12px', 
            borderRadius: '4px',
            marginBottom: 16 
          }}>
            {/* Button Header */}
            <div style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#323130',
              marginBottom: '12px'
            }}>
              Button
            </div>

            {/* Text Controls */}
            <div style={{ marginBottom: 16 }}>
              <FontControl
                fontFamily={settings.font.family}
                fontSize={settings.font.size}
                formatting={settings.font.formatting}
                alignment={settings.font.alignment}
                onChange={handleFontChange}
              />
            </div>

            {/* Color Controls - Font Colors Side by Side */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                marginBottom: 8 
              }}>
                <ColorPickerControl
                  color={settings.activeColors.font}
                  field="activeFont"
                  label=""
                  onChange={(field: string, newColor: string) => handlePropertyChange('activeColors.font', newColor)}
                />
                <ColorPickerControl
                  color={settings.inactiveColors.font}
                  field="inactiveFont"
                  label=""
                  onChange={(field: string, newColor: string) => handlePropertyChange('inactiveColors.font', newColor)}
                />
              </div>
            </div>

            {/* Color Controls - Background Colors Side by Side */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                marginBottom: 8 
              }}>
                <ColorPickerControl
                  color={settings.activeColors.background}
                  field="activeBackground"
                  label=""
                  onChange={(field: string, newColor: string) => handlePropertyChange('activeColors.background', newColor)}
                />
                <ColorPickerControl
                  color={settings.inactiveColors.background}
                  field="inactiveBackground"
                  label=""
                  onChange={(field: string, newColor: string) => handlePropertyChange('inactiveColors.background', newColor)}
                />
              </div>
            </div>

            {/* Shape Control */}
            <div style={{ marginBottom: 0 }}>
              <ShapePickerControl
                value={settings.shape}
                label=""
                onChange={(newShape) => handlePropertyChange('shape', newShape)}
              />
            </div>
          </div>

          {/* 4. Background Controls Container */}
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

            {/* 5. Solid Background Controls */}
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

            {/* 6. Gradient Background Controls */}
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
                      background: getGradientPreview(settings.gradientDirection, previewColor1, previewColor2)
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

            {/* 7. Image Background Controls */}
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
                  settings.backgroundType === 'solid' ? settings.backgroundAlpha :
                  settings.backgroundType === 'gradient' ? settings.gradientAlpha :
                  settings.imageAlpha
                }
                onChange={(value) => {
                  console.log('🎨 TRANSPARENCY SLIDER:', {
                    backgroundType: settings.backgroundType,
                    value: value,
                    currentAlpha: settings.backgroundType === 'solid' ? settings.backgroundAlpha : 
                                  settings.backgroundType === 'gradient' ? settings.gradientAlpha : 
                                  settings.imageAlpha
                  });
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

          {/* 8. Filter Section Shape Control */}
          <div style={{ marginBottom: 16 }}>
            <ShapePickerControl
              value={settings.backgroundShape}
              label=""
              onChange={(newShape) => handlePropertyChange('backgroundShape', newShape)}
            />
            <span style={{ fontSize: '12px', color: '#666', marginTop: '4px', display: 'block' }}>
              Choose the shape style for the entire filter section container
            </span>
          </div>

          {/* 9. Divider Toggle */}
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

          {/* 10. Reset Button */}
          <div style={{ marginTop: 16 }}>
            <PrimaryButton 
              text="Reset Filter Formatting" 
              onClick={() => {
                // Reset all filter settings to defaults
                console.log('🔄 RESET BUTTON: Resetting all filter settings to defaults');
                
                // Reset font settings
                handlePropertyChange('font.family', DEFAULTS_CONFIG.filterSettings.font.family);
                handlePropertyChange('font.size', DEFAULTS_CONFIG.filterSettings.font.size);
                handlePropertyChange('font.formatting', DEFAULTS_CONFIG.filterSettings.font.formatting);
                handlePropertyChange('font.alignment', DEFAULTS_CONFIG.filterSettings.font.alignment);
                
                // Reset color settings
                handlePropertyChange('activeColors.background', DEFAULTS_CONFIG.filterSettings.activeColors.background);
                handlePropertyChange('activeColors.font', DEFAULTS_CONFIG.filterSettings.activeColors.font);
                handlePropertyChange('inactiveColors.background', DEFAULTS_CONFIG.filterSettings.inactiveColors.background);
                handlePropertyChange('inactiveColors.font', DEFAULTS_CONFIG.filterSettings.inactiveColors.font);
                
                // Reset shape settings
                handlePropertyChange('shape', DEFAULTS_CONFIG.filterSettings.shape);
                handlePropertyChange('backgroundShape', DEFAULTS_CONFIG.filterSettings.backgroundShape);
                
                // Reset showAllCategories
                handlePropertyChange('showAllCategories', DEFAULTS_CONFIG.filterSettings.showAllCategories);
                setShowAllToggle(DEFAULTS_CONFIG.filterSettings.showAllCategories);
                
                // Reset defaultFilterSelection
                handlePropertyChange('defaultFilterSelection', DEFAULTS_CONFIG.filterSettings.defaultFilterSelection);
                setDefaultFilterDropdown(DEFAULTS_CONFIG.filterSettings.defaultFilterSelection);
                
                // Reset background settings
                handlePropertyChange('backgroundType', DEFAULTS_CONFIG.filterSettings.background.type);
                handlePropertyChange('backgroundColor', DEFAULTS_CONFIG.filterSettings.background.color);
                handlePropertyChange('backgroundAlpha', DEFAULTS_CONFIG.filterSettings.background.alpha);
                handlePropertyChange('gradientDirection', DEFAULTS_CONFIG.filterSettings.background.gradientDirection);
                handlePropertyChange('gradientColor1', DEFAULTS_CONFIG.filterSettings.background.gradientColor1);
                handlePropertyChange('gradientColor2', DEFAULTS_CONFIG.filterSettings.background.gradientColor2);
                handlePropertyChange('gradientAlpha', DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1);
                handlePropertyChange('imageUrl', DEFAULTS_CONFIG.filterSettings.background.image);
                handlePropertyChange('imageAlpha', DEFAULTS_CONFIG.filterSettings.background.imageAlpha);
                
                // Reset divider
                handlePropertyChange('showDivider', DEFAULTS_CONFIG.filterSettings.showDivider);
                
                console.log('✅ RESET BUTTON: All properties reset to defaults');
              }}
            />
          </div>
        </>
      )}

    </div>
  );
}; 