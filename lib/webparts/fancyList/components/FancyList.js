var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import styles from './FancyList.module.scss';
import { SPHttpClient } from '@microsoft/sp-http';
var FancyList = /** @class */ (function (_super) {
    __extends(FancyList, _super);
    function FancyList(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        _this.userHasManuallySelected = false; // Track if user has manually selected
        _this.handleCategoryClick = function (category) {
            var _a;
            console.log('🔍 Filter Debug - Runtime Mode: User Click:', {
                clickedCategory: category,
                currentSelected: _this.state.selectedCategory,
                defaultSelection: (_a = _this.props.filterSettings) === null || _a === void 0 ? void 0 : _a.defaultFilterSelection,
                mode: 'RUNTIME',
                willUpdateState: category !== _this.state.selectedCategory
            });
            // RUNTIME MODE: Mark that user has manually selected
            _this.userHasManuallySelected = true;
            _this.setState({ selectedCategory: category }, function () {
                console.log('🔍 Filter Debug - Runtime State Updated:', {
                    newSelectedCategory: _this.state.selectedCategory,
                    expectedCategory: category,
                    stateUpdated: _this.state.selectedCategory === category,
                    userHasManuallySelected: _this.userHasManuallySelected
                });
            });
        };
        _this.handleItemToggle = function (itemId) {
            var newExpandedItems = new Set(_this.state.expandedItems);
            if (newExpandedItems.has(itemId)) {
                newExpandedItems.delete(itemId);
            }
            else {
                newExpandedItems.add(itemId);
            }
            _this.setState({ expandedItems: newExpandedItems });
        };
        _this.handleCategoryToggle = function (category) {
            var newExpandedCategories = new Set(_this.state.expandedCategories);
            if (newExpandedCategories.has(category)) {
                newExpandedCategories.delete(category);
            }
            else {
                newExpandedCategories.add(category);
            }
            _this.setState({ expandedCategories: newExpandedCategories });
        };
        // Handle defaultFilterSelection with proper case handling
        var initialCategory = 'all';
        if ((_a = props.filterSettings) === null || _a === void 0 ? void 0 : _a.defaultFilterSelection) {
            var selection = props.filterSettings.defaultFilterSelection;
            if (selection.toLowerCase() === 'all') {
                initialCategory = 'all';
            }
            else {
                // For specific categories, we'll set it to lowercase for now
                // The actual matching will happen when categories are loaded
                initialCategory = selection.toLowerCase();
            }
        }
        _this.state = {
            items: [],
            categories: [],
            selectedCategory: initialCategory,
            expandedItems: new Set(), // For subject expansion within categories
            expandedCategories: new Set(), // For category expansion
            loading: false,
            error: '',
            titleImageError: false,
            titleImageValidationError: null,
            titleImageLoadError: false,
            filterImageValidationError: null,
            filterImageLoadError: false
        };
        console.log('🔍 Filter Debug - Constructor:', {
            initialCategory: initialCategory,
            defaultFilterSelection: (_b = props.filterSettings) === null || _b === void 0 ? void 0 : _b.defaultFilterSelection,
            filterSettings: props.filterSettings
        });
        return _this;
    }
    FancyList.prototype.componentDidMount = function () {
        this.loadListData();
        this.checkTitleImage();
        this.checkFilterImage();
    };
    FancyList.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        if (prevProps.selectedListId !== this.props.selectedListId ||
            prevProps.categoryField !== this.props.categoryField ||
            prevProps.subjectField !== this.props.subjectField ||
            prevProps.descriptionField !== this.props.descriptionField) {
            this.loadListData();
        }
        // Update selected category when defaultFilterSelection changes
        if (((_a = prevProps.filterSettings) === null || _a === void 0 ? void 0 : _a.defaultFilterSelection) !== ((_b = this.props.filterSettings) === null || _b === void 0 ? void 0 : _b.defaultFilterSelection)) {
            console.log('🔍 Filter Debug - Default Selection Changed:', {
                prevDefault: (_c = prevProps.filterSettings) === null || _c === void 0 ? void 0 : _c.defaultFilterSelection,
                currentDefault: (_d = this.props.filterSettings) === null || _d === void 0 ? void 0 : _d.defaultFilterSelection,
                currentSelected: this.state.selectedCategory,
                availableCategories: this.state.categories,
                userHasManuallySelected: this.userHasManuallySelected
            });
            // CONFIGURATION MODE: Reset manual selection flag and apply new default immediately
            this.userHasManuallySelected = false;
            var newCategory_1 = 'all';
            if ((_e = this.props.filterSettings) === null || _e === void 0 ? void 0 : _e.defaultFilterSelection) {
                var selection_1 = this.props.filterSettings.defaultFilterSelection;
                if (selection_1.toLowerCase() === 'all') {
                    newCategory_1 = 'all';
                }
                else {
                    // Find the exact case match from available categories
                    var exactMatch = this.state.categories.find(function (cat) {
                        return cat.toLowerCase() === selection_1.toLowerCase();
                    });
                    newCategory_1 = exactMatch || selection_1.toLowerCase();
                }
            }
            console.log('🔍 Filter Debug - Configuration Mode: Applying New Default:', {
                newCategory: newCategory_1,
                selection: (_f = this.props.filterSettings) === null || _f === void 0 ? void 0 : _f.defaultFilterSelection,
                exactMatch: this.state.categories.find(function (cat) { var _a; return cat.toLowerCase() === (((_a = _this.props.filterSettings) === null || _a === void 0 ? void 0 : _a.defaultFilterSelection) || '').toLowerCase(); }),
                mode: 'CONFIGURATION',
                willUpdateState: newCategory_1 !== this.state.selectedCategory
            });
            // Force immediate state update for configuration changes
            this.setState({ selectedCategory: newCategory_1 }, function () {
                console.log('🔍 Filter Debug - State Updated:', {
                    newSelectedCategory: _this.state.selectedCategory,
                    expectedCategory: newCategory_1,
                    stateUpdated: _this.state.selectedCategory === newCategory_1
                });
            });
        }
        // Also check if categories changed and we need to update selectedCategory
        if (!this.userHasManuallySelected &&
            ((_g = prevProps.filterSettings) === null || _g === void 0 ? void 0 : _g.defaultFilterSelection) === ((_h = this.props.filterSettings) === null || _h === void 0 ? void 0 : _h.defaultFilterSelection) &&
            ((_j = this.props.filterSettings) === null || _j === void 0 ? void 0 : _j.defaultFilterSelection) &&
            this.props.filterSettings.defaultFilterSelection.toLowerCase() !== 'all') {
            var selection_2 = this.props.filterSettings.defaultFilterSelection;
            var exactMatch = this.state.categories.find(function (cat) {
                return cat.toLowerCase() === selection_2.toLowerCase();
            });
            if (exactMatch && this.state.selectedCategory !== exactMatch) {
                console.log('🔍 Filter Debug - Applying Default Logic:', {
                    selection: selection_2,
                    exactMatch: exactMatch,
                    currentSelected: this.state.selectedCategory,
                    userHasManuallySelected: this.userHasManuallySelected
                });
                this.setState({ selectedCategory: exactMatch });
            }
        }
        // Refresh expanded state when defaultExpanded changes
        if (prevProps.defaultExpanded !== this.props.defaultExpanded) {
            this.setState(function (prevState) { return ({
                expandedItems: _this.props.defaultExpanded ?
                    new Set(prevState.items.map(function (item) { return item.id; })) :
                    new Set()
            }); });
        }
        // Image loading detection for title section
        if (((_k = prevProps.titleSettings) === null || _k === void 0 ? void 0 : _k.imageUrl) !== ((_l = this.props.titleSettings) === null || _l === void 0 ? void 0 : _l.imageUrl) ||
            ((_m = prevProps.titleSettings) === null || _m === void 0 ? void 0 : _m.backgroundType) !== ((_o = this.props.titleSettings) === null || _o === void 0 ? void 0 : _o.backgroundType)) {
            this.checkTitleImage();
        }
        // Image loading detection for filter section
        if (((_q = (_p = prevProps.filterSettings) === null || _p === void 0 ? void 0 : _p.background) === null || _q === void 0 ? void 0 : _q.image) !== ((_s = (_r = this.props.filterSettings) === null || _r === void 0 ? void 0 : _r.background) === null || _s === void 0 ? void 0 : _s.image) ||
            ((_u = (_t = prevProps.filterSettings) === null || _t === void 0 ? void 0 : _t.background) === null || _u === void 0 ? void 0 : _u.type) !== ((_w = (_v = this.props.filterSettings) === null || _v === void 0 ? void 0 : _v.background) === null || _w === void 0 ? void 0 : _w.type)) {
            this.checkFilterImage();
        }
    };
    FancyList.prototype.loadListData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, items, categories, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.props.selectedListId) {
                            this.setState({ items: [], categories: [], error: 'Please select a list in the web part properties.' });
                            return [2 /*return*/];
                        }
                        if (!this.props.categoryField) {
                            this.setState({ items: [], categories: [], error: 'Please select a Category field in the web part properties.' });
                            return [2 /*return*/];
                        }
                        if (!this.props.subjectField) {
                            this.setState({ items: [], categories: [], error: 'Please select a Subject field in the web part properties.' });
                            return [2 /*return*/];
                        }
                        if (!this.props.descriptionField) {
                            this.setState({ items: [], categories: [], error: 'Please select a Description field in the web part properties.' });
                            return [2 /*return*/];
                        }
                        this.setState({ loading: true, error: '' });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, this.props.context.spHttpClient.get("".concat(this.props.context.pageContext.web.absoluteUrl, "/_api/web/lists/getbytitle('").concat(this.props.selectedListId, "')/items?$select=").concat(this.props.categoryField, ",").concat(this.props.subjectField, ",").concat(this.props.descriptionField, "&$orderby=").concat(this.props.categoryField, ",").concat(this.props.subjectField), SPHttpClient.configurations.v1)];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("Failed to load list data: ".concat(response.statusText));
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        items = data.value.map(function (item, index) { return ({
                            id: item.Id || index,
                            category: item[_this.props.categoryField] || 'Uncategorized',
                            subject: item[_this.props.subjectField] || 'No Subject',
                            description: item[_this.props.descriptionField] || ''
                        }); });
                        categories = Array.from(new Set(items.map(function (item) { return item.category; }))).sort();
                        this.setState({
                            items: items,
                            categories: categories,
                            expandedItems: this.props.defaultExpanded ? new Set(Array.from(items, function (item) { return item.id; })) : new Set()
                        });
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        this.setState({ error: "Error loading data: ".concat(error_1.message) });
                        return [3 /*break*/, 6];
                    case 5:
                        this.setState({ loading: false });
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FancyList.prototype.getFilteredItems = function () {
        var _this = this;
        if (this.state.selectedCategory === 'all') {
            return this.state.items;
        }
        return this.state.items.filter(function (item) { return item.category === _this.state.selectedCategory; });
    };
    // Title Rendering Utility Functions
    FancyList.prototype.getBackgroundStyle = function () {
        var titleSettings = this.props.titleSettings;
        if (!titleSettings) {
            return {};
        }
        // Safe property access with fallbacks
        var backgroundType = titleSettings.backgroundType || 'solid';
        var backgroundColor = titleSettings.backgroundColor || '#ffffff';
        var backgroundAlpha = titleSettings.backgroundAlpha || 0;
        var gradientDirection = titleSettings.gradientDirection || 'left-right';
        var gradientColor1 = titleSettings.gradientColor1 || '#ffffff';
        var gradientColor2 = titleSettings.gradientColor2 || '#000000';
        var gradientAlpha = titleSettings.gradientAlpha || 0;
        var imageUrl = titleSettings.imageUrl || '';
        var shape = titleSettings.shape || 'rounded';
        switch (backgroundType) {
            case 'solid':
                return {
                    backgroundColor: this.hexToRgba(backgroundColor, 1 - (backgroundAlpha / 100)), // Invert alpha: 0% = opaque (alpha 1), 100% = transparent (alpha 0)
                    borderRadius: this.getShapeRadius(shape)
                };
            case 'gradient':
                return {
                    background: this.getGradientStyle(gradientDirection, gradientColor1, gradientColor2, 1 - (gradientAlpha / 100)), // Invert alpha: 0% = opaque (alpha 1), 100% = transparent (alpha 0)
                    borderRadius: this.getShapeRadius(shape)
                };
            case 'image':
                if (imageUrl) {
                    return {
                        backgroundImage: "url(".concat(imageUrl, ")"),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: this.getShapeRadius(shape)
                    };
                }
                else {
                    return {
                        backgroundColor: '#ffffff', // Simple white background for empty/invalid URLs
                        borderRadius: this.getShapeRadius(shape)
                    };
                }
            default:
                return {};
        }
    };
    FancyList.prototype.getShapeRadius = function (shape) {
        switch (shape) {
            case 'square': return '0px';
            case 'rounded': return '4px';
            case 'pill': return '20px';
            default: return '4px';
        }
    };
    FancyList.prototype.getGradientStyle = function (direction, color1, color2, alpha) {
        var rgba1 = this.hexToRgba(color1, alpha);
        var rgba2 = this.hexToRgba(color2, alpha);
        switch (direction) {
            case 'to bottom': return "linear-gradient(to bottom, ".concat(rgba1, ", ").concat(rgba2, ")");
            case 'left-right': return "linear-gradient(to right, ".concat(rgba1, ", ").concat(rgba2, ")");
            case 'to bottom right': return "linear-gradient(to bottom right, ".concat(rgba1, ", ").concat(rgba2, ")");
            case 'to bottom left': return "linear-gradient(to bottom left, ".concat(rgba1, ", ").concat(rgba2, ")");
            case 'radial': return "radial-gradient(circle, ".concat(rgba1, ", ").concat(rgba2, ")");
            default: return "linear-gradient(to right, ".concat(rgba1, ", ").concat(rgba2, ")");
        }
    };
    // Filter utility methods (like Title component pattern)
    FancyList.prototype.getFilterBorderRadius = function (shape) {
        return shape === 'square' ? '0px'
            : shape === 'pill' ? '999px'
                : '16px'; // rounded default
    };
    FancyList.prototype.getTextDecoration = function (formatting) {
        var decoration = '';
        if (formatting.underline)
            decoration += 'underline ';
        if (formatting.strikethrough)
            decoration += 'line-through';
        return decoration.trim() || 'none';
    };
    // Helper function to get category section font styles
    FancyList.prototype.getCategorySectionFontStyle = function () {
        var _a, _b, _c;
        var fontSettings = (_a = this.props.categorySectionSettings) === null || _a === void 0 ? void 0 : _a.font;
        if (!fontSettings) {
            return {};
        }
        return {
            fontFamily: fontSettings.family || 'inherit',
            fontSize: fontSettings.size || '16px',
            color: fontSettings.color || '#323130',
            fontWeight: ((_b = fontSettings.formatting) === null || _b === void 0 ? void 0 : _b.bold) ? 'bold' : 'normal',
            fontStyle: ((_c = fontSettings.formatting) === null || _c === void 0 ? void 0 : _c.italic) ? 'italic' : 'normal',
            textDecoration: this.getTextDecoration(fontSettings.formatting || { bold: false, italic: false, underline: false, strikethrough: false }),
            textAlign: fontSettings.alignment || 'left'
        };
    };
    // Helper function to get subject section font styles
    FancyList.prototype.getSubjectSectionFontStyle = function () {
        var _a, _b, _c;
        var fontSettings = (_a = this.props.subjectSectionSettings) === null || _a === void 0 ? void 0 : _a.font;
        if (!fontSettings) {
            return {};
        }
        return {
            fontFamily: fontSettings.family || 'inherit',
            fontSize: fontSettings.size || '16px',
            color: fontSettings.color || '#323130',
            fontWeight: ((_b = fontSettings.formatting) === null || _b === void 0 ? void 0 : _b.bold) ? 'bold' : 'normal',
            fontStyle: ((_c = fontSettings.formatting) === null || _c === void 0 ? void 0 : _c.italic) ? 'italic' : 'normal',
            textDecoration: this.getTextDecoration(fontSettings.formatting || { bold: false, italic: false, underline: false, strikethrough: false }),
            textAlign: fontSettings.alignment || 'left'
        };
    };
    // Helper function to get description section font styles
    FancyList.prototype.getDescriptionSectionFontStyle = function () {
        var _a, _b, _c;
        var fontSettings = (_a = this.props.descriptionSectionSettings) === null || _a === void 0 ? void 0 : _a.font;
        if (!fontSettings) {
            return {};
        }
        return {
            fontFamily: fontSettings.family || 'inherit',
            fontSize: fontSettings.size || '16px',
            color: fontSettings.color || '#323130',
            fontWeight: ((_b = fontSettings.formatting) === null || _b === void 0 ? void 0 : _b.bold) ? 'bold' : 'normal',
            fontStyle: ((_c = fontSettings.formatting) === null || _c === void 0 ? void 0 : _c.italic) ? 'italic' : 'normal',
            textDecoration: this.getTextDecoration(fontSettings.formatting || { bold: false, italic: false, underline: false, strikethrough: false }),
            textAlign: fontSettings.alignment || 'left'
        };
    };
    // Helper function to get category section background styles
    FancyList.prototype.getCategorySectionBackgroundStyle = function () {
        var _a, _b;
        var backgroundSettings = (_a = this.props.categorySectionSettings) === null || _a === void 0 ? void 0 : _a.background;
        if (!backgroundSettings)
            return {};
        // Safe property access with fallbacks
        var backgroundType = backgroundSettings.type || 'solid';
        var backgroundColor = backgroundSettings.color || '#ffffff';
        var backgroundAlpha = backgroundSettings.alpha || 0;
        var gradientDirection = backgroundSettings.gradientDirection || 'left-right';
        var gradientColor1 = backgroundSettings.gradientColor1 || '#ffffff';
        var gradientColor2 = backgroundSettings.gradientColor2 || '#000000';
        var gradientAlpha = backgroundSettings.gradientAlpha1 || 0;
        var imageUrl = backgroundSettings.image || '';
        var imageAlpha = backgroundSettings.imageAlpha || 0;
        var shape = ((_b = this.props.categorySectionSettings) === null || _b === void 0 ? void 0 : _b.shape) || 'rounded';
        // Base overrides to prevent CSS class conflicts
        var baseOverrides = {
            border: 'none',
            boxShadow: 'none'
        };
        switch (backgroundType) {
            case 'solid':
                return __assign({ backgroundColor: this.hexToRgba(backgroundColor, 1 - (backgroundAlpha / 100)), borderRadius: this.getShapeRadius(shape) }, baseOverrides);
            case 'gradient':
                return __assign({ background: this.getGradientStyle(gradientDirection, gradientColor1, gradientColor2, 1 - (gradientAlpha / 100)), borderRadius: this.getShapeRadius(shape) }, baseOverrides);
            case 'image':
                if (imageUrl) {
                    return __assign({ background: "linear-gradient(rgba(255,255,255,".concat(imageAlpha / 100, "), rgba(255,255,255,").concat(imageAlpha / 100, ")), url(").concat(imageUrl, ")"), backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: this.getShapeRadius(shape) }, baseOverrides);
                }
                else {
                    return __assign({ backgroundColor: '#ffffff', borderRadius: this.getShapeRadius(shape) }, baseOverrides);
                }
            default:
                return baseOverrides;
        }
    };
    // Helper function to group items by category
    FancyList.prototype.groupItemsByCategory = function (items) {
        var grouped = {};
        items.forEach(function (item) {
            if (!grouped[item.category]) {
                grouped[item.category] = [];
            }
            grouped[item.category].push(item);
        });
        return grouped;
    };
    FancyList.prototype.getFilterBackgroundStyle = function (filterSettings) {
        var background = filterSettings.background;
        if (background.type === 'solid') {
            return {
                background: this.hexToRgba(background.color, 1 - (background.alpha / 100)) // Invert alpha: 0% = opaque (alpha 1), 100% = transparent (alpha 0)
            };
        }
        else if (background.type === 'gradient') {
            return {
                background: this.getGradientStyle(background.gradientDirection, background.gradientColor1, background.gradientColor2, 1 - (background.gradientAlpha1 / 100) // Invert alpha: 0% = opaque (alpha 1), 100% = transparent (alpha 0)
                )
            };
        }
        else if (background.type === 'image') {
            return {
                background: "linear-gradient(rgba(0,0,0,".concat(background.alpha / 100, "), rgba(0,0,0,").concat(background.alpha / 100, ")), url(").concat(background.image, ")"),
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            };
        }
        return {};
    };
    // Add filter image error state management (like Title component)
    FancyList.prototype.checkFilterImage = function () {
        var _this = this;
        var _a;
        var filterSettings = this.props.filterSettings;
        if (((_a = filterSettings === null || filterSettings === void 0 ? void 0 : filterSettings.background) === null || _a === void 0 ? void 0 : _a.type) === 'image' && filterSettings.background.image) {
            // Validate file type
            var validationError = this.validateImageFileType(filterSettings.background.image);
            this.setState({
                filterImageValidationError: validationError,
                filterImageLoadError: false
            });
            if (!validationError) {
                // Test image loading
                var img = new Image();
                img.onload = function () {
                    _this.setState({
                        filterImageLoadError: false,
                        filterImageValidationError: null
                    });
                };
                img.onerror = function () {
                    _this.setState({
                        filterImageLoadError: true,
                        filterImageValidationError: null
                    });
                };
                img.src = filterSettings.background.image;
            }
        }
        else {
            this.setState({
                filterImageValidationError: null,
                filterImageLoadError: false
            });
        }
    };
    FancyList.prototype.hexToRgba = function (hex, alpha) {
        var c = hex.replace('#', '');
        if (c.length === 3)
            c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
        var num = parseInt(c, 16);
        var r = (num >> 16) & 255;
        var g = (num >> 8) & 255;
        var b = num & 255;
        var normalizedAlpha = alpha; // Fixed: alpha is already normalized (0-1) from getFilterBackgroundStyle
        return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(normalizedAlpha, ")");
    };
    // Dynamic Contrast Detection Functions
    FancyList.prototype.getContrastingDividerColor = function (backgroundColor) {
        // Convert hex to RGB
        var hex = backgroundColor.replace('#', '');
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);
        // Calculate luminance (brightness)
        var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        // Return dark divider for light backgrounds, light divider for dark backgrounds
        return luminance > 0.5 ? '#605e5c' : '#ffffff';
    };
    FancyList.prototype.getTitleBackgroundColor = function () {
        var titleSettings = this.props.titleSettings;
        if (!titleSettings)
            return '#ffffff'; // Default fallback
        var backgroundType = titleSettings.backgroundType || 'solid';
        switch (backgroundType) {
            case 'solid':
                return titleSettings.backgroundColor || '#ffffff';
            case 'gradient':
                // Use first gradient color for analysis
                return titleSettings.gradientColor1 || '#ffffff';
            case 'image':
                // For images, use fallback dark divider
                return '#ffffff'; // This will result in dark divider
            default:
                return '#ffffff';
        }
    };
    FancyList.prototype.validateImageFileType = function (url) {
        if (!url)
            return null;
        var validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
        var lowerUrl = url.toLowerCase();
        var hasValidExtension = validExtensions.some(function (ext) { return lowerUrl.endsWith(ext); });
        return hasValidExtension ? null : 'Not a valid image type';
    };
    FancyList.prototype.checkTitleImage = function () {
        var _this = this;
        var titleSettings = this.props.titleSettings;
        if ((titleSettings === null || titleSettings === void 0 ? void 0 : titleSettings.backgroundType) === 'image' && (titleSettings === null || titleSettings === void 0 ? void 0 : titleSettings.imageUrl)) {
            // Check file type first
            var validationError = this.validateImageFileType(titleSettings.imageUrl);
            this.setState({ titleImageValidationError: validationError });
            if (validationError) {
                this.setState({ titleImageLoadError: false, titleImageError: false });
                return;
            }
            // If file type is valid, check loading
            this.setState({ titleImageLoadError: false, titleImageError: false });
            var img = new Image();
            img.onload = function () {
                _this.setState({ titleImageLoadError: false, titleImageError: false });
            };
            img.onerror = function () {
                _this.setState({ titleImageLoadError: true, titleImageError: true });
            };
            img.src = titleSettings.imageUrl;
        }
        else {
            this.setState({
                titleImageError: false,
                titleImageValidationError: null,
                titleImageLoadError: false
            });
        }
    };
    // Title Rendering Methods
    FancyList.prototype.getTitleStyle = function () {
        var titleSettings = this.props.titleSettings;
        if (!titleSettings || !titleSettings.enabled) {
            return {};
        }
        // Safe property access with fallbacks
        var font = titleSettings.font || {
            family: 'Arial',
            size: '16px',
            color: '#000000',
            formatting: {
                bold: false,
                italic: false,
                underline: false,
                strikethrough: false
            }
        };
        // Helper function to get text decoration (like Compare backup)
        var getTextDecoration = function (formatting) {
            var decoration = '';
            if (formatting.underline)
                decoration += 'underline ';
            if (formatting.strikethrough)
                decoration += 'line-through';
            return decoration.trim() || 'none';
        };
        return __assign(__assign({}, this.getBackgroundStyle()), { fontFamily: font.family, fontSize: font.size, color: font.color, fontWeight: font.formatting.bold ? 'bold' : 'normal', fontStyle: font.formatting.italic ? 'italic' : 'normal', textDecoration: getTextDecoration(font.formatting), textAlign: font.alignment || 'left', marginBottom: '0.5em', lineHeight: 1.2, position: 'relative', 
            // Add internal padding to give title text breathing room
            padding: '12px 16px' });
    };
    FancyList.prototype.renderTitle = function () {
        var titleSettings = this.props.titleSettings;
        var titleImageError = this.state.titleImageError;
        // If no titleSettings, render a default title (like Compare backup)
        if (!titleSettings) {
            return (React.createElement("div", { style: this.getTitleStyle() }, "Fancy List"));
        }
        // If titleSettings exists but disabled, don't render
        if (!titleSettings.enabled) {
            return null;
        }
        // Safe property access with fallbacks
        var webPartTitle = titleSettings.webPartTitle;
        var backgroundType = titleSettings.backgroundType || 'solid';
        var imageUrl = titleSettings.imageUrl || '';
        var imageAlpha = titleSettings.imageAlpha || 0;
        // Don't render title if webPartTitle is null, undefined, or empty
        if (!webPartTitle || webPartTitle.trim() === '') {
            return null;
        }
        // Get dynamic contrast divider color
        var backgroundColor = this.getTitleBackgroundColor();
        var dividerColor = this.getContrastingDividerColor(backgroundColor);
        return (React.createElement("div", { style: __assign(__assign({}, this.getTitleStyle()), (titleSettings.showDivider ? {
                borderBottom: "3px solid ".concat(dividerColor),
                marginBottom: '8px'
            } : {})) },
            backgroundType === 'image' && imageUrl && !titleImageError &&
                imageAlpha !== undefined && imageAlpha > 0 && (React.createElement("div", { style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(255,255,255,".concat(imageAlpha / 100, ")"),
                    pointerEvents: 'none',
                    zIndex: 1
                } })),
            React.createElement("div", { style: { position: 'relative', zIndex: 2 } }, webPartTitle)));
    };
    FancyList.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19;
        var _20 = this.state, selectedCategory = _20.selectedCategory, categories = _20.categories, loading = _20.loading, error = _20.error;
        // Debug logging for render method
        console.log('🔍 Filter Debug - Render Method:', {
            selectedCategory: selectedCategory,
            availableCategories: categories,
            defaultSelection: (_a = this.props.filterSettings) === null || _a === void 0 ? void 0 : _a.defaultFilterSelection,
            userHasManuallySelected: this.userHasManuallySelected
        });
        // If loading, render loading state
        if (loading) {
            return (React.createElement("div", { className: styles.fancyList },
                React.createElement("div", { className: styles.loading }, "Loading...")));
        }
        // If error, render error state
        if (error) {
            return (React.createElement("div", { className: styles.fancyList },
                React.createElement("div", { className: styles.error }, error)));
        }
        return (React.createElement("div", { className: styles.fancyList },
            this.renderTitle(),
            (this.state.titleImageValidationError || this.state.titleImageLoadError ||
                (((_b = this.props.titleSettings) === null || _b === void 0 ? void 0 : _b.backgroundType) === 'image' && !((_c = this.props.titleSettings) === null || _c === void 0 ? void 0 : _c.imageUrl))) && (React.createElement("div", { style: {
                    fontSize: '12px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#000000',
                    textAlign: 'right',
                    marginTop: '8px',
                    marginBottom: '8px'
                } }, this.state.titleImageValidationError ||
                (this.state.titleImageLoadError ? 'Unable to access URL' : '') ||
                'Please enter an image URL')),
            ((_d = this.props.filterSettings) === null || _d === void 0 ? void 0 : _d.enableFilters) && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: styles.categoryFilters, style: __assign(__assign({}, this.getFilterBackgroundStyle(this.props.filterSettings)), { position: 'relative', padding: '12px', marginBottom: '6px', borderRadius: this.getShapeRadius(((_e = this.props.filterSettings) === null || _e === void 0 ? void 0 : _e.backgroundShape) || 'rounded') }) },
                    ((_g = (_f = this.props.filterSettings) === null || _f === void 0 ? void 0 : _f.background) === null || _g === void 0 ? void 0 : _g.type) === 'image' &&
                        ((_j = (_h = this.props.filterSettings) === null || _h === void 0 ? void 0 : _h.background) === null || _j === void 0 ? void 0 : _j.image) &&
                        !this.state.filterImageValidationError &&
                        !this.state.filterImageLoadError &&
                        ((_l = (_k = this.props.filterSettings) === null || _k === void 0 ? void 0 : _k.background) === null || _l === void 0 ? void 0 : _l.imageAlpha) !== undefined &&
                        ((_o = (_m = this.props.filterSettings) === null || _m === void 0 ? void 0 : _m.background) === null || _o === void 0 ? void 0 : _o.imageAlpha) > 0 && (React.createElement("div", { style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(255,255,255,".concat((((_q = (_p = this.props.filterSettings) === null || _p === void 0 ? void 0 : _p.background) === null || _q === void 0 ? void 0 : _q.imageAlpha) || 0) / 100, ")"),
                            pointerEvents: 'none',
                            zIndex: 1
                        } })),
                    React.createElement("div", { style: {
                            position: 'relative',
                            zIndex: 2,
                            textAlign: ((_s = (_r = this.props.filterSettings) === null || _r === void 0 ? void 0 : _r.font) === null || _s === void 0 ? void 0 : _s.alignment) || 'left'
                        } },
                        ((_t = this.props.filterSettings) === null || _t === void 0 ? void 0 : _t.showAllCategories) && (React.createElement("button", { className: "".concat(styles.categoryPill, " ").concat(selectedCategory === 'all' ? styles.active : ''), style: {
                                background: selectedCategory === 'all' ? (_v = (_u = this.props.filterSettings) === null || _u === void 0 ? void 0 : _u.activeColors) === null || _v === void 0 ? void 0 : _v.background : (_x = (_w = this.props.filterSettings) === null || _w === void 0 ? void 0 : _w.inactiveColors) === null || _x === void 0 ? void 0 : _x.background,
                                color: selectedCategory === 'all' ? (_z = (_y = this.props.filterSettings) === null || _y === void 0 ? void 0 : _y.activeColors) === null || _z === void 0 ? void 0 : _z.font : (_1 = (_0 = this.props.filterSettings) === null || _0 === void 0 ? void 0 : _0.inactiveColors) === null || _1 === void 0 ? void 0 : _1.font,
                                fontFamily: (_3 = (_2 = this.props.filterSettings) === null || _2 === void 0 ? void 0 : _2.font) === null || _3 === void 0 ? void 0 : _3.family,
                                fontSize: (_5 = (_4 = this.props.filterSettings) === null || _4 === void 0 ? void 0 : _4.font) === null || _5 === void 0 ? void 0 : _5.size,
                                fontWeight: ((_8 = (_7 = (_6 = this.props.filterSettings) === null || _6 === void 0 ? void 0 : _6.font) === null || _7 === void 0 ? void 0 : _7.formatting) === null || _8 === void 0 ? void 0 : _8.bold) ? 'bold' : 'normal',
                                fontStyle: ((_11 = (_10 = (_9 = this.props.filterSettings) === null || _9 === void 0 ? void 0 : _9.font) === null || _10 === void 0 ? void 0 : _10.formatting) === null || _11 === void 0 ? void 0 : _11.italic) ? 'italic' : 'normal',
                                textDecoration: this.getTextDecoration(((_13 = (_12 = this.props.filterSettings) === null || _12 === void 0 ? void 0 : _12.font) === null || _13 === void 0 ? void 0 : _13.formatting) || { bold: false, italic: false, underline: false, strikethrough: false }),
                                borderRadius: this.getFilterBorderRadius(((_14 = this.props.filterSettings) === null || _14 === void 0 ? void 0 : _14.shape) || 'rounded'),
                                border: 'none',
                                padding: '8px 16px',
                                margin: '4px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }, onClick: function () { return _this.handleCategoryClick('all'); } }, "All")),
                        categories.map(function (category) {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
                            return (React.createElement("button", { key: category, className: "".concat(styles.categoryPill, " ").concat(selectedCategory === category ? styles.active : ''), style: {
                                    background: selectedCategory === category ? (_b = (_a = _this.props.filterSettings) === null || _a === void 0 ? void 0 : _a.activeColors) === null || _b === void 0 ? void 0 : _b.background : (_d = (_c = _this.props.filterSettings) === null || _c === void 0 ? void 0 : _c.inactiveColors) === null || _d === void 0 ? void 0 : _d.background,
                                    color: selectedCategory === category ? (_f = (_e = _this.props.filterSettings) === null || _e === void 0 ? void 0 : _e.activeColors) === null || _f === void 0 ? void 0 : _f.font : (_h = (_g = _this.props.filterSettings) === null || _g === void 0 ? void 0 : _g.inactiveColors) === null || _h === void 0 ? void 0 : _h.font,
                                    fontFamily: (_k = (_j = _this.props.filterSettings) === null || _j === void 0 ? void 0 : _j.font) === null || _k === void 0 ? void 0 : _k.family,
                                    fontSize: (_m = (_l = _this.props.filterSettings) === null || _l === void 0 ? void 0 : _l.font) === null || _m === void 0 ? void 0 : _m.size,
                                    fontWeight: ((_q = (_p = (_o = _this.props.filterSettings) === null || _o === void 0 ? void 0 : _o.font) === null || _p === void 0 ? void 0 : _p.formatting) === null || _q === void 0 ? void 0 : _q.bold) ? 'bold' : 'normal',
                                    fontStyle: ((_t = (_s = (_r = _this.props.filterSettings) === null || _r === void 0 ? void 0 : _r.font) === null || _s === void 0 ? void 0 : _s.formatting) === null || _t === void 0 ? void 0 : _t.italic) ? 'italic' : 'normal',
                                    textDecoration: _this.getTextDecoration(((_v = (_u = _this.props.filterSettings) === null || _u === void 0 ? void 0 : _u.font) === null || _v === void 0 ? void 0 : _v.formatting) || { bold: false, italic: false, underline: false, strikethrough: false }),
                                    borderRadius: _this.getFilterBorderRadius(((_w = _this.props.filterSettings) === null || _w === void 0 ? void 0 : _w.shape) || 'rounded'),
                                    border: 'none',
                                    padding: '8px 16px',
                                    margin: '4px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }, onClick: function () { return _this.handleCategoryClick(category); } }, category));
                        }))),
                (this.state.filterImageValidationError || this.state.filterImageLoadError ||
                    (((_16 = (_15 = this.props.filterSettings) === null || _15 === void 0 ? void 0 : _15.background) === null || _16 === void 0 ? void 0 : _16.type) === 'image' && !((_18 = (_17 = this.props.filterSettings) === null || _17 === void 0 ? void 0 : _17.background) === null || _18 === void 0 ? void 0 : _18.image))) && (React.createElement("div", { style: {
                        fontSize: '12px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#000000',
                        textAlign: 'right',
                        marginTop: '8px',
                        marginBottom: '8px'
                    } }, this.state.filterImageValidationError ||
                    (this.state.filterImageLoadError ? 'Unable to access URL' : '') ||
                    'Please enter an image URL')),
                ((_19 = this.props.filterSettings) === null || _19 === void 0 ? void 0 : _19.showDivider) && (React.createElement("div", { style: {
                        height: '2px',
                        backgroundColor: 'var(--neutralLight, #edebe9)',
                        marginTop: '12px',
                        marginBottom: '12px'
                    } })))),
            React.createElement("div", { className: styles.itemsContainer }, Object.keys(this.groupItemsByCategory(this.getFilteredItems())).map(function (category) {
                var _a, _b, _c, _d, _e, _f;
                var items = _this.groupItemsByCategory(_this.getFilteredItems())[category];
                return (React.createElement("div", { key: category, className: styles.itemPanel, style: __assign(__assign({}, _this.getCategorySectionBackgroundStyle()), (((_a = _this.props.categorySectionSettings) === null || _a === void 0 ? void 0 : _a.showDivider) ? {
                        borderBottom: '2px solid var(--neutralLight, #edebe9)'
                    } : {})) },
                    React.createElement("button", { className: styles.itemHeader, onClick: function () { return _this.handleCategoryToggle(category); }, "aria-expanded": _this.state.expandedCategories.has(category) ? "true" : "false", style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            background: 'transparent',
                            border: 'none'
                        } },
                        React.createElement("span", { className: styles.itemSubject, style: _this.getCategorySectionFontStyle() }, category),
                        ((_c = (_b = _this.props.categorySectionSettings) === null || _b === void 0 ? void 0 : _b.icons) === null || _c === void 0 ? void 0 : _c.enabled) && (React.createElement("span", { className: styles.expandIcon, style: {
                                order: _this.props.categorySectionSettings.icons.iconPosition === 'left' ? -1 : 1,
                                fontSize: ((_e = (_d = _this.props.categorySectionSettings) === null || _d === void 0 ? void 0 : _d.font) === null || _e === void 0 ? void 0 : _e.size) || '16px',
                                marginLeft: _this.props.categorySectionSettings.icons.iconPosition === 'left' ? '0' : '8px',
                                marginRight: _this.props.categorySectionSettings.icons.iconPosition === 'left' ? '8px' : '0'
                            } }, _this.state.expandedCategories.has(category)
                            ? (_this.props.categorySectionSettings.icons.expandedIcon || '−')
                            : (_this.props.categorySectionSettings.icons.collapsedIcon || '+')))),
                    _this.state.expandedCategories.has(category) && (React.createElement("div", { className: styles.itemContent, style: __assign({}, (((_f = _this.props.categorySectionSettings) === null || _f === void 0 ? void 0 : _f.showDivider) ? {
                            borderTop: '2px solid var(--neutralLight, #edebe9)'
                        } : {
                            borderTop: 'none'
                        })) }, items.map(function (item) {
                        var _a, _b, _c, _d;
                        return (React.createElement("div", { key: item.id, className: styles.itemPanel },
                            React.createElement("button", { className: styles.itemHeader, onClick: function () { return _this.handleItemToggle(item.id); }, "aria-expanded": _this.state.expandedItems.has(item.id) ? "true" : "false", style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                } },
                                React.createElement("span", { className: styles.itemSubject, style: _this.getSubjectSectionFontStyle() }, item.subject),
                                ((_b = (_a = _this.props.subjectSectionSettings) === null || _a === void 0 ? void 0 : _a.icons) === null || _b === void 0 ? void 0 : _b.enabled) && (React.createElement("span", { className: styles.expandIcon, style: {
                                        order: _this.props.subjectSectionSettings.icons.iconPosition === 'left' ? -1 : 1,
                                        fontSize: ((_d = (_c = _this.props.subjectSectionSettings) === null || _c === void 0 ? void 0 : _c.font) === null || _d === void 0 ? void 0 : _d.size) || '16px',
                                        marginLeft: _this.props.subjectSectionSettings.icons.iconPosition === 'left' ? '0' : '8px',
                                        marginRight: _this.props.subjectSectionSettings.icons.iconPosition === 'left' ? '8px' : '0'
                                    } }, _this.state.expandedItems.has(item.id)
                                    ? (_this.props.subjectSectionSettings.icons.expandedIcon || '−')
                                    : (_this.props.subjectSectionSettings.icons.collapsedIcon || '+')))),
                            _this.state.expandedItems.has(item.id) && (React.createElement("div", { className: styles.itemContent },
                                React.createElement("div", { className: styles.itemDescription, style: _this.getDescriptionSectionFontStyle(), dangerouslySetInnerHTML: { __html: item.description } })))));
                    })))));
            }))));
    };
    return FancyList;
}(React.Component));
export default FancyList;
//# sourceMappingURL=FancyList.js.map