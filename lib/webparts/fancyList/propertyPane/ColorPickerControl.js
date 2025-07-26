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
        // Convert to RGB
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);
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
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 1 } },
            React.createElement(IconButton, { iconProps: { iconName: 'Color' }, title: "Click to open color picker", ariaLabel: "Open color picker", onClick: function () { return setPickerVisible(function (v) { return !v; }); }, disabled: disabled }),
            React.createElement(TextField, { value: currentColor, onChange: handleHexChange, disabled: disabled, styles: {
                    root: {
                        width: 95,
                        backgroundColor: currentColor,
                        borderRadius: 4,
                        border: '1px solid #ccc'
                    },
                    field: {
                        color: getContrastColor(currentColor),
                        fontWeight: '600',
                        fontSize: '12px'
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