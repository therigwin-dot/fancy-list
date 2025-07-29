# FancyList Dynamic Divider Contrast Plan

## **🎯 PROBLEM ANALYSIS:**

### **Current Issue:**
- Title divider uses `var(--neutralLight, #edebe9)` (light grey)
- Divider may blend in with title backgrounds, especially light ones
- Need contrasting divider that stands out against any background

### **Solution: Dynamic Contrast Detection**
- **Analyze title background color** to determine if it's light or dark
- **Choose contrasting divider color** automatically
- **Fallback to dark grey** for images or when analysis fails

## **🔧 SOLUTION PLAN:**

### **Step 1: Create Contrast Detection Function**
- **Function:** `getContrastingDividerColor(backgroundColor: string): string`
- **Logic:** Convert hex to RGB, calculate luminance, return dark/light divider
- **Returns:** Dark divider for light backgrounds, light divider for dark backgrounds

### **Step 2: Create Background Color Extraction Function**
- **Function:** `getTitleBackgroundColor(): string`
- **Logic:** Extract color from titleSettings based on backgroundType
- **Handles:** Solid colors, gradient first color, fallback for images

### **Step 3: Update Title Divider Logic**
- **Replace fixed color** with dynamic contrast function
- **Apply in renderTitle()** method
- **Maintain fallback** for edge cases

### **Step 4: Test Different Background Types**
- **Solid colors:** Light and dark backgrounds
- **Gradients:** Various gradient combinations
- **Images:** Verify fallback behavior

## **📁 FILES TO MODIFY:**
- `src/webparts/fancyList/components/FancyList.tsx` - Add contrast functions and update divider logic

## **🧪 TESTING PLAN:**
1. **Test light backgrounds** - verify dark divider appears
2. **Test dark backgrounds** - verify light divider appears
3. **Test gradients** - verify first color is used for analysis
4. **Test images** - verify fallback dark divider
5. **Test edge cases** - invalid colors, missing settings

## **🎨 COLOR CHOICES:**
- **Dark Divider:** `#605e5c` (neutral dark grey)
- **Light Divider:** `#ffffff` (white)
- **Fallback:** `#605e5c` (dark grey for safety)

---
**Status:** Plan created - Ready for Git backup and implementation