import * as React from 'react';
var shapeOptions = [
    { key: 'square', text: 'Square' },
    { key: 'rounded', text: 'Rounded' },
    { key: 'pill', text: 'Pill' }
];
export var ShapePickerControl = function (_a) {
    var value = _a.value, label = _a.label, onChange = _a.onChange, disabled = _a.disabled;
    return (React.createElement("div", { style: { marginBottom: 12 } },
        label && React.createElement("label", { style: { display: 'block', fontWeight: 600, marginBottom: 4 } }, label),
        React.createElement("div", { style: { display: 'flex', gap: 8 } }, shapeOptions.map(function (option) { return (React.createElement("button", { key: option.key, type: "button", disabled: disabled, style: {
                padding: '0.5em 1.2em',
                border: value === option.key ? '2px solid #0078d4' : '1px solid #ccc',
                borderRadius: option.key === 'square' ? 0 : option.key === 'rounded' ? 8 : 999,
                background: value === option.key ? '#e5f1fb' : '#fff',
                color: '#323130',
                fontWeight: 500,
                cursor: disabled ? 'not-allowed' : 'pointer',
                outline: value === option.key ? '2px solid #0078d4' : 'none',
                minWidth: 60
            }, "aria-pressed": value === option.key, onClick: function () { return !disabled && onChange(option.key); } }, option.text)); }))));
};
//# sourceMappingURL=ShapePickerControl.js.map