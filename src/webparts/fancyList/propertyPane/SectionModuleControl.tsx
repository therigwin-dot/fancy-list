import * as React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { IconControl } from './IconControl';
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

                        {/* Icon Control - Top Priority */}
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

                  {/* Placeholder for Future Controls */}
                  <div style={{
                    padding: '16px',
                    backgroundColor: '#f3f2f1',
                    borderRadius: '4px',
                    border: '1px dashed #c8c6c4',
                    textAlign: 'center',
                    color: '#666',
                    fontSize: '14px'
                  }}>
                    <div style={{ marginBottom: '8px' }}>
                      🔧 Additional controls coming soon...
                    </div>
                    <div style={{ fontSize: '12px' }}>
                      Font, Color, Background, and Shape controls will be implemented here
                    </div>
                  </div>

      {/* Reset Button */}
      <div style={{ marginTop: 16 }}>
        <PrimaryButton 
          text={sectionSettings.resetButtonText} 
          onClick={handleReset}
          disabled={false} // Now enabled since IconControl is implemented
        />
      </div>
    </div>
  );
}; 