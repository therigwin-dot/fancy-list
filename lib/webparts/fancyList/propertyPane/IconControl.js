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
import { Toggle } from '@fluentui/react/lib/Toggle';
import { ComboBox } from '@fluentui/react/lib/ComboBox';
import { IconButton } from '@fluentui/react/lib/Button';
import { Modal } from '@fluentui/react/lib/Modal';
import { DefaultButton } from '@fluentui/react/lib/Button';
export var IconControl = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Icon Configuration' : _b, settings = _a.settings, onChange = _a.onChange;
    var _c = React.useState(false), showEmojiPicker = _c[0], setShowEmojiPicker = _c[1];
    var _d = React.useState(null), emojiPickerTarget = _d[0], setEmojiPickerTarget = _d[1];
    var _e = React.useState('arrows'), activeTab = _e[0], setActiveTab = _e[1];
    var _f = React.useState(''), searchTerm = _f[0], setSearchTerm = _f[1];
    var handlePropertyChange = function (property, value) {
        var _a;
        var newSettings = __assign(__assign({}, settings), (_a = {}, _a[property] = value, _a));
        onChange(newSettings);
    };
    // Icon pairing mapping for auto-pairing behavior
    var iconPairs = {
        '▶️': '🔽', // Standard emoji
        '▶': '▼', // Standard text
        '+': '-', // Plus/Minus text
        '➕': '➖', // Plus/Minus emoji
        '📁': '📂', // Folder closed/open
        '📂': '📁', // Folder open/closed
        '😐': '😊', // Straight/smiling face
        '🔽': '▶️', // Reverse mapping
        '▼': '▶', // Reverse mapping
        '-': '+', // Reverse mapping
        '➖': '➕', // Reverse mapping
        '😊': '😐' // Reverse mapping
    };
    // Predefined icon options for collapsed state
    var collapsedIconOptions = [
        { key: '▶️', text: '▶️ Standard' },
        { key: '▶', text: '▶ Standard (Text)' },
        { key: '+', text: '+ Plus' },
        { key: '➕', text: '➕ Plus (Emoji)' },
        { key: '📁', text: '📁 Folder' },
        { key: '📂', text: '📂 Folder (Open)' },
        { key: '😐', text: '😐 Straight Face' }
    ];
    // Predefined icon options for expanded state
    var expandedIconOptions = [
        { key: '🔽', text: '🔽 Standard' },
        { key: '▼', text: '▼ Standard (Text)' },
        { key: '-', text: '- Minus' },
        { key: '➖', text: '➖ Minus (Emoji)' },
        { key: '📂', text: '📂 Folder (Open)' },
        { key: '📁', text: '📁 Folder (Closed)' },
        { key: '😊', text: '😊 Smiling Face' }
    ];
    // Auto-pairing function
    var handleCollapsedIconChange = function (newCollapsedIcon) {
        var pairedExpandedIcon = iconPairs[newCollapsedIcon] || settings.expandedIcon;
        var newSettings = __assign(__assign({}, settings), { collapsedIcon: newCollapsedIcon, expandedIcon: pairedExpandedIcon });
        onChange(newSettings);
    };
    // Emoji picker functions
    var openEmojiPicker = function (target) {
        setEmojiPickerTarget(target);
        setShowEmojiPicker(true);
    };
    // Emoji categories
    var emojiCategories = {
        arrows: {
            name: 'Arrows',
            emojis: ['▶️', '🔽', '▶', '▼', '➡️', '⬅️', '⬆️', '⬇️', '↗️', '↘️', '↙️', '↖️', '↔️', '↕️', '⏩', '⏪', '⏫', '⏬']
        },
        symbols: {
            name: 'Symbols',
            emojis: ['+', '-', '➕', '➖', '✖️', '➗', '✔️', '❌', '⚠️', 'ℹ️', '❓', '❗', '💯', '💢', '💤', '💥', '💦', '💨']
        },
        objects: {
            name: 'Objects',
            emojis: ['📁', '📂', '📄', '📋', '📝', '📌', '📍', '🔗', '🔒', '🔓', '🔑', '🔐', '💡', '🔋', '🔌', '📱', '💻', '🖥️']
        },
        faces: {
            name: 'Faces',
            emojis: ['😐', '😊', '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😉', '😌', '😍', '🥰', '😘', '😋', '😎', '🤩']
        },
        nature: {
            name: 'Nature',
            emojis: ['🌱', '🌿', '🍀', '🌺', '🌸', '🌼', '🌻', '🌹', '🌷', '🌙', '⭐', '🌟', '✨', '💫', '⚡', '🔥', '💧', '🌊']
        }
    };
    var selectEmoji = function (emoji) {
        if (emojiPickerTarget === 'collapsed') {
            handleCollapsedIconChange(emoji);
        }
        else if (emojiPickerTarget === 'expanded') {
            handlePropertyChange('expandedIcon', emoji);
        }
        closeEmojiPicker();
    };
    var closeEmojiPicker = function () {
        setShowEmojiPicker(false);
        setEmojiPickerTarget(null);
        setActiveTab('arrows');
        setSearchTerm('');
    };
    // Filter emojis based on search term
    var getFilteredEmojis = function () {
        var _a;
        var categoryEmojis = ((_a = emojiCategories[activeTab]) === null || _a === void 0 ? void 0 : _a.emojis) || [];
        if (!searchTerm)
            return categoryEmojis;
        return categoryEmojis.filter(function (emoji) {
            return emoji.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    return (React.createElement("div", { style: { marginBottom: 16 } },
        React.createElement("div", { style: {
                fontSize: '14px',
                fontWeight: '600',
                color: '#323130',
                marginBottom: '12px'
            } }, label),
        React.createElement("div", { style: {
                fontSize: '12px',
                color: '#666',
                lineHeight: '1.4',
                marginBottom: '16px'
            } }, "Configure expand/collapse icons for this section. Choose from predefined options or enter custom text."),
        React.createElement("div", { style: { marginBottom: '12px' } },
            React.createElement(Toggle, { label: "Enable Icons", inlineLabel: true, checked: settings.enabled, onText: "On", offText: "Off", onChange: function (_, checked) { return handlePropertyChange('enabled', checked); } })),
        settings.enabled && (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { marginBottom: '12px' } },
                React.createElement(Toggle, { label: "Position", inlineLabel: true, checked: settings.iconPosition === 'right', onText: "Right", offText: "Left", onChange: function (_, checked) { return handlePropertyChange('iconPosition', checked ? 'right' : 'left'); } })),
            React.createElement("div", { style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                } },
                React.createElement("div", { style: { flex: 1, display: 'flex', alignItems: 'center', gap: '8px' } },
                    React.createElement("div", { style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#323130',
                            minWidth: '40px',
                            lineHeight: '1'
                        } }, "Coll"),
                    React.createElement("div", { style: { flex: 1 } },
                        React.createElement(ComboBox, { options: collapsedIconOptions, text: settings.collapsedIcon, allowFreeform: true, autoComplete: "on", onChange: function (_, option, __, text) {
                                if (option) {
                                    handleCollapsedIconChange(option.key);
                                }
                                else if (text !== undefined) {
                                    handleCollapsedIconChange(text);
                                }
                            } })),
                    React.createElement(IconButton, { iconProps: { iconName: 'Emoji2' }, title: "Open emoji picker", onClick: function () { return openEmojiPicker('collapsed'); } })),
                React.createElement("div", { style: { flex: 1, display: 'flex', alignItems: 'center', gap: '8px' } },
                    React.createElement("div", { style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#323130',
                            minWidth: '40px',
                            lineHeight: '1'
                        } }, "Exp"),
                    React.createElement("div", { style: { flex: 1 } },
                        React.createElement(ComboBox, { options: expandedIconOptions, text: settings.expandedIcon, allowFreeform: true, autoComplete: "on", onChange: function (_, option, __, text) {
                                if (option) {
                                    handlePropertyChange('expandedIcon', option.key);
                                }
                                else if (text !== undefined) {
                                    handlePropertyChange('expandedIcon', text);
                                }
                            } })),
                    React.createElement(IconButton, { iconProps: { iconName: 'Emoji2' }, title: "Open emoji picker", onClick: function () { return openEmojiPicker('expanded'); } }))))),
        React.createElement(Modal, { isOpen: showEmojiPicker, onDismiss: closeEmojiPicker, isBlocking: false, containerClassName: "emoji-picker-modal" },
            React.createElement("div", { style: {
                    padding: '24px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    maxWidth: '500px',
                    maxHeight: '600px',
                    overflow: 'auto'
                } },
                React.createElement("div", { style: {
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '16px',
                        color: '#323130'
                    } },
                    "Select Emoji for ",
                    emojiPickerTarget === 'collapsed' ? 'Collapsed' : 'Expanded',
                    " Icon"),
                React.createElement("div", { style: { marginBottom: '16px' } },
                    React.createElement("input", { type: "text", placeholder: "Search emojis...", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, style: {
                            width: '100%',
                            padding: '8px 12px',
                            border: '1px solid #e1dfdd',
                            borderRadius: '4px',
                            fontSize: '14px',
                            outline: 'none'
                        }, onFocus: function (e) { return e.target.style.borderColor = '#0078d4'; }, onBlur: function (e) { return e.target.style.borderColor = '#e1dfdd'; } })),
                React.createElement("div", { style: {
                        display: 'flex',
                        marginBottom: '16px',
                        borderBottom: '1px solid #e1dfdd'
                    } }, Object.keys(emojiCategories).map(function (key) {
                    var category = emojiCategories[key];
                    return (React.createElement("button", { key: key, onClick: function () { return setActiveTab(key); }, style: {
                            padding: '8px 16px',
                            border: 'none',
                            backgroundColor: activeTab === key ? '#0078d4' : 'transparent',
                            color: activeTab === key ? 'white' : '#323130',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: activeTab === key ? '600' : '400',
                            borderBottom: activeTab === key ? '2px solid #0078d4' : '2px solid transparent'
                        } }, category.name));
                })),
                React.createElement("div", { style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(8, 1fr)',
                        gap: '8px',
                        marginBottom: '16px',
                        minHeight: '200px'
                    } }, getFilteredEmojis().map(function (emoji, index) { return (React.createElement("button", { key: index, onClick: function () { return selectEmoji(emoji); }, style: {
                        fontSize: '20px',
                        padding: '8px',
                        border: '1px solid #e1dfdd',
                        borderRadius: '4px',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '36px'
                    }, onMouseEnter: function (e) {
                        e.currentTarget.style.backgroundColor = '#f3f2f1';
                        e.currentTarget.style.borderColor = '#c8c6c4';
                    }, onMouseLeave: function (e) {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.borderColor = '#e1dfdd';
                    } }, emoji)); })),
                getFilteredEmojis().length === 0 && searchTerm && (React.createElement("div", { style: {
                        textAlign: 'center',
                        color: '#666',
                        fontSize: '14px',
                        padding: '20px'
                    } },
                    "No emojis found matching \"",
                    searchTerm,
                    "\"")),
                React.createElement("div", { style: {
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '8px'
                    } },
                    React.createElement(DefaultButton, { text: "Cancel", onClick: closeEmojiPicker }))))));
};
//# sourceMappingURL=IconControl.js.map