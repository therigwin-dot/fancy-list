import * as React from 'react';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { ComboBox, IComboBoxOption } from '@fluentui/react/lib/ComboBox';
import { IconButton } from '@fluentui/react/lib/Button';
import { Modal } from '@fluentui/react/lib/Modal';
import { DefaultButton } from '@fluentui/react/lib/Button';

export interface IconSettings {
  enabled: boolean;
  iconPosition: 'left' | 'right';
  collapsedIcon: string;
  expandedIcon: string;
}

export interface IconControlProps {
  label?: string;
  settings: IconSettings;
  onChange: (settings: IconSettings) => void;
}

export const IconControl: React.FC<IconControlProps> = ({
  label = 'Icon Configuration',
  settings,
  onChange
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);
  const [emojiPickerTarget, setEmojiPickerTarget] = React.useState<'collapsed' | 'expanded' | null>(null);
  const [activeTab, setActiveTab] = React.useState('arrows');
  const [searchTerm, setSearchTerm] = React.useState('');

  const handlePropertyChange = (property: keyof IconSettings, value: any) => {
    const newSettings = { ...settings, [property]: value };
    onChange(newSettings);
  };

  const positionOptions: IDropdownOption[] = [
    { key: 'left', text: 'Left' },
    { key: 'right', text: 'Right' }
  ];

  // Icon pairing mapping for auto-pairing behavior
  const iconPairs: Record<string, string> = {
    '▶️': '🔽', // Standard emoji
    '▶': '▼',   // Standard text
    '+': '-',   // Plus/Minus text
    '➕': '➖', // Plus/Minus emoji
    '📁': '📂', // Folder closed/open
    '📂': '📁', // Folder open/closed
    '😐': '😊', // Straight/smiling face
    '🔽': '▶️', // Reverse mapping
    '▼': '▶',   // Reverse mapping
    '-': '+',   // Reverse mapping
    '➖': '➕', // Reverse mapping
    '😊': '😐'  // Reverse mapping
  };

  // Predefined icon options for collapsed state
  const collapsedIconOptions: IComboBoxOption[] = [
    { key: '▶️', text: '▶️ Standard' },
    { key: '▶', text: '▶ Standard (Text)' },
    { key: '+', text: '+ Plus' },
    { key: '➕', text: '➕ Plus (Emoji)' },
    { key: '📁', text: '📁 Folder' },
    { key: '📂', text: '📂 Folder (Open)' },
    { key: '😐', text: '😐 Straight Face' }
  ];

  // Predefined icon options for expanded state
  const expandedIconOptions: IComboBoxOption[] = [
    { key: '🔽', text: '🔽 Standard' },
    { key: '▼', text: '▼ Standard (Text)' },
    { key: '-', text: '- Minus' },
    { key: '➖', text: '➖ Minus (Emoji)' },
    { key: '📂', text: '📂 Folder (Open)' },
    { key: '📁', text: '📁 Folder (Closed)' },
    { key: '😊', text: '😊 Smiling Face' }
  ];

  // Auto-pairing function
  const handleCollapsedIconChange = (newCollapsedIcon: string) => {
    const pairedExpandedIcon = iconPairs[newCollapsedIcon] || settings.expandedIcon;
    const newSettings = {
      ...settings,
      collapsedIcon: newCollapsedIcon,
      expandedIcon: pairedExpandedIcon
    };
    onChange(newSettings);
  };

  // Emoji picker functions
  const openEmojiPicker = (target: 'collapsed' | 'expanded') => {
    setEmojiPickerTarget(target);
    setShowEmojiPicker(true);
  };



  // Emoji categories
  const emojiCategories = {
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

  const selectEmoji = (emoji: string) => {
    if (emojiPickerTarget === 'collapsed') {
      handleCollapsedIconChange(emoji);
    } else if (emojiPickerTarget === 'expanded') {
      handlePropertyChange('expandedIcon', emoji);
    }
    closeEmojiPicker();
  };

  const closeEmojiPicker = () => {
    setShowEmojiPicker(false);
    setEmojiPickerTarget(null);
    setActiveTab('arrows');
    setSearchTerm('');
  };

  // Filter emojis based on search term
  const getFilteredEmojis = () => {
    const categoryEmojis = emojiCategories[activeTab as keyof typeof emojiCategories]?.emojis || [];
    if (!searchTerm) return categoryEmojis;
    
    return categoryEmojis.filter(emoji => 
      emoji.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div style={{ marginBottom: 16 }}>
      {/* Bold Header */}
      <div style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#323130',
        marginBottom: '12px'
      }}>
        {label}
      </div>

      {/* Help Description Text */}
      <div style={{
        fontSize: '12px',
        color: '#666',
        lineHeight: '1.4',
        marginBottom: '16px'
      }}>
        Configure expand/collapse icons for this section. Choose from predefined options or enter custom text.
      </div>

      {/* 1. Enable Icons Toggle */}
      <div style={{ marginBottom: 16 }}>
        <Toggle
          label="Enable Icons"
          checked={settings.enabled}
          onText="On"
          offText="Off"
          onChange={(_, checked) => handlePropertyChange('enabled', checked)}
        />
      </div>

      {/* Conditional rendering based on enabled state */}
      {settings.enabled && (
        <>
          {/* 2. Icon Position */}
          <div style={{ marginBottom: 16 }}>
            <Dropdown
              label="Icon Position"
              options={positionOptions}
              selectedKey={settings.iconPosition}
              onChange={(_, option) => handlePropertyChange('iconPosition', option?.key)}
            />
          </div>

          {/* 3. Collapsed Icon */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
              <div style={{ flex: 1 }}>
                <ComboBox
                  label="Collapsed Icon"
                  options={collapsedIconOptions}
                  text={settings.collapsedIcon}
                  allowFreeform={true}
                  autoComplete="on"
                  onChange={(_, option, __, text) => {
                    if (option) {
                      handleCollapsedIconChange(option.key as string);
                    } else if (text !== undefined) {
                      handleCollapsedIconChange(text);
                    }
                  }}
                />
              </div>
              <IconButton
                iconProps={{ iconName: 'Emoji2' }}
                title="Open emoji picker"
                onClick={() => openEmojiPicker('collapsed')}
                style={{ marginBottom: '8px' }}
              />
            </div>
          </div>

          {/* 4. Expanded Icon */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
              <div style={{ flex: 1 }}>
                <ComboBox
                  label="Expanded Icon"
                  options={expandedIconOptions}
                  text={settings.expandedIcon}
                  allowFreeform={true}
                  autoComplete="on"
                  onChange={(_, option, __, text) => {
                    if (option) {
                      handlePropertyChange('expandedIcon', option.key);
                    } else if (text !== undefined) {
                      handlePropertyChange('expandedIcon', text);
                    }
                  }}
                />
              </div>
              <IconButton
                iconProps={{ iconName: 'Emoji2' }}
                title="Open emoji picker"
                onClick={() => openEmojiPicker('expanded')}
                style={{ marginBottom: '8px' }}
              />
            </div>
          </div>
        </>
      )}

      {/* Emoji Picker Modal */}
      <Modal
        isOpen={showEmojiPicker}
        onDismiss={closeEmojiPicker}
        isBlocking={false}
        containerClassName="emoji-picker-modal"
      >
        <div style={{
          padding: '24px',
          backgroundColor: 'white',
          borderRadius: '8px',
          maxWidth: '500px',
          maxHeight: '600px',
          overflow: 'auto'
        }}>
          <div style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#323130'
          }}>
            Select Emoji for {emojiPickerTarget === 'collapsed' ? 'Collapsed' : 'Expanded'} Icon
          </div>

          {/* Search Bar */}
          <div style={{ marginBottom: '16px' }}>
            <input
              type="text"
              placeholder="Search emojis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #e1dfdd',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#0078d4'}
              onBlur={(e) => e.target.style.borderColor = '#e1dfdd'}
            />
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            marginBottom: '16px',
            borderBottom: '1px solid #e1dfdd'
          }}>
            {Object.keys(emojiCategories).map((key) => {
              const category = emojiCategories[key as keyof typeof emojiCategories];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  style={{
                    padding: '8px 16px',
                    border: 'none',
                    backgroundColor: activeTab === key ? '#0078d4' : 'transparent',
                    color: activeTab === key ? 'white' : '#323130',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: activeTab === key ? '600' : '400',
                    borderBottom: activeTab === key ? '2px solid #0078d4' : '2px solid transparent'
                  }}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Emoji Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gap: '8px',
            marginBottom: '16px',
            minHeight: '200px'
          }}>
            {getFilteredEmojis().map((emoji, index) => (
              <button
                key={index}
                onClick={() => selectEmoji(emoji)}
                style={{
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
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f2f1';
                  e.currentTarget.style.borderColor = '#c8c6c4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = '#e1dfdd';
                }}
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* No Results Message */}
          {getFilteredEmojis().length === 0 && searchTerm && (
            <div style={{
              textAlign: 'center',
              color: '#666',
              fontSize: '14px',
              padding: '20px'
            }}>
              No emojis found matching "{searchTerm}"
            </div>
          )}

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '8px'
          }}>
            <DefaultButton
              text="Cancel"
              onClick={closeEmojiPicker}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}; 