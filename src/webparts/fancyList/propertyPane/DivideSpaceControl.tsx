import * as React from 'react';
import { ComboBox, IComboBoxOption } from '@fluentui/react/lib/ComboBox';
import { TextField } from '@fluentui/react/lib/TextField';

export interface DivideSpaceControlProps {
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
}

export const DivideSpaceControl: React.FC<DivideSpaceControlProps> = ({
  label = 'Divide Space',
  value = 0,
  onChange
}) => {
  const [customValue, setCustomValue] = React.useState<string>('');
  const [isCustom, setIsCustom] = React.useState<boolean>(false);

  // Initialize custom state based on value
  React.useEffect(() => {
    if (value !== 0 && value !== 4 && value !== 8 && value !== 16) {
      setIsCustom(true);
      setCustomValue(value.toString());
    } else {
      setIsCustom(false);
      setCustomValue('');
    }
  }, [value]);

  // Preset options
  const options: IComboBoxOption[] = [
    { key: 'touching', text: 'Touching (0px)', data: 0 },
    { key: 'small', text: 'Small (4px)', data: 4 },
    { key: 'medium', text: 'Medium (8px)', data: 8 },
    { key: 'large', text: 'Large (16px)', data: 16 },
    { key: 'custom', text: 'Custom', data: -1 }
  ];

  // Validation function
  const validateDivideSpace = (value: string): string | null => {
    if (!value) return null;
    const num = parseInt(value, 10);
    if (isNaN(num)) return 'Please enter a valid number';
    if (num < 0) return 'Value must be 0 or greater';
    if (num > 50) return 'Value must be 50 or less';
    return null;
  };

  // Normalization function
  const normalizeDivideSpace = (value: string): number => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 0) return 0;
    if (num > 50) return 50;
    return num;
  };

  // Handle ComboBox change
  const handleComboBoxChange = (option?: IComboBoxOption) => {
    if (!option) return;

    if (option.key === 'custom') {
      setIsCustom(true);
      setCustomValue(value.toString());
    } else {
      setIsCustom(false);
      setCustomValue('');
      const newValue = option.data as number;
      if (onChange) onChange(newValue);
    }
  };

  // Handle custom value change
  const handleCustomValueChange = (newValue: string) => {
    setCustomValue(newValue);
    const normalizedValue = normalizeDivideSpace(newValue);
    if (onChange) onChange(normalizedValue);
  };

  // Get selected option key
  const getSelectedOptionKey = (): string => {
    if (value === 0) return 'touching';
    if (value === 4) return 'small';
    if (value === 8) return 'medium';
    if (value === 16) return 'large';
    return 'custom';
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        flexWrap: 'nowrap'
      }}>
        <label style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#323130',
          minWidth: '70px'
        }}>
          Div Space
        </label>
        
        <div style={{ width: '140px' }}>
          <ComboBox
            selectedKey={getSelectedOptionKey()}
            options={options}
            onChange={(_, option) => handleComboBoxChange(option)}
            placeholder="Select spacing..."
            useComboBoxAsMenuWidth
          />
        </div>

        {isCustom && (
          <div style={{ width: '60px' }}>
            <TextField
              label=""
              value={customValue}
              onChange={(_, newValue) => handleCustomValueChange(newValue || '')}
              placeholder="0-50"
              errorMessage={validateDivideSpace(customValue) || undefined}
              type="number"
              min={0}
              max={50}
            />
          </div>
        )}
      </div>
    </div>
  );
};