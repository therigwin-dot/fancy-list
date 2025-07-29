# FancyList Known Bugs

## **✅ COMPLETED FEATURES**

### **✅ Subject Section Implementation**
- **Feature**: Complete Subject Section functionality with full feature parity to Category section
- **Scope**: Subject Section (Page 5) with all controls and styling
- **Components**: 
  - `getSubjectSectionBackgroundStyle()` - Full background styling for subject buttons
  - `getSubjectSectionFontStyle()` - Font styling for subject text
  - Background functionality: Solid, gradient, and image backgrounds with transparency
  - Font controls: Family, size, color, formatting, alignment
  - Shape controls: Square, rounded, pill shapes
  - Icon controls: Expand/collapse icons with positioning
  - Auto-expand toggle: Automatic expansion of subject items
  - **Background Wrapping**: Subject background now wraps around both subject button and description content (similar to category behavior)
- **Status**: ✅ **COMPLETED** - All functionality working as expected
- **Styling Fixes**: Fixed shape button conflicts, padding issues, white border removal
- **Impact**: High - Complete Subject section functionality

### **✅ Subject Section Styling Fixes**
- **Feature**: Resolved styling conflicts and visual issues in Subject section
- **Scope**: Subject Section (Page 5) styling improvements
- **Fixes**: 
  - **Shape Button Conflict**: Fixed rounded section appearing on top of shape settings
  - **Padding Cutting Off Sides**: Fixed left and right padding cutting off subject button sides
  - **White Border Removal**: Eliminated 1px white border around subject items
  - **Background Transparency**: Removed opaque backgrounds to allow container transparency
  - **CSS Improvements**: Enhanced hover effects, optimized padding and spacing
- **Status**: ✅ **COMPLETE** - All styling issues resolved
- **Impact**: High - Clean, professional styling without conflicts

### **✅ Category Section Implementation**
- **Feature**: Complete Category Section functionality with all controls and styling
- **Scope**: Category Section (Page 4) with full feature set
- **Components**: 
  - `getCategorySectionBackgroundStyle()` - Full background styling for category buttons
  - `getCategorySectionFontStyle()` - Font styling for category text
  - Background functionality: Solid, gradient, and image backgrounds with transparency
  - Font controls: Family, size, color, formatting, alignment
  - Shape controls: Square, rounded, pill shapes
  - Icon controls: Expand/collapse icons with positioning
  - Auto-expand toggle: Automatic expansion of categories
  - Hover effects: Multi-effect hover behavior with light blue background, border, and blue icons
  - Property pane integration: Full functionality with reset/test buttons
- **Status**: ✅ **COMPLETE** - Complete implementation
- **Impact**: High - Complete Category section functionality

### **✅ DivideSpaceControl Implementation**
- **Feature**: Replaced simple divider toggles with advanced spacing controls
- **Scope**: Title Section (Page 2), Filter Section (Page 3), Category Section (Page 4), Subject Section (Page 5)
- **Components**: 
  - `DivideSpaceControl` - Reusable ComboBox + TextField component
  - Preset options: Touching (0px), Small (4px), Medium (8px), Large (16px), Custom (0-50px)
  - Integration with main reset/test buttons
- **Status**: ✅ **COMPLETE** - Applied to all major sections
- **Impact**: High - Advanced spacing control replacing simple toggles

### **✅ Auto-Expand Implementation**
- **Feature**: Complete auto-expand functionality for Category and Subject sections
- **Scope**: Category and Subject sections with hierarchical behavior coordination
- **Components**: 
  - `applyCategoryAutoExpand()` - Handles category auto-expand logic
  - `applySubjectAutoExpand()` - Handles subject auto-expand logic
  - Category auto-expand: All categories start expanded when enabled
  - Subject auto-expand: Subjects expand when category opens (if enabled)
  - Hierarchical coordination: Category and subject auto-expand work together
  - Manual override: User clicks override auto-expand behavior
  - Settings changes: Auto-expand responds to property pane changes
- **Status**: ✅ **COMPLETED** - All functionality working as expected
- **Behavior Matrix**:
  - Category OFF + Subject OFF: Everything collapsed (default)
  - Category ON + Subject OFF: Categories expanded, subjects collapsed
  - Category OFF + Subject ON: Categories collapsed, subjects expand when category opened
  - Category ON + Subject ON: Everything expanded
- **Impact**: High - Complete auto-expand functionality with hierarchical coordination

---

## **FontControl - Enter Key Focus Issue**

### **Bug Description**:
- **Component**: FontControl (Font Size ComboBox)
- **Issue**: When typing a custom font size value and pressing Enter, the cursor remains in the input field
- **Expected**: Cursor should leave the field after Enter is pressed
- **Current**: Cursor stays in field, second Enter opens dropdown

### **Attempted Fixes**:
1. **onKeyDown handler with event.target.blur()** - Failed
2. **onChange handler with setTimeout blur** - Failed
3. **componentRef with direct blur()** - Failed (IComboBox has no blur method)

### **Technical Details**:
- ComboBox component has complex internal focus management
- Multiple attempts to blur the input element were unsuccessful
- The onChange handler successfully processes the value but focus persists
- This appears to be a Fluent UI ComboBox limitation

