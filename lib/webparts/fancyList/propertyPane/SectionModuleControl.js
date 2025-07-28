var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { Slider } from '@fluentui/react/lib/Slider';
import { TextField } from '@fluentui/react/lib/TextField';
import { IconControl } from './IconControl';
import { ShapePickerControl } from './ShapePickerControl';
import { FontControl } from './FontControl';
import { ColorPickerControl } from './ColorPickerControl';
import DEFAULTS_CONFIG from '../DEFAULTS_CONFIG';
export var SectionModuleControl = function (_a) {
    var sectionType = _a.sectionType, sectionSettings = _a.sectionSettings, onChange = _a.onChange, label = _a.label;
    var _b = React.useState('#ffffff'), previewColor1 = _b[0], setPreviewColor1 = _b[1];
    var _c = React.useState('#000000'), previewColor2 = _c[0], setPreviewColor2 = _c[1];
    var handleReset = function () {
        // Get the default settings for this section type
        var defaultSettings;
        switch (sectionType) {
            case 'category':
                defaultSettings = DEFAULTS_CONFIG.categorySectionSettings;
                break;
            case 'subject':
                defaultSettings = DEFAULTS_CONFIG.subjectSectionSettings;
                break;
            case 'description':
                defaultSettings = DEFAULTS_CONFIG.descriptionSectionSettings;
                break;
            default:
                console.error("Unknown section type: ".concat(sectionType));
                return;
        }
        // Reset by directly updating the entire settings object
        // This ensures all properties are properly reset to their default values
        onChange(defaultSettings);
        console.log("Reset ".concat(sectionType, " settings to defaults"));
    };
    var handleTestValues = function () {
        // Get the test values for this section type
        var testSettings;
        switch (sectionType) {
            case 'category':
                testSettings = __assign(__assign({}, DEFAULTS_CONFIG.categorySectionSettings), DEFAULTS_CONFIG.categorySectionSettings.testValues);
                break;
            case 'subject':
                testSettings = __assign(__assign({}, DEFAULTS_CONFIG.subjectSectionSettings), DEFAULTS_CONFIG.subjectSectionSettings.testValues);
                break;
            case 'description':
                testSettings = __assign(__assign({}, DEFAULTS_CONFIG.descriptionSectionSettings), DEFAULTS_CONFIG.descriptionSectionSettings.testValues);
                break;
            default:
                console.error("Unknown section type: ".concat(sectionType));
                return;
        }
        // Apply test values by updating the entire settings object
        onChange(testSettings);
        console.log("Applied test values to ".concat(sectionType, " settings"));
    };
    var getSectionTitle = function () {
        switch (sectionType) {
            case 'category': return 'Category Section Configuration';
            case 'subject': return 'Subject Section Configuration';
            case 'description': return 'Description Section Configuration';
            default: return 'Section Configuration';
        }
    };
    var getSectionDescription = function () {
        return sectionSettings.description;
    };
    var handlePropertyChange = function (propertyPath, newValue) {
        // Use individual property updates like Title Control
        var newSettings = __assign({}, sectionSettings);
        // Handle nested property paths
        var pathParts = propertyPath.split('.');
        var current = newSettings;
        for (var i = 0; i < pathParts.length - 1; i++) {
            current = current[pathParts[i]];
        }
        current[pathParts[pathParts.length - 1]] = newValue;
        // Update the specific property in the parent component
        switch (propertyPath) {
            case 'autoExpand':
                newSettings.autoExpand = newValue;
                break;
            case 'showDivider':
                newSettings.showDivider = newValue;
                break;
            case 'shape':
                newSettings.shape = newValue;
                break;
            case 'font.family':
                newSettings.font.family = newValue;
                break;
            case 'font.size':
                newSettings.font.size = newValue;
                break;
            case 'font.color':
                newSettings.font.color = newValue;
                break;
            case 'font.formatting':
                newSettings.font.formatting = newValue;
                break;
            case 'font.alignment':
                newSettings.font.alignment = newValue;
                break;
            case 'background.type':
                newSettings.background.type = newValue;
                break;
            case 'background.color':
                newSettings.background.color = newValue;
                break;
            case 'background.alpha':
                newSettings.background.alpha = newValue;
                break;
            case 'background.image':
                newSettings.background.image = newValue;
                break;
            case 'background.imageAlpha':
                newSettings.background.imageAlpha = newValue;
                break;
            case 'background.gradientDirection':
                newSettings.background.gradientDirection = newValue;
                break;
            case 'background.gradientColor1':
                newSettings.background.gradientColor1 = newValue;
                break;
            case 'background.gradientColor2':
                newSettings.background.gradientColor2 = newValue;
                break;
            case 'background.gradientAlpha1':
                newSettings.background.gradientAlpha1 = newValue;
                break;
            case 'background.gradientAlpha2':
                newSettings.background.gradientAlpha2 = newValue;
                break;
            case 'iconSettings':
                newSettings.iconSettings = newValue;
                break;
        }
        onChange(newSettings);
    };
    var handleFontChange = function (fields) {
        var newSettings = __assign({}, sectionSettings);
        if (fields.fontFamily)
            newSettings.font.family = fields.fontFamily;
        if (fields.fontSize)
            newSettings.font.size = fields.fontSize;
        if (fields.formatting)
            newSettings.font.formatting = fields.formatting;
        if (fields.alignment)
            newSettings.font.alignment = fields.alignment;
        onChange(newSettings);
    };
    var handleSwapColors = function () {
        // Swap actual gradient colors
        var newSettings = __assign({}, sectionSettings);
        var tempColor = newSettings.background.gradientColor1;
        newSettings.background.gradientColor1 = newSettings.background.gradientColor2;
        newSettings.background.gradientColor2 = tempColor;
        onChange(newSettings);
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
    return (React.createElement("div", { style: { marginBottom: 16 } },
        React.createElement("div", { style: {
                fontSize: '16px',
                fontWeight: '600',
                color: '#323130',
                marginBottom: '12px'
            } }, getSectionTitle()),
        React.createElement("div", { style: {
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.4',
                marginBottom: '16px'
            } }, getSectionDescription()),
        sectionType !== 'description' && (React.createElement("div", { style: {
                backgroundColor: '#f3f2f1',
                padding: '12px',
                borderRadius: '4px',
                marginBottom: 16
            } },
            React.createElement(IconControl, { label: "Expand/Collapse Icons", settings: sectionSettings.iconSettings, onChange: function (iconSettings) {
                    var newSettings = __assign(__assign({}, sectionSettings), { iconSettings: iconSettings });
                    onChange(newSettings);
                } }))),
        sectionType !== 'description' && (React.createElement("div", { style: {
                display: 'flex',
                gap: '24px',
                marginBottom: 16
            } },
            React.createElement("div", { style: { flex: 1 } },
                React.createElement("div", { style: {
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#323130',
                        marginBottom: '8px'
                    } }, "Auto Expand"),
                React.createElement(Toggle, { label: "", inlineLabel: true, checked: sectionSettings.autoExpand, onText: "On", offText: "Off", onChange: function (_, checked) { return handlePropertyChange('autoExpand', checked); } })),
            React.createElement("div", { style: { flex: 1 } },
                React.createElement("div", { style: {
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#323130',
                        marginBottom: '8px'
                    } }, "Divider"),
                React.createElement(Toggle, { label: "", inlineLabel: true, checked: sectionSettings.showDivider, onText: "On", offText: "Off", onChange: function (_, checked) { return handlePropertyChange('showDivider', checked); } })))),
        React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement(FontControl, { label: "", fontFamily: sectionSettings.font.family, fontSize: sectionSettings.font.size, formatting: sectionSettings.font.formatting, alignment: sectionSettings.font.alignment, onChange: handleFontChange })),
        React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement(ColorPickerControl, { color: sectionSettings.font.color, field: "fontColor", label: "", onChange: function (field, newColor) { return handlePropertyChange('font.color', newColor); } })),
        React.createElement("div", { style: {
                backgroundColor: '#e1dfdd',
                padding: '12px',
                borderRadius: '4px',
                marginBottom: 16
            } },
            React.createElement("div", { style: {
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#323130',
                    marginBottom: '12px'
                } }, "Collapsed Settings"),
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
                    React.createElement(Dropdown, { label: "", options: backgroundTypeOptions, selectedKey: sectionSettings.background.type, onChange: function (_, option) { return handlePropertyChange('background.type', option === null || option === void 0 ? void 0 : option.key); }, styles: { root: { minWidth: 120 } } })),
                sectionSettings.background.type === 'solid' && (React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement(ColorPickerControl, { color: sectionSettings.background.color, field: "backgroundColor", label: "", onChange: function (field, newColor) { return handlePropertyChange('background.color', newColor); } }))),
                sectionSettings.background.type === 'gradient' && (React.createElement(React.Fragment, null,
                    React.createElement("div", { style: { marginBottom: 16 } },
                        React.createElement(Dropdown, { label: "Direction", options: gradientDirectionOptions, selectedKey: sectionSettings.background.gradientDirection, onChange: function (_, option) { return handlePropertyChange('background.gradientDirection', option === null || option === void 0 ? void 0 : option.key); } })),
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
                                background: getGradientPreview(sectionSettings.background.gradientDirection, previewColor1, previewColor2)
                            }, title: "Gradient direction preview (click Swap Colors to reverse)" })),
                    React.createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: 16
                        } },
                        React.createElement(ColorPickerControl, { color: sectionSettings.background.gradientColor1, field: "gradientColor1", label: "", onChange: function (field, newColor) { return handlePropertyChange('background.gradientColor1', newColor); } }),
                        React.createElement(ColorPickerControl, { color: sectionSettings.background.gradientColor2, field: "gradientColor2", label: "", onChange: function (field, newColor) { return handlePropertyChange('background.gradientColor2', newColor); } })))),
                sectionSettings.background.type === 'image' && (React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement("label", { style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#323130',
                            marginBottom: '8px',
                            display: 'block'
                        } }, "URL"),
                    React.createElement(TextField, { value: sectionSettings.background.image, onChange: function (_, newValue) { return handlePropertyChange('background.image', newValue || ''); }, placeholder: "Enter image URL" }))),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement("label", { style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#323130',
                            marginBottom: '8px',
                            display: 'block'
                        } }, "Transparency"),
                    React.createElement(Slider, { min: 0, max: 100, value: sectionSettings.background.type === 'solid' ? sectionSettings.background.alpha :
                            sectionSettings.background.type === 'gradient' ? sectionSettings.background.gradientAlpha1 :
                                sectionSettings.background.imageAlpha, onChange: function (value) {
                            if (sectionSettings.background.type === 'solid') {
                                handlePropertyChange('background.alpha', value);
                            }
                            else if (sectionSettings.background.type === 'gradient') {
                                handlePropertyChange('background.gradientAlpha1', value);
                            }
                            else {
                                handlePropertyChange('background.imageAlpha', value);
                            }
                        }, showValue: true, valueFormat: function (value) { return "".concat(value, "%"); } }))),
            React.createElement("div", { style: { marginBottom: 0 } },
                React.createElement(ShapePickerControl, { label: "", value: sectionSettings.shape, onChange: function (shape) { return handlePropertyChange('shape', shape); } }))),
        React.createElement("div", { style: { marginTop: 16, display: 'flex', gap: '8px' } },
            React.createElement(PrimaryButton, { text: sectionSettings.resetButtonText, onClick: handleReset }),
            React.createElement(PrimaryButton, { text: (function () {
                    switch (sectionType) {
                        case 'category': return DEFAULTS_CONFIG.categorySectionSettings.testValuesButtonText;
                        case 'subject': return DEFAULTS_CONFIG.subjectSectionSettings.testValuesButtonText;
                        case 'description': return DEFAULTS_CONFIG.descriptionSectionSettings.testValuesButtonText;
                        default: return 'Test Values';
                    }
                })(), onClick: handleTestValues }))));
};
//# sourceMappingURL=SectionModuleControl.js.map