import * as React from 'react';
import { ColorPicker } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import { IconButton } from '@fluentui/react/lib/Button';
export var ColorPickerControl = function (_a) {
    var color = _a.color, field = _a.field, label = _a.label, onChange = _a.onChange, disabled = _a.disabled;
    var _b = React.useState(color || '#ffffff'), currentColor = _b[0], setCurrentColor = _b[1];
    var _c = React.useState(false), pickerVisible = _c[0], setPickerVisible = _c[1];
    React.useEffect(function () {
        setCurrentColor(color || '#ffffff');
    }, [color]);
    // Calculate contrasting text color based on background brightness
    var getContrastColor = function (hexColor) {
        // Remove # if present
        var hex = hexColor.replace('#', '');
        // Validate hex format (must be 6 characters and valid hex)
        if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
            // For invalid hex, use a safe default that's always visible
            return '#000000'; // Black text on any background
        }
        // Convert to RGB
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);
        // Validate RGB values (should be 0-255)
        if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
            return '#000000'; // Black text on any background
        }
        // Calculate luminance (perceived brightness)
        var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        // Return white for dark backgrounds, black for light backgrounds
        return luminance > 0.5 ? '#000000' : '#ffffff';
    };
    var handleHexChange = function (e, newValue) {
        if (!newValue)
            return;
        setCurrentColor(newValue);
        onChange(field, newValue);
    };
    var handleColorChange = function (ev, newColor) {
        setCurrentColor(newColor.str);
        onChange(field, newColor.str);
    };
    return (React.createElement("div", { style: { marginBottom: 12 } },
        label && (React.createElement("label", { style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#323130',
                marginBottom: '8px',
                display: 'block'
            } }, label)),
        React.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                backgroundColor: currentColor,
                borderRadius: 4,
                border: '1px solid #ccc',
                overflow: 'hidden',
                width: 120
            } },
            React.createElement(IconButton, { iconProps: { iconName: 'Color' }, title: "Click to open color picker", ariaLabel: "Open color picker", onClick: function () { return setPickerVisible(function (v) { return !v; }); }, disabled: disabled, styles: {
                    root: {
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: getContrastColor(currentColor),
                        minWidth: 'auto',
                        padding: '4px'
                    },
                    rootHovered: {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: getContrastColor(currentColor)
                    },
                    rootPressed: {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: getContrastColor(currentColor)
                    }
                } }),
            React.createElement(TextField, { value: currentColor, onChange: handleHexChange, disabled: disabled, styles: {
                    root: {
                        flex: 1,
                        border: 'none'
                    },
                    field: {
                        backgroundColor: 'transparent',
                        color: getContrastColor(currentColor),
                        fontWeight: '600',
                        fontSize: '12px',
                        border: 'none',
                        outline: 'none',
                        padding: '4px 8px'
                    },
                    fieldGroup: {
                        backgroundColor: 'transparent',
                        border: 'none'
                    }
                }, placeholder: "#RRGGBB", title: "Type a hex color code (e.g., #ff0000 for red)" })),
        pickerVisible && (React.createElement("div", { style: { marginTop: 8, zIndex: 1000, position: 'relative' } },
            React.createElement(ColorPicker, { color: currentColor, onChange: handleColorChange, alphaType: "none", showPreview: true, strings: {
                    hex: 'Hex',
                    red: 'Red',
                    green: 'Green',
                    blue: 'Blue',
                    alpha: 'Alpha',
                    transparency: 'Transparency',
                    hue: 'Hue',
                    svAriaValueFormat: 'Saturation {0} percent, value {1} percent',
                    svAriaDescription: 'Use left and right arrow keys to set saturation. Use up and down arrow keys to set value.'
                } })))));
};
//# sourceMappingURL=ColorPickerControl.js.map