### **Impact Assessment**:
- **Severity**: Low (UX annoyance, not functional issue)
- **Workaround**: Users can click outside the field or use Tab key
- **Acceptable for**: Current development phase
- **Priority**: Low - review in future UI polish phase

### **Future Investigation**:
- Research Fluent UI ComboBox focus management
- Consider alternative components (TextField with suggestions)
- Look for ComboBox-specific focus release methods
- Test with different Fluent UI versions

---

## **✅ FIXED BUGS**

### **✅ Default Filter Selection Not Working**
- **Component**: FancyList.tsx
- **Issue**: Default filter selection dropdown was not automatically pressing the correct button
- **Root Cause**: Case sensitivity issue in category matching
- **Fix**: Added proper case-insensitive matching in constructor and exact case matching in componentDidUpdate
- **Status**: ✅ **FIXED** - Button now presses automatically based on dropdown selection
- **Impact**: High - Core filter functionality now working correctly

### **✅ Filter Selection Configuration UI Layout Issues**
- **Component**: FilterModuleControl.tsx
- **Issue**: Dropdown was positioned below Show All toggle and hidden when filters disabled
- **Root Cause**: Incorrect conditional rendering and layout order
- **Fix**: Moved dropdown above Show All toggle and made it always visible
- **Status**: ✅ **FIXED** - Layout now matches user requirements exactly
- **Impact**: High - UI now works as specified by user

## **Bug Tracking**

### **Status Legend**:
- 🔴 **Critical** - Must fix before release
- 🟡 **Medium** - Should fix before release  
- 🟢 **Low** - Acceptable for current phase
- 🔵 **Future** - Review in future iteration

### **Current Bugs**:

#### **Filter Component Bugs**:
1. **✅ Filter Enabled Toggle** - ✅ **FIXED** - Property change handler was missing
2. **✅ Transparency Slider Not Working** - ✅ **FIXED** - Alpha inversion corrected for proper slider behavior
3. **✅ Image Background Broken** - ✅ **FIXED** - Property name corrected from imageUrl to image
4. **✅ Shape Button Not Working** - ✅ **FIXED** - Shape control now applies to filter section container, property mapping and rendering logic corrected
5. **✅ Missing "All" Filter Button Toggle** - ✅ **FIXED** - Added "Default Filter Selection" section with "All" filter toggle + persistence fix
6. **✅ Dropdown Logic Reverted** - ✅ **FIXED** - Available choices logic for dropdowns restored to correct behavior
7. **✅ Filter Selection Configuration UI Layout** - ✅ **FIXED** - Dropdown positioned above Show All toggle, always visible
8. **🔴 Default Filter Selection Dropdown Breaks Filter Selection** - 🟡 **Medium** - Dropdown prevents selecting other filters unless set to "All"

**Bug Description:**
- **Component**: Page 3 - Filter Section, Default Filter Selection dropdown
- **Issue**: When Default Filter Selection is set to any value other than "All", users cannot select other filter buttons
- **Expected**: Users should be able to click any filter button regardless of default selection
- **Current**: Filter buttons become unresponsive unless default is set to "All"
- **Additional**: Disabling "All" filter makes the bug more obvious and problematic
- **Impact**: High - Breaks core filter functionality
- **Priority**: Medium - Critical filter interaction issue
- **Status**: 🟡 **NEEDS INVESTIGATION** - Default selection logic interfering with manual filter selection

9. **🔴 Reset Filter Formatting Button Broken After Test Values** - 🟡 **Medium** - Reset button stops working after Test Values button is used

**Bug Description:**
- **Component**: Page 3 - Filter Section, Reset Filter Formatting button
- **Issue**: Reset button becomes non-functional after Test Values button is pushed
- **Expected**: Reset button should always work to restore default filter formatting
- **Current**: Reset button stops responding after Test Values button is used
- **Additional**: Reset button only resets some values, not all filter formatting properties
- **Impact**: Medium - Users cannot reset filter formatting after testing
- **Priority**: Medium - Core reset functionality broken
- **Status**: 🟡 **NEEDS INVESTIGATION** - Test Values button may be corrupting reset functionality and reset logic incomplete

10. **🔴 Online Test Value Button URL Issue** - 🟡 **Medium** - URL test value only works for description section

#### **Title Component Bugs**:
1. **✅ Title Transparency Sliders Broken** - ✅ **FIXED** - Alpha inversion corrected for proper slider behavior
2. **✅ Reset Button Incomplete** - ✅ **FIXED** - Reset button now properly resets all title settings
3. **✅ Shape Control Default Wrong** - ✅ **FIXED** - Shape control default now works correctly
6. **Color Picker Positioning** - 🟢 **Low** - Acceptable bug, on back burner
7. **✅ Missing "All" Filter Button Toggle** - ✅ **FIXED** - Added "Default Filter Selection" section with "All" filter toggle + persistence fix

#### **Category Section Background Bugs**:
1. **🔴 Category Section Image Error Messages** - 🟢 **Low** - No error messages for invalid/broken image URLs (acceptable back burner bug)

