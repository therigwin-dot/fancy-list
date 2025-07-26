define("e1be7ed9-231d-495a-a585-583e3dc717a6_10", ["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-property-pane","@microsoft/sp-webpart-base","@microsoft/sp-http","FancyListWebPartStrings"], (__WEBPACK_EXTERNAL_MODULE__959__, __WEBPACK_EXTERNAL_MODULE__398__, __WEBPACK_EXTERNAL_MODULE__676__, __WEBPACK_EXTERNAL_MODULE__877__, __WEBPACK_EXTERNAL_MODULE__642__, __WEBPACK_EXTERNAL_MODULE__909__, __WEBPACK_EXTERNAL_MODULE__670__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 837:
/*!****************************************************************!*\
  !*** ./lib/webparts/fancyList/components/FancyList.module.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".fancyList_74413b63{background:var(--background,#fff);color:var(--bodyText,#323130);font-family:Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;padding:1em}.categoryFilters_74413b63{border-bottom:1px solid var(--neutralLight,#edebe9);display:flex;flex-wrap:nowrap;gap:.5em;margin-bottom:1em;overflow-x:auto;padding-bottom:.5em}.categoryPill_74413b63{background:var(--neutralLighter,#f3f2f1);border:1px solid var(--neutralLight,#edebe9);border-radius:999px;color:var(--bodyText,#323130);cursor:pointer;display:inline-block;font-weight:500;outline:0;padding:.4em 1.2em;transition:background .2s,color .2s,border .2s}.categoryPill_74413b63:focus,.categoryPill_74413b63:hover{background:var(--themeLighter,#e5f1fb);border-color:var(--themePrimary,#0078d4);color:var(--themePrimary,#0078d4)}.categoryPill_74413b63.active_74413b63{background:var(--themePrimary,#0078d4);border-color:var(--themePrimary,#0078d4);color:var(--white,#fff)}.itemsContainer_74413b63{display:flex;flex-direction:column;gap:.7em}.itemPanel_74413b63{background:var(--white,#fff);border:1px solid var(--neutralLight,#edebe9);border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.04);overflow:hidden}.itemHeader_74413b63{align-items:center;background:0 0;border:none;color:var(--bodyText,#323130);cursor:pointer;display:flex;font-size:1.1em;font-weight:600;justify-content:space-between;outline:0;padding:1em;text-align:left;transition:background .2s;width:100%}.itemHeader_74413b63:focus,.itemHeader_74413b63:hover{background:var(--neutralLighter,#f3f2f1)}.itemSubject_74413b63{flex:1 1 auto}.expandIcon_74413b63{color:var(--themePrimary,#0078d4);font-size:1.3em;margin-left:1em}.itemContent_74413b63{background:var(--neutralLighter,#f3f2f1);border-top:1px solid var(--neutralLight,#edebe9);padding:1em}.itemDescription_74413b63{color:var(--bodyText,#323130);font-size:1em}.error_74413b63,.loading_74413b63{color:var(--themePrimary,#0078d4);font-size:1.1em;padding:2em 0;text-align:center}@media (max-width:600px){.categoryFilters_74413b63{font-size:.95em;gap:.2em}.itemContent_74413b63,.itemHeader_74413b63{padding:.7em}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vb3B0L2N1cnNvci1wcm9qZWN0cy9GYW5jeUxpc3Qvc3JjL3dlYnBhcnRzL2ZhbmN5TGlzdC9jb21wb25lbnRzL0ZhbmN5TGlzdC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxvQkFHRSxpQ0FBQSxDQURBLDZCQUFBLENBRUEsc0ZBQUEsQ0FIQSxXQUdBLENBR0YsMEJBT0UsbURBQUEsQ0FOQSxZQUFBLENBQ0EsZ0JBQUEsQ0FFQSxRQUFBLENBQ0EsaUJBQUEsQ0FGQSxlQUFBLENBR0EsbUJBQ0EsQ0FHRix1QkFLRSx3Q0FBQSxDQURBLDRDQUFBLENBREEsbUJBQUEsQ0FHQSw2QkFBQSxDQUVBLGNBQUEsQ0FQQSxvQkFBQSxDQU1BLGVBQUEsQ0FHQSxTQUFBLENBUkEsa0JBQUEsQ0FPQSw4Q0FDQSxDQUNBLDBEQUNFLHNDQUFBLENBQ0Esd0NBQUEsQ0FDQSxpQ0FBQSxDQUVGLHVDQUNFLHNDQUFBLENBRUEsd0NBQUEsQ0FEQSx1QkFDQSxDQUlKLHlCQUNFLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLFFBQUEsQ0FHRixvQkFHRSw0QkFBQSxDQURBLDRDQUFBLENBREEsaUJBQUEsQ0FHQSxvQ0FBQSxDQUNBLGVBQUEsQ0FHRixxQkFVRSxrQkFBQSxDQVJBLGNBQUEsQ0FDQSxXQUFBLENBS0EsNkJBQUEsQ0FJQSxjQUFBLENBSEEsWUFBQSxDQUhBLGVBQUEsQ0FDQSxlQUFBLENBSUEsNkJBQUEsQ0FFQSxTQUFBLENBVEEsV0FBQSxDQUNBLGVBQUEsQ0FTQSx5QkFBQSxDQWJBLFVBYUEsQ0FDQSxzREFDRSx3Q0FBQSxDQUlKLHNCQUNFLGFBQUEsQ0FHRixxQkFHRSxpQ0FBQSxDQUZBLGVBQUEsQ0FDQSxlQUNBLENBR0Ysc0JBRUUsd0NBQUEsQ0FDQSxnREFBQSxDQUZBLFdBRUEsQ0FHRiwwQkFFRSw2QkFBQSxDQURBLGFBQ0EsQ0FHRixrQ0FHRSxpQ0FBQSxDQUNBLGVBQUEsQ0FGQSxhQUFBLENBREEsaUJBR0EsQ0FHRix5QkFDRSwwQkFFRSxlQUFBLENBREEsUUFDQSxDQUVGLDJDQUNFLFlBQUEsQ0FBQSIsImZpbGUiOiJGYW5jeUxpc3QubW9kdWxlLmNzcyJ9 */", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fancyList_74413b63: "fancyList_74413b63",
  categoryFilters_74413b63: "categoryFilters_74413b63",
  categoryPill_74413b63: "categoryPill_74413b63",
  active_74413b63: "active_74413b63",
  itemsContainer_74413b63: "itemsContainer_74413b63",
  itemPanel_74413b63: "itemPanel_74413b63",
  itemHeader_74413b63: "itemHeader_74413b63",
  itemSubject_74413b63: "itemSubject_74413b63",
  expandIcon_74413b63: "expandIcon_74413b63",
  itemContent_74413b63: "itemContent_74413b63",
  itemDescription_74413b63: "itemDescription_74413b63",
  error_74413b63: "error_74413b63",
  loading_74413b63: "loading_74413b63"
});


