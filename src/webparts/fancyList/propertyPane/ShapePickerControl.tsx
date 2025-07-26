import * as React from 'react';

export type ShapeOption = 'square' | 'rounded' | 'pill';

interface ShapePickerControlProps {
  value: ShapeOption;
  label?: string;
  onChange: (newShape: ShapeOption) => void;
  disabled?: boolean;
}

const shapeOptions: { key: ShapeOption; text: string }[] = [
  { key: 'square', text: 'Square' },
  { key: 'rounded', text: 'Rounded' },
  { key: 'pill', text: 'Pill' }
];

export const ShapePickerControl: React.FC<ShapePickerControlProps> = ({ value, label, onChange, disabled }) => {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>{label}</label>}
      <div style={{ display: 'flex', gap: 8 }}>
        {shapeOptions.map(option => (
          <button
            key={option.key}
            type="button"
            disabled={disabled}
            style={{
              padding: '0.5em 1.2em',
              border: value === option.key ? '2px solid #0078d4' : '1px solid #ccc',
              borderRadius: option.key === 'square' ? 0 : option.key === 'rounded' ? 8 : 999,
              background: value === option.key ? '#e5f1fb' : '#fff',
              color: '#323130',
              fontWeight: 500,
              cursor: disabled ? 'not-allowed' : 'pointer',
              outline: value === option.key ? '2px solid #0078d4' : 'none',
              minWidth: 60
            }}
            aria-pressed={value === option.key}
            onClick={() => !disabled && onChange(option.key)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}; 