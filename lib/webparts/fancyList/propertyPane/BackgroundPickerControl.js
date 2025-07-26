import * as React from 'react';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { Slider } from '@fluentui/react/lib/Slider';
import { TextField } from '@fluentui/react/lib/TextField';
import { ColorPickerControl } from './ColorPickerControl';
export var BackgroundPickerControl = function (props) {
    var backgroundTypeOptions = [
        { key: 'solid', text: 'Solid Color' },
        { key: 'gradient', text: 'Gradient' },
        { key: 'image', text: 'Image' }
    ];
    var gradientDirectionOptions = [
        { key: 'left-right', text: 'Left to Right' },
        { key: 'top-bottom', text: 'Top to Bottom' },
        { key: 'diagonal', text: 'Diagonal' },
        { key: 'radial', text: 'Radial' }
    ];
    var handleBackgroundTypeChange = function (event, option) {
        if (option) {
            props.onPropertyChange('backgroundType', option.key);
        }
    };
    var handleGradientDirectionChange = function (event, option) {
        if (option) {
            props.onPropertyChange('gradientDirection', option.key);
        }
    };
    return (React.createElement("div", { style: { marginBottom: 12 } },
        React.createElement("label", { style: { fontWeight: 600 } }, props.label),
        React.createElement(Dropdown, { options: backgroundTypeOptions, selectedKey: props.selectedKey, onChange: handleBackgroundTypeChange, disabled: props.disabled, styles: { root: { marginTop: 4, marginBottom: 16 } } }),
        props.selectedKey === 'solid' && (React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement("h4", { style: { margin: '8px 0', fontSize: '14px', fontWeight: '600' } }, "Solid Background"),
            React.createElement(ColorPickerControl, { color: props.solidBackgroundColor || '#ffffff', field: "solidBackgroundColor", label: "Background Color", onChange: props.onPropertyChange, disabled: props.disabled }),
            React.createElement("div", { style: { marginTop: 8 } },
                React.createElement("label", { style: { fontWeight: 600, fontSize: '12px' } }, "Transparency"),
                React.createElement(Slider, { min: 0, max: 100, step: 1, value: props.solidBackgroundAlpha || 0, onChange: function (value) { return props.onPropertyChange('solidBackgroundAlpha', value); }, disabled: props.disabled, styles: { root: { marginTop: 4 } } })))),
        props.selectedKey === 'gradient' && (React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement("h4", { style: { margin: '8px 0', fontSize: '14px', fontWeight: '600' } }, "Gradient Background"),
            React.createElement("div", { style: { marginBottom: 8 } },
                React.createElement("label", { style: { fontWeight: 600, fontSize: '12px' } }, "Direction"),
                React.createElement(Dropdown, { options: gradientDirectionOptions, selectedKey: props.gradientDirection || 'left-right', onChange: handleGradientDirectionChange, disabled: props.disabled, styles: { root: { marginTop: 4 } } })),
            React.createElement("button", { type: "button", onClick: function () {
                    var tempColor1 = props.gradientColor1 || '#ffffff';
                    var tempColor2 = props.gradientColor2 || '#0f46d1';
                    props.onPropertyChange('gradientColor1', tempColor2);
                    props.onPropertyChange('gradientColor2', tempColor1);
                }, style: {
                    backgroundColor: '#0078d4',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '500',
                    marginBottom: '8px',
                    marginTop: '8px'
                }, disabled: props.disabled }, "Swap Colors"),
            React.createElement(ColorPickerControl, { color: props.gradientColor1 || '#ffffff', field: "gradientColor1", label: "Color 1", onChange: props.onPropertyChange, disabled: props.disabled }),
            React.createElement(ColorPickerControl, { color: props.gradientColor2 || '#0f46d1', field: "gradientColor2", label: "Color 2", onChange: props.onPropertyChange, disabled: props.disabled }),
            React.createElement("div", { style: { marginTop: 8 } },
                React.createElement("label", { style: { fontWeight: 600, fontSize: '12px' } }, "Transparency"),
                React.createElement(Slider, { min: 0, max: 100, step: 1, value: props.gradientAlpha || 0, onChange: function (value) { return props.onPropertyChange('gradientAlpha', value); }, disabled: props.disabled, styles: { root: { marginTop: 4 } } })))),
        props.selectedKey === 'image' && (React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement("h4", { style: { margin: '8px 0', fontSize: '14px', fontWeight: '600' } }, "Image Background"),
            React.createElement("div", { style: { marginBottom: 8 } },
                React.createElement("label", { style: { fontWeight: 600, fontSize: '12px' } }, "Image URL"),
                React.createElement(TextField, { value: props.imageUrl || '', onChange: function (e, newValue) { return props.onPropertyChange('imageUrl', newValue || ''); }, disabled: props.disabled, styles: { root: { marginTop: 4 } }, placeholder: "Enter image URL" })),
            React.createElement("div", { style: { marginTop: 8 } },
                React.createElement("label", { style: { fontWeight: 600, fontSize: '12px' } }, "Transparency"),
                React.createElement(Slider, { min: 0, max: 100, step: 1, value: props.imageAlpha || 0, onChange: function (value) { return props.onPropertyChange('imageAlpha', value); }, disabled: props.disabled, styles: { root: { marginTop: 4 } } }))))));
};
export default BackgroundPickerControl;
//# sourceMappingURL=BackgroundPickerControl.js.map