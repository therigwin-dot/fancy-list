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
import * as ReactDOM from 'react-dom';
import { PropertyPaneFieldType } from '@microsoft/sp-property-pane';
import { ColorPicker } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import { IconButton } from '@fluentui/react/lib/Button';
var PropertyPaneHexColorPickerComponent = function (props) {
    var _a = React.useState(props.value || '#ffffff'), color = _a[0], setColor = _a[1];
    var _b = React.useState(false), pickerVisible = _b[0], setPickerVisible = _b[1];
    React.useEffect(function () {
        setColor(props.value || '#ffffff');
    }, [props.value]);
    var handleHexChange = function (e, newValue) {
        if (!newValue)
            return;
        setColor(newValue);
        props.onPropertyChange(props.propertyPath, props.value, newValue);
    };
    var handleColorChange = function (ev, newColor) {
        setColor(newColor.str);
        props.onPropertyChange(props.propertyPath, props.value, newColor.str);
    };
    return (React.createElement("div", { style: { marginBottom: 12 } },
        React.createElement("label", { style: { fontWeight: 600 } }, props.label),
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8 } },
            React.createElement(TextField, { value: color, onChange: handleHexChange, disabled: props.disabled, styles: { root: { width: 100 } }, placeholder: "#RRGGBB", title: "Type a hex color code (e.g., #ff0000 for red)" }),
            React.createElement("div", { style: { width: 24, height: 24, borderRadius: 4, border: '1px solid #ccc', background: color }, "aria-label": "Current color preview", title: "Current color preview" }),
            React.createElement(IconButton, { iconProps: { iconName: 'Color' }, title: "Click to open color picker", ariaLabel: "Open color picker", onClick: function () { return setPickerVisible(function (v) { return !v; }); }, disabled: props.disabled }),
            React.createElement(IconButton, { iconProps: { iconName: 'Help' }, title: "You can type a hex code, use the color picker, or use any 3rd party color picker tool (e.g., MS Powertoys Color Picker).", ariaLabel: "Help with color picker", onClick: function () {
                    window.open('https://www.bing.com/search?q=PowerToys+Color+Picker', '_blank');
                }, styles: {
                    root: {
                        minWidth: 'auto',
                        width: 20,
                        height: 20,
                        padding: 0,
                        fontSize: 12
                    },
                    icon: { fontSize: 12 }
                } })),
        pickerVisible && (React.createElement("div", { style: { marginTop: 8, zIndex: 1000, position: 'relative' } },
            React.createElement(ColorPicker, { color: color, onChange: handleColorChange, alphaType: "none", showPreview: true, strings: {
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
export function PropertyPaneHexColorPicker(targetProperty, properties) {
    return {
        type: PropertyPaneFieldType.Custom,
        targetProperty: targetProperty,
        properties: {
            key: properties.key,
            label: properties.label,
            value: properties.value,
            onPropertyChange: properties.onPropertyChange,
            disabled: properties.disabled,
            propertyPath: properties.propertyPath,
            onRender: function (elem, ctx, changeCallback) {
                var onChange = function (propertyPath, oldValue, newValue) {
                    properties.onPropertyChange(propertyPath, oldValue, newValue);
                    if (changeCallback)
                        changeCallback();
                };
                ReactDOM.render(React.createElement(PropertyPaneHexColorPickerComponent, __assign({}, properties, { onPropertyChange: onChange })), elem);
            },
            onDispose: function (elem) {
                ReactDOM.unmountComponentAtNode(elem);
            }
        }
    };
}
//# sourceMappingURL=PropertyPaneHexColorPicker.js.map