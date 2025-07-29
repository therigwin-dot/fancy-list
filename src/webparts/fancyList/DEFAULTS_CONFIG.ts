import { TitleSettings, FilterSettings } from './FancyListWebPart';

export const DEFAULTS_CONFIG = {
  // Page 1: List Configuration Defaults
  listConfiguration: {
    selectedListId: '',
    categoryField: '',
    subjectField: '',
    descriptionField: '',
    showAllCategories: true,
    defaultExpanded: false
  },

  // Page 2: Title Settings
  titleSettings: {
    resetButtonText: "Reset Title Formatting",
    testValuesButtonText: "Test Values",
    description: 'Customize the web parts title text, font, color, background, and shape settings. Use the reset button to put the default look and feel back in place. Use the Back and Next buttons to switch to a different configuration page.',
    enabled: true,
    webPartTitle: '',
    font: {
      family: 'inherit',
      size: '24px',
      color: '#323130',
      formatting: { bold: false, italic: false, underline: false, strikethrough: false },
      alignment: 'left'
    },
    background: {
      type: 'solid' as const,
      color: '#ffffff',
      alpha: 0,
      image: '',
      imageAlpha: 0,
      gradientDirection: 'left-right',
      gradientColor1: '#ffffff',
      gradientAlpha1: 0,
      gradientColor2: '#0f46d1',
      gradientAlpha2: 0
    },
    shape: 'rounded' as const,
    divideSpace: 0,
    // Test Values for Title Section
    testValues: {
      webPartTitle: 'Testing Fancy List',
      font: {
        family: 'Arial',
        size: '32px',
        color: '#ff0000',
        formatting: { bold: true, italic: true, underline: true, strikethrough: false },
        alignment: 'center'
      },
      background: {
        type: 'gradient' as const,
        color: '#ffffff',
        alpha: 50,
        image: '',
        imageAlpha: 0,
        gradientDirection: 'top-bottom',
        gradientColor1: '#ff0000',
        gradientAlpha1: 80,
        gradientColor2: '#00ff00',
        gradientAlpha2: 60
      },
      shape: 'pill' as const,
      divideSpace: 4
    }
  } as TitleSettings,

  // Page 3: Filter Settings
  filterSettings: {
    resetButtonText: "Reset Filter Formatting",
    testValuesButtonText: "Test Values",
    description: "Use this to customise the look and feel of your filters for your list. From colors to shape and size. The reset button will trigger it back to defaults. You can also use the Enable toggle to completely remove and disable this part.",
    enableFilters: true,
    showAllCategories: true,
    font: {
      family: 'inherit',
      size: '12px',
      formatting: { bold: false, italic: false, underline: false, strikethrough: false },
      alignment: 'center'
    },
    activeColors: {
      background: '#0078d4',
      font: '#ffffff'
    },
    inactiveColors: {
      background: '#f3f2f1',
      font: '#323130'
    },
    shape: 'pill' as const,
    backgroundShape: 'rounded' as const,
    defaultFilterSelection: 'All',
    background: {
      type: 'solid' as const,
      color: '#ffffff',
      alpha: 0,
      image: '',
      imageAlpha: 0,
      gradientDirection: 'left-right',
      gradientColor1: '#ffffff',
      gradientAlpha1: 0,
      gradientColor2: '#0f46d1',
      gradientAlpha2: 0
    },
    divideSpace: 0,
    // Test Values for Filter Section
    testValues: {
      font: {
        family: 'Comic Sans MS',
        size: '16px',
        formatting: { bold: true, italic: false, underline: true, strikethrough: false },
        alignment: 'right'
      },
      activeColors: {
        background: '#ff6600',
        font: '#ffffff'
      },
      inactiveColors: {
        background: '#ffff00',
        font: '#000000'
      },
      shape: 'square' as const,
      backgroundShape: 'pill' as const,
      defaultFilterSelection: 'Uncategorized',
      background: {
        type: 'gradient' as const,
        color: '#ffffff',
        alpha: 30,
        image: '',
        imageAlpha: 0,
        gradientDirection: 'diagonal',
        gradientColor1: '#ff00ff',
        gradientAlpha1: 70,
        gradientColor2: '#00ffff',
        gradientAlpha2: 50
      },
      divideSpace: 4
    }
  } as FilterSettings,

  // Page 4: Category Section Settings
  categorySectionSettings: {
    sectionType: 'category' as const,
    resetButtonText: "Reset Category Formatting",
    testValuesButtonText: "Test Values",
    description: "Customize the appearance of category sections including font, colors, shape, background, and icon settings.",
    font: {
      family: 'inherit',
      size: '18px',
      color: '#323130',
      formatting: { bold: true, italic: false, underline: false, strikethrough: false },
      alignment: 'left'
    },
    background: {
      type: 'solid' as const,
      color: '#f3f2f1',
      alpha: 0.8,
      image: '',
      imageAlpha: 0,
      gradientDirection: 'left-right',
      gradientColor1: '#f3f2f1',
      gradientAlpha1: 0.8,
      gradientColor2: '#e1dfdd',
      gradientAlpha2: 0.6
    },
    shape: 'rounded' as const,
    autoExpand: false,
    hoverColor: '#f3f2f1',
    iconSettings: {
      enabled: true,
      iconPosition: 'left' as const,
      collapsedIcon: '▶',
      expandedIcon: '▼'
    },
    // Test Values for Category Section
    testValues: {
      font: {
        family: 'Impact',
        size: '24px',
        color: '#0000ff',
        formatting: { bold: true, italic: true, underline: false, strikethrough: true },
        alignment: 'center'
      },
      background: {
        type: 'gradient' as const,
        color: '#f3f2f1',
        alpha: 60,
        image: '',
        imageAlpha: 0,
        gradientDirection: 'radial',
        gradientColor1: '#ff0000',
        gradientAlpha1: 90,
        gradientColor2: '#00ff00',
        gradientAlpha2: 40
      },
      shape: 'pill' as const,
      autoExpand: true,
      hoverColor: '#ff0000',
      iconSettings: {
        enabled: true,
        iconPosition: 'right' as const,
        collapsedIcon: '🔽',
        expandedIcon: '🔼'
      }
    }
  },

  // Page 5: Subject Section Settings
  subjectSectionSettings: {
    sectionType: 'subject' as const,
    resetButtonText: "Reset Subject Formatting",
    testValuesButtonText: "Test Values",
    description: "Customize the appearance of subject sections including font, colors, shape, background, and icon settings.",
    font: {
      family: 'inherit',
      size: '16px',
      color: '#323130',
      formatting: { bold: false, italic: false, underline: false, strikethrough: false },
      alignment: 'left'
    },
    background: {
      type: 'solid' as const,
      color: '#ffffff',
      alpha: 0,
      image: '',
      imageAlpha: 0,
      gradientDirection: 'left-right',
      gradientColor1: '#ffffff',
      gradientAlpha1: 0,
      gradientColor2: '#f3f2f1',
      gradientAlpha2: 0.3
    },
    shape: 'rounded' as const,
    showDivider: false,
    autoExpand: false,
    hoverColor: '#faf9f8',
    iconSettings: {
      enabled: true,
      iconPosition: 'left' as const,
      collapsedIcon: '▶',
      expandedIcon: '▼'
    },
    // Test Values for Subject Section
    testValues: {
      font: {
        family: 'Courier New',
        size: '20px',
        color: '#ff6600',
        formatting: { bold: false, italic: true, underline: true, strikethrough: false },
        alignment: 'right'
      },
      background: {
        type: 'solid' as const,
        color: '#ffffcc',
        alpha: 70,
        image: '',
        imageAlpha: 0,
        gradientDirection: 'left-right',
        gradientColor1: '#ffffcc',
        gradientAlpha1: 70,
        gradientColor2: '#ffcc99',
        gradientAlpha2: 50
      },
      shape: 'square' as const,
      showDivider: true,
      autoExpand: true,
      hoverColor: '#ffcc99',
      iconSettings: {
        enabled: true,
        iconPosition: 'right' as const,
        collapsedIcon: '📁',
        expandedIcon: '📂'
      }
    }
  },

  // Page 6: Description Section Settings
  descriptionSectionSettings: {
    sectionType: 'description' as const,
    resetButtonText: "Reset Description Formatting",
    testValuesButtonText: "Test Values",
    description: "Customize the appearance of description sections including font, colors, shape, and background settings.",
    font: {
      family: 'inherit',
      size: '14px',
      color: '#605e5c',
      formatting: { bold: false, italic: false, underline: false, strikethrough: false },
      alignment: 'left'
    },
    background: {
      type: 'solid' as const,
      color: '#ffffff',
      alpha: 0,
      image: '',
      imageAlpha: 0,
      gradientDirection: 'left-right',
      gradientColor1: '#ffffff',
      gradientAlpha1: 0,
      gradientColor2: '#faf9f8',
      gradientAlpha2: 0.5
    },
    shape: 'rounded' as const,
    showDivider: false,
    autoExpand: false,
    hoverColor: '#faf9f8',
    iconSettings: {
      enabled: false,
      iconPosition: 'left' as const,
      collapsedIcon: '▶',
      expandedIcon: '▼'
    },
    // Test Values for Description Section
    testValues: {
      font: {
        family: 'Georgia',
        size: '18px',
        color: '#9932cc',
        formatting: { bold: true, italic: false, underline: false, strikethrough: true },
        alignment: 'justify'
      },
      background: {
        type: 'image' as const,
        color: '#ffffff',
        alpha: 20,
        image: 'https://via.placeholder.com/400x200/cccccc/666666?text=Test+Background',
        imageAlpha: 80,
        gradientDirection: 'left-right',
        gradientColor1: '#ffffff',
        gradientAlpha1: 20,
        gradientColor2: '#faf9f8',
        gradientAlpha2: 50
      },
      shape: 'pill' as const,
      showDivider: true,
      autoExpand: true,
      hoverColor: '#e6ccff',
      iconSettings: {
        enabled: false,
        iconPosition: 'left' as const,
        collapsedIcon: '▶',
        expandedIcon: '▼'
      }
    }
  },

  // Page 7: About Information
  aboutInfo: {
    version: '1.0.0.0',
    description: 'Beta Basic Version - Display items from any SharePoint list or library with category filtering and collapsible panels',
    userStory: 'As a site owner, I want to configure a custom web part that displays items from any SharePoint list or document library with comprehensive styling options including customizable collapse/expand icons and intelligent document attachment support, so that I can organize content by categories and present subjects with rich descriptions and associated files in an engaging, collapsible layout that adapts to my site\'s theme or custom styling preferences.',
    features: [
      'Category filtering with collapsible panels',
      'Only Individual Elements mode for styling (all other modes removed)',
      'Intelligent document attachment support',
      'Responsive design with theme integration',
      'Customizable icons and styling options'
    ]
  },

  // Structured Testing Values for Test Defaults Button
  TESTING_VALUES: [
    // Page 1: List Selection & Configuration
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
    },

    // Page 2: Title Configuration
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
    },

    // Page 3: Filter Settings
    {
      page: 3,
      section: "Filter Settings",
      controls: [
        {
          control: "enableFilters",
          value: false,
          description: "Disable filters for testing",
          timing: 500,
          dependency: null
        },
        {
          control: "showAllCategories",
          value: false,
          description: "Show only one category for testing",
          timing: 500,
          dependency: "enableFilters"
        },
        {
          control: "filterFontFamily",
          value: "Arial",
          description: "Set filter font to Arial (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterFontSize",
          value: "14px",
          description: "Set filter font size to 14px (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterFontColor",
          value: "#000000", // Dark black
          description: "Set filter font color to dark black (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterFontBold",
          value: true,
          description: "Set filter to bold (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterFontItalic",
          value: true,
          description: "Set filter to italic (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterFontUnderline",
          value: true,
          description: "Set filter to underline (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterFontStrikethrough",
          value: false,
          description: "Set filter strikethrough to false",
          timing: 500,
          dependency: null
        },
        {
          control: "filterFontAlignment",
          value: "center",
          description: "Set filter alignment to center (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterActiveBackgroundColor",
          value: "#FF0000", // Bright red
          description: "Set active filter background to bright red (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterActiveFontColor",
          value: "#FFFFFF", // White
          description: "Set active filter font to white (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterInactiveBackgroundColor",
          value: "#F3F2F1", // Light gray
          description: "Set inactive filter background to light gray (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterInactiveFontColor",
          value: "#323130", // Dark gray
          description: "Set inactive filter font to dark gray (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterShape",
          value: "pill",
          description: "Set filter shape to pill (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterBackgroundShape",
          value: "rounded",
          description: "Set filter background shape to rounded (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "filterDefaultSelection",
          value: "Category A",
          description: "Set default filter selection to Category A",
          timing: 500,
          dependency: null
        },
        {
          control: "filterBackgroundType",
          value: "solid",
          description: "Set filter background type to solid (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "filterBackgroundColor",
          value: "#00FF00", // Bright green
          description: "Set solid filter background to bright green",
          timing: 500,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterBackgroundAlpha",
          value: 75,
          description: "Set filter background transparency to 75%",
          timing: 500,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterBackgroundType",
          value: "gradient",
          description: "Set filter background type to gradient (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "filterGradientDirection",
          value: "left-right",
          description: "Set filter gradient direction to left-right",
          timing: 500,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterGradientColor1",
          value: "#FF0000", // Bright red
          description: "Set filter gradient color 1 to bright red",
          timing: 500,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterGradientColor2",
          value: "#0000FF", // Bright blue
          description: "Set filter gradient color 2 to bright blue",
          timing: 500,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterGradientAlpha",
          value: 50,
          description: "Set filter gradient transparency to 50%",
          timing: 500,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterBackgroundType",
          value: "image",
          description: "Set filter background type to image (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "filterBackgroundImage",
          value: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
          description: "Set good filter image URL for testing",
          timing: 1000,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterBackgroundImage",
          value: "https://invalid-test-url.com/image.jpg",
          description: "Set bad filter image URL for error testing",
          timing: 1000,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterBackgroundImage",
          value: "",
          description: "Set blank filter image URL for error testing",
          timing: 1000,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterBackgroundImage",
          value: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
          description: "Restore good filter image URL",
          timing: 1000,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterBackgroundImageAlpha",
          value: 25,
          description: "Set filter image transparency to 25%",
          timing: 500,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterBackgroundType",
          value: "solid",
          description: "Set final filter background type to solid for Page 3",
          timing: 1000,
          dependency: null
        },
        {
          control: "filterBackgroundColor",
          value: "#00FF00", // Bright green
          description: "Set final solid filter background color",
          timing: 500,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterBackgroundAlpha",
          value: 75,
          description: "Set final filter background transparency",
          timing: 500,
          dependency: "filterBackgroundType"
        },
        {
          control: "filterShape",
          value: "pill",
          description: "Set final filter shape to pill",
          timing: 500,
          dependency: null
        },
        {
          control: "showFilterDivider",
          value: true,
          description: "Show filter divider (visually distinct)",
          timing: 500,
          dependency: null
        }
      ]
    },

    // Page 4: Category Section Settings
    {
      page: 4,
      section: "Category Section Settings",
      controls: [
        {
          control: "sectionType",
          value: "subject",
          description: "Change section type to subject",
          timing: 500,
          dependency: null
        },
        {
          control: "resetButtonText",
          value: "Reset Subject Formatting",
          description: "Reset subject section formatting",
          timing: 500,
          dependency: "sectionType"
        },
        {
          control: "description",
          value: "Customize the appearance of subject sections including font, colors, shape, background, and icon settings.",
          description: "Set description for subject section",
          timing: 500,
          dependency: "sectionType"
        },
        {
          control: "fontFamily",
          value: "Arial",
          description: "Set subject font to Arial (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "fontSize",
          value: "16px",
          description: "Set subject font size to 16px (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "fontColor",
          value: "#323130",
          description: "Set subject font color to dark gray (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "fontBold",
          value: false,
          description: "Set subject to not bold",
          timing: 500,
          dependency: null
        },
        {
          control: "fontItalic",
          value: false,
          description: "Set subject to not italic",
          timing: 500,
          dependency: null
        },
        {
          control: "fontUnderline",
          value: false,
          description: "Set subject to not underline",
          timing: 500,
          dependency: null
        },
        {
          control: "fontStrikethrough",
          value: false,
          description: "Set subject to not strikethrough",
          timing: 500,
          dependency: null
        },
        {
          control: "fontAlignment",
          value: "left",
          description: "Set subject alignment to left",
          timing: 500,
          dependency: null
        },
        {
          control: "backgroundType",
          value: "solid",
          description: "Set subject background type to solid (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "backgroundColor",
          value: "#ffffff",
          description: "Set solid subject background to white",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundAlpha",
          value: 0,
          description: "Set subject background transparency to 0%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundType",
          value: "gradient",
          description: "Set subject background type to gradient (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "gradientDirection",
          value: "top-bottom",
          description: "Set subject gradient direction to top-bottom",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientColor1",
          value: "#f3f2f1",
          description: "Set subject gradient color 1 to light gray",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientAlpha1",
          value: 0.8,
          description: "Set subject gradient transparency 1 to 80%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientColor2",
          value: "#e1dfdd",
          description: "Set subject gradient color 2 to dark gray",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientAlpha2",
          value: 0.6,
          description: "Set subject gradient transparency 2 to 60%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundType",
          value: "image",
          description: "Set subject background type to image (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "backgroundImage",
          value: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
          description: "Set good subject image URL for testing",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImage",
          value: "https://invalid-test-url.com/image.jpg",
          description: "Set bad subject image URL for error testing",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImage",
          value: "",
          description: "Set blank subject image URL for error testing",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImage",
          value: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
          description: "Restore good subject image URL",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImageAlpha",
          value: 0,
          description: "Set subject image transparency to 0%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundType",
          value: "solid",
          description: "Set final subject background type to solid for Page 4",
          timing: 1000,
          dependency: null
        },
        {
          control: "backgroundColor",
          value: "#ffffff",
          description: "Set final solid subject background color",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundAlpha",
          value: 0,
          description: "Set final subject background transparency",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "shape",
          value: "rounded",
          description: "Set final subject shape to rounded",
          timing: 500,
          dependency: null
        },
        {
          control: "showCategoryDivider",
          value: true,
          description: "Show category divider (visually distinct)",
          timing: 500,
          dependency: null
        }
      ]
    },

    // Page 5: Subject Section Settings
    {
      page: 5,
      section: "Subject Section Settings",
      controls: [
        {
          control: "sectionType",
          value: "description",
          description: "Change section type to description",
          timing: 500,
          dependency: null
        },
        {
          control: "resetButtonText",
          value: "Reset Description Formatting",
          description: "Reset description section formatting",
          timing: 500,
          dependency: "sectionType"
        },
        {
          control: "description",
          value: "Customize the appearance of description sections including font, colors, shape, and background settings.",
          description: "Set description for description section",
          timing: 500,
          dependency: "sectionType"
        },
        {
          control: "fontFamily",
          value: "Arial",
          description: "Set description font to Arial (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "fontSize",
          value: "14px",
          description: "Set description font size to 14px (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "fontColor",
          value: "#605e5c",
          description: "Set description font color to dark gray (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "fontBold",
          value: false,
          description: "Set description to not bold",
          timing: 500,
          dependency: null
        },
        {
          control: "fontItalic",
          value: false,
          description: "Set description to not italic",
          timing: 500,
          dependency: null
        },
        {
          control: "fontUnderline",
          value: false,
          description: "Set description to not underline",
          timing: 500,
          dependency: null
        },
        {
          control: "fontStrikethrough",
          value: false,
          description: "Set description to not strikethrough",
          timing: 500,
          dependency: null
        },
        {
          control: "fontAlignment",
          value: "left",
          description: "Set description alignment to left",
          timing: 500,
          dependency: null
        },
        {
          control: "backgroundType",
          value: "solid",
          description: "Set description background type to solid (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "backgroundColor",
          value: "#ffffff",
          description: "Set solid description background to white",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundAlpha",
          value: 0,
          description: "Set description background transparency to 0%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundType",
          value: "gradient",
          description: "Set description background type to gradient (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "gradientDirection",
          value: "left-right",
          description: "Set description gradient direction to left-right",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientColor1",
          value: "#ffffff",
          description: "Set description gradient color 1 to white",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientAlpha1",
          value: 0,
          description: "Set description gradient transparency 1 to 0%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientColor2",
          value: "#faf9f8",
          description: "Set description gradient color 2 to light gray",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientAlpha2",
          value: 0.5,
          description: "Set description gradient transparency 2 to 50%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundType",
          value: "image",
          description: "Set description background type to image (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "backgroundImage",
          value: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
          description: "Set good description image URL for testing",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImage",
          value: "https://invalid-test-url.com/image.jpg",
          description: "Set bad description image URL for error testing",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImage",
          value: "",
          description: "Set blank description image URL for error testing",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImage",
          value: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
          description: "Restore good description image URL",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImageAlpha",
          value: 0,
          description: "Set description image transparency to 0%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundType",
          value: "solid",
          description: "Set final description background type to solid for Page 5",
          timing: 1000,
          dependency: null
        },
        {
          control: "backgroundColor",
          value: "#ffffff",
          description: "Set final solid description background color",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundAlpha",
          value: 0,
          description: "Set final description background transparency",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "shape",
          value: "rounded",
          description: "Set final description shape to rounded",
          timing: 500,
          dependency: null
        },
        {
          control: "showSubjectDivider",
          value: false,
          description: "Show subject divider (visually distinct)",
          timing: 500,
          dependency: null
        }
      ]
    },

    // Page 6: Description Section Settings
    {
      page: 6,
      section: "Description Section Settings",
      controls: [
        {
          control: "sectionType",
          value: "description",
          description: "Change section type to description",
          timing: 500,
          dependency: null
        },
        {
          control: "resetButtonText",
          value: "Reset Description Formatting",
          description: "Reset description section formatting",
          timing: 500,
          dependency: "sectionType"
        },
        {
          control: "description",
          value: "Customize the appearance of description sections including font, colors, shape, and background settings.",
          description: "Set description for description section",
          timing: 500,
          dependency: "sectionType"
        },
        {
          control: "fontFamily",
          value: "Arial",
          description: "Set description font to Arial (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "fontSize",
          value: "14px",
          description: "Set description font size to 14px (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "fontColor",
          value: "#605e5c",
          description: "Set description font color to dark gray (visually distinct)",
          timing: 500,
          dependency: null
        },
        {
          control: "fontBold",
          value: false,
          description: "Set description to not bold",
          timing: 500,
          dependency: null
        },
        {
          control: "fontItalic",
          value: false,
          description: "Set description to not italic",
          timing: 500,
          dependency: null
        },
        {
          control: "fontUnderline",
          value: false,
          description: "Set description to not underline",
          timing: 500,
          dependency: null
        },
        {
          control: "fontStrikethrough",
          value: false,
          description: "Set description to not strikethrough",
          timing: 500,
          dependency: null
        },
        {
          control: "fontAlignment",
          value: "left",
          description: "Set description alignment to left",
          timing: 500,
          dependency: null
        },
        {
          control: "backgroundType",
          value: "solid",
          description: "Set description background type to solid (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "backgroundColor",
          value: "#ffffff",
          description: "Set solid description background to white",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundAlpha",
          value: 0,
          description: "Set description background transparency to 0%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundType",
          value: "gradient",
          description: "Set description background type to gradient (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "gradientDirection",
          value: "left-right",
          description: "Set description gradient direction to left-right",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientColor1",
          value: "#ffffff",
          description: "Set description gradient color 1 to white",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientAlpha1",
          value: 0,
          description: "Set description gradient transparency 1 to 0%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientColor2",
          value: "#faf9f8",
          description: "Set description gradient color 2 to light gray",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "gradientAlpha2",
          value: 0.5,
          description: "Set description gradient transparency 2 to 50%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundType",
          value: "image",
          description: "Set description background type to image (visually distinct)",
          timing: 1000,
          dependency: null
        },
        {
          control: "backgroundImage",
          value: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
          description: "Set good description image URL for testing",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImage",
          value: "https://invalid-test-url.com/image.jpg",
          description: "Set bad description image URL for error testing",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImage",
          value: "",
          description: "Set blank description image URL for error testing",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImage",
          value: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
          description: "Restore good description image URL",
          timing: 1000,
          dependency: "backgroundType"
        },
        {
          control: "backgroundImageAlpha",
          value: 0,
          description: "Set description image transparency to 0%",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundType",
          value: "solid",
          description: "Set final description background type to solid for Page 6",
          timing: 1000,
          dependency: null
        },
        {
          control: "backgroundColor",
          value: "#ffffff",
          description: "Set final solid description background color",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "backgroundAlpha",
          value: 0,
          description: "Set final description background transparency",
          timing: 500,
          dependency: "backgroundType"
        },
        {
          control: "shape",
          value: "rounded",
          description: "Set final description shape to rounded",
          timing: 500,
          dependency: null
        },
        {
          control: "showDescriptionDivider",
          value: false,
          description: "Show description divider (visually distinct)",
          timing: 500,
          dependency: null
        }
      ]
    },

    // Page 7: About Information
    {
      page: 7,
      section: "About Information",
      controls: [
        {
          control: "version",
          value: "1.0.0.0",
          description: "Set version to 1.0.0.0",
          timing: 500,
          dependency: null
        },
        {
          control: "description",
          value: "Beta Basic Version - Display items from any SharePoint list or library with category filtering and collapsible panels",
          description: "Set description for about info",
          timing: 500,
          dependency: null
        },
        {
          control: "userStory",
          value: "As a site owner, I want to configure a custom web part that displays items from any SharePoint list or document library with comprehensive styling options including customizable collapse/expand icons and intelligent document attachment support, so that I can organize content by categories and present subjects with rich descriptions and associated files in an engaging, collapsible layout that adapts to my site\'s theme or custom styling preferences.",
          description: "Set user story for about info",
          timing: 500,
          dependency: null
        },
        {
          control: "features",
          value: [
            "Category filtering with collapsible panels",
            "Only Individual Elements mode for styling (all other modes removed)",
            "Intelligent document attachment support",
            "Responsive design with theme integration",
            "Customizable icons and styling options"
          ],
          description: "Set features for about info",
          timing: 500,
          dependency: null
        }
      ]
    }
  ]
};

export default DEFAULTS_CONFIG; 