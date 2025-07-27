var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    var _b, _c, _d;
    var label = _a.label, _e = _a.settings, settings = _e === void 0 ? {
        enableFilters: true,
        font: {
            family: 'Segoe UI',
            size: '12px',
            formatting: {
                bold: false,
                italic: false,
                underline: false,
                strikethrough: false
            },
            alignment: 'center'
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
        showAllCategories: true,
        defaultFilterSelection: 'All',
        backgroundType: 'solid',
        backgroundColor: '#ffffff',
        backgroundAlpha: 0,
        gradientDirection: 'left-right',
        gradientColor1: '#ffffff',
        gradientColor2: '#0f46d1',
        gradientAlpha: 0,
        imageUrl: '',
        imageAlpha: 0,
        backgroundShape: 'rounded'
    } : _e, onPropertyChange = _a.onPropertyChange;
    var _f = React.useState((_b = settings === null || settings === void 0 ? void 0 : settings.enableFilters) !== null && _b !== void 0 ? _b : true), enabled = _f[0], setEnabled = _f[1];
    var _g = React.useState((_c = settings === null || settings === void 0 ? void 0 : settings.showAllCategories) !== null && _c !== void 0 ? _c : true), showAllToggle = _g[0], setShowAllToggle = _g[1];
    var _h = React.useState((_d = settings === null || settings === void 0 ? void 0 : settings.defaultFilterSelection) !== null && _d !== void 0 ? _d : 'All'), defaultFilterDropdown = _h[0], setDefaultFilterDropdown = _h[1];
    // Keep local state in sync with settings
    React.useEffect(function () {
        var _a;
        console.log('🔄 PERSISTENCE DEBUG: settings.showAllCategories =', settings === null || settings === void 0 ? void 0 : settings.showAllCategories);
        console.log('🔄 PERSISTENCE DEBUG: Current showAllToggle =', showAllToggle);
        setShowAllToggle((_a = settings === null || settings === void 0 ? void 0 : settings.showAllCategories) !== null && _a !== void 0 ? _a : true);
    }, [settings === null || settings === void 0 ? void 0 : settings.showAllCategories]);
    var _j = React.useState('#ffffff'), previewColor1 = _j[0], setPreviewColor1 = _j[1];
    var _k = React.useState('#000000'), previewColor2 = _k[0], setPreviewColor2 = _k[1];
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
        if (fields.alignment)
            handlePropertyChange('font.alignment', fields.alignment);
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
            React.createElement(Toggle, { label: "Enabled", inlineLabel: true, checked: enabled, onText: "On", offText: "Off", onChange: function (_, checked) {
                    setEnabled(checked || false);
                    handlePropertyChange('enabled', checked || false);
                } })),
        enabled && (React.createElement(React.Fragment, null,
            React.createElement("div", { style: {
                    backgroundColor: '#f3f2f1',
                    padding: '12px',
                    borderRadius: '4px',
                    marginBottom: 16
                } },
                React.createElement("div", { style: {
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#323130',
                        marginBottom: '12px'
                    } }, "Default Filter Selection"),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement(Toggle, { label: "Show 'All' Filter Button", inlineLabel: true, checked: showAllToggle, onText: "On", offText: "Off", onChange: function (_, checked) {
                            console.log('🔄 STEP 3 DEBUG: Toggle clicked, new value:', checked);
                            setShowAllToggle(checked || false);
                            handlePropertyChange('showAllCategories', checked);
                            // Handle dropdown selection when "All" toggle changes
                            var testCategories = ['Category1', 'Category2', 'Category3'];
                            if (!checked && defaultFilterDropdown === 'All' && testCategories.length > 0) {
                                // "All" toggle turned OFF and current selection is "All" - change to first available filter
                                var firstFilter = testCategories[0];
                                console.log('🔄 TOGGLE DEBUG: Changing from "All" to first filter:', firstFilter);
                                setDefaultFilterDropdown(firstFilter);
                                handlePropertyChange('defaultFilterSelection', firstFilter);
                            }
                        } })),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement(Dropdown, { selectedKey: defaultFilterDropdown, options: (function () {
                            var testCategories = ['Category1', 'Category2', 'Category3'];
                            console.log('🔄 DROPDOWN DEBUG: Show all toggle:', showAllToggle);
                            console.log('🔄 DROPDOWN DEBUG: Test categories:', testCategories);
                            if (showAllToggle) {
                                var options = __spreadArray([
                                    { key: 'All', text: 'All' }
                                ], testCategories.map(function (cat) { return ({ key: cat, text: cat }); }), true);
                                console.log('🔄 DROPDOWN DEBUG: Options with All:', options);
                                return options;
                            }
                            else {
                                var options = testCategories.map(function (cat) { return ({ key: cat, text: cat }); });
                                console.log('🔄 DROPDOWN DEBUG: Options without All:', options);
                                return options;
                            }
                        })(), onChange: function (_, option) {
                            console.log('🔄 DROPDOWN DEBUG: Selected:', option === null || option === void 0 ? void 0 : option.key);
                            setDefaultFilterDropdown((option === null || option === void 0 ? void 0 : option.key) || 'All');
                            handlePropertyChange('defaultFilterSelection', (option === null || option === void 0 ? void 0 : option.key) || 'All');
                        } }))),
            React.createElement("div", { style: {
                    backgroundColor: '#f3f2f1',
                    padding: '12px',
                    borderRadius: '4px',
                    marginBottom: 16
                } },
                React.createElement("div", { style: {
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#323130',
                        marginBottom: '12px'
                    } }, "Button"),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement(FontControl, { fontFamily: settings.font.family, fontSize: settings.font.size, formatting: settings.font.formatting, alignment: settings.font.alignment, onChange: handleFontChange })),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: 8
                        } },
                        React.createElement(ColorPickerControl, { color: settings.activeColors.font, field: "activeFont", label: "", onChange: function (field, newColor) { return handlePropertyChange('activeColors.font', newColor); } }),
                        React.createElement(ColorPickerControl, { color: settings.inactiveColors.font, field: "inactiveFont", label: "", onChange: function (field, newColor) { return handlePropertyChange('inactiveColors.font', newColor); } }))),
                React.createElement("div", { style: { marginBottom: 16 } },
                    React.createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: 8
                        } },
                        React.createElement(ColorPickerControl, { color: settings.activeColors.background, field: "activeBackground", label: "", onChange: function (field, newColor) { return handlePropertyChange('activeColors.background', newColor); } }),
                        React.createElement(ColorPickerControl, { color: settings.inactiveColors.background, field: "inactiveBackground", label: "", onChange: function (field, newColor) { return handlePropertyChange('inactiveColors.background', newColor); } }))),
                React.createElement("div", { style: { marginBottom: 0 } },
                    React.createElement(ShapePickerControl, { value: settings.shape, label: "", onChange: function (newShape) { return handlePropertyChange('shape', newShape); } }))),
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
                            console.log('🎨 TRANSPARENCY SLIDER:', {
                                backgroundType: settings.backgroundType,
                                value: value,
                                currentAlpha: settings.backgroundType === 'solid' ? settings.backgroundAlpha :
                                    settings.backgroundType === 'gradient' ? settings.gradientAlpha :
                                        settings.imageAlpha
                            });
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
                React.createElement(ShapePickerControl, { value: settings.backgroundShape, label: "", onChange: function (newShape) { return handlePropertyChange('backgroundShape', newShape); } }),
                React.createElement("span", { style: { fontSize: '12px', color: '#666', marginTop: '4px', display: 'block' } }, "Choose the shape style for the entire filter section container")),
            React.createElement("div", { style: { marginBottom: 16 } },
                React.createElement(Toggle, { label: "Divider", inlineLabel: true, checked: settings.showDivider, onText: "On", offText: "Off", onChange: function (_, checked) { return handlePropertyChange('showDivider', checked); } })),
            React.createElement("div", { style: { marginTop: 16 } },
                React.createElement(PrimaryButton, { text: "Reset Filter Formatting", onClick: function () {
                        // Reset all filter settings to defaults
                        console.log('🔄 RESET BUTTON: Resetting all filter settings to defaults');
                        // Reset font settings
                        handlePropertyChange('font.family', DEFAULTS_CONFIG.filterSettings.font.family);
                        handlePropertyChange('font.size', DEFAULTS_CONFIG.filterSettings.font.size);
                        handlePropertyChange('font.formatting', DEFAULTS_CONFIG.filterSettings.font.formatting);
                        handlePropertyChange('font.alignment', DEFAULTS_CONFIG.filterSettings.font.alignment);
                        // Reset color settings
                        handlePropertyChange('activeColors.background', DEFAULTS_CONFIG.filterSettings.activeColors.background);
                        handlePropertyChange('activeColors.font', DEFAULTS_CONFIG.filterSettings.activeColors.font);
                        handlePropertyChange('inactiveColors.background', DEFAULTS_CONFIG.filterSettings.inactiveColors.background);
                        handlePropertyChange('inactiveColors.font', DEFAULTS_CONFIG.filterSettings.inactiveColors.font);
                        // Reset shape settings
                        handlePropertyChange('shape', DEFAULTS_CONFIG.filterSettings.shape);
                        handlePropertyChange('backgroundShape', DEFAULTS_CONFIG.filterSettings.backgroundShape);
                        // Reset showAllCategories
                        handlePropertyChange('showAllCategories', DEFAULTS_CONFIG.filterSettings.showAllCategories);
                        setShowAllToggle(DEFAULTS_CONFIG.filterSettings.showAllCategories);
                        // Reset defaultFilterSelection
                        handlePropertyChange('defaultFilterSelection', DEFAULTS_CONFIG.filterSettings.defaultFilterSelection);
                        setDefaultFilterDropdown(DEFAULTS_CONFIG.filterSettings.defaultFilterSelection);
                        // Reset background settings
                        handlePropertyChange('backgroundType', DEFAULTS_CONFIG.filterSettings.background.type);
                        handlePropertyChange('backgroundColor', DEFAULTS_CONFIG.filterSettings.background.color);
                        handlePropertyChange('backgroundAlpha', DEFAULTS_CONFIG.filterSettings.background.alpha);
                        handlePropertyChange('gradientDirection', DEFAULTS_CONFIG.filterSettings.background.gradientDirection);
                        handlePropertyChange('gradientColor1', DEFAULTS_CONFIG.filterSettings.background.gradientColor1);
                        handlePropertyChange('gradientColor2', DEFAULTS_CONFIG.filterSettings.background.gradientColor2);
                        handlePropertyChange('gradientAlpha', DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1);
                        handlePropertyChange('imageUrl', DEFAULTS_CONFIG.filterSettings.background.image);
                        handlePropertyChange('imageAlpha', DEFAULTS_CONFIG.filterSettings.background.imageAlpha);
                        // Reset divider
                        handlePropertyChange('showDivider', DEFAULTS_CONFIG.filterSettings.showDivider);
                        console.log('✅ RESET BUTTON: All properties reset to defaults');
                    } }))))));
};
//# sourceMappingURL=FilterModuleControl.js.map