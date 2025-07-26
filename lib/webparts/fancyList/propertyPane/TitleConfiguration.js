import * as React from 'react';
import { BackgroundPickerControl } from './BackgroundPickerControl';
export var TitleConfiguration = function (_a) {
    var label = _a.label;
    return (React.createElement("div", { style: { marginBottom: 16 } },
        React.createElement("div", { style: {
                fontSize: '16px',
                fontWeight: '600',
                color: '#323130',
                marginBottom: '12px'
            } }, "Title Configuration"),
        React.createElement("div", { style: {
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.4',
                marginBottom: '16px'
            } }, "Customize the web parts title text, font, color, background, and shape settings. Use the reset button to put the default look and feel back in place. Use the Back and Next buttons to switch to a different configuration page."),
        React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement(BackgroundPickerControl, { label: "Title Background", selectedKey: "solid", onPropertyChange: function (propertyPath, newValue) {
                    console.log('Background property changed:', propertyPath, newValue);
                } }))));
};
//# sourceMappingURL=TitleConfiguration.js.map