# Fancy List Web Part - Title Rendering Implementation Plan

## 🎯 **PROJECT OVERVIEW**
Implement the Title component rendering for Page 2 of the Fancy List Web Part, connecting the TitleConfiguration controls to actual visual output.

## 📋 **DESIGN SPECIFICATIONS**

### **1. ENABLED TOGGLE BEHAVIOR**
- **Setting**: `enabled: boolean`
- **Behavior**: When `enabled: false` → Title section completely hidden (zero space)
- **Implementation**: Conditional rendering - if `enabled: false`, don't render title at all

### **2. SHAPE CONTROL**
- **Setting**: `shape: 'square' | 'rounded' | 'pill'`
- **Behavior**: Apply `border-radius` to entire title background container
- **Values**: `square` (0px), `rounded` (4px), `pill` (20px)

### **3. TRANSPARENCY HANDLING**
- **Behavior**: Apply transparency only to background (not text or container)
- **Implementation**: Unified slider adapts to background type (solid/gradient/image)

### **4. GRADIENT RENDERING**
- **Behavior**: Use actual gradient colors (not preview colors)
- **Support**: All gradient directions from control

### **5. IMAGE ERROR HANDLING**
- **Validation**: Check image file extensions (.jpg, .jpeg, .png, .gif, .webp)
- **Invalid Extensions**: Red background + "Bad image" message
- **Valid Extensions**: Standard fallback behavior

## 🛠️ **IMPLEMENTATION PHASES**

### **Phase 1: Update Props Interface**
**File**: `src/webparts/fancyList/components/IFancyListProps.ts`
```typescript
export interface IFancyListProps {
  // Existing props...
  
  // New Title Settings
  titleSettings?: {
    enabled: boolean;
    webPartTitle: string;
    shape: 'square' | 'rounded' | 'pill';
    showDivider: boolean;
    backgroundType: 'solid' | 'gradient' | 'image';
    backgroundColor: string;
    backgroundAlpha: number;
    gradientDirection: string;
    gradientColor1: string;
    gradientColor2: string;
    gradientAlpha: number;
    imageUrl: string;
    imageAlpha: number;
    font: {
      family: string;
      size: string;
      color: string;
      formatting: {
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strikethrough: boolean;
      };
    };
  };
}
```

### **Phase 2: Add Utility Functions**
**File**: `src/webparts/fancyList/components/FancyList.tsx`

#### **2.1 Background Style Function**
```typescript
private getBackgroundStyle(): React.CSSProperties {
  const { titleSettings } = this.props;
  if (!titleSettings) return {};
  
  const { backgroundType, backgroundColor, backgroundAlpha, gradientDirection, 
          gradientColor1, gradientColor2, gradientAlpha, imageUrl, imageAlpha } = titleSettings;
  
  switch (backgroundType) {
    case 'solid':
      return {
        backgroundColor: this.hexToRgba(backgroundColor, backgroundAlpha),
        borderRadius: this.getShapeRadius(titleSettings.shape)
      };
    case 'gradient':
      return {
        background: this.getGradientStyle(gradientDirection, gradientColor1, gradientColor2, gradientAlpha),
        borderRadius: this.getShapeRadius(titleSettings.shape)
      };
    case 'image':
      return {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: this.getShapeRadius(titleSettings.shape)
      };
    default:
      return {};
  }
}
```

#### **2.2 Shape Radius Function**
```typescript
private getShapeRadius(shape: 'square' | 'rounded' | 'pill'): string {
  switch (shape) {
    case 'square': return '0px';
    case 'rounded': return '4px';
    case 'pill': return '20px';
    default: return '4px';
  }
}
```

#### **2.3 Gradient Style Function**
```typescript
private getGradientStyle(direction: string, color1: string, color2: string, alpha: number): string {
  const rgba1 = this.hexToRgba(color1, alpha);
  const rgba2 = this.hexToRgba(color2, alpha);
  
  switch (direction) {
    case 'to bottom': return `linear-gradient(to bottom, ${rgba1}, ${rgba2})`;
    case 'left-right': return `linear-gradient(to right, ${rgba1}, ${rgba2})`;
    case 'to bottom right': return `linear-gradient(to bottom right, ${rgba1}, ${rgba2})`;
    case 'to bottom left': return `linear-gradient(to bottom left, ${rgba1}, ${rgba2})`;
    case 'radial': return `radial-gradient(circle, ${rgba1}, ${rgba2})`;
    default: return `linear-gradient(to right, ${rgba1}, ${rgba2})`;
  }
}
```

#### **2.4 Hex to RGBA Function**
```typescript
private hexToRgba(hex: string, alpha: number): string {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  const normalizedAlpha = 1 - (alpha / 100);
  return `rgba(${r},${g},${b},${normalizedAlpha})`;
}
```

#### **2.5 Image Validation Function**
```typescript
private isValidImageUrl(url: string): boolean {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const lowerUrl = url.toLowerCase();
  return validExtensions.some(ext => lowerUrl.endsWith(ext));
}
```

### **Phase 3: Add Title Rendering Logic**
**File**: `src/webparts/fancyList/components/FancyList.tsx`

