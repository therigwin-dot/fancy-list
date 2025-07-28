# Fancy List Web Part - Resume After Upgrade

## **📋 CURRENT STATUS - JULY 2025**

### **🎉 MAJOR MILESTONE: All 7 Configuration Pages Complete & Functional**

**Status:** ✅ **ALL PAGES 100% COMPLETE AND FUNCTIONAL**
- **Page 1**: List Selection & Configuration ✅
- **Page 2**: Title Configuration ✅
- **Page 3**: Filter Configuration ✅
- **Page 4**: Category Section Configuration ✅
- **Page 5**: Subject Section Configuration ✅
- **Page 6**: Description Section Configuration ✅
- **Page 7**: About ✅

---

## **🔄 RECENT PROGRESS (Latest Updates)**

### **✅ Title Component Rendering - COMPLETED**
**Date:** July 2025
**Status:** ✅ **COMPLETED - ALL ISSUES RESOLVED**

**Issues Fixed:**
1. **Text Input Null Value** ✅
   - Fixed: Title text field now allows empty/null values
   - Changed default from `'Fancy List'` to `''` (empty string)
   - Reset button no longer affects text field
   - Simple text field behavior implemented

2. **Rendering Logic** ✅
   - Fixed: Title only renders when text field has content
   - No more "Fancy List" fallback when field is empty
   - Clean rendering with proper null handling

3. **List Selection Title Update** ✅
   - Enhanced: List selection now updates title text intelligently
   - Updates title if field is empty OR if title matches previous list name
   - Preserves custom user text when list changes
   - Tracks previous list selection for smart updates

4. **Test Defaults Button Enhancement** ✅
   - Added: Sets title text to "Testing Fancy List"
   - Maintains all existing test defaults (list, fields)
   - Provides complete testing setup

**Testing Results:**
- ✅ Text field allows null/empty values
- ✅ Title renders nothing when field is empty
- ✅ List selection updates title intelligently
- ✅ Custom text preserved when list changes
- ✅ Test Defaults button sets complete test environment

---

### **✅ Filter Component Rendering - CRITICAL BUG FIXED**
**Date:** July 2025
**Status:** ✅ **COMPLETED - Filter Enabled Toggle Fixed**

**Critical Issues Fixed:**
1. **Filter Enabled Toggle Not Working** ✅ **FIXED**
   - **Root Cause**: Filter toggle was not calling property change handler
   - **Solution**: Added missing `handlePropertyChange('enabled', checked || false)` call
   - **Technical Fix**: 
     - Added property change call to Filter toggle's `onChange` handler
     - Added `enableFilters` property to component interface and settings
     - Fixed property mapping between web part and component
     - Fixed state initialization from settings prop
   - **Result**: Filter toggle now properly updates `enableFilters` property and triggers re-render
   - **Testing Confirmed**: Console output shows property changes, filter section hides/shows correctly

2. **Transparency Slider Not Working** ✅ **FIXED**
   - **Root Cause**: Alpha value inversion needed for proper slider behavior
   - **Solution**: Applied alpha inversion in `getFilterBackgroundStyle` function
   - **Technical Fix**:
     - Modified `getFilterBackgroundStyle` function in `FancyList.tsx`
     - Changed solid background: `background.alpha / 100` to `1 - (background.alpha / 100)`
     - Changed gradient background: `background.gradientAlpha1 / 100` to `1 - (background.gradientAlpha1 / 100)`
     - Now 0% = fully opaque (alpha = 1), 100% = fully transparent (alpha = 0)
   - **Result**: Transparency slider now works correctly for solid and gradient backgrounds with proper behavior
   - **Testing Confirmed**: Console output shows property values updating, visual effect working as expected

3. **Image Background Broken** ✅ **FIXED**
   - **Root Cause**: Incorrect property name in image background logic
   - **Solution**: Corrected property name from `imageUrl` to `image`
   - **Technical Fix**:
     - Fixed `getFilterBackgroundStyle` function in `FancyList.tsx`
     - Changed `background.imageUrl` to `background.image` in image background section
     - Property name now matches the rest of the codebase
   - **Result**: Image backgrounds now display correctly with transparency slider working
   - **Testing Confirmed**: Images load properly, transparency slider works for image backgrounds

