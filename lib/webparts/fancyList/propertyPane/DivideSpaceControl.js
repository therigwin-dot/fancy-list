import * as React from 'react';
import { ComboBox } from '@fluentui/react/lib/ComboBox';
import { TextField } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';
export var DivideSpaceControl = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Divide Space' : _b, _c = _a.value, value = _c === void 0 ? 0 : _c, onChange = _a.onChange, onReset = _a.onReset, onTestValues = _a.onTestValues;
    var _d = React.useState(''), customValue = _d[0], setCustomValue = _d[1];
    var _e = React.useState(false), isCustom = _e[0], setIsCustom = _e[1];
    // Preset options
    var options = [
        { key: 'touching', text: 'Touching (0px)', data: 0 },
        { key: 'small', text: 'Small (4px)', data: 4 },
        { key: 'medium', text: 'Medium (8px)', data: 8 },
        { key: 'large', text: 'Large (16px)', data: 16 },
        { key: 'custom', text: 'Custom', data: -1 }
    ];
    // Validation function
    var validateDivideSpace = function (value) {
        if (!value)
            return null;
        var num = parseInt(value, 10);
        if (isNaN(num))
            return 'Please enter a valid number';
        if (num < 0)
            return 'Value must be 0 or greater';
        if (num > 50)
            return 'Value must be 50 or less';
        return null;
    };
    // Normalization function
    var normalizeDivideSpace = function (value) {
        var num = parseInt(value, 10);
        if (isNaN(num) || num < 0)
            return 0;
        if (num > 50)
            return 50;
        return num;
    };
    // Handle ComboBox change
    var handleComboBoxChange = function (option) {
        if (!option)
            return;
        if (option.key === 'custom') {
            setIsCustom(true);
            setCustomValue(value.toString());
        }
        else {
            setIsCustom(false);
            setCustomValue('');
            var newValue = option.data;
            if (onChange)
                onChange(newValue);
        }
    };
    // Handle custom value change
    var handleCustomValueChange = function (newValue) {
        setCustomValue(newValue);
        var normalizedValue = normalizeDivideSpace(newValue);
        if (onChange)
            onChange(normalizedValue);
    };
    // Get selected option key
    var getSelectedOptionKey = function () {
        if (value === 0)
            return 'touching';
        if (value === 4)
            return 'small';
        if (value === 8)
            return 'medium';
        if (value === 16)
            return 'large';
        return 'custom';
    };
    // Handle reset
    var handleReset = function () {
        setIsCustom(false);
        setCustomValue('');
        if (onReset)
            onReset();
    };
    // Handle test values
    var handleTestValues = function () {
        setIsCustom(false);
        setCustomValue('');
        if (onTestValues)
            onTestValues();
    };
    return (React.createElement("div", { style: { marginBottom: 16 } },
        React.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap'
            } },
            React.createElement("label", { style: {
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#323130',
                    minWidth: '60px'
                } }, "Divide"),
            React.createElement("div", { style: { flex: 1, minWidth: '120px' } },
                React.createElement(ComboBox, { selectedKey: getSelectedOptionKey(), options: options, onChange: function (_, option) { return handleComboBoxChange(option); }, placeholder: "Select spacing...", useComboBoxAsMenuWidth: true })),
            isCustom && (React.createElement("div", { style: { minWidth: '100px' } },
                React.createElement(TextField, { label: "", value: customValue, onChange: function (_, newValue) { return handleCustomValueChange(newValue || ''); }, placeholder: "0-50", errorMessage: validateDivideSpace(customValue) || undefined, type: "number", min: 0, max: 50 })))),
        React.createElement("div", { style: { display: 'flex', gap: '8px', marginTop: '8px' } },
            React.createElement(PrimaryButton, { text: "Reset", onClick: handleReset }),
            React.createElement(PrimaryButton, { text: "Test Values", onClick: handleTestValues }))));
};
//# sourceMappingURL=DivideSpaceControl.js.map