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
    description: 'Customize the web parts title text, font, color, background, and shape settings. Use the reset button to put the default look and feel back in place. Use the Back and Next buttons to switch to a different configuration page.',
    webPartTitle: 'Fancy List',
    font: {
      family: 'Segoe UI',
      size: '24px',
      color: '#323130',
      formatting: { bold: false, italic: false, underline: false, strikethrough: false }
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
    showDivider: false
  } as TitleSettings,

  // Page 3: Filter Settings
  filterSettings: {
    resetButtonText: "Reset Filter Formatting",
    description: "Use this to customise the look and feel of your filters for your list. From colors to shape and size. The reset button will trigger it back to defaults. You can also use the Enable toggle to completely remove and disable this part.",
    enableFilters: true,
    showAllCategories: true,
    font: {
      family: 'Segoe UI',
      size: '12px',
      formatting: { bold: false, italic: false, underline: false, strikethrough: false }
    },
    activeColors: {
      background: '#0078d4',
      font: '#fff'
    },
    inactiveColors: {
      background: '#f3f2f1',
      font: '#323130'
    },
    shape: 'pill' as const,
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
    showDivider: false
  } as FilterSettings,

  // Page 4: Category Section Settings
  categorySettings: {
    resetButtonText: "Reset Category Formatting",
    description: "Customize the appearance of category sections including font, colors, spacing, and background settings.",
    font: {
      family: 'Segoe UI',
      size: '18px',
      color: '#323130',
      formatting: { bold: true, italic: false, underline: false, strikethrough: false }
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
    spacing: {
      padding: '12px',
      margin: '8px 0',
      borderRadius: '4px'
    },
    showDivider: true
  },

  // Page 5: Subject Section Settings
  subjectSettings: {
    resetButtonText: "Reset Subject Formatting",
    description: "Customize the appearance of subject sections including font, colors, spacing, and background settings.",
    font: {
      family: 'Segoe UI',
      size: '16px',
      color: '#323130',
      formatting: { bold: false, italic: false, underline: false, strikethrough: false }
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
    spacing: {
      padding: '8px',
      margin: '4px 0',
      borderRadius: '2px'
    },
    showDivider: false
  },

  // Page 6: Description Section Settings
  descriptionSettings: {
    resetButtonText: "Reset Description Formatting",
    description: "Customize the appearance of description sections including font, colors, spacing, and background settings.",
    font: {
      family: 'Segoe UI',
      size: '14px',
      color: '#605e5c',
      formatting: { bold: false, italic: false, underline: false, strikethrough: false }
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
    spacing: {
      padding: '12px',
      margin: '8px 0',
      borderRadius: '4px'
    },
    showDivider: true
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
  }
};

export default DEFAULTS_CONFIG; 