4. **Title Transparency Sliders Broken** ✅ **FIXED**
   - **Root Cause**: Alpha inversion needed for proper slider behavior (same as Filter section)
   - **Solution**: Applied alpha inversion in `getBackgroundStyle` function
   - **Technical Fix**:
     - Modified `getBackgroundStyle` function in `FancyList.tsx`
     - Changed solid background: `backgroundAlpha / 100` to `1 - (backgroundAlpha / 100)`
     - Changed gradient background: `gradientAlpha / 100` to `1 - (gradientAlpha / 100)`
     - Now 0% = fully opaque (alpha = 1), 100% = fully transparent (alpha = 0)

5. **Shape Button Not Working** ✅ **FIXED**
   - **Root Cause**: Shape control was in wrong location and not applying to container
   - **Solution**: Moved shape control outside background box and applied to container
   - **Technical Fix**:
     - Moved `ShapePickerControl` from inside background box to separate section
     - Removed "Filter Section Shape" header (implied)
     - Changed default from 'pill' to 'rounded' in `DEFAULTS_CONFIG.ts`
     - Added `borderRadius` to filter section container in `FancyList.tsx`
     - Added `backgroundShape` to `IFancyListProps.ts` interface
     - Fixed property mapping in `FancyListWebPart.ts`
   - **Result**: Shape control now properly affects the entire filter section container
   - **Testing Confirmed**: All shape buttons work correctly for container and individual buttons

6. **Reset Button Incomplete** ✅ **FIXED**
   - **Root Cause**: Reset button only reset some properties, not all filter settings
   - **Solution**: Added explicit property change calls for all filter settings
   - **Technical Fix**:
     - Modified `FilterModuleControl.tsx` reset button `onClick` handler
     - Added explicit `handlePropertyChange` calls for all filter settings (font, colors, background, shapes, divider)
     - Replaced `handleFontChange` call with individual property change calls
     - Added `showAllCategories` reset to restore "All" filter toggle
   - **Result**: Reset button now properly resets all filter settings to defaults
   - **Testing Confirmed**: All controls reset to default values when reset button is clicked

7. **Missing "All" Filter Button Toggle** ✅ **FIXED**
   - **Root Cause**: No control to show/hide the "All" filter button
   - **Solution**: Added "Default Filter Selection" section with toggle control
   - **Technical Fix**:
     - Added new grey box container for "Default Filter Selection" in `FilterModuleControl.tsx`
     - Added `Toggle` control for `showAllCategories` with proper state management
     - Added `showAllCategories` to `FilterModuleControlProps` interface and default settings
     - Added `showAllCategories` to `FilterSettings` interface in `IFancyListProps.ts`
     - Added `showAllCategories` case to `onPropertyChange` in `FancyListWebPart.ts`
     - Fixed property mapping to pass `showAllCategories` from `filterSettings` instead of top-level
     - Added `useEffect` to keep local state synchronized with settings
     - Fixed nullish coalescing operator (`??` instead of `||`) for proper false value handling
   - **Result**: Toggle now properly controls "All" filter button visibility with persistence
   - **Testing Confirmed**: Toggle works correctly, persists across navigation and page refresh
   - **Result**: Title transparency sliders now work correctly for solid and gradient backgrounds with proper behavior
   - **Testing Confirmed**: Title transparency sliders adjust visual appearance properly (0% opaque, 100% transparent)

**Remaining Filter Issues:**
2. **✅ Transparency Slider Not Working** - ✅ **FIXED** - Double-normalization in hexToRgba function corrected
3. **✅ Shape Button Not Working** - ✅ **FIXED** - Shape control now applies to filter section container, property mapping and rendering logic corrected
4. **✅ Reset Button Incomplete** - ✅ **FIXED** - Reset button now properly resets all filter settings to defaults
5. **✅ Shape Control Default Wrong** - ✅ **FIXED** - Shape control default now works correctly
6. **Color Picker Positioning** - Acceptable bug, on back burner
7. **✅ Missing "All" Filter Button Toggle** - ✅ **FIXED** - Added "Default Filter Selection" section with "All" filter toggle + persistence fix

**Working Features:**
- ✅ **Filter Enabled Toggle** - Now working perfectly (property change handler fixed)
- ✅ **Transparency Slider** - Now working for solid and gradient backgrounds (alpha inversion fixed)
- ✅ **Show All Categories Toggle** - Now working perfectly with dropdown integration
- ✅ All font controls work correctly
- ✅ Color pickers work (except positioning)
- ✅ URL image controls work 100% including transparency
- ✅ Divider toggle works correctly
- ✅ Background controls work (solid and gradient)
- ✅ Property pane navigation works
- ✅ All TypeScript errors resolved

