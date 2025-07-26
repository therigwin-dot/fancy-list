import * as React from 'react';
import { TextField, Dropdown, IDropdownOption, Slider } from '@fluentui/react';
import { ColorPickerControl } from './ColorPickerControl';

export interface BackgroundPickerControlProps {
  defaultValues: {
    type: 'solid' | 'gradient' | 'image';
    color?: string;
    alpha?: number;
    image?: string;
    imageAlpha?: number;
    gradientDirection?: string;
    gradientColor1?: string;
    gradientAlpha1?: number;
    gradientColor2?: string;
    gradientAlpha2?: number;
  };
  fields: {
    type: string;
    color: string;
    alpha: string;
    image: string;
    imageAlpha: string;
    gradientDirection: string;
    gradientColor1: string;
    gradientAlpha1: string;
    gradientColor2: string;
    gradientAlpha2: string;
  };
  label: string;
  onChange: (fields: Record<string, string | number | undefined>) => void;
}

export const BackgroundPickerControl: React.FC<BackgroundPickerControlProps> = ({ defaultValues, fields, label, onChange }) => {
  const [type, setType] = React.useState<'solid' | 'gradient' | 'image'>(defaultValues.type);
  const [color, setColor] = React.useState<string>(defaultValues.color || '#ffffff');
  const [alpha, setAlpha] = React.useState<number>(defaultValues.alpha ?? 0);
  const [image, setImage] = React.useState<string>(defaultValues.image || '');
  const [imageAlpha, setImageAlpha] = React.useState<number>(defaultValues.imageAlpha ?? 0);
  const [gradientDirection, setGradientDirection] = React.useState<string>(defaultValues.gradientDirection || 'top-down');
  const [gradientColor1, setGradientColor1] = React.useState<string>(defaultValues.gradientColor1 || '#ffffff');
  const [gradientAlpha1, setGradientAlpha1] = React.useState<number>(defaultValues.gradientAlpha1 ?? 0);
  const [gradientColor2, setGradientColor2] = React.useState<string>(defaultValues.gradientColor2 || '#0f46d1');
  const [gradientAlpha2, setGradientAlpha2] = React.useState<number>(defaultValues.gradientAlpha2 ?? 0);

  React.useEffect(() => {
    onChange({
      [fields.type]: type,
      [fields.color]: color,
      [fields.alpha]: alpha,
      [fields.image]: image,
      [fields.imageAlpha]: imageAlpha,
      [fields.gradientDirection]: gradientDirection,
      [fields.gradientColor1]: gradientColor1,
      [fields.gradientAlpha1]: gradientAlpha1,
      [fields.gradientColor2]: gradientColor2,
      [fields.gradientAlpha2]: gradientAlpha2
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, color, alpha, image, imageAlpha, gradientDirection, gradientColor1, gradientAlpha1, gradientColor2, gradientAlpha2]);

  const typeOptions: IDropdownOption[] = [
    { key: 'solid', text: 'Solid Color' },
    { key: 'gradient', text: 'Gradient' },
    { key: 'image', text: 'Image URL' }
  ];

  const gradientDirectionOptions: IDropdownOption[] = [
    { key: 'top-down', text: 'Top to Bottom' },
    { key: 'left-right', text: 'Left to Right' },
    { key: 'tl-br', text: 'Top Left to Bottom Right' },
    { key: 'tr-bl', text: 'Top Right to Bottom Left' },
    { key: 'radial', text: 'Radial' }
  ];

  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ fontWeight: 600 }}>{label}</label>
      <Dropdown
        label="Type"
        options={typeOptions}
        selectedKey={type}
        onChange={(_, option) => setType(option!.key as 'solid' | 'gradient' | 'image')}
        styles={{ root: { maxWidth: 200, marginBottom: 8 } }}
      />
      {type === 'solid' && (
        <>
          <ColorPickerControl
            color={color}
            field={fields.color}
            label="Color"
            onChange={(_, newColor) => setColor(newColor)}
          />
          <Slider
            label="Transparency (%)"
            min={0}
            max={100}
            step={1}
            value={alpha}
            onChange={setAlpha}
            styles={{ root: { maxWidth: 200 } }}
          />
        </>
      )}
      {type === 'gradient' && (
        <>
          <Dropdown
            label="Gradient Direction"
            options={gradientDirectionOptions}
            selectedKey={gradientDirection}
            onChange={(_, option) => setGradientDirection(option!.key as string)}
            styles={{ root: { maxWidth: 200, marginBottom: 8 } }}
          />
          <ColorPickerControl
            color={gradientColor1}
            field={fields.gradientColor1}
            label="Color 1"
            onChange={(_, newColor) => setGradientColor1(newColor)}
          />
          <ColorPickerControl
            color={gradientColor2}
            field={fields.gradientColor2}
            label="Color 2"
            onChange={(_, newColor) => setGradientColor2(newColor)}
          />
          <Slider
            label="Transparency (%)"
            min={0}
            max={100}
            step={1}
            value={gradientAlpha1}
            onChange={(value) => {
              setGradientAlpha1(value);
              setGradientAlpha2(value);
            }}
            styles={{ root: { maxWidth: 200 } }}
          />
        </>
      )}
      {type === 'image' && (
        <>
          <TextField
            label="Image URL"
            value={image}
            onChange={(_, v) => setImage(v || '')}
            styles={{ root: { maxWidth: 400 } }}
          />
          <Slider
            label="Image Transparency (%)"
            min={0}
            max={100}
            step={1}
            value={imageAlpha}
            onChange={setImageAlpha}
            styles={{ root: { maxWidth: 200 } }}
          />
        </>
      )}
    </div>
  );
}; 