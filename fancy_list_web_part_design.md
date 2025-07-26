# Fancy List Web Part - Design Document (Updated July 2025)

## Overview
Fancy List now supports only Individual Elements mode for styling. All other modes (JSON, CSS, Default, SharePoint Theme) have been removed for clarity and reliability.

## Key Design Features
- Property pane is organized in the visual order of the web part display.
- Title Section background supports transparent, solid, image, and gradient (with transparency controls).
- Image URL mode includes intelligent error handling with radial gradients and centered text.
- Divider lines can be toggled between title/Category Filters and Category Filters/lists.
- Category Filters (formerly Category Pills), category header, subject header, list area, and description all have their own styling controls.
- All changes live-update the preview; only a Reset button is present.

## User Experience
- Users configure all visual aspects in a single, intuitive mode.
- No more confusion between styling modes; all controls are always relevant.
- Immediate feedback for every change.
- Image URL mode provides clear visual feedback for empty/invalid URLs.

## Technical Approach
- All legacy styling mode code and parameters have been removed.
- Only Individual Elements mode and its controls remain in the property pane and codebase.
- All settings are mode-specific and update the preview live.
- Image transparency implemented with overlay system to maintain text visibility.

## Current Status
### ✅ Fully Functional:
- Page 1: List selection and configuration
- Page 2: Title Font controls, Title Section Background (all modes), Title Divider
- Image URL mode with error handling and transparency support

### 🔄 Next Development Focus:
- Category Filters (formerly Category Pills) configuration and functionality
- Other section backgrounds (Category Header, Subject Header, Description)
- Transparency control consistency across all sections

## Modular Object-Oriented UI Controls (vNext)

### Color Picker Component
- **Purpose:** Self-contained, reusable color selection control.
- **Parameters:**
  - `color`: The current color value.
  - `field`: The property/field being updated.
- **Usage:** Can be plugged into any property pane or UI area needing color selection.
- **Notes:** Maintains its own logic and state. Used by Background Picker and other controls.

### Background Picker Component
- **Purpose:** Self-contained, reusable background selection control.
- **Parameters:**
  - Default values for all options (type, color, transparency, image URL, gradient settings, etc.)
  - The actual fields/properties it controls
- **Usage:** Applies changes to the calling parameters. Can contain the Color Picker, but keeps it as a separate component.
- **Features:**
  - Handles solid, image, and gradient backgrounds
  - Proper transparency logic (0 = solid, 100 = fully transparent)
  - Only shows relevant controls for the selected background type

### Font Control Object
- **Purpose:** Self-contained font and text formatting control.
- **Parameters:**
  - Font family
  - Font size
  - Formatting: Bold, Underline, StrikeThrough, Italics
- **Usage:** Can be plugged into any area needing font controls.

### Section Controls
- **Purpose:** Comprehensive section styling for Category, Subject, and Description sections.
- **Parameters:**
  - Font controls (family, size, formatting, color)
  - Background controls (type, colors, transparency, images, gradients)
  - Shape selection (square, rounded, pill)
  - Icon controls (expand/collapse icons, position)
  - Toggle controls (show divider, auto expand)
  - Hover color control
- **Features:**
  - Auto Expand toggle (default: off) - enables automatic expansion of sections
  - Show Divider toggle - displays divider lines between sections
  - Hover color control - customizes hover effects
  - Icon configuration - expand/collapse icons and positioning

### Standard Look and Feel of Controls
- **Purpose:** Ensure consistent visual design and user experience across all property pane controls
- **Container Styling:** All controls wrapped in `div` with `marginBottom: 16` for consistent spacing
- **Toggle Controls:** Use flex containers with `display: 'flex', gap: '16px'` for single-line display
- **Label Styling:** Standard Fluent UI labels with consistent font weight and color
- **Control Spacing:** 16px bottom margin between all control groups
- **Color Consistency:** Use Fluent UI color palette (#323130 for text, #666 for secondary text)
- **Font Consistency:** Segoe UI font family with appropriate sizing (14px for labels, 12px for secondary text)
- **Layout Consistency:** All controls follow the same visual hierarchy and spacing patterns

### Toggle Control Styling Reference
- **Purpose:** Standardized toggle control styling across all components.
- **Standard Implementation:**
  ```jsx
  <div style={{ marginBottom: 16 }}>
    <Toggle
      label="Control Name"
      inlineLabel={true}
      checked={value}
      onText="On"
      offText="Off"
      onChange={(_, checked) => handleChange(checked)}
    />
  </div>
  ```
- **Features:**
  - **Inline Label**: All toggles use `inlineLabel={true}` for single-line display
  - **Consistent Spacing**: 16px bottom margin for all toggle containers
  - **Compact Labels**: Short, descriptive labels (e.g., "Title Divider" instead of "Show Title Divider")
  - **Standard On/Off Text**: All toggles use "On"/"Off" state text
  - **Simple Container**: Standard div with marginBottom, no flex containers needed
- **Usage:** All toggle controls across the application must use `inlineLabel={true}` and follow this pattern for consistency.
- **Label Guidelines:**
  - "Enabled" (for main enable/disable toggles)
  - "Title Divider" (for title section dividers)
  - "Filter Divider" (for filter section dividers)
  - "Auto Expand" (for auto-expansion features)
  - "Show Divider" (for general divider toggles)

### ColorPickerControl Styling Reference
- **Purpose:** Enhanced color picker with combined hex input and color preview.
- **Standard Implementation:**
  ```jsx
  <ColorPickerControl
    color={colorValue}
    field="fieldName"
    label=""
    onChange={(field, newColor) => handleColorChange(newColor)}
  />
  ```
- **Features:**
  - **Combined Input**: Hex input field with color as background
  - **Dynamic Text Color**: Automatically calculates contrasting text color based on background brightness
  - **Luminance Algorithm**: Uses industry-standard formula (0.299R + 0.587G + 0.114B) for perceived brightness
  - **Compact Layout**: Color picker icon on left, combined input field
  - **Real-time Preview**: Background color updates as you type or pick colors
- **Technical Details:**
  - **Width**: 95px for optimal display
  - **Text Styling**: Bold (600 weight), 12px font size
  - **Border**: 1px solid #ccc with 4px border radius
  - **Spacing**: 1px gap between icon and input
- **Usage:** All color picker controls use this enhanced styling for consistent, intuitive color selection.

### Design Principle
- **Object-Oriented:** Each control is focused, reusable, and maintains separation of concerns. This enables maintainability, testability, and easy integration across the web part.