**Issues Fixed:**
1. **Text Input Null Value** ✅
   - Fixed: Title text field now allows empty/null values
   - Changed default from `'Fancy List'` to `''` (empty string)
   - Reset button no longer affects text field
   - Simple text field behavior implemented

2. **Rendering Logic** ✅
   - Fixed: Title only renders when text field has content
   - No more "Fancy List" fallback when field is empty
   - Clean rendering with proper null handling

3. **List Selection Title Update** ✅
   - Enhanced: List selection now updates title text intelligently
   - Updates title if field is empty OR if title matches previous list name
   - Preserves custom user text when list changes
   - Tracks previous list selection for smart updates

4. **Test Defaults Button Enhancement** ✅
   - Added: Sets title text to "Testing Fancy List"
   - Maintains all existing test defaults (list, fields)
   - Provides complete testing setup

**Testing Results:**
- ✅ Text field allows null/empty values
- ✅ Title renders nothing when field is empty
- ✅ List selection updates title intelligently
- ✅ Custom text preserved when list changes
- ✅ Test Defaults button sets complete test environment

---

## **🎯 "SHOW ALL" TOGGLE FEATURE - COMPLETE IMPLEMENTATION**

### **✅ Feature Status: FULLY IMPLEMENTED AND WORKING**

**Date:** July 2025  
**Status:** ✅ **COMPLETED - All functionality working perfectly**

### **Feature Overview:**
The "Show All" toggle in the Filter Section provides users with complete control over the visibility of the "All" filter button and its integration with the default filter selection dropdown.

### **Implementation Details:**

#### **1. User Interface Components**
- **Location**: Page 3 - Filter Configuration, "Default Filter Selection" section
- **Container**: Grey box with "Default Filter Selection" header
- **Toggle Control**: "Show 'All' Filter Button" with On/Off states
- **Dropdown Integration**: Dynamic dropdown that updates based on toggle state

#### **2. Technical Architecture**
```typescript
// FilterModuleControl.tsx - Key Implementation
const [showAllToggle, setShowAllToggle] = React.useState(settings?.showAllCategories ?? true);
const [defaultFilterDropdown, setDefaultFilterDropdown] = React.useState(settings?.defaultFilterSelection ?? 'All');

// Toggle Change Handler
onChange={(_, checked) => {
  setShowAllToggle(checked || false);
  handlePropertyChange('showAllCategories', checked);
  
  // Smart dropdown management
  if (!checked && defaultFilterDropdown === 'All' && availableCategories.length > 0) {
    const firstFilter = availableCategories[0];
    setDefaultFilterDropdown(firstFilter);
    handlePropertyChange('defaultFilterSelection', firstFilter);
  }
}}
```

#### **3. Dropdown Integration**
- **With "All" Enabled**: Shows "All" + all available categories
- **With "All" Disabled**: Shows only available categories
- **Smart Selection**: Automatically switches from "All" to first category when "All" is disabled
- **Persistence**: Maintains selection across navigation and page refresh

#### **4. Rendering Integration**
```typescript
// FancyList.tsx - Rendering Logic
{this.props.filterSettings?.showAllCategories && (
  <button
    className={`${styles.categoryPill} ${selectedCategory === 'all' ? styles.active : ''}`}
    onClick={() => this.handleCategoryClick('all')}
  >
    All
  </button>
)}
```

#### **5. Property Mapping**
- **Web Part Level**: `this.properties.filterSettings.showAllCategories`
- **Component Level**: `props.filterSettings.showAllCategories`
- **Default Value**: `true` (from DEFAULTS_CONFIG)
- **Reset Functionality**: Included in reset button with proper state management

#### **6. State Management**
- **Local State**: `showAllToggle` for UI responsiveness
- **Settings Sync**: `useEffect` keeps local state synchronized with settings
- **Persistence**: Values persist across navigation and page refresh
- **Reset Integration**: Properly resets to default value when reset button is clicked

### **Key Features:**
- ✅ **Toggle Control**: On/Off toggle for "All" filter button visibility
- ✅ **Dropdown Integration**: Dynamic dropdown that updates based on toggle state
- ✅ **Smart Selection**: Automatically switches from "All" to first category when disabled
- ✅ **Persistence**: Values persist across navigation and page refresh
- ✅ **Reset Integration**: Properly resets to default value
- ✅ **Rendering Control**: "All" button only renders when toggle is enabled
- ✅ **State Synchronization**: Local state stays synchronized with settings

