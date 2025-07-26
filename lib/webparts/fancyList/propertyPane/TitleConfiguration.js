import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { FontControl } from './FontControl';
import { ColorPickerControl } from './ColorPickerControl';
import { ShapePickerControl } from './ShapePickerControl';
export var TitleConfiguration = function (_a) {
    var label = _a.label, _b = _a.settings, settings = _b === void 0 ? {
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
    } : _b, onPropertyChange = _a.onPropertyChange;
    var handlePropertyChange = function (propertyPath, newValue) {
        if (onPropertyChange) {
            onPropertyChange(propertyPath, newValue);
        }
    };
    var handleFontChange = function (fields) {
        if (fields.fontFamily)
            handlePropertyChange('font.family', fields.fontFamily);
        if (fields.fontSize)
            handlePropertyChange('font.size', fields.fontSize);
        if (fields.formatting)
            handlePropertyChange('font.formatting', fields.formatting);
    };
    return (React.createElement("div", { style: { marginBottom: 16 } },
        React.createElement("div", { style: {
                fontSize: '16px',
                fontWeight: '600',
                color: '#323130',
                marginBottom: '12px'
            } }, "Title Configuration"),
        React.createElement("div", { style: {
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.4',
                marginBottom: '16px'
            } }, "Customize the web parts title text, font, color, background, and shape settings. Use the reset button to put the default look and feel back in place. Use the Back and Next buttons to switch to a different configuration page."),
        React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement(TextField, { label: "Title Text", value: settings.webPartTitle, onChange: function (_, newValue) { return handlePropertyChange('webPartTitle', newValue || ''); }, placeholder: "Enter title text" })),
        React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement(ShapePickerControl, { value: settings.shape, label: "Title Shape", onChange: function (newShape) { return handlePropertyChange('shape', newShape); } })),
        React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement(FontControl, { label: "Title Font", fontFamily: settings.font.family, fontSize: settings.font.size, formatting: settings.font.formatting, onChange: handleFontChange })),
        React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement(ColorPickerControl, { label: "Title Color", color: settings.font.color, field: "titleColor", onChange: function (field, newColor) { return handlePropertyChange('font.color', newColor); } }))));
};
//# sourceMappingURL=TitleConfiguration.js.map