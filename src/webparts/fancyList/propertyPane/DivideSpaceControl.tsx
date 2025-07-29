import * as React from 'react';
import { ComboBox, IComboBoxOption } from '@fluentui/react/lib/ComboBox';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export interface DivideSpaceControlProps {
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
  onReset?: () => void;
  onTestValues?: () => void;
}

export const DivideSpaceControl: React.FC<DivideSpaceControlProps> = ({
  label = 'Divide Space',
  value = 0,
  onChange,
  onReset,
  onTestValues
}) => {
  const [customValue, setCustomValue] = React.useState<string>('');
  const [isCustom, setIsCustom] = React.useState<boolean>(false);

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

  // Handle reset
  const handleReset = () => {
    setIsCustom(false);
    setCustomValue('');
    if (onReset) onReset();
  };

  // Handle test values
  const handleTestValues = () => {
    setIsCustom(false);
    setCustomValue('');
    if (onTestValues) onTestValues();
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#323130',
        marginBottom: '8px',
        display: 'block'
      }}>
        {label}
      </label>
      
      <div style={{ marginBottom: 8 }}>
        <ComboBox
          selectedKey={getSelectedOptionKey()}
          options={options}
          onChange={(_, option) => handleComboBoxChange(option)}
          placeholder="Select spacing..."
          useComboBoxAsMenuWidth
        />
      </div>

      {isCustom && (
        <div style={{ marginBottom: 8 }}>
          <TextField
            label="Custom Value (px)"
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

      <div style={{ display: 'flex', gap: '8px' }}>
        <PrimaryButton 
          text="Reset" 
          onClick={handleReset}
        />
        <PrimaryButton 
          text="Test Values" 
          onClick={handleTestValues}
        />
      </div>
    </div>
  );
};