/***/ }),

/***/ 702:
/*!***************************************************!*\
  !*** ./lib/webparts/fancyList/DEFAULTS_CONFIG.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULTS_CONFIG: () => (/* binding */ DEFAULTS_CONFIG),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DEFAULTS_CONFIG = {
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
        description: 'Customize the web parts title text, font, color, and background settings. Use the reset button to put the default look and feel back in place. Use the Back and Next buttons to switch to a different configuration page.',
        webPartTitle: 'Fancy List',
        font: {
            family: 'Segoe UI',
            size: '24px',
            color: '#323130',
            formatting: { bold: false, italic: false, underline: false, strikethrough: false }
        },
        background: {
            type: 'solid',
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
    },
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
        shape: 'pill',
        background: {
            type: 'solid',
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
    },
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
            type: 'solid',
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
            type: 'solid',
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
            type: 'solid',
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DEFAULTS_CONFIG);


/***/ }),

/***/ 769:
/*!********************************************************!*\
  !*** ./lib/webparts/fancyList/components/FancyList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FancyList.module.scss */ 473);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ 909);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
                        return [4 /*yield*/, this.props.context.spHttpClient.get("".concat(this.props.context.pageContext.web.absoluteUrl, "/_api/web/lists/getbytitle('").concat(this.props.selectedListId, "')/items?$select=").concat(this.props.categoryField, ",").concat(this.props.subjectField, ",").concat(this.props.descriptionField, "&$orderby=").concat(this.props.categoryField, ",").concat(this.props.subjectField), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__.SPHttpClient.configurations.v1)];
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
    FancyList.prototype.render = function () {
        var _this = this;
        var _a = this.state, loading = _a.loading, error = _a.error, categories = _a.categories, selectedCategory = _a.selectedCategory, expandedItems = _a.expandedItems;
        var filteredItems = this.getFilteredItems();
        if (loading) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fancyList },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].loading }, "Loading...")));
        }
        if (error) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fancyList },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error }, error)));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fancyList },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].categoryFilters },
                this.props.showAllCategories && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].categoryPill, " ").concat(selectedCategory === 'all' ? _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active : ''), onClick: function () { return _this.handleCategoryClick('all'); } }, "All")),
                categories.map(function (category) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { key: category, className: "".concat(_FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].categoryPill, " ").concat(selectedCategory === category ? _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active : ''), onClick: function () { return _this.handleCategoryClick(category); } }, category)); })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].itemsContainer }, filteredItems.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: item.id, className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].itemPanel },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].itemHeader, onClick: function () { return _this.handleItemToggle(item.id); }, "aria-expanded": expandedItems.has(item.id) },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].itemSubject }, item.subject),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].expandIcon }, expandedItems.has(item.id) ? '−' : '+')),
                expandedItems.has(item.id) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].itemContent },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _FancyList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].itemDescription, dangerouslySetInnerHTML: { __html: item.description } }))))); }))));
    };
    return FancyList;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FancyList);


