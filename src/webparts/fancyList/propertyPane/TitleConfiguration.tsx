import * as React from 'react';
import { BackgroundPickerControl } from './BackgroundPickerControl';

export interface TitleConfigurationProps {
  label?: string;
}

export const TitleConfiguration: React.FC<TitleConfigurationProps> = ({ label }) => {
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

      {/* Title Background Control */}
      <div style={{ marginBottom: 16 }}>
        <BackgroundPickerControl
          label="Title Background"
          selectedKey="solid"
          onPropertyChange={(propertyPath: string, newValue: string | number) => {
            console.log('Background property changed:', propertyPath, newValue);
          }}
        />
      </div>
    </div>
  );
}; 