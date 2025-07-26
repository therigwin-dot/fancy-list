import * as React from 'react';
import { Dropdown, IDropdownOption, IconButton, TooltipHost } from '@fluentui/react';

export interface FontControlProps {
  fontFamily: string;
  fontSize: string;
  formatting: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
  };
  onChange: (fields: {
    fontFamily?: string;
    fontSize?: string;
    formatting?: {
      bold: boolean;
      italic: boolean;
      underline: boolean;
      strikethrough: boolean;
    };
  }) => void;
  label?: string;
}

const FONT_FAMILIES: IDropdownOption[] = [
  { key: 'Segoe UI', text: 'Segoe UI', data: { font: 'Segoe UI' } },
  { key: 'Arial', text: 'Arial', data: { font: 'Arial' } },
  { key: 'Calibri', text: 'Calibri', data: { font: 'Calibri' } },
  { key: 'Times New Roman', text: 'Times New Roman', data: { font: 'Times New Roman' } },
  { key: 'Verdana', text: 'Verdana', data: { font: 'Verdana' } },
  { key: 'Tahoma', text: 'Tahoma', data: { font: 'Tahoma' } },
  { key: 'Courier New', text: 'Courier New', data: { font: 'Courier New' } },
  { key: 'Georgia', text: 'Georgia', data: { font: 'Georgia' } },
  { key: 'inherit', text: 'Inherit (default)', data: { font: 'inherit' } }
];

const FONT_SIZES: IDropdownOption[] = [
  { key: '12px', text: '12px (Small)' },
  { key: '14px', text: '14px (Small Medium)' },
  { key: '16px', text: '16px (Medium)' },
  { key: '18px', text: '18px (Large)' },
  { key: '20px', text: '20px (Extra Large)' },
  { key: '24px', text: '24px (Title)' },
  { key: '28px', text: '28px (Heading)' },
  { key: '32px', text: '32px (Large Heading)' }
];

const iconButtonStyles = (active: boolean) => ({
  root: {
    background: active ? '#e5f1fb' : 'transparent',
    color: active ? '#0078d4' : '#323130',
    borderRadius: 3,
    border: active ? '1px solid #0078d4' : '1px solid transparent',
    marginRight: 0,
    fontWeight: '600',
    fontSize: 12,
    width: 20,
    height: 20,
  },
  rootHovered: {
    background: '#e5f1fb',
    color: '#0078d4',
    border: '1px solid #0078d4',
  }
});

export const FontControl: React.FC<FontControlProps> = ({ fontFamily, fontSize, formatting, onChange, label }) => {
  const handleFormattingChange = (key: keyof typeof formatting, value: boolean) => {
    onChange({ formatting: {
      bold: key === 'bold' ? value : !!formatting.bold,
      italic: key === 'italic' ? value : !!formatting.italic,
      underline: key === 'underline' ? value : !!formatting.underline,
      strikethrough: key === 'strikethrough' ? value : !!formatting.strikethrough
    }});
  };

  function renderFontOption(option?: IDropdownOption): JSX.Element {
    if (!option) return <></>;
    return (
      <span style={{ fontFamily: option.data?.font || option.text }}>{option.text}</span>
    );
  }
  function renderFontTitle(options?: IDropdownOption[]): JSX.Element {
    if (!options || options.length === 0) return <></>;
    return renderFontOption(options[0]);
  }

  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <div style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#323130',
          marginBottom: '8px'
        }}>
          {label}
        </div>
      )}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1px',
        flexWrap: 'nowrap'
      }}>
        {/* Font Family Dropdown */}
        <Dropdown
          label={undefined}
          ariaLabel="Font Family"
          options={FONT_FAMILIES}
          selectedKey={fontFamily || 'inherit'}
          onChange={(_, option) => onChange({ fontFamily: option!.key as string })}
          onRenderOption={renderFontOption}
          onRenderTitle={renderFontTitle}
          styles={{ root: { minWidth: 100, flex: '1 1 auto' } }}
        />
        
        {/* Formatting Buttons */}
        <TooltipHost content="Bold">
          <IconButton
            iconProps={{ iconName: 'Bold' }}
            title="Bold"
            ariaLabel="Bold"
            checked={!!formatting.bold}
            styles={iconButtonStyles(!!formatting.bold)}
            onClick={() => handleFormattingChange('bold', !formatting.bold)}
          />
        </TooltipHost>
        <TooltipHost content="Italic">
          <IconButton
            iconProps={{ iconName: 'Italic' }}
            title="Italic"
            ariaLabel="Italic"
            checked={!!formatting.italic}
            styles={iconButtonStyles(!!formatting.italic)}
            onClick={() => handleFormattingChange('italic', !formatting.italic)}
          />
        </TooltipHost>
        <TooltipHost content="Underline">
          <IconButton
            iconProps={{ iconName: 'Underline' }}
            title="Underline"
            ariaLabel="Underline"
            checked={!!formatting.underline}
            styles={iconButtonStyles(!!formatting.underline)}
            onClick={() => handleFormattingChange('underline', !formatting.underline)}
          />
        </TooltipHost>
        <TooltipHost content="Strikethrough">
          <IconButton
            iconProps={{ iconName: 'Strikethrough' }}
            title="Strikethrough"
            ariaLabel="Strikethrough"
            checked={!!formatting.strikethrough}
            styles={iconButtonStyles(!!formatting.strikethrough)}
            onClick={() => handleFormattingChange('strikethrough', !formatting.strikethrough)}
          />
        </TooltipHost>
        
        {/* Font Size Dropdown */}
        <Dropdown
          label={undefined}
          ariaLabel="Font Size"
          options={FONT_SIZES}
          selectedKey={fontSize || '24px'}
          onChange={(_, option) => onChange({ fontSize: option!.key as string })}
          styles={{ root: { width: 80, flex: '0 0 auto' } }}
        />
      </div>
    </div>
  );
}; 