/***/ }),

/***/ 473:
/*!********************************************************************!*\
  !*** ./lib/webparts/fancyList/components/FancyList.module.scss.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
__webpack_require__(/*! ./FancyList.module.css */ 837);
var styles = {
    fancyList: 'fancyList_74413b63',
    categoryFilters: 'categoryFilters_74413b63',
    categoryPill: 'categoryPill_74413b63',
    active: 'active_74413b63',
    itemsContainer: 'itemsContainer_74413b63',
    itemPanel: 'itemPanel_74413b63',
    itemHeader: 'itemHeader_74413b63',
    itemSubject: 'itemSubject_74413b63',
    expandIcon: 'expandIcon_74413b63',
    itemContent: 'itemContent_74413b63',
    itemDescription: 'itemDescription_74413b63',
    loading: 'loading_74413b63',
    error: 'error_74413b63'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ 867:
/*!*******************************************************************!*\
  !*** ./lib/webparts/fancyList/propertyPane/TitleConfiguration.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleConfiguration: () => (/* binding */ TitleConfiguration)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TitleConfiguration = function (_a) {
    var label = _a.label;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginBottom: 16 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                fontSize: '16px',
                fontWeight: '600',
                color: '#323130',
                marginBottom: '12px'
            } }, "Title Configuration"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.4',
                marginBottom: '16px'
            } }, "Customize the web parts title text, font, color, background, and shape settings. Use the reset button to put the default look and feel back in place. Use the Back and Next buttons to switch to a different configuration page.")));
};


/***/ }),

/***/ 323:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearStyleOptions: () => (/* binding */ ClearStyleOptions),
/* harmony export */   Mode: () => (/* binding */ Mode),
/* harmony export */   clearStyles: () => (/* binding */ clearStyles),
/* harmony export */   configureLoadStyles: () => (/* binding */ configureLoadStyles),
/* harmony export */   configureRunMode: () => (/* binding */ configureRunMode),
/* harmony export */   detokenize: () => (/* binding */ detokenize),
/* harmony export */   flush: () => (/* binding */ flush),
/* harmony export */   loadStyles: () => (/* binding */ loadStyles),
/* harmony export */   loadTheme: () => (/* binding */ loadTheme),
/* harmony export */   splitStyles: () => (/* binding */ splitStyles)
/* harmony export */ });
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (undefined && undefined.__assign) || function () {
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
/**
 * In sync mode, styles are registered as style elements synchronously with loadStyles() call.
 * In async mode, styles are buffered and registered as batch in async timer for performance purpose.
 */
var Mode;
(function (Mode) {
    Mode[Mode["sync"] = 0] = "sync";
    Mode[Mode["async"] = 1] = "async";
})(Mode || (Mode = {}));
/**
 * Themable styles and non-themable styles are tracked separately
 * Specify ClearStyleOptions when calling clearStyles API to specify which group of registered styles should be cleared.
 */
var ClearStyleOptions;
(function (ClearStyleOptions) {
    /** only themable styles will be cleared */
    ClearStyleOptions[ClearStyleOptions["onlyThemable"] = 1] = "onlyThemable";
    /** only non-themable styles will be cleared */
    ClearStyleOptions[ClearStyleOptions["onlyNonThemable"] = 2] = "onlyNonThemable";
    /** both themable and non-themable styles will be cleared */
    ClearStyleOptions[ClearStyleOptions["all"] = 3] = "all";
})(ClearStyleOptions || (ClearStyleOptions = {}));
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? __webpack_require__.g : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: Mode.sync,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === Mode.async) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    // Use "self" to distinguish conflicting global typings for setTimeout() from lib.dom.d.ts vs Jest's @types/node
    // https://github.com/jestjs/jest/issues/14418
    return self.setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = ClearStyleOptions.all; }
    if (option === ClearStyleOptions.all || option === ClearStyleOptions.onlyNonThemable) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === ClearStyleOptions.all || option === ClearStyleOptions.onlyThemable) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(ClearStyleOptions.onlyThemable);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                // eslint-disable-next-line no-console
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}


