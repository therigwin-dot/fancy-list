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
        React.createElement("label", { style: { fontWeight: 600 } }, label),
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8 } },
            React.createElement(TextField, { value: currentColor, onChange: handleHexChange, disabled: disabled, styles: { root: { width: 100 } }, placeholder: "#RRGGBB", title: "Type a hex color code (e.g., #ff0000 for red)" }),
            React.createElement("div", { style: { width: 24, height: 24, borderRadius: 4, border: '1px solid #ccc', background: currentColor }, "aria-label": "Current color preview", title: "Current color preview" }),
            React.createElement(IconButton, { iconProps: { iconName: 'Color' }, title: "Click to open color picker", ariaLabel: "Open color picker", onClick: function () { return setPickerVisible(function (v) { return !v; }); }, disabled: disabled }),
            React.createElement(IconButton, { iconProps: { iconName: 'Help' }, title: "You can type a hex code, use the color picker, or use any 3rd party color picker tool (e.g., MS Powertoys Color Picker).", ariaLabel: "Help with color picker", onClick: function () {
                    window.open('https://www.bing.com/search?q=PowerToys+Color+Picker', '_blank');
                }, styles: {
                    root: { minWidth: 'auto', width: 20, height: 20, padding: 0, fontSize: 12 },
                    icon: { fontSize: 12 }
                } })),
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