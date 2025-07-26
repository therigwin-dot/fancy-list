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
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { IconControl } from './IconControl';
import DEFAULTS_CONFIG from '../DEFAULTS_CONFIG';
export var SectionModuleControl = function (_a) {
    var sectionType = _a.sectionType, sectionSettings = _a.sectionSettings, onChange = _a.onChange, label = _a.label;
    var handleReset = function () {
        // Get the default settings for this section type
        var defaultSettings;
        switch (sectionType) {
            case 'category':
                defaultSettings = DEFAULTS_CONFIG.categorySectionSettings;
                break;
            case 'subject':
                defaultSettings = DEFAULTS_CONFIG.subjectSectionSettings;
                break;
            case 'description':
                defaultSettings = DEFAULTS_CONFIG.descriptionSectionSettings;
                break;
            default:
                console.error("Unknown section type: ".concat(sectionType));
                return;
        }
        // Reset to default settings
        onChange(defaultSettings);
        console.log("Reset ".concat(sectionType, " settings to defaults"));
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
        React.createElement("div", { style: { marginBottom: 16 } },
            React.createElement(IconControl, { label: "Expand/Collapse Icons", settings: sectionSettings.iconSettings, onChange: function (iconSettings) {
                    var newSettings = __assign(__assign({}, sectionSettings), { iconSettings: iconSettings });
                    onChange(newSettings);
                } })),
        React.createElement("div", { style: {
                padding: '16px',
                backgroundColor: '#f3f2f1',
                borderRadius: '4px',
                border: '1px dashed #c8c6c4',
                textAlign: 'center',
                color: '#666',
                fontSize: '14px'
            } },
            React.createElement("div", { style: { marginBottom: '8px' } }, "\uD83D\uDD27 Additional controls coming soon..."),
            React.createElement("div", { style: { fontSize: '12px' } }, "Font, Color, Background, and Shape controls will be implemented here")),
        React.createElement("div", { style: { marginTop: 16 } },
            React.createElement(PrimaryButton, { text: sectionSettings.resetButtonText, onClick: handleReset, disabled: false }))));
};
//# sourceMappingURL=SectionModuleControl.js.map