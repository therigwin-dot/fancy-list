import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { FontControl } from './FontControl';
import { ColorPickerControl } from './ColorPickerControl';
import { ShapePickerControl, ShapeOption } from './ShapePickerControl';

export interface TitleConfigurationProps {
  label?: string;
  settings?: {
    webPartTitle: string;
    shape: ShapeOption;
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

      {/* 1. Title Text Control */}
      <div style={{ marginBottom: 16 }}>
        <label style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#323130',
          marginBottom: '8px',
          display: 'block'
        }}>
          Title Text
        </label>
        <TextField
          value={settings.webPartTitle}
          onChange={(_, newValue) => handlePropertyChange('webPartTitle', newValue || '')}
          placeholder="Enter title text"
        />
      </div>

      {/* 2. Title Shape Control */}
      <div style={{ marginBottom: 16 }}>
        <ShapePickerControl
          value={settings.shape}
          label="Title Shape"
          onChange={(newShape) => handlePropertyChange('shape', newShape)}
        />
      </div>

      {/* 3. Title Font Control */}
      <div style={{ marginBottom: 16 }}>
        <FontControl
          label="Title Font"
          fontFamily={settings.font.family}
          fontSize={settings.font.size}
          formatting={settings.font.formatting}
          onChange={handleFontChange}
        />
      </div>

      {/* 4. Title Color Control */}
      <div style={{ marginBottom: 16 }}>
        <ColorPickerControl
          color={settings.font.color}
          field="titleColor"
          label="Title Color"
          onChange={(field: string, newColor: string) => handlePropertyChange('font.color', newColor)}
        />
      </div>
    </div>
  );
}; 