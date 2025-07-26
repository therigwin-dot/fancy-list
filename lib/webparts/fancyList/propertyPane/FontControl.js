import * as React from 'react';
import { Dropdown, IconButton, TooltipHost } from '@fluentui/react';
var FONT_FAMILIES = [
    { key: 'Segoe UI', text: 'Segoe UI', data: { font: 'Segoe UI' } },
    { key: 'Arial', text: 'Arial', data: { font: 'Arial' } },
    { key: 'Calibri', text: 'Calibri', data: { font: 'Calibri' } },
    { key: 'Times New Roman', text: 'Times New Roman', data: { font: 'Times New Roman' } },
    { key: 'Verdana', text: 'Verdana', data: { font: 'Verdana' } },
    { key: 'Tahoma', text: 'Tahoma', data: { font: 'Tahoma' } },
    { key: 'Courier New', text: 'Courier New', data: { font: 'Courier New' } },
    { key: 'Georgia', text: 'Georgia', data: { font: 'Georgia' } },
    { key: 'inherit', text: 'Inherit (default)', data: { font: 'inherit' } }
];
var FONT_SIZES = [
    { key: '12px', text: '12px (Small)' },
    { key: '14px', text: '14px (Small Medium)' },
    { key: '16px', text: '16px (Medium)' },
    { key: '18px', text: '18px (Large)' },
    { key: '20px', text: '20px (Extra Large)' },
    { key: '24px', text: '24px (Title)' },
    { key: '28px', text: '28px (Heading)' },
    { key: '32px', text: '32px (Large Heading)' }
];
var iconButtonStyles = function (active) { return ({
    root: {
        background: active ? '#e5f1fb' : 'transparent',
        color: active ? '#0078d4' : '#323130',
        borderRadius: 4,
        border: active ? '1px solid #0078d4' : '1px solid transparent',
        marginRight: 1,
        fontWeight: '600',
        fontSize: 14,
        width: 24,
        height: 24,
    },
    rootHovered: {
        background: '#e5f1fb',
        color: '#0078d4',
        border: '1px solid #0078d4',
    }
}); };
export var FontControl = function (_a) {
    var fontFamily = _a.fontFamily, fontSize = _a.fontSize, formatting = _a.formatting, onChange = _a.onChange, label = _a.label;
    var handleFormattingChange = function (key, value) {
        onChange({ formatting: {
                bold: key === 'bold' ? value : !!formatting.bold,
                italic: key === 'italic' ? value : !!formatting.italic,
                underline: key === 'underline' ? value : !!formatting.underline,
                strikethrough: key === 'strikethrough' ? value : !!formatting.strikethrough
            } });
    };
    function renderFontOption(option) {
        var _a;
        if (!option)
            return React.createElement(React.Fragment, null);
        return (React.createElement("span", { style: { fontFamily: ((_a = option.data) === null || _a === void 0 ? void 0 : _a.font) || option.text } }, option.text));
    }
    function renderFontTitle(options) {
        if (!options || options.length === 0)
            return React.createElement(React.Fragment, null);
        return renderFontOption(options[0]);
    }
    return (React.createElement("div", { style: { marginBottom: 16 } },
        label && (React.createElement("div", { style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#323130',
                marginBottom: '8px'
            } }, label)),
        React.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                flexWrap: 'nowrap'
            } },
            React.createElement(Dropdown, { label: undefined, ariaLabel: "Font Family", options: FONT_FAMILIES, selectedKey: fontFamily || 'Segoe UI', onChange: function (_, option) { return onChange({ fontFamily: option.key }); }, onRenderOption: renderFontOption, onRenderTitle: renderFontTitle, styles: { root: { minWidth: 120, flex: '1 1 auto' } } }),
            React.createElement(TooltipHost, { content: "Bold" },
                React.createElement(IconButton, { iconProps: { iconName: 'Bold' }, title: "Bold", ariaLabel: "Bold", checked: !!formatting.bold, styles: iconButtonStyles(!!formatting.bold), onClick: function () { return handleFormattingChange('bold', !formatting.bold); } })),
            React.createElement(TooltipHost, { content: "Italic" },
                React.createElement(IconButton, { iconProps: { iconName: 'Italic' }, title: "Italic", ariaLabel: "Italic", checked: !!formatting.italic, styles: iconButtonStyles(!!formatting.italic), onClick: function () { return handleFormattingChange('italic', !formatting.italic); } })),
            React.createElement(TooltipHost, { content: "Underline" },
                React.createElement(IconButton, { iconProps: { iconName: 'Underline' }, title: "Underline", ariaLabel: "Underline", checked: !!formatting.underline, styles: iconButtonStyles(!!formatting.underline), onClick: function () { return handleFormattingChange('underline', !formatting.underline); } })),
            React.createElement(TooltipHost, { content: "Strikethrough" },
                React.createElement(IconButton, { iconProps: { iconName: 'Strikethrough' }, title: "Strikethrough", ariaLabel: "Strikethrough", checked: !!formatting.strikethrough, styles: iconButtonStyles(!!formatting.strikethrough), onClick: function () { return handleFormattingChange('strikethrough', !formatting.strikethrough); } })),
            React.createElement(Dropdown, { label: undefined, ariaLabel: "Font Size", options: FONT_SIZES, selectedKey: fontSize || '24px', onChange: function (_, option) { return onChange({ fontSize: option.key }); }, styles: { root: { width: 100, flex: '0 0 auto' } } }))));
};
//# sourceMappingURL=FontControl.js.map