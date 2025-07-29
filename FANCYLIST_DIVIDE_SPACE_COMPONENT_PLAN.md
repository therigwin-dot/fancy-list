# FancyList - Divide Space Component Module Plan

## Overview
Create a new standalone component module called "Divide Space" that provides spacing control similar to the Font Control. This will be a reusable component for managing spacing between sections.

## Phase 1: Component Development

### 1.1 Create DivideSpaceControl.tsx
**Location:** `src/webparts/fancyList/propertyPane/DivideSpaceControl.tsx`

**Features:**
- ComboBox with preset options (Small, Medium, Large, Custom)
- Number input field for custom values
- Validation for 0-50px range
- Normalization functions
- Reset and test value functionality
- Similar structure to FontControl

### 1.2 Component Interface
```typescript
export interface DivideSpaceControlProps {
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
  onReset?: () => void;
  onTestValues?: () => void;
}
```

### 1.3 Preset Options
- **Small:** 4px
- **Medium:** 8px  
- **Large:** 16px
- **Custom:** User-defined (0-50px)

### 1.4 Validation Rules
- Range: 0-50px
- Default: 0px
- Invalid values default to 0
- Custom input accepts numbers only

### 1.5 Functions to Implement
- `validateDivideSpace(value: string): string | null`
- `normalizeDivideSpace(value: string): number`
- `getDivideSpaceDisplayText(value: number): string`
- `handleComboBoxChange(option: IComboBoxOption)`
- `handleCustomValueChange(value: string)`

## Phase 2: Integration (Future)

### 2.1 Title Page Integration
- Add to TitleConfiguration.tsx
- Wire to property handling
- Add to interfaces

### 2.2 Testing
- Test preset selections
- Test custom value input
- Test validation
- Test reset functionality

## Implementation Steps

1. **Create the component file**
2. **Implement the interface and props**
3. **Add ComboBox with preset options**
4. **Add custom number input field**
5. **Implement validation functions**
6. **Add reset and test value handlers**
7. **Style the component**
8. **Test the component in isolation**

## Success Criteria
- ✅ Component builds without errors
- ✅ ComboBox shows preset options
- ✅ Custom input accepts numbers
- ✅ Validation works correctly
- ✅ Reset and test functions work
- ✅ Ready for Phase 2 integration

## Files to Create/Modify
- **New:** `src/webparts/fancyList/propertyPane/DivideSpaceControl.tsx`
- **Future:** Integration with TitleConfiguration.tsx
- **Future:** Updates to interfaces and property handling