/***/ }),

/***/ 676:
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__676__;

/***/ }),

/***/ 909:
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__909__;

/***/ }),

/***/ 877:
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__877__;

/***/ }),

/***/ 642:
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__642__;

/***/ }),

/***/ 670:
/*!******************************************!*\
  !*** external "FancyListWebPartStrings" ***!
  \******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__670__;

/***/ }),

/***/ 959:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__959__;

/***/ }),

/***/ 398:
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__398__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************!*\
  !*** ./lib/webparts/fancyList/FancyListWebPart.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 398);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ 676);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ 877);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ 642);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-http */ 909);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! FancyListWebPartStrings */ 670);
/* harmony import */ var FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_FancyList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/FancyList */ 769);
/* harmony import */ var _DEFAULTS_CONFIG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DEFAULTS_CONFIG */ 702);
/* harmony import */ var _propertyPane_TitleConfiguration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./propertyPane/TitleConfiguration */ 867);
var __extends = (undefined && undefined.__extends) || (function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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










var FancyListWebPart = /** @class */ (function (_super) {
    __extends(FancyListWebPart, _super);
    function FancyListWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        // Store dropdown options
        _this._lists = [];
        _this._fields = [];
        _this._fieldsLoadedForList = '';
        _this._loadingLists = false;
        _this._loadingFields = false;
        // Testing defaults for Page 1
        _this.TESTING_DEFAULTS = {
            selectedListId: 'Events',
            categoryField: 'Location',
            subjectField: 'Title',
            descriptionField: 'Description'
        };
        return _this;
    }
    FancyListWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_FancyList__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
            context: this.context
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__.render(element, this.domElement);
    };
    FancyListWebPart.prototype.onPropertyPaneConfigurationStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lists, fields;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this._lists.length && !this._loadingLists)) return [3 /*break*/, 2];
                        this._loadingLists = true;
                        return [4 /*yield*/, this._loadLists()];
                    case 1:
                        lists = _a.sent();
                        this._lists = lists;
                        this._loadingLists = false;
                        this.context.propertyPane.refresh();
                        _a.label = 2;
                    case 2:
                        if (!(this.properties.selectedListId && this._fieldsLoadedForList !== this.properties.selectedListId && !this._loadingFields)) return [3 /*break*/, 4];
                        this._loadingFields = true;
                        return [4 /*yield*/, this._loadFields(this.properties.selectedListId)];
                    case 3:
                        fields = _a.sent();
                        this._fields = fields;
                        this._fieldsLoadedForList = this.properties.selectedListId;
                        this._loadingFields = false;
                        this.context.propertyPane.refresh();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FancyListWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        return __awaiter(this, void 0, void 0, function () {
            var fields;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(propertyPath === 'selectedListId')) return [3 /*break*/, 2];
                        // Clear field selections and reload fields
                        this.properties.categoryField = '';
                        this.properties.subjectField = '';
                        this.properties.descriptionField = '';
                        this._fields = [];
                        this._fieldsLoadedForList = '';
                        this._loadingFields = true;
                        return [4 /*yield*/, this._loadFields(this.properties.selectedListId)];
                    case 1:
                        fields = _a.sent();
                        this._fields = fields;
                        this._fieldsLoadedForList = this.properties.selectedListId;
                        this._loadingFields = false;
                        this.context.propertyPane.refresh();
                        return [3 /*break*/, 3];
                    case 2:
                        if (propertyPath === 'categoryField') {
                            // Clear subject and description when category changes
                            this.properties.subjectField = '';
                            this.properties.descriptionField = '';
                            this.context.propertyPane.refresh();
                        }
                        else if (propertyPath === 'subjectField') {
                            // Clear description when subject changes
                            this.properties.descriptionField = '';
                            this.context.propertyPane.refresh();
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FancyListWebPart.prototype.onInit = function () {
        var _this = this;
        return this._getEnvironmentMessage().then(function (message) {
            _this._environmentMessage = message;
        });
    };
    FancyListWebPart.prototype._getEnvironmentMessage = function () {
        var _this = this;
        if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
            return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
                .then(function (context) {
                var environmentMessage = '';
                switch (context.app.host.name) {
                    case 'Office': // running in Office
                        environmentMessage = _this.context.isServedFromLocalhost ? FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__.AppLocalEnvironmentOffice : FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__.AppOfficeEnvironment;
                        break;
                    case 'Outlook': // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost ? FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__.AppLocalEnvironmentOutlook : FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__.AppOutlookEnvironment;
                        break;
                    case 'Teams': // running in Teams
                    case 'TeamsModern':
                        environmentMessage = _this.context.isServedFromLocalhost ? FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__.AppLocalEnvironmentTeams : FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__.AppTeamsTabEnvironment;
                        break;
                    default:
                        environmentMessage = FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__.UnknownEnvironment;
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost ? FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__.AppLocalEnvironmentSharePoint : FancyListWebPartStrings__WEBPACK_IMPORTED_MODULE_6__.AppSharePointEnvironment);
    };
    FancyListWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
            this.domElement.style.setProperty('--link', semanticColors.link || null);
            this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
        }
    };
    FancyListWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(FancyListWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__.Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    FancyListWebPart.prototype._loadLists = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(this.context.pageContext.web.absoluteUrl, "/_api/web/lists?$filter=Hidden eq false and BaseTemplate ne 544&$select=Id,Title");
                        return [4 /*yield*/, this.context.spHttpClient.get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__.SPHttpClient.configurations.v1)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data.value.map(function (list) { return ({ key: list.Title, text: list.Title }); })];
                }
            });
        });
    };
    FancyListWebPart.prototype._loadFields = function (listTitle) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!listTitle)
                            return [2 /*return*/, []];
                        url = "".concat(this.context.pageContext.web.absoluteUrl, "/_api/web/lists/getbytitle('").concat(listTitle, "')/fields?$filter=Hidden eq false and ReadOnlyField eq false&$select=InternalName,Title,TypeAsString");
                        return [4 /*yield*/, this.context.spHttpClient.get(url, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_5__.SPHttpClient.configurations.v1)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        // Only allow text, choice, or multiline fields for mapping
                        return [2 /*return*/, data.value
                                .filter(function (field) { return ['Text', 'Choice', 'Note'].includes(field.TypeAsString); })
                                .map(function (field) { return ({ key: field.InternalName, text: field.Title || field.InternalName }); })];
                }
            });
        });
    };
    FancyListWebPart.prototype._getAvailableFieldsForCategory = function () {
        var _this = this;
        if (!this.properties.selectedListId) {
            return [{ key: '', text: 'Select a list first' }];
        }
        if (this._loadingFields) {
            return [{ key: '', text: 'Loading...' }];
        }
        return this._fields.filter(function (field) {
            return field.key !== _this.properties.subjectField &&
                field.key !== _this.properties.descriptionField;
        });
    };
    FancyListWebPart.prototype._getAvailableFieldsForSubject = function () {
        var _this = this;
        if (!this.properties.selectedListId) {
            return [{ key: '', text: 'Select a list first' }];
        }
        if (!this.properties.categoryField) {
            return [{ key: '', text: 'Select category field first' }];
        }
        if (this._loadingFields) {
            return [{ key: '', text: 'Loading...' }];
        }
        return this._fields.filter(function (field) {
            return field.key !== _this.properties.categoryField &&
                field.key !== _this.properties.descriptionField;
        });
    };
    FancyListWebPart.prototype._getAvailableFieldsForDescription = function () {
        var _this = this;
        if (!this.properties.selectedListId) {
            return [{ key: '', text: 'Select a list first' }];
        }
        if (!this.properties.categoryField) {
            return [{ key: '', text: 'Select category field first' }];
        }
        if (!this.properties.subjectField) {
            return [{ key: '', text: 'Select subject field first' }];
        }
        if (this._loadingFields) {
            return [{ key: '', text: 'Loading...' }];
        }
        return this._fields.filter(function (field) {
            return field.key !== _this.properties.categoryField &&
                field.key !== _this.properties.subjectField;
        });
    };
    FancyListWebPart.prototype.getPropertyPaneConfiguration = function () {
        var _this = this;
        return {
            pages: [
                // Page 1: List Configuration
                {
                    groups: [
                        {
                            groupName: 'List Configuration',
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'listConfigurationDescription',
                                    properties: {
                                        key: 'listConfigurationDescription',
                                        onRender: function (elem, ctx, changeCallback) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {
                                                style: {
                                                    fontSize: '14px',
                                                    color: '#666',
                                                    marginBottom: '16px',
                                                    lineHeight: '1.4'
                                                }
                                            }, 'Select a SharePoint List or Document Library. Then using the drop downs first pick a Category. This is the top level and is Filterable. Next pick your Subject. This is quick description field. Finally pick a Description. This field can be multiline and include rich html components from the list or document library you select.'), elem);
                                        },
                                        onDispose: function (elem) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(elem);
                                        }
                                    }
                                },
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneDropdown)('selectedListId', {
                                    label: 'Select List or Library',
                                    options: this._lists.length ? this._lists : [{ key: '', text: this._loadingLists ? 'Loading...' : 'No lists found' }],
                                    selectedKey: this.properties.selectedListId
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneDropdown)('categoryField', {
                                    label: 'Category Field (Required First)',
                                    options: this._getAvailableFieldsForCategory(),
                                    selectedKey: this.properties.categoryField,
                                    disabled: !this.properties.selectedListId
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneDropdown)('subjectField', {
                                    label: 'Subject Field (Required Second)',
                                    options: this._getAvailableFieldsForSubject(),
                                    selectedKey: this.properties.subjectField,
                                    disabled: !this.properties.selectedListId || !this.properties.categoryField
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneDropdown)('descriptionField', {
                                    label: 'Description Field (Required Third)',
                                    options: this._getAvailableFieldsForDescription(),
                                    selectedKey: this.properties.descriptionField,
                                    disabled: !this.properties.selectedListId || !this.properties.categoryField || !this.properties.subjectField
                                }),
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'page1Buttons',
                                    properties: {
                                        key: 'page1Buttons',
                                        onRender: function (elem, ctx, changeCallback) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {
                                                style: {
                                                    marginTop: '16px',
                                                    padding: '8px',
                                                    borderTop: '1px solid #e1dfdd',
                                                    textAlign: 'center'
                                                }
                                            }, [
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement('button', {
                                                    key: 'testDefaultsBtn',
                                                    style: {
                                                        backgroundColor: '#0078d4',
                                                        color: 'white',
                                                        border: 'none',
                                                        padding: '8px 16px',
                                                        borderRadius: '4px',
                                                        cursor: 'pointer',
                                                        fontSize: '14px',
                                                        fontWeight: '600',
                                                        marginRight: '8px'
                                                    },
                                                    onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                                                        var _this = this;
                                                        return __generator(this, function (_a) {
                                                            // Set test defaults one by one
                                                            this.properties.selectedListId = this.TESTING_DEFAULTS.selectedListId;
                                                            if (changeCallback)
                                                                changeCallback();
                                                            this.context.propertyPane.refresh();
                                                            // Wait longer for the list to load, then load fields and set category field
                                                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                                                var _a, error_1;
                                                                var _this = this;
                                                                return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            _b.trys.push([0, 2, , 3]);
                                                                            // Load fields for the selected list
                                                                            _a = this;
                                                                            return [4 /*yield*/, this._loadFields(this.TESTING_DEFAULTS.selectedListId)];
                                                                        case 1:
                                                                            // Load fields for the selected list
                                                                            _a._fields = _b.sent();
                                                                            this._fieldsLoadedForList = this.TESTING_DEFAULTS.selectedListId;
                                                                            console.log('Loaded fields:', this._fields);
                                                                            console.log('Looking for description field:', this.TESTING_DEFAULTS.descriptionField);
                                                                            // Set category field
                                                                            this.properties.categoryField = this.TESTING_DEFAULTS.categoryField;
                                                                            if (changeCallback)
                                                                                changeCallback();
                                                                            this.context.propertyPane.refresh();
                                                                            // Wait longer, then set subject field
                                                                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                                                                var _this = this;
                                                                                return __generator(this, function (_a) {
                                                                                    this.properties.subjectField = this.TESTING_DEFAULTS.subjectField;
                                                                                    if (changeCallback)
                                                                                        changeCallback();
                                                                                    this.context.propertyPane.refresh();
                                                                                    // Wait longer, then set description field
                                                                                    setTimeout(function () {
                                                                                        console.log('Setting description field to:', _this.TESTING_DEFAULTS.descriptionField);
                                                                                        _this.properties.descriptionField = _this.TESTING_DEFAULTS.descriptionField;
                                                                                        if (changeCallback)
                                                                                            changeCallback();
                                                                                        _this.context.propertyPane.refresh();
                                                                                        // Force another refresh after a short delay to ensure the value is set
                                                                                        setTimeout(function () {
                                                                                            console.log('Final refresh to ensure description field is set');
                                                                                            _this.context.propertyPane.refresh();
                                                                                        }, 500);
                                                                                    }, 2000);
                                                                                    return [2 /*return*/];
                                                                                });
                                                                            }); }, 2000);
                                                                            return [3 /*break*/, 3];
                                                                        case 2:
                                                                            error_1 = _b.sent();
                                                                            console.error('Error loading fields:', error_1);
                                                                            return [3 /*break*/, 3];
                                                                        case 3: return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); }, 2000);
                                                            return [2 /*return*/];
                                                        });
                                                    }); }
                                                }, 'Test Defaults')
                                            ]), elem);
                                        },
                                        onDispose: function (elem) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(elem);
                                        }
                                    }
                                },
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'pageNavigation',
                                    properties: {
                                        key: 'pageNavigation',
                                        onRender: function (elem, ctx, changeCallback) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {
                                                style: {
                                                    marginTop: '16px',
                                                    padding: '8px',
                                                    borderTop: '1px solid #e1dfdd',
                                                    fontSize: '14px',
                                                    color: '#323130'
                                                }
                                            }, [
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', { key: 'navTitle', style: { fontWeight: '600', marginBottom: '8px' } }, 'Page Navigation:'),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', { key: 'page1', style: { marginBottom: '4px' } }, 'Page 1 - List Selection and Configuration'),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', { key: 'page2', style: { marginBottom: '4px' } }, 'Page 2 - Title Configuration'),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', { key: 'page3', style: { marginBottom: '4px' } }, 'Page 3 - Filter Configuration'),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', { key: 'page4', style: { marginBottom: '4px' } }, 'Page 4 - Category Look and Feel'),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', { key: 'page5', style: { marginBottom: '4px' } }, 'Page 5 - Subject Look and Feel'),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', { key: 'page6', style: { marginBottom: '4px' } }, 'Page 6 - Description Look and Feel'),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', { key: 'page7', style: { marginBottom: '4px' } }, 'Page 7 - About')
                                            ]), elem);
                                        },
                                        onDispose: function (elem) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(elem);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                // Page 2: Title Section Configuration (TitleConfiguration Module)
                {
                    groups: [
                        {
                            groupName: 'Title Section Settings',
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'titleConfiguration',
                                    properties: {
                                        key: 'titleConfiguration',
                                        onRender: function (elem, ctx, changeCallback) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_propertyPane_TitleConfiguration__WEBPACK_IMPORTED_MODULE_9__.TitleConfiguration, {
                                                label: 'Title Configuration'
                                            }), elem);
                                        },
                                        onDispose: function (elem) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(elem);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                // Page 3: Filter Buttons Configuration (Placeholder)
                {
                    header: {
                        description: 'Filter Buttons Configuration - Coming Soon'
                    },
                    groups: [
                        {
                            groupName: 'Filter Section Settings',
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'filterPlaceholder',
                                    properties: {
                                        key: 'filterPlaceholder',
                                        onRender: function (elem, ctx, changeCallback) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {
                                                style: {
                                                    fontSize: '14px',
                                                    color: '#666',
                                                    marginBottom: '16px',
                                                    lineHeight: '1.4',
                                                    padding: '16px',
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '4px',
                                                    border: '1px solid #e1dfdd'
                                                }
                                            }, 'Filter Buttons Configuration - This page will be updated with interactive controls for styling filter buttons. Currently using default styling.'), elem);
                                        },
                                        onDispose: function (elem) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(elem);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                // Page 4: Category Section Configuration (Placeholder)
                {
                    header: {
                        description: 'Category Section Configuration - Coming Soon'
                    },
                    groups: [
                        {
                            groupName: 'Category Section Settings',
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'categoryPlaceholder',
                                    properties: {
                                        key: 'categoryPlaceholder',
                                        onRender: function (elem, ctx, changeCallback) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {
                                                style: {
                                                    fontSize: '14px',
                                                    color: '#666',
                                                    marginBottom: '16px',
                                                    lineHeight: '1.4',
                                                    padding: '16px',
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '4px',
                                                    border: '1px solid #e1dfdd'
                                                }
                                            }, 'Category Section Configuration - This page will be updated with interactive controls for styling Category sections. Currently using default styling.'), elem);
                                        },
                                        onDispose: function (elem) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(elem);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                // Page 5: Subject Section Configuration (Placeholder)
                {
                    header: {
                        description: 'Subject Section Configuration - Coming Soon'
                    },
                    groups: [
                        {
                            groupName: 'Subject Section Settings',
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'subjectPlaceholder',
                                    properties: {
                                        key: 'subjectPlaceholder',
                                        onRender: function (elem, ctx, changeCallback) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {
                                                style: {
                                                    fontSize: '14px',
                                                    color: '#666',
                                                    marginBottom: '16px',
                                                    lineHeight: '1.4',
                                                    padding: '16px',
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '4px',
                                                    border: '1px solid #e1dfdd'
                                                }
                                            }, 'Subject Section Configuration - This page will be updated with interactive controls for styling Subject sections. Currently using default styling.'), elem);
                                        },
                                        onDispose: function (elem) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(elem);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                // Page 6: Description Section Configuration (Placeholder)
                {
                    header: {
                        description: 'Description Section Configuration - Coming Soon'
                    },
                    groups: [
                        {
                            groupName: 'Description Section Settings',
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'descriptionPlaceholder',
                                    properties: {
                                        key: 'descriptionPlaceholder',
                                        onRender: function (elem, ctx, changeCallback) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {
                                                style: {
                                                    fontSize: '14px',
                                                    color: '#666',
                                                    marginBottom: '16px',
                                                    lineHeight: '1.4',
                                                    padding: '16px',
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '4px',
                                                    border: '1px solid #e1dfdd'
                                                }
                                            }, 'Description Section Configuration - This page will be updated with interactive controls for styling Description sections. Currently using default styling.'), elem);
                                        },
                                        onDispose: function (elem) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(elem);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                // Page 7: About
                {
                    header: {
                        description: 'About the Fancy List Web Part'
                    },
                    groups: [
                        {
                            groupName: 'Version Information',
                            groupFields: [
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneLabel)('version', {
                                    text: "Version: ".concat(_DEFAULTS_CONFIG__WEBPACK_IMPORTED_MODULE_8__["default"].aboutInfo.version)
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneLabel)('description', {
                                    text: _DEFAULTS_CONFIG__WEBPACK_IMPORTED_MODULE_8__["default"].aboutInfo.description
                                })
                            ]
                        },
                        {
                            groupName: 'User Story',
                            groupFields: [
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneLabel)('userStory', {
                                    text: _DEFAULTS_CONFIG__WEBPACK_IMPORTED_MODULE_8__["default"].aboutInfo.userStory
                                })
                            ]
                        },
                        {
                            groupName: 'Features',
                            groupFields: [
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneLabel)('features1', {
                                    text: "\u2022 ".concat(_DEFAULTS_CONFIG__WEBPACK_IMPORTED_MODULE_8__["default"].aboutInfo.features[0])
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneLabel)('features2', {
                                    text: "\u2022 ".concat(_DEFAULTS_CONFIG__WEBPACK_IMPORTED_MODULE_8__["default"].aboutInfo.features[1])
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneLabel)('features3', {
                                    text: "\u2022 ".concat(_DEFAULTS_CONFIG__WEBPACK_IMPORTED_MODULE_8__["default"].aboutInfo.features[2])
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneLabel)('features4', {
                                    text: "\u2022 ".concat(_DEFAULTS_CONFIG__WEBPACK_IMPORTED_MODULE_8__["default"].aboutInfo.features[3])
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneLabel)('features5', {
                                    text: "\u2022 ".concat(_DEFAULTS_CONFIG__WEBPACK_IMPORTED_MODULE_8__["default"].aboutInfo.features[4])
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return FancyListWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__.BaseClientSideWebPart));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FancyListWebPart);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=fancy-list-web-part.js.map