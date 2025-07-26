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
export var FilterModuleControl = function (_a) {
    var label = _a.label, _b = _a.settings, settings = _b === void 0 ? {
        enableFilters: true,
        showAllCategories: true,
        font: {
            family: 'Segoe UI',
            size: '12px',
            formatting: {
                bold: false,
                italic: false,
                underline: false,
                strikethrough: false
            }
        },
        activeColors: {
            background: '#0078d4',
            font: '#fff'
        },
        inactiveColors: {
            background: '#f3f2f1',
            font: '#323130'
        },
        shape: 'pill',
        showDivider: false,
        backgroundType: 'solid',
        backgroundColor: '#ffffff',
        backgroundAlpha: 0,
        gradientDirection: 'left-right',
        gradientColor1: '#ffffff',
        gradientColor2: '#0f46d1',
        gradientAlpha: 0,
        imageUrl: '',
        imageAlpha: 0
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
        var tempColor = settings.gradientColor1;
        handlePropertyChange('gradientColor1', settings.gradientColor2);
        handlePropertyChange('gradientColor2', tempColor);
    };
    var handleReset = function () {
        // Reset all filter settings to defaults
        handlePropertyChange('enableFilters', DEFAULTS_CONFIG.filterSettings.enableFilters);
        handlePropertyChange('showAllCategories', DEFAULTS_CONFIG.filterSettings.showAllCategories);
        handlePropertyChange('shape', DEFAULTS_CONFIG.filterSettings.shape);
        handlePropertyChange('showDivider', DEFAULTS_CONFIG.filterSettings.showDivider);
        handlePropertyChange('backgroundType', DEFAULTS_CONFIG.filterSettings.background.type);
        handlePropertyChange('backgroundColor', DEFAULTS_CONFIG.filterSettings.background.color);
        handlePropertyChange('backgroundAlpha', DEFAULTS_CONFIG.filterSettings.background.alpha);
        handlePropertyChange('gradientDirection', DEFAULTS_CONFIG.filterSettings.background.gradientDirection);
        handlePropertyChange('gradientColor1', DEFAULTS_CONFIG.filterSettings.background.gradientColor1);
        handlePropertyChange('gradientColor2', DEFAULTS_CONFIG.filterSettings.background.gradientColor2);
        handlePropertyChange('gradientAlpha', DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1);
        handlePropertyChange('imageUrl', DEFAULTS_CONFIG.filterSettings.background.image);
        handlePropertyChange('imageAlpha', DEFAULTS_CONFIG.filterSettings.background.imageAlpha);
        handleFontChange({
            fontFamily: DEFAULTS_CONFIG.filterSettings.font.family,
            fontSize: DEFAULTS_CONFIG.filterSettings.font.size,
            formatting: DEFAULTS_CONFIG.filterSettings.font.formatting
        });
        handlePropertyChange('activeColors.background', DEFAULTS_CONFIG.filterSettings.activeColors.background);
        handlePropertyChange('activeColors.font', DEFAULTS_CONFIG.filterSettings.activeColors.font);
        handlePropertyChange('inactiveColors.background', DEFAULTS_CONFIG.filterSettings.inactiveColors.background);
        handlePropertyChange('inactiveColors.font', DEFAULTS_CONFIG.filterSettings.inactiveColors.font);
    };
    return (React.createElement("div", { style: { marginBottom: 16 } },
        React.createElement("div", { style: {
                fontSize: '16px',
                fontWeight: '600',
                color: '#323130',
                marginBottom: '12px'
            } }, "Filter Configuration"),
        React.createElement("div", { style: {
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.4',
                marginBottom: '16px'
            } }, DEFAULTS_CONFIG.filterSettings.description),
        React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement(Toggle, { label: "Enable Filters", checked: settings.enableFilters, onText: "On", offText: "Off", onChange: function (_, checked) { return handlePropertyChange('enableFilters', checked); } })),
        settings.enableFilters && (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement(Toggle, { label: "Show 'All' Category Option", checked: settings.showAllCategories, onText: "On", offText: "Off", onChange: function (_, checked) { return handlePropertyChange('showAllCategories', checked); } })),
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement(FontControl, { label: "Filter Font", fontFamily: settings.font.family, fontSize: settings.font.size, formatting: settings.font.formatting, onChange: handleFontChange })),
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement("label", { style: {
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#323130',
                        marginBottom: '8px',
                        display: 'block'
                    } }, "Active Filter Colors"),
                React.createElement("div", { style: { marginBottom: 8 } },
                    React.createElement(ColorPickerControl, { color: settings.activeColors.background, field: "activeBackground", label: "Active Background Color", onChange: function (field, newColor) { return handlePropertyChange('activeColors.background', newColor); } })),
                React.createElement("div", { style: { marginBottom: 8 } },
                    React.createElement(ColorPickerControl, { color: settings.activeColors.font, field: "activeFont", label: "Active Font Color", onChange: function (field, newColor) { return handlePropertyChange('activeColors.font', newColor); } }))),
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement("label", { style: {
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#323130',
                        marginBottom: '8px',
                        display: 'block'
                    } }, "Inactive Filter Colors"),
                React.createElement("div", { style: { marginBottom: 8 } },
                    React.createElement(ColorPickerControl, { color: settings.inactiveColors.background, field: "inactiveBackground", label: "Inactive Background Color", onChange: function (field, newColor) { return handlePropertyChange('inactiveColors.background', newColor); } })),
                React.createElement("div", { style: { marginBottom: 8 } },
                    React.createElement(ColorPickerControl, { color: settings.inactiveColors.font, field: "inactiveFont", label: "Inactive Font Color", onChange: function (field, newColor) { return handlePropertyChange('inactiveColors.font', newColor); } }))),
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement(ShapePickerControl, { value: settings.shape, label: "Filter Shape", onChange: function (newShape) { return handlePropertyChange('shape', newShape); } })),
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement(Toggle, { label: "Show Filter Divider", checked: settings.showDivider, onText: "On", offText: "Off", onChange: function (_, checked) { return handlePropertyChange('showDivider', checked); } })),
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement(Dropdown, { label: "Filter Background Type", options: backgroundTypeOptions, selectedKey: settings.backgroundType, onChange: function (_, option) { return handlePropertyChange('backgroundType', option === null || option === void 0 ? void 0 : option.key); } })),
            settings.backgroundType === 'solid' && (React.createElement(React.Fragment, null,
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement(ColorPickerControl, { color: settings.backgroundColor, field: "backgroundColor", label: "Filter Background Color", onChange: function (field, newColor) { return handlePropertyChange('backgroundColor', newColor); } })),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement("label", { style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#323130',
                            marginBottom: '8px',
                            display: 'block'
                        } }, "Filter Background Transparency"),
                    React.createElement(Slider, { min: 0, max: 100, value: settings.backgroundAlpha, onChange: function (value) { return handlePropertyChange('backgroundAlpha', value); }, showValue: true, valueFormat: function (value) { return "".concat(value, "%"); } })))),
            settings.backgroundType === 'gradient' && (React.createElement(React.Fragment, null,
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement(Dropdown, { label: "Gradient Direction", options: gradientDirectionOptions, selectedKey: settings.gradientDirection, onChange: function (_, option) { return handlePropertyChange('gradientDirection', option === null || option === void 0 ? void 0 : option.key); } })),
                React.createElement("div", { style: { marginBottom: 8 } },
                    React.createElement("button", { type: "button", onClick: handleSwapColors, style: {
                            padding: '4px 8px',
                            border: '1px solid #0078d4',
                            borderRadius: '4px',
                            background: '#e5f1fb',
                            color: '#0078d4',
                            cursor: 'pointer',
                            fontSize: '12px'
                        } }, "Swap Colors")),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement(ColorPickerControl, { color: settings.gradientColor1, field: "gradientColor1", label: "Gradient Color 1", onChange: function (field, newColor) { return handlePropertyChange('gradientColor1', newColor); } })),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement(ColorPickerControl, { color: settings.gradientColor2, field: "gradientColor2", label: "Gradient Color 2", onChange: function (field, newColor) { return handlePropertyChange('gradientColor2', newColor); } })),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement("label", { style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#323130',
                            marginBottom: '8px',
                            display: 'block'
                        } }, "Gradient Transparency"),
                    React.createElement(Slider, { min: 0, max: 100, value: settings.gradientAlpha, onChange: function (value) { return handlePropertyChange('gradientAlpha', value); }, showValue: true, valueFormat: function (value) { return "".concat(value, "%"); } })))),
            settings.backgroundType === 'image' && (React.createElement(React.Fragment, null,
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement("label", { style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#323130',
                            marginBottom: '8px',
                            display: 'block'
                        } }, "Image URL"),
                    React.createElement(TextField, { value: settings.imageUrl, onChange: function (_, newValue) { return handlePropertyChange('imageUrl', newValue || ''); }, placeholder: "Enter image URL" })),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement("label", { style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#323130',
                            marginBottom: '8px',
                            display: 'block'
                        } }, "Image Transparency"),
                    React.createElement(Slider, { min: 0, max: 100, value: settings.imageAlpha, onChange: function (value) { return handlePropertyChange('imageAlpha', value); }, showValue: true, valueFormat: function (value) { return "".concat(value, "%"); } })))),
            React.createElement("div", { style: { marginTop: 16 } },
                React.createElement(PrimaryButton, { text: DEFAULTS_CONFIG.filterSettings.resetButtonText, onClick: handleReset }))))));
};
//# sourceMappingURL=FilterModuleControl.js.map