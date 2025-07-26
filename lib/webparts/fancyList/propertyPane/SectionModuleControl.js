import * as React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
export var SectionModuleControl = function (_a) {
    var sectionType = _a.sectionType, sectionSettings = _a.sectionSettings, onChange = _a.onChange, label = _a.label;
    var handleReset = function () {
        // TODO: Implement reset functionality
        console.log("Reset ".concat(sectionType, " settings"));
    };
    var getSectionTitle = function () {
        switch (sectionType) {
            case 'category': return 'Category Section Configuration';
            case 'subject': return 'Subject Section Configuration';
            case 'description': return 'Description Section Configuration';
            default: return 'Section Configuration';
        }
    };
    var getSectionDescription = function () {
        return sectionSettings.description;
    };
    return (React.createElement("div", { style: { marginBottom: 16 } },
        React.createElement("div", { style: {
                fontSize: '16px',
                fontWeight: '600',
                color: '#323130',
                marginBottom: '12px'
            } }, getSectionTitle()),
        React.createElement("div", { style: {
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.4',
                marginBottom: '16px'
            } }, getSectionDescription()),
        React.createElement("div", { style: {
                padding: '16px',
                backgroundColor: '#f3f2f1',
                borderRadius: '4px',
                border: '1px dashed #c8c6c4',
                textAlign: 'center',
                color: '#666',
                fontSize: '14px'
            } },
            React.createElement("div", { style: { marginBottom: '8px' } }, "\uD83D\uDD27 Controls coming soon..."),
            React.createElement("div", { style: { fontSize: '12px' } }, "Font, Color, Background, Shape, and Icon controls will be implemented here")),
        React.createElement("div", { style: { marginTop: 16 } },
            React.createElement(PrimaryButton, { text: sectionSettings.resetButtonText, onClick: handleReset, disabled: true }))));
};
//# sourceMappingURL=SectionModuleControl.js.map