#### **3.1 Title Style Function**
```typescript
private getTitleStyle(): React.CSSProperties {
  const { titleSettings } = this.props;
  if (!titleSettings) return {};
  
  const { font } = titleSettings;
  
  return {
    ...this.getBackgroundStyle(),
    fontFamily: font.family,
    fontSize: font.size,
    color: font.color,
    fontWeight: font.formatting.bold ? 'bold' : 'normal',
    fontStyle: font.formatting.italic ? 'italic' : 'normal',
    textDecoration: this.getTextDecoration(font.formatting),
    padding: '12px 16px',
    marginBottom: '16px',
    position: 'relative'
  };
}
```

#### **3.2 Text Decoration Function**
```typescript
private getTextDecoration(formatting: { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean; }): string {
  let decoration = '';
  if (formatting.underline) decoration += 'underline ';
  if (formatting.strikethrough) decoration += 'line-through';
  return decoration.trim() || 'none';
}
```

#### **3.3 Image Error Handling**
```typescript
private renderTitle(): React.ReactElement | null {
  const { titleSettings } = this.props;
  if (!titleSettings || !titleSettings.enabled) return null;
  
  const { webPartTitle, backgroundType, imageUrl, showDivider } = titleSettings;
  
  // Check for invalid image URL
  if (backgroundType === 'image' && imageUrl && !this.isValidImageUrl(imageUrl)) {
    return (
      <div style={{
        backgroundColor: '#d13438',
        color: 'white',
        padding: '12px 16px',
        borderRadius: this.getShapeRadius(titleSettings.shape),
        marginBottom: '16px'
      }}>
        <div style={{ fontWeight: 'bold' }}>Bad image</div>
        <div style={{ fontSize: '12px' }}>Invalid image file format: {imageUrl}</div>
      </div>
    );
  }
  
  return (
    <>
      <div style={this.getTitleStyle()}>
        {webPartTitle}
      </div>
      {showDivider && (
        <div style={{
          height: '1px',
          backgroundColor: '#e1dfdd',
          marginBottom: '16px'
        }} />
      )}
    </>
  );
}
```

### **Phase 4: Integration**
**File**: `src/webparts/fancyList/components/FancyList.tsx`

#### **4.1 Update Render Method**
```typescript
public render(): React.ReactElement<IFancyListProps> {
  const { loading, error, categories, selectedCategory, expandedItems } = this.state;
  const filteredItems = this.getFilteredItems();

  if (loading) {
    return (
      <div className={styles.fancyList}>
        {this.renderTitle()}
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.fancyList}>
        {this.renderTitle()}
        <div className={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={styles.fancyList}>
      {this.renderTitle()}
      {/* Existing category filters and items rendering */}
    </div>
  );
}
```

### **Phase 5: Update Web Part Props**
**File**: `src/webparts/fancyList/FancyListWebPart.ts`

#### **5.1 Update Render Method**
```typescript
public render(): void {
  const element: React.ReactElement<IFancyListProps> = React.createElement(FancyList, {
    selectedListId: this.properties.selectedListId,
    categoryField: this.properties.categoryField,
    subjectField: this.properties.subjectField,
    descriptionField: this.properties.descriptionField,
    showAllCategories: this.properties.showAllCategories,
    defaultExpanded: this.properties.defaultExpanded,
    isDarkTheme: this._isDarkTheme,
    environmentMessage: this._environmentMessage,
    hasTeamsContext: !!this.context.sdks.microsoftTeams,
    userDisplayName: this.context.pageContext.user.displayName,
    context: this.context,
    // Add title settings
    titleSettings: this.properties.titleSettings
  });

  ReactDom.render(element, this.domElement);
}
```

## 🎯 **SUCCESS CRITERIA**
- [ ] Title renders when enabled, hidden when disabled
- [ ] All background types work (solid, gradient, image)
- [ ] Shape controls apply correct border-radius
- [ ] Transparency applies only to background
- [ ] Gradient uses actual colors (not preview)
- [ ] Invalid image URLs show red background with error message
- [ ] Font styling works (family, size, color, formatting)
- [ ] Divider shows/hides based on setting
- [ ] Real-time updates when settings change

## 📊 **IMPLEMENTATION STATUS**
- **Phase 1**: 🔄 **IN PROGRESS** - Update Props Interface
- **Phase 2**: ⏳ **PENDING** - Add Utility Functions
- **Phase 3**: ⏳ **PENDING** - Add Title Rendering Logic
- **Phase 4**: ⏳ **PENDING** - Integration
- **Phase 5**: ⏳ **PENDING** - Update Web Part Props

## 📝 **CLARIFYING QUESTIONS & ANSWERS**

### **Question 1: ENABLED TOGGLE BEHAVIOR**
**Answer: Option A** ✅
- **Behavior**: Completely hide the title (no space taken up)

### **Question 2: SHAPE CONTROL SCOPE**
**Answer: Option A** ✅
- **Behavior**: Apply shape (border-radius) to the entire title background container

### **Question 3: TRANSPARENCY BEHAVIOR**
**Answer: Option A** ✅
- **Behavior**: Apply transparency to the background only

### **Question 4: GRADIENT PREVIEW INTEGRATION**
**Answer: Option B** ✅
- **Behavior**: Use the actual gradient colors that the user selected (not the preview colors)

### **Question 5: ERROR HANDLING**
**Answer: Option D** ✅
- **Behavior**: Only error if URL is not an actual image file (e.g., title.jp instead of title.jpg)
- **Fallback**: Show red background with "Bad image" message

---

**Document Created**: July 26, 2025
**Status**: Ready for implementation 