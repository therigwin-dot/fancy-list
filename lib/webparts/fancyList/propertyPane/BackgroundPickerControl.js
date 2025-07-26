import * as React from 'react';
import { TextField, Dropdown, Slider } from '@fluentui/react';
import { ColorPickerControl } from './ColorPickerControl';
export var BackgroundPickerControl = function (_a) {
    var _b, _c, _d, _e;
    var defaultValues = _a.defaultValues, fields = _a.fields, label = _a.label, onChange = _a.onChange;
    var _f = React.useState(defaultValues.type), type = _f[0], setType = _f[1];
    var _g = React.useState(defaultValues.color || '#ffffff'), color = _g[0], setColor = _g[1];
    var _h = React.useState((_b = defaultValues.alpha) !== null && _b !== void 0 ? _b : 0), alpha = _h[0], setAlpha = _h[1];
    var _j = React.useState(defaultValues.image || ''), image = _j[0], setImage = _j[1];
    var _k = React.useState((_c = defaultValues.imageAlpha) !== null && _c !== void 0 ? _c : 0), imageAlpha = _k[0], setImageAlpha = _k[1];
    var _l = React.useState(defaultValues.gradientDirection || 'top-down'), gradientDirection = _l[0], setGradientDirection = _l[1];
    var _m = React.useState(defaultValues.gradientColor1 || '#ffffff'), gradientColor1 = _m[0], setGradientColor1 = _m[1];
    var _o = React.useState((_d = defaultValues.gradientAlpha1) !== null && _d !== void 0 ? _d : 0), gradientAlpha1 = _o[0], setGradientAlpha1 = _o[1];
    var _p = React.useState(defaultValues.gradientColor2 || '#0f46d1'), gradientColor2 = _p[0], setGradientColor2 = _p[1];
    var _q = React.useState((_e = defaultValues.gradientAlpha2) !== null && _e !== void 0 ? _e : 0), gradientAlpha2 = _q[0], setGradientAlpha2 = _q[1];
    React.useEffect(function () {
        var _a;
        onChange((_a = {},
            _a[fields.type] = type,
            _a[fields.color] = color,
            _a[fields.alpha] = alpha,
            _a[fields.image] = image,
            _a[fields.imageAlpha] = imageAlpha,
            _a[fields.gradientDirection] = gradientDirection,
            _a[fields.gradientColor1] = gradientColor1,
            _a[fields.gradientAlpha1] = gradientAlpha1,
            _a[fields.gradientColor2] = gradientColor2,
            _a[fields.gradientAlpha2] = gradientAlpha2,
            _a));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, color, alpha, image, imageAlpha, gradientDirection, gradientColor1, gradientAlpha1, gradientColor2, gradientAlpha2]);
    var typeOptions = [
        { key: 'solid', text: 'Solid Color' },
        { key: 'gradient', text: 'Gradient' },
        { key: 'image', text: 'Image URL' }
    ];
    var gradientDirectionOptions = [
        { key: 'top-down', text: 'Top to Bottom' },
        { key: 'left-right', text: 'Left to Right' },
        { key: 'tl-br', text: 'Top Left to Bottom Right' },
        { key: 'tr-bl', text: 'Top Right to Bottom Left' },
        { key: 'radial', text: 'Radial' }
    ];
    return (React.createElement("div", { style: { marginBottom: 16 } },
        React.createElement("label", { style: { fontWeight: 600 } }, label),
        React.createElement(Dropdown, { label: "Type", options: typeOptions, selectedKey: type, onChange: function (_, option) { return setType(option.key); }, styles: { root: { maxWidth: 200, marginBottom: 8 } } }),
        type === 'solid' && (React.createElement(React.Fragment, null,
            React.createElement(ColorPickerControl, { color: color, field: fields.color, label: "Color", onChange: function (_, newColor) { return setColor(newColor); } }),
            React.createElement(Slider, { label: "Transparency (%)", min: 0, max: 100, step: 1, value: alpha, onChange: setAlpha, styles: { root: { maxWidth: 200 } } }))),
        type === 'gradient' && (React.createElement(React.Fragment, null,
            React.createElement(Dropdown, { label: "Gradient Direction", options: gradientDirectionOptions, selectedKey: gradientDirection, onChange: function (_, option) { return setGradientDirection(option.key); }, styles: { root: { maxWidth: 200, marginBottom: 8 } } }),
            React.createElement(ColorPickerControl, { color: gradientColor1, field: fields.gradientColor1, label: "Color 1", onChange: function (_, newColor) { return setGradientColor1(newColor); } }),
            React.createElement(ColorPickerControl, { color: gradientColor2, field: fields.gradientColor2, label: "Color 2", onChange: function (_, newColor) { return setGradientColor2(newColor); } }),
            React.createElement(Slider, { label: "Transparency (%)", min: 0, max: 100, step: 1, value: gradientAlpha1, onChange: function (value) {
                    setGradientAlpha1(value);
                    setGradientAlpha2(value);
                }, styles: { root: { maxWidth: 200 } } }))),
        type === 'image' && (React.createElement(React.Fragment, null,
            React.createElement(TextField, { label: "Image URL", value: image, onChange: function (_, v) { return setImage(v || ''); }, styles: { root: { maxWidth: 400 } } }),
            React.createElement(Slider, { label: "Image Transparency (%)", min: 0, max: 100, step: 1, value: imageAlpha, onChange: setImageAlpha, styles: { root: { maxWidth: 200 } } })))));
};
//# sourceMappingURL=BackgroundPickerControl.js.map