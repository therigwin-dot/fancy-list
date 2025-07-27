import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { Slider } from '@fluentui/react/lib/Slider';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { FontControl } from './FontControl';
import { ColorPickerControl } from './ColorPickerControl';
import { ShapePickerControl } from './ShapePickerControl';
import DEFAULTS_CONFIG from '../DEFAULTS_CONFIG';
export var TitleConfiguration = function (_a) {
    var label = _a.label, _b = _a.settings, settings = _b === void 0 ? {
        enabled: true,
        webPartTitle: 'Fancy List',
        shape: 'rounded',
        showDivider: false,
        backgroundType: 'solid',
        backgroundColor: '#ffffff',
        backgroundAlpha: 100,
        gradientDirection: 'left-right',
        gradientColor1: '#0078d4',
        gradientColor2: '#ffffff',
        gradientAlpha: 100,
        imageUrl: '',
        imageAlpha: 100,
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
    var _c = React.useState('#ffffff'), previewColor1 = _c[0], setPreviewColor1 = _c[1];
    var _d = React.useState('#000000'), previewColor2 = _d[0], setPreviewColor2 = _d[1];
    var _e = React.useState(settings.enabled), enabled = _e[0], setEnabled = _e[1];
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
    var backgroundTypeOptions = [
        { key: 'solid', text: 'Solid' },
        { key: 'gradient', text: 'Gradient' },
        { key: 'image', text: 'Image' }
    ];
    var gradientDirectionOptions = [
        { key: 'to bottom', text: 'Top to Bottom' },
        { key: 'left-right', text: 'Left to Right' },
        { key: 'to bottom right', text: 'Top Left to Bottom Right' },
        { key: 'to bottom left', text: 'Top Right to Bottom Left' },
        { key: 'radial', text: 'Radial' }
    ];
    var handleSwapColors = function () {
        // Swap actual gradient colors
        var tempColor = settings.gradientColor1;
        handlePropertyChange('gradientColor1', settings.gradientColor2);
        handlePropertyChange('gradientColor2', tempColor);
        // Swap preview colors
        var tempPreview = previewColor1;
        setPreviewColor1(previewColor2);
        setPreviewColor2(tempPreview);
    };
    var getGradientPreview = function (direction, color1, color2) {
        switch (direction) {
            case 'to bottom': return "linear-gradient(to bottom, ".concat(color1, ", ").concat(color2, ")");
            case 'left-right': return "linear-gradient(to right, ".concat(color1, ", ").concat(color2, ")");
            case 'to bottom right': return "linear-gradient(to bottom right, ".concat(color1, ", ").concat(color2, ")");
            case 'to bottom left': return "linear-gradient(to bottom left, ".concat(color1, ", ").concat(color2, ")");
            case 'radial': return "radial-gradient(circle, ".concat(color1, ", ").concat(color2, ")");
            default: return "linear-gradient(to right, ".concat(color1, ", ").concat(color2, ")");
        }
    };
    var handleReset = function () {
        // Do NOT reset webPartTitle (preserve current title text) per design
        handlePropertyChange('shape', DEFAULTS_CONFIG.titleSettings.shape);
        handlePropertyChange('showDivider', DEFAULTS_CONFIG.titleSettings.showDivider);
        handlePropertyChange('backgroundType', DEFAULTS_CONFIG.titleSettings.background.type);
        handlePropertyChange('backgroundColor', DEFAULTS_CONFIG.titleSettings.background.color);
        handlePropertyChange('backgroundAlpha', DEFAULTS_CONFIG.titleSettings.background.alpha);
        handlePropertyChange('gradientDirection', DEFAULTS_CONFIG.titleSettings.background.gradientDirection);
        handlePropertyChange('gradientColor1', DEFAULTS_CONFIG.titleSettings.background.gradientColor1);
        handlePropertyChange('gradientColor2', DEFAULTS_CONFIG.titleSettings.background.gradientColor2);
        handlePropertyChange('gradientAlpha', DEFAULTS_CONFIG.titleSettings.background.gradientAlpha1);
        handlePropertyChange('imageUrl', DEFAULTS_CONFIG.titleSettings.background.image);
        handlePropertyChange('imageAlpha', DEFAULTS_CONFIG.titleSettings.background.imageAlpha);
        handleFontChange({
            fontFamily: DEFAULTS_CONFIG.titleSettings.font.family,
            fontSize: DEFAULTS_CONFIG.titleSettings.font.size,
            formatting: DEFAULTS_CONFIG.titleSettings.font.formatting
        });
        handlePropertyChange('font.color', DEFAULTS_CONFIG.titleSettings.font.color);
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
            React.createElement(Toggle, { label: "Enabled", inlineLabel: true, checked: enabled, onText: "On", offText: "Off", onChange: function (_, checked) {
                    setEnabled(checked || false);
                    handlePropertyChange('enabled', checked || false);
                } })),
        enabled && (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement(FontControl, { fontFamily: settings.font.family, fontSize: settings.font.size, formatting: settings.font.formatting, onChange: handleFontChange })),
            React.createElement("div", { style: {
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    marginBottom: 16
                } },
                React.createElement(TextField, { value: settings.webPartTitle, onChange: function (_, newValue) { return handlePropertyChange('webPartTitle', newValue || ''); }, placeholder: "Enter title text", styles: { root: { flex: '1 1 auto' } } }),
                React.createElement(ColorPickerControl, { color: settings.font.color, field: "titleColor", label: "", onChange: function (field, newColor) { return handlePropertyChange('font.color', newColor); } })),
            React.createElement("div", { style: {
                    backgroundColor: '#f3f2f1',
                    padding: '12px',
                    borderRadius: '4px',
                    marginBottom: 16
                } },
                React.createElement("div", { style: {
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        marginBottom: '12px'
                    } },
                    React.createElement("div", { style: {
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#323130'
                        } }, "Background"),
                    React.createElement(Dropdown, { label: "", options: backgroundTypeOptions, selectedKey: settings.backgroundType, onChange: function (_, option) { return handlePropertyChange('backgroundType', option === null || option === void 0 ? void 0 : option.key); }, styles: { root: { minWidth: 120 } } })),
                settings.backgroundType === 'solid' && (React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement(ColorPickerControl, { color: settings.backgroundColor, field: "backgroundColor", label: "", onChange: function (field, newColor) { return handlePropertyChange('backgroundColor', newColor); } }))),
                settings.backgroundType === 'gradient' && (React.createElement(React.Fragment, null,
                    React.createElement("div", { style: { marginBottom: 16 } },
                        React.createElement(Dropdown, { label: "Direction", options: gradientDirectionOptions, selectedKey: settings.gradientDirection, onChange: function (_, option) { return handlePropertyChange('gradientDirection', option === null || option === void 0 ? void 0 : option.key); } })),
                    React.createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: 8
                        } },
                        React.createElement("button", { type: "button", onClick: handleSwapColors, style: {
                                padding: '4px 8px',
                                border: '1px solid #0078d4',
                                borderRadius: '4px',
                                background: '#e5f1fb',
                                color: '#0078d4',
                                cursor: 'pointer',
                                fontSize: '12px'
                            } }, "Swap Colors"),
                        React.createElement("div", { style: {
                                width: '190px',
                                height: '32px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                background: getGradientPreview(settings.gradientDirection, previewColor1, previewColor2)
                            }, title: "Gradient direction preview (click Swap Colors to reverse)" })),
                    React.createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: 16
                        } },
                        React.createElement(ColorPickerControl, { color: settings.gradientColor1, field: "gradientColor1", label: "", onChange: function (field, newColor) { return handlePropertyChange('gradientColor1', newColor); } }),
                        React.createElement(ColorPickerControl, { color: settings.gradientColor2, field: "gradientColor2", label: "", onChange: function (field, newColor) { return handlePropertyChange('gradientColor2', newColor); } })))),
                settings.backgroundType === 'image' && (React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement("label", { style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#323130',
                            marginBottom: '8px',
                            display: 'block'
                        } }, "URL"),
                    React.createElement(TextField, { value: settings.imageUrl, onChange: function (_, newValue) { return handlePropertyChange('imageUrl', newValue || ''); }, placeholder: "Enter image URL" }))),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement("label", { style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#323130',
                            marginBottom: '8px',
                            display: 'block'
                        } }, "Transparency"),
                    React.createElement(Slider, { min: 0, max: 100, value: settings.backgroundType === 'solid' ? settings.backgroundAlpha :
                            settings.backgroundType === 'gradient' ? settings.gradientAlpha :
                                settings.imageAlpha, onChange: function (value) {
                            if (settings.backgroundType === 'solid') {
                                handlePropertyChange('backgroundAlpha', value);
                            }
                            else if (settings.backgroundType === 'gradient') {
                                handlePropertyChange('gradientAlpha', value);
                            }
                            else {
                                handlePropertyChange('imageAlpha', value);
                            }
                        }, showValue: true, valueFormat: function (value) { return "".concat(value, "%"); } }))),
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement(ShapePickerControl, { value: settings.shape, label: "", onChange: function (newShape) { return handlePropertyChange('shape', newShape); } })),
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement(Toggle, { label: "Divider", inlineLabel: true, checked: settings.showDivider, onText: "On", offText: "Off", onChange: function (_, checked) { return handlePropertyChange('showDivider', checked); } })),
            React.createElement("div", { style: { marginTop: 16 } },
                React.createElement(PrimaryButton, { text: DEFAULTS_CONFIG.titleSettings.resetButtonText, onClick: handleReset }))))));
};
//# sourceMappingURL=TitleConfiguration.js.map