**Bug Description:**
- **Component**: Page 4 - Category Section, Image Background control
- **Issue**: When invalid or broken image URLs are entered, no error messages are displayed
- **Expected**: Should show error messages for invalid URLs (like Title and Filter sections)
- **Current**: Shows just white box with no feedback
- **Impact**: Low - Users don't get feedback about invalid URLs
- **Priority**: Low - Acceptable back burner bug
- **Status**: 🟢 **BACK BURNER** - Will implement error handling in future iteration

2. **🔴 Category Section Empty URL Message** - 🟢 **Low** - No message when image URL field is empty (acceptable back burner bug)

**Bug Description:**
- **Component**: Page 4 - Category Section, Image Background control
- **Issue**: When image URL field is left empty, no message is displayed
- **Expected**: Should show message indicating URL is required (like Title and Filter sections)
- **Current**: Shows just white box with no feedback
- **Impact**: Low - Users don't get feedback about empty URLs
- **Priority**: Low - Acceptable back burner bug
- **Status**: 🟢 **BACK BURNER** - Will implement error handling in future iteration

#### **Other Bugs**:
8. **FontControl Enter Key Focus** - 🟢 **Low** - Acceptable for current phase

9. **🔴 Auto-Expand Toggle Positioning** - 🟢 **Low** - Auto-expand toggle in Section Control needs to be moved (acceptable back burner bug)

**Bug Description:**
- **Component**: SectionModuleControl (Category and Subject sections)
- **Issue**: Auto-expand toggle positioning in the property pane needs adjustment
- **Expected**: Better positioning for improved UX flow
- **Current**: Toggle is positioned where it may not be optimal for user workflow
- **Impact**: Low - UX improvement, not functional issue
- **Priority**: Low - Acceptable back burner bug
- **Status**: 🟢 **BACK BURNER** - Will address positioning in future iteration

---

*Last Updated: 2025-01-27*
*Document Version: 1.1* 

## **🐛 KNOWN BUGS**

### **Bug #1: Title Text Field Null Value Handling**
- **Status**: ✅ **RESOLVED**
- **Priority**: High
- **Description**: Title text field doesn't allow empty/null values
- **Solution**: Changed default from `'Fancy List'` to `''` (empty string)
- **Testing**: ✅ Confirmed working

### **Bug #2: Title Rendering Logic**
- **Status**: ✅ **RESOLVED**
- **Priority**: High
- **Description**: Title renders "Fancy List" even when field is empty
- **Solution**: Fixed rendering logic to only show title when text field has content
- **Testing**: ✅ Confirmed working

### **Bug #3: List Selection Title Update**
- **Status**: ✅ **RESOLVED**
- **Priority**: Medium
- **Description**: List selection doesn't update title text intelligently
- **Solution**: Enhanced logic to update title if field is empty OR if title matches previous list name
- **Testing**: ✅ Confirmed working

### **Bug #4: Filter Enabled Toggle Not Working**
- **Status**: ✅ **RESOLVED**
- **Priority**: Critical
- **Description**: Filter toggle was not calling property change handler
- **Solution**: Added missing `handlePropertyChange('enabled', checked || false)` call
- **Testing**: ✅ Confirmed working

### **Bug #5: Transparency Sliders Broken**
- **Status**: ✅ **RESOLVED**
- **Priority**: High
- **Description**: Transparency sliders not working correctly (inverted alpha values)
- **Solution**: Applied alpha inversion in background style functions
- **Testing**: ✅ Confirmed working

### **Bug #6: Image Background Broken**
- **Status**: ✅ **RESOLVED**
- **Priority**: Medium
- **Description**: Image backgrounds not displaying correctly
- **Solution**: Fixed property name from `imageUrl` to `image`
- **Testing**: ✅ Confirmed working

### **Bug #7: Shape Button Not Working**
- **Status**: ✅ **RESOLVED**
- **Priority**: Medium
- **Description**: Shape control not affecting container properly
- **Solution**: Moved shape control outside background box and applied to container
- **Testing**: ✅ Confirmed working

### **Bug #8: Filter Default Selection Overriding User Clicks**
- **Status**: ✅ **RESOLVED**
- **Priority**: Critical
- **Description**: When default is set to specific category (not "All"), user clicks are overridden
- **Root Cause**: Overriding logic in `componentDidUpdate` was forcing `selectedCategory` back to default value
- **Solution**: Added `userHasManuallySelected` check to prevent default logic from overriding user selections
- **Testing**: ✅ Confirmed working - User clicks now work correctly regardless of default setting

### **Bug #9: Reset Filter Formatting Button Broken After Test Values**
- **Status**: 🔄 **NEEDS INVESTIGATION**
- **Priority**: Medium
- **Description**: Reset button only resets some values, not all filter formatting properties
- **Notes**: May be related to Test Values button implementation

### **Bug #10: Online Test Value Button URL Issue**
- **Status**: 🔄 **NEEDS INVESTIGATION**
- **Priority**: Medium
- **Description**: Test value button that puts in a URL was for description, could just be no other have a setting for that 