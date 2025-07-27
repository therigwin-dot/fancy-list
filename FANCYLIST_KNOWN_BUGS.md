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

## **Bug Tracking**

### **Status Legend**:
- 🔴 **Critical** - Must fix before release
- 🟡 **Medium** - Should fix before release  
- 🟢 **Low** - Acceptable for current phase
- 🔵 **Future** - Review in future iteration

### **Current Bugs**:
1. **FontControl Enter Key Focus** - 🟢 **Low** - Acceptable for current phase

---

*Last Updated: 2025-07-27*
*Document Version: 1.0* 