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
        var _this = _super.call(this, props) || this;
        _this.handleCategoryClick = function (category) {
            _this.setState({ selectedCategory: category });
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
        _this.state = {
            items: [],
            categories: [],
            selectedCategory: 'all',
            expandedItems: new Set(),
            loading: false,
            error: ''
        };
        return _this;
    }
    FancyList.prototype.componentDidMount = function () {
        this.loadListData();
    };
    FancyList.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.selectedListId !== this.props.selectedListId ||
            prevProps.categoryField !== this.props.categoryField ||
            prevProps.subjectField !== this.props.subjectField ||
            prevProps.descriptionField !== this.props.descriptionField) {
            this.loadListData();
        }
        // Refresh expanded state when defaultExpanded changes
        if (prevProps.defaultExpanded !== this.props.defaultExpanded) {
            this.setState(function (prevState) { return ({
                expandedItems: _this.props.defaultExpanded ?
                    new Set(prevState.items.map(function (item) { return item.id; })) :
                    new Set()
            }); });
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
                    backgroundColor: this.hexToRgba(backgroundColor, backgroundAlpha),
                    borderRadius: this.getShapeRadius(shape)
                };
            case 'gradient':
                return {
                    background: this.getGradientStyle(gradientDirection, gradientColor1, gradientColor2, gradientAlpha),
                    borderRadius: this.getShapeRadius(shape)
                };
            case 'image':
                return {
                    backgroundImage: "url(".concat(imageUrl, ")"),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: this.getShapeRadius(shape)
                };
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
    FancyList.prototype.hexToRgba = function (hex, alpha) {
        var c = hex.replace('#', '');
        if (c.length === 3)
            c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
        var num = parseInt(c, 16);
        var r = (num >> 16) & 255;
        var g = (num >> 8) & 255;
        var b = num & 255;
        var normalizedAlpha = 1 - (alpha / 100);
        return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(normalizedAlpha, ")");
    };
    FancyList.prototype.isValidImageUrl = function (url) {
        var validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
        var lowerUrl = url.toLowerCase();
        return validExtensions.some(function (ext) { return lowerUrl.endsWith(ext); });
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
        return __assign({ fontFamily: font.family, fontSize: font.size, color: font.color }, this.getTextDecoration(font.formatting));
    };
    FancyList.prototype.getTextDecoration = function (formatting) {
        return {
            fontWeight: formatting.bold ? 'bold' : 'normal',
            fontStyle: formatting.italic ? 'italic' : 'normal',
            textDecoration: [
                formatting.underline ? 'underline' : '',
                formatting.strikethrough ? 'line-through' : ''
            ].filter(Boolean).join(' ') || 'none'
        };
    };
    FancyList.prototype.renderTitle = function () {
        var titleSettings = this.props.titleSettings;
        // If no titleSettings, render a default title (like Compare backup)
        if (!titleSettings) {
            return (React.createElement("div", { className: styles.titleContainer },
                React.createElement("div", { className: styles.titleText }, "Fancy List")));
        }
        // If titleSettings exists but disabled, don't render
        if (!titleSettings.enabled) {
            return null;
        }
        // Safe property access with fallbacks
        var webPartTitle = titleSettings.webPartTitle || 'Fancy List';
        var showDivider = titleSettings.showDivider || false;
        var backgroundType = titleSettings.backgroundType || 'solid';
        var imageUrl = titleSettings.imageUrl || '';
        // Check for invalid image URL
        if (backgroundType === 'image' && imageUrl && !this.isValidImageUrl(imageUrl)) {
            return (React.createElement("div", { className: styles.titleContainer, style: this.getBackgroundStyle() },
                React.createElement("div", { className: styles.titleError },
                    React.createElement("div", { className: styles.errorTitle, style: this.getTitleStyle() }, "Invalid Image URL"),
                    React.createElement("div", { className: styles.errorMessage }, "Please provide a valid image file (.jpg, .jpeg, .png, .gif, .webp)")),
                showDivider && React.createElement("div", { className: styles.titleDivider })));
        }
        return (React.createElement("div", { className: styles.titleContainer, style: this.getBackgroundStyle() },
            React.createElement("div", { className: styles.titleText, style: this.getTitleStyle() }, webPartTitle),
            showDivider && React.createElement("div", { className: styles.titleDivider })));
    };
    FancyList.prototype.render = function () {
        var _this = this;
        var _a = this.state, loading = _a.loading, error = _a.error, categories = _a.categories, selectedCategory = _a.selectedCategory, expandedItems = _a.expandedItems;
        var filteredItems = this.getFilteredItems();
        if (loading) {
            return (React.createElement("div", { className: styles.fancyList },
                React.createElement("div", { className: styles.loading }, "Loading...")));
        }
        if (error) {
            return (React.createElement("div", { className: styles.fancyList },
                React.createElement("div", { className: styles.error }, error)));
        }
        return (React.createElement("div", { className: styles.fancyList },
            this.renderTitle(),
            React.createElement("div", { className: styles.categoryFilters },
                this.props.showAllCategories && (React.createElement("button", { className: "".concat(styles.categoryPill, " ").concat(selectedCategory === 'all' ? styles.active : ''), onClick: function () { return _this.handleCategoryClick('all'); } }, "All")),
                categories.map(function (category) { return (React.createElement("button", { key: category, className: "".concat(styles.categoryPill, " ").concat(selectedCategory === category ? styles.active : ''), onClick: function () { return _this.handleCategoryClick(category); } }, category)); })),
            React.createElement("div", { className: styles.itemsContainer }, filteredItems.map(function (item) { return (React.createElement("div", { key: item.id, className: styles.itemPanel },
                React.createElement("button", { className: styles.itemHeader, onClick: function () { return _this.handleItemToggle(item.id); }, "aria-expanded": expandedItems.has(item.id) ? "true" : "false" },
                    React.createElement("span", { className: styles.itemSubject }, item.subject),
                    React.createElement("span", { className: styles.expandIcon }, expandedItems.has(item.id) ? '−' : '+')),
                expandedItems.has(item.id) && (React.createElement("div", { className: styles.itemContent },
                    React.createElement("div", { className: styles.itemDescription, dangerouslySetInnerHTML: { __html: item.description } }))))); }))));
    };
    return FancyList;
}(React.Component));
export default FancyList;
//# sourceMappingURL=FancyList.js.map