### **Testing Results:**
- ✅ Toggle works correctly in all states
- ✅ Dropdown updates dynamically based on toggle state
- ✅ Smart selection works when disabling "All" with "All" selected
- ✅ Values persist across navigation and page refresh
- ✅ Reset button properly resets toggle to default
- ✅ "All" button only renders when toggle is enabled
- ✅ No console errors during operation

### **Technical Files Modified:**
- `src/webparts/fancyList/propertyPane/FilterModuleControl.tsx` - Main implementation
- `src/webparts/fancyList/components/FancyList.tsx` - Rendering logic
- `src/webparts/fancyList/FancyListWebPart.ts` - Property mapping
- `src/webparts/fancyList/DEFAULTS_CONFIG.ts` - Default values
- `src/webparts/fancyList/components/IFancyListProps.ts` - Interface definitions

---

## **⚠️ INCOMPLETE FEATURE: "DEFAULT FILTER SELECTION" DROPDOWN**

### **🔄 Status: PARTIALLY IMPLEMENTED - NEEDS COMPLETION**

**Date:** July 2025  
**Status:** 🔄 **INCOMPLETE - Dropdown exists but doesn't affect rendering**

### **Feature Purpose:**
The "Default Filter Selection" dropdown is designed to set which filter button should be **automatically selected/pressed** when the web part loads. This controls the initial state of the filter section.

### **Current Implementation Status:**

#### **✅ What IS Implemented:**
- **Dropdown Control**: ✅ Exists in FilterModuleControl.tsx
- **Property Mapping**: ✅ `defaultFilterSelection` property exists in interfaces
- **State Management**: ✅ Local state for dropdown selection
- **Integration with "Show All"**: ✅ Dropdown updates based on toggle state
- **Reset Functionality**: ✅ Included in reset button
- **Property Change Handling**: ✅ Web part handles property changes

#### **❌ What is MISSING (Critical Implementation):**
- **Initial State Connection**: The `selectedCategory` in FancyList.tsx is **hardcoded to 'all'**
- **No Connection**: The `defaultFilterSelection` property is **not used** to set the initial selected category
- **No Rendering Logic**: The dropdown selection doesn't affect which filter button appears pressed
- **Filter Disabled Logic**: No handling for when filters are disabled

### **🔧 Missing Implementation Details:**

#### **1. Initial State Connection (FancyList.tsx):**
```typescript
// CURRENT (hardcoded):
this.state = {
  selectedCategory: 'all', // ❌ HARDCODED
  // ...
};

// SHOULD BE:
this.state = {
  selectedCategory: this.props.filterSettings?.defaultFilterSelection || 'all',
  // ...
};
```

#### **2. Property Change Handling (FancyList.tsx):**
```typescript
// MISSING in componentDidUpdate:
if (prevProps.filterSettings?.defaultFilterSelection !== this.props.filterSettings?.defaultFilterSelection) {
  this.setState({ selectedCategory: this.props.filterSettings?.defaultFilterSelection || 'all' });
}
```

#### **3. Filter Disabled Logic:**
```typescript
// MISSING: Handle when filters are disabled
if (!this.props.filterSettings?.enabled) {
  // Should not show any filter buttons or set any as selected
  // OR should default to 'all' even when disabled
}
```

### **📋 Implementation Plan:**

#### **Phase 1: Connect Initial State**
1. **Modify FancyList.tsx constructor** to use `defaultFilterSelection` instead of hardcoded 'all'
2. **Add property change handling** in `componentDidUpdate`
3. **Test initial state** with different dropdown selections

#### **Phase 2: Handle Filter Disabled State**
1. **Add logic** for when filters are disabled
2. **Determine behavior** (no buttons vs. default to 'all')
3. **Test disabled state** functionality

#### **Phase 3: Testing and Validation**
1. **Test all scenarios**: Different dropdown selections, filter enabled/disabled
2. **Validate persistence**: Changes persist across navigation
3. **Test edge cases**: Invalid selections, empty categories

### **🎯 Expected Behavior:**
- **Dropdown set to "All"**: "All" button should be pressed when web part loads
- **Dropdown set to "Category"**: That category's button should be pressed when web part loads
- **Filters disabled**: No buttons should be pressed (or "All" button pressed)
- **Property changes**: Selected category should update when dropdown selection changes

