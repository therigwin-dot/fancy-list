import * as React from 'react';
import { Dropdown, IDropdownOption, IconButton, TooltipHost, ComboBox, IComboBoxOption } from '@fluentui/react';

export interface FontControlProps {
  fontFamily: string;
  fontSize: string;
  formatting: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
  };
  alignment?: 'left' | 'center' | 'right' | 'justify';
  onChange: (fields: {
    fontFamily?: string;
    fontSize?: string;
    formatting?: {
      bold: boolean;
      italic: boolean;
      underline: boolean;
      strikethrough: boolean;
    };
    alignment?: 'left' | 'center' | 'right' | 'justify';
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

const FONT_SIZES: IComboBoxOption[] = [
  { key: '12px', text: '12px (Small)' },
  { key: '14px', text: '14px (Small Medium)' },
  { key: '16px', text: '16px (Medium)' },
  { key: '18px', text: '18px (Large)' },
  { key: '20px', text: '20px (Extra Large)' },
  { key: '24px', text: '24px (Title)' },
  { key: '28px', text: '28px (Heading)' },
  { key: '32px', text: '32px (Large Heading)' },
  { key: '36px', text: '36px (Extra Large Heading)' },
  { key: '48px', text: '48px (Hero)' }
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

export const FontControl: React.FC<FontControlProps> = ({ fontFamily, fontSize, formatting, alignment = 'left', onChange, label }) => {
  const handleFormattingChange = (key: keyof typeof formatting, value: boolean) => {
    onChange({ formatting: {
      bold: key === 'bold' ? value : !!formatting.bold,
      italic: key === 'italic' ? value : !!formatting.italic,
      underline: key === 'underline' ? value : !!formatting.underline,
      strikethrough: key === 'strikethrough' ? value : !!formatting.strikethrough
    }});
  };

  const handleAlignmentChange = (newAlignment: 'left' | 'center' | 'right' | 'justify') => {
    onChange({ alignment: newAlignment });
  };

  const validateFontSize = (value: string): boolean => {
    // Allow common font size formats: px, em, rem, %, pt
    const fontSizeRegex = /^\d+(\.\d+)?(px|em|rem|%|pt)$/;
    return fontSizeRegex.test(value.trim());
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
      {/* Row 1: Formatting and Alignment buttons */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1px',
        flexWrap: 'nowrap',
        marginBottom: '4px'
      }}>
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
        
        {/* Alignment Buttons */}
        <TooltipHost content="Align Left">
          <IconButton
            iconProps={{ iconName: 'AlignLeft' }}
            title="Align Left"
            ariaLabel="Align Left"
            checked={alignment === 'left'}
            styles={iconButtonStyles(alignment === 'left')}
            onClick={() => handleAlignmentChange('left')}
          />
        </TooltipHost>
        <TooltipHost content="Align Center">
          <IconButton
            iconProps={{ iconName: 'AlignCenter' }}
            title="Align Center"
            ariaLabel="Align Center"
            checked={alignment === 'center'}
            styles={iconButtonStyles(alignment === 'center')}
            onClick={() => handleAlignmentChange('center')}
          />
        </TooltipHost>
        <TooltipHost content="Align Right">
          <IconButton
            iconProps={{ iconName: 'AlignRight' }}
            title="Align Right"
            ariaLabel="Align Right"
            checked={alignment === 'right'}
            styles={iconButtonStyles(alignment === 'right')}
            onClick={() => handleAlignmentChange('right')}
          />
        </TooltipHost>
        <TooltipHost content="Justify">
          <IconButton
            iconProps={{ iconName: 'AlignJustify' }}
            title="Justify"
            ariaLabel="Justify"
            checked={alignment === 'justify'}
            styles={iconButtonStyles(alignment === 'justify')}
            onClick={() => handleAlignmentChange('justify')}
          />
        </TooltipHost>
      </div>

      {/* Row 2: Font and Size dropdowns (50/50 split) */}
      <div style={{ 
        display: 'flex', 
        gap: '8px'
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
          styles={{ root: { flex: '1 1 50%' } }}
        />
        
        {/* Font Size ComboBox */}
        <ComboBox
          label={undefined}
          ariaLabel="Font Size"
          options={FONT_SIZES}
          selectedKey={fontSize || '24px'}
          allowFreeform={true}
          autoComplete="on"
          onChange={(_, option, __, textValue) => {
            if (option) {
              // Selected from dropdown
              onChange({ fontSize: option.key as string });
            } else if (textValue && validateFontSize(textValue)) {
              // Custom valid input
              onChange({ fontSize: textValue.trim() });
            }
            // Invalid input is ignored
          }}
          styles={{ root: { flex: '1 1 50%' } }}
        />
      </div>
    </div>
  );
}; 