# FancyList Known Bugs

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
- **Component**: Page 1 - List Selection & Configuration dropdowns
- **Issue**: Available choices logic for dropdowns reverted to previous behavior during category field review
- **Impact**: Affected Subject and Description field filtering logic
- **Priority**: Critical - was blocking proper field selection
- **Status**: ✅ **FIXED** - Logic restored to correct dependency chain behavior

#### **Title Component Bugs**:
1. **✅ Title Transparency Sliders Broken** - ✅ **FIXED** - Alpha inversion corrected for proper slider behavior
2. **✅ Reset Button Incomplete** - ✅ **FIXED** - Reset button now properly resets all title settings
3. **✅ Shape Control Default Wrong** - ✅ **FIXED** - Shape control default now works correctly
6. **Color Picker Positioning** - 🟢 **Low** - Acceptable bug, on back burner
7. **✅ Missing "All" Filter Button Toggle** - ✅ **FIXED** - Added "Default Filter Selection" section with "All" filter toggle + persistence fix

#### **Other Bugs**:
8. **FontControl Enter Key Focus** - 🟢 **Low** - Acceptable for current phase

---

*Last Updated: 2025-01-27*
*Document Version: 1.1* 