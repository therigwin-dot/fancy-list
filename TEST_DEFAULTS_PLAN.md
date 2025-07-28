# Test Defaults Button - Comprehensive Implementation Plan

## **Overview**
This document defines the structured testing values and implementation approach for the enhanced Test Defaults button. The button will systematically set all controls across Pages 1-6 with visually distinct test values, allowing comprehensive testing of the web part functionality.

## **Implementation Requirements**
- **Pages**: 1-6 (skip Page 7 About)
- **Controls**: ALL controls except toggles that disable parts
- **Timing**: Wait for each control to update (one at a time)
- **Values**: Visually distinct test values (bright colors, obvious)
- **Error Handling**: Stop and report errors if controls fail
- **Documentation**: Separate file + summary in existing docs

## **Background Testing Strategy**
1. **Solid**: Set color and transparency
2. **Gradient**: Set all gradient values  
3. **Image**: Test good URL, bad URL, blank URL
4. **Final**: Switch to assigned background type per section

---

## **PAGE 1: List Selection & Configuration**

### **Test Values Structure**
```typescript
{
  page: 1,
  section: "List Selection",
  controls: [
    {
      control: "selectedListId",
      value: "Events",
      description: "Set list to Events for testing",
      timing: 2000, // Long wait for API call
      dependency: null
    },
    {
      control: "categoryField", 
      value: "Location",
      description: "Set category field to Location",
      timing: 2000, // Long wait for field loading
      dependency: "selectedListId"
    },
    {
      control: "subjectField",
      value: "Title", 
      description: "Set subject field to Title",
      timing: 2000, // Long wait for field loading
      dependency: "categoryField"
    },
    {
      control: "descriptionField",
      value: "Description",
      description: "Set description field to Description", 
      timing: 2000, // Long wait for field loading
      dependency: "subjectField"
    }
  ]
}
```

### **Implementation Notes**
- **Sequential Loading**: Each field depends on previous selection
- **API Calls**: Long timing (2000ms) for SharePoint API responses
- **Error Handling**: Stop if list/fields fail to load
- **Visual Feedback**: Watch dropdowns populate progressively

---

## **PAGE 2: Title Configuration**

### **Test Values Structure**
```typescript
{
  page: 2,
  section: "Title Configuration", 
  controls: [
    {
      control: "webPartTitle",
      value: "Testing Fancy List",
      description: "Set title text for testing",
      timing: 500, // Quick text update
      dependency: null
    },
    {
      control: "titleFontFamily",
      value: "Arial",
      description: "Set title font to Arial (visually distinct)",
      timing: 500,
      dependency: null
    },
    {
      control: "titleFontSize", 
      value: "32px",
      description: "Set title font size to 32px (large for testing)",
      timing: 500,
      dependency: null
    },
    {
      control: "titleFontColor",
      value: "#FF0000", // Bright red
      description: "Set title color to bright red (visually distinct)",
      timing: 500,
      dependency: null
    },
    {
      control: "titleFontBold",
      value: true,
      description: "Set title to bold (visually distinct)",
      timing: 500,
      dependency: null
    },
    {
      control: "titleFontItalic",
      value: true,
      description: "Set title to italic (visually distinct)",
      timing: 500,
      dependency: null
    },
    {
      control: "titleFontUnderline",
      value: true,
      description: "Set title to underline (visually distinct)",
      timing: 500,
      dependency: null
    },
    {
      control: "titleFontStrikethrough",
      value: false,
      description: "Set title strikethrough to false",
      timing: 500,
      dependency: null
    },
    {
      control: "titleAlignment",
      value: "center",
      description: "Set title alignment to center (visually distinct)",
      timing: 500,
      dependency: null
    },
    // Background Testing Sequence
    {
      control: "titleBackgroundType",
      value: "solid",
      description: "Switch to solid background for testing",
      timing: 1000, // Medium wait for background type change
      dependency: null
    },
    {
      control: "titleBackgroundColor",
      value: "#00FF00", // Bright green
      description: "Set solid background to bright green",
      timing: 500,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleBackgroundAlpha",
      value: 50,
      description: "Set background transparency to 50%",
      timing: 500,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleBackgroundType",
      value: "gradient",
      description: "Switch to gradient background for testing",
      timing: 1000,
      dependency: null
    },
    {
      control: "titleGradientDirection",
      value: "top-bottom",
      description: "Set gradient direction to top-bottom",
      timing: 500,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleGradientColor1",
      value: "#FF0000", // Bright red
      description: "Set gradient color 1 to bright red",
      timing: 500,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleGradientColor2", 
      value: "#0000FF", // Bright blue
      description: "Set gradient color 2 to bright blue",
      timing: 500,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleGradientAlpha",
      value: 75,
      description: "Set gradient transparency to 75%",
      timing: 500,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleBackgroundType",
      value: "image",
      description: "Switch to image background for testing",
      timing: 1000,
      dependency: null
    },
    {
      control: "titleBackgroundImage",
      value: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
      description: "Set good image URL for testing",
      timing: 1000,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleBackgroundImage",
      value: "https://invalid-test-url.com/image.jpg",
      description: "Set bad image URL for error testing",
      timing: 1000,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleBackgroundImage",
      value: "",
      description: "Set blank image URL for error testing",
      timing: 1000,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleBackgroundImage",
      value: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
      description: "Restore good image URL",
      timing: 1000,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleBackgroundImageAlpha",
      value: 25,
      description: "Set image transparency to 25%",
      timing: 500,
      dependency: "titleBackgroundType"
    },
    // Final Background Type (Solid for Page 2)
    {
      control: "titleBackgroundType",
      value: "solid",
      description: "Set final background type to solid for Page 2",
      timing: 1000,
      dependency: null
    },
    {
      control: "titleBackgroundColor",
      value: "#00FF00", // Bright green
      description: "Set final solid background color",
      timing: 500,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleBackgroundAlpha",
      value: 50,
      description: "Set final background transparency",
      timing: 500,
      dependency: "titleBackgroundType"
    },
    {
      control: "titleShape",
      value: "pill",
      description: "Set title shape to pill (visually distinct)",
      timing: 500,
      dependency: null
    },
    {
      control: "showTitleDivider",
      value: true,
      description: "Show title divider (visually distinct)",
      timing: 500,
      dependency: null
    }
  ]
}
```

### **Implementation Notes**
- **Font Controls**: All formatting enabled for visual testing
- **Bright Colors**: Red text, green background for obvious testing
- **Background Testing**: Complete sequence through all types
- **Final Type**: Solid background assigned to Page 2
- **Quick Timing**: 500ms for most controls, 1000ms for background type changes

---

**Please review Page 2 structure above. Any changes needed before I continue with Page 3?** 