### **🔄 Category Field onChange Behavior:**

#### **Scenario: List/Category Field Changes**
When a user on Page 1 changes the List/Document Library or Category Field selection, the available categories change. This affects the Default Filter Selection dropdown:

#### **Expected Behavior:**
1. **New List Selected**: Available categories change → Default Filter Selection dropdown options update
2. **Category Field Changed**: Available categories change → Default Filter Selection dropdown options update
3. **Current Selection Invalid**: If the current `defaultFilterSelection` is no longer valid (category doesn't exist in new list), it should:
   - **Option A**: Reset to "All" (if "All" is enabled)
   - **Option B**: Reset to first available category
   - **Option C**: Clear selection and require user to choose

#### **Implementation Requirements:**
```typescript
// MISSING: Handle category field changes in FancyListWebPart.ts
case 'categoryField':
  // Clear defaultFilterSelection if it's no longer valid
  // Update available categories for dropdown
  // Reset to safe default (All or first category)
  break;
```

#### **Dropdown Options Update Logic:**
```typescript
// When category field changes:
// 1. Get new available categories from selected list
// 2. Update dropdown options in FilterModuleControl
// 3. Validate current defaultFilterSelection
// 4. Reset to safe default if invalid
```

### **📁 Files to Modify:**
- `src/webparts/fancyList/components/FancyList.tsx` - Main implementation
- `src/webparts/fancyList/components/IFancyListProps.ts` - Interface updates if needed

---

## **❓ CLARIFYING QUESTIONS - CRITICAL BUG & CATEGORY FIELD ONCHANGE**

### **🎯 Critical Bug Investigation Questions:**

**Question 1**: When you mention "Available choices logic for dropdowns reverted to previous behavior" - are you referring to:
- Page 1 field selection dropdowns (Category, Subject, Description)?
- Page 3 Filter dropdown (Default Filter Selection)?
- Both?

**Answer**: Page 1 field selection dropdowns

**Question 2**: What was the "previous behavior" that it reverted to? I need to understand what the correct behavior should be.

**Answer**: 
- After List or Document library is selected, the Category field is populated with available fields.
- These fields always stay the same unless a new List or Library is selected, then it is repopulated.
- After a Category is selected, the Subject is populated with the left over values from the Category. This remains static, unless the Category Field is changed.
- Repeat this logic with the Description field.

**Question 3**: Should I investigate this bug immediately, or should we focus on completing the Default Filter Selection implementation first?

**Answer**: This bug is priority. It worked correctly at one time and it was an easy implementation. The issue is that whatever is selected in any list becomes unavailable for all lists. Fortunately, there are more than 3 fields in the library, otherwise would have to switch entire library or list to reset them. Should check the logic of the population of the lists. The full file backup on the external drive should already have the logic to compare. Additionally, this should be documented in the Master Design and specifications documentation.

**🔍 BUG INVESTIGATION FINDINGS:**

**Root Cause Found**: The dropdown logic has reverted to incorrect behavior. Comparing with backup shows the issue:

**CORRECT LOGIC (from backup):**
```typescript
// Category always shows all available fields
return this._fields;

// Subject shows all fields except the selected Category
return this._fields.filter(field => field.key !== this.properties.categoryField);

// Description shows all fields except Category and Subject
return this._fields.filter(field => 
  field.key !== this.properties.categoryField && 
  field.key !== this.properties.subjectField
);
```

**INCORRECT LOGIC (current):**
```typescript
// Category shows all fields except Subject and Description (WRONG!)
return this._fields.filter(field =>
  field.key !== this.properties.subjectField &&
  field.key !== this.properties.descriptionField
);

// Subject shows all fields except Category and Description (WRONG!)
return this._fields.filter(field =>
  field.key !== this.properties.categoryField &&
  field.key !== this.properties.descriptionField
);

// Description shows all fields except Category and Subject (CORRECT)
return this._fields.filter(field =>
  field.key !== this.properties.categoryField &&
  field.key !== this.properties.subjectField
);
```

**The Problem**: The current logic is filtering out fields that haven't been selected yet, instead of only filtering out the previously selected fields in the dependency chain.

**Question 4**: Which file should I investigate first for the dropdown logic bug - `FancyListWebPart.ts` or the Page 1 property pane configuration?

**Answer**: FancyListWebPart.ts - the bug is confirmed to be in the `_getAvailableFieldsForCategory()` and `_getAvailableFieldsForSubject()` methods

**Question 5**: Should I create a test scenario to reproduce the dropdown logic issue, or do you have specific steps to reproduce it?

**Answer**: User can reproduce and test it fine. These two things (dropdown logic bug and Category Field onChange) will be closely related as they use the same control.

### **🎯 Category Field onChange Behavior Questions:**

**Question 6**: When the category field changes and the current `defaultFilterSelection` is no longer valid, which approach should we use?
- **Option A**: Reset to "All" (if "All" is enabled)
- **Option B**: Reset to first available category
- **Option C**: Clear selection and require user to choose

**Answer**: **Option D** - Toggle All to be enabled and set the value to All. We will always assume back to that point if they are picking a new category to be the filter buttons.

**Question 7**: When filters are disabled, what should happen to the `defaultFilterSelection`?
- Should it be ignored completely?
- Should it still be stored but not used?
- Should it default to "All" even when disabled?

**Answer**: **New Feature Update** - Even if they disable the filter showing, I want this setting control available. So move it above the Enable Show All toggle. Then if the user disable the filters section, it hides everything except that dropdown. The dropdown will default behind the scenes to have the All setting available. It will default to All when the enable toggle is turned off. This allows the users to still filter the list to a specific category or all the categories if we hide the filter buttons.

**Question 8**: Should the `defaultFilterSelection` change trigger an immediate update to the rendered filter buttons, or only when the web part reloads?

**Answer**: Immediately so the user can see it. BUT at the same time, I do not want when the user is testing the filter button for it to change our default filter value.

---

## **🏗️ ARCHITECTURE STATUS**

### **✅ Configuration System (100% Complete)**
- **7-Page Property Pane**: All pages functional
- **Unified Styling**: Consistent across all controls
- **Interactive Controls**: Real-time preview working
- **Reset Functionality**: All buttons working perfectly
- **Type Safety**: No TypeScript errors

### **🔄 Main Rendering Implementation (Next Phase)**
- **Objective**: Connect configuration controls to visual rendering
- **Files to Modify**: 
  - `src/webparts/fancyList/components/FancyList.tsx`
  - `src/webparts/fancyList/components/IFancyListProps.ts`
  - `src/webparts/fancyList/components/IListItem.ts`

---

## **📋 NEXT PHASE: MAIN RENDERING IMPLEMENTATION**

### **Phase 1: Title Component Rendering** ✅ **COMPLETED**
- ✅ **Utility Functions**: Background, gradient, color conversion helpers
- ✅ **Title Rendering Logic**: Inline styles, conditional rendering
- ✅ **Property Mapping**: Correct mapping from web part to component
- ✅ **Integration**: Title settings passed to FancyList component
- ✅ **Testing**: All controls working, rendering properly

### **Phase 2: Filter Component Rendering** (Next)
- **Objective**: Implement filter button rendering
- **Controls to Connect**: Enable/disable, colors, fonts, shapes, backgrounds
- **Features**: Active/inactive states, hover effects, filtering logic

### **Phase 3: Section Component Rendering** (Planned)
- **Objective**: Implement category, subject, description section rendering
- **Controls to Connect**: Fonts, backgrounds, shapes, icons, dividers
- **Features**: Collapsible sections, hover effects, styling

### **Phase 4: List Data Integration** (Planned)
- **Objective**: Connect SharePoint list data to rendered components
- **Features**: Data loading, error handling, empty states

### **Phase 5: Final Integration & Testing** (Planned)
- **Objective**: Complete integration and comprehensive testing
- **Features**: End-to-end testing, performance optimization

---

## **🔧 TECHNICAL IMPLEMENTATION DETAILS**

### **Title Component Rendering (Completed)**
```typescript
// Key Implementation Details:
// 1. Property Mapping in FancyListWebPart.ts
const titleSettings = {
  enabled: this.properties.titleSettings?.enabled ?? DEFAULTS_CONFIG.titleSettings.enabled,
  webPartTitle: this.properties.webPartTitle ?? '', // Simplified for null handling
  // ... other properties mapped from individual web part properties
};

// 2. Rendering Logic in FancyList.tsx
if (!webPartTitle || webPartTitle.trim() === '') {
  return null; // Don't render if empty
}

// 3. List Selection Integration
if ((!this.properties.webPartTitle || this.properties.webPartTitle.trim() === '') ||
    (this.properties.webPartTitle.trim() === previousListName)) {
  this.properties.webPartTitle = newListName;
}
```