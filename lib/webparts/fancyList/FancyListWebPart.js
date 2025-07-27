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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneDropdown, PropertyPaneLabel } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPHttpClient } from '@microsoft/sp-http';
import * as strings from 'FancyListWebPartStrings';
import FancyList from './components/FancyList';
import DEFAULTS_CONFIG from './DEFAULTS_CONFIG';
import { TitleConfiguration } from './propertyPane/TitleConfiguration';
import { FilterModuleControl } from './propertyPane/FilterModuleControl';
import { SectionModuleControl } from './propertyPane/SectionModuleControl';
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
        _this._previousListId = '';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61;
        // Map individual properties to the format expected by FancyList component
        // Use default values if properties are undefined
        var titleSettings = {
            enabled: (_b = (_a = this.properties.titleSettings) === null || _a === void 0 ? void 0 : _a.enabled) !== null && _b !== void 0 ? _b : DEFAULTS_CONFIG.titleSettings.enabled,
            webPartTitle: (_c = this.properties.webPartTitle) !== null && _c !== void 0 ? _c : '',
            shape: (_e = (_d = this.properties.titleSettings) === null || _d === void 0 ? void 0 : _d.shape) !== null && _e !== void 0 ? _e : DEFAULTS_CONFIG.titleSettings.shape,
            showDivider: (_f = this.properties.showTitleDivider) !== null && _f !== void 0 ? _f : DEFAULTS_CONFIG.titleSettings.showDivider,
            backgroundType: (_g = this.properties.webPartTitleBackgroundType) !== null && _g !== void 0 ? _g : DEFAULTS_CONFIG.titleSettings.background.type,
            backgroundColor: (_h = this.properties.webPartTitleBackgroundColor) !== null && _h !== void 0 ? _h : DEFAULTS_CONFIG.titleSettings.background.color,
            backgroundAlpha: (_j = this.properties.webPartTitleBackgroundAlpha) !== null && _j !== void 0 ? _j : DEFAULTS_CONFIG.titleSettings.background.alpha,
            gradientDirection: (_k = this.properties.webPartTitleBackgroundGradientDirection) !== null && _k !== void 0 ? _k : DEFAULTS_CONFIG.titleSettings.background.gradientDirection,
            gradientColor1: (_l = this.properties.webPartTitleBackgroundGradientColor1) !== null && _l !== void 0 ? _l : DEFAULTS_CONFIG.titleSettings.background.gradientColor1,
            gradientColor2: (_m = this.properties.webPartTitleBackgroundGradientColor2) !== null && _m !== void 0 ? _m : DEFAULTS_CONFIG.titleSettings.background.gradientColor2,
            gradientAlpha: (_o = this.properties.webPartTitleBackgroundGradientAlpha1) !== null && _o !== void 0 ? _o : DEFAULTS_CONFIG.titleSettings.background.gradientAlpha1,
            imageUrl: (_p = this.properties.webPartTitleBackgroundImage) !== null && _p !== void 0 ? _p : DEFAULTS_CONFIG.titleSettings.background.image,
            imageAlpha: (_q = this.properties.webPartTitleBackgroundImageAlpha) !== null && _q !== void 0 ? _q : DEFAULTS_CONFIG.titleSettings.background.imageAlpha,
            font: {
                family: (_r = this.properties.webPartTitleFont) !== null && _r !== void 0 ? _r : DEFAULTS_CONFIG.titleSettings.font.family,
                size: (_s = this.properties.webPartTitleFontSize) !== null && _s !== void 0 ? _s : DEFAULTS_CONFIG.titleSettings.font.size,
                color: (_t = this.properties.webPartTitleColor) !== null && _t !== void 0 ? _t : DEFAULTS_CONFIG.titleSettings.font.color,
                formatting: (_u = this.properties.webPartTitleFormatting) !== null && _u !== void 0 ? _u : DEFAULTS_CONFIG.titleSettings.font.formatting,
                alignment: (_v = this.properties.webPartTitleAlignment) !== null && _v !== void 0 ? _v : DEFAULTS_CONFIG.titleSettings.font.alignment
            }
        };
        // Map filter properties to the format expected by FancyList component
        var filterSettings = {
            enableFilters: (_x = (_w = this.properties.filterSettings) === null || _w === void 0 ? void 0 : _w.enableFilters) !== null && _x !== void 0 ? _x : DEFAULTS_CONFIG.filterSettings.enableFilters,
            font: {
                family: (_0 = (_z = (_y = this.properties.filterSettings) === null || _y === void 0 ? void 0 : _y.font) === null || _z === void 0 ? void 0 : _z.family) !== null && _0 !== void 0 ? _0 : DEFAULTS_CONFIG.filterSettings.font.family,
                size: (_3 = (_2 = (_1 = this.properties.filterSettings) === null || _1 === void 0 ? void 0 : _1.font) === null || _2 === void 0 ? void 0 : _2.size) !== null && _3 !== void 0 ? _3 : DEFAULTS_CONFIG.filterSettings.font.size,
                color: '#605e5c', // Default filter font color
                formatting: (_6 = (_5 = (_4 = this.properties.filterSettings) === null || _4 === void 0 ? void 0 : _4.font) === null || _5 === void 0 ? void 0 : _5.formatting) !== null && _6 !== void 0 ? _6 : DEFAULTS_CONFIG.filterSettings.font.formatting,
                alignment: (_9 = (_8 = (_7 = this.properties.filterSettings) === null || _7 === void 0 ? void 0 : _7.font) === null || _8 === void 0 ? void 0 : _8.alignment) !== null && _9 !== void 0 ? _9 : DEFAULTS_CONFIG.filterSettings.font.alignment
            },
            activeColors: {
                background: (_12 = (_11 = (_10 = this.properties.filterSettings) === null || _10 === void 0 ? void 0 : _10.activeColors) === null || _11 === void 0 ? void 0 : _11.background) !== null && _12 !== void 0 ? _12 : DEFAULTS_CONFIG.filterSettings.activeColors.background,
                font: (_15 = (_14 = (_13 = this.properties.filterSettings) === null || _13 === void 0 ? void 0 : _13.activeColors) === null || _14 === void 0 ? void 0 : _14.font) !== null && _15 !== void 0 ? _15 : DEFAULTS_CONFIG.filterSettings.activeColors.font
            },
            inactiveColors: {
                background: (_18 = (_17 = (_16 = this.properties.filterSettings) === null || _16 === void 0 ? void 0 : _16.inactiveColors) === null || _17 === void 0 ? void 0 : _17.background) !== null && _18 !== void 0 ? _18 : DEFAULTS_CONFIG.filterSettings.inactiveColors.background,
                font: (_21 = (_20 = (_19 = this.properties.filterSettings) === null || _19 === void 0 ? void 0 : _19.inactiveColors) === null || _20 === void 0 ? void 0 : _20.font) !== null && _21 !== void 0 ? _21 : DEFAULTS_CONFIG.filterSettings.inactiveColors.font
            },
            shape: (_23 = (_22 = this.properties.filterSettings) === null || _22 === void 0 ? void 0 : _22.shape) !== null && _23 !== void 0 ? _23 : DEFAULTS_CONFIG.filterSettings.shape,
            backgroundShape: (_25 = (_24 = this.properties.filterSettings) === null || _24 === void 0 ? void 0 : _24.backgroundShape) !== null && _25 !== void 0 ? _25 : DEFAULTS_CONFIG.filterSettings.backgroundShape,
            showAllCategories: (_27 = (_26 = this.properties.filterSettings) === null || _26 === void 0 ? void 0 : _26.showAllCategories) !== null && _27 !== void 0 ? _27 : DEFAULTS_CONFIG.filterSettings.showAllCategories,
            background: {
                type: (_30 = (_29 = (_28 = this.properties.filterSettings) === null || _28 === void 0 ? void 0 : _28.background) === null || _29 === void 0 ? void 0 : _29.type) !== null && _30 !== void 0 ? _30 : DEFAULTS_CONFIG.filterSettings.background.type,
                color: (_33 = (_32 = (_31 = this.properties.filterSettings) === null || _31 === void 0 ? void 0 : _31.background) === null || _32 === void 0 ? void 0 : _32.color) !== null && _33 !== void 0 ? _33 : DEFAULTS_CONFIG.filterSettings.background.color,
                alpha: (_36 = (_35 = (_34 = this.properties.filterSettings) === null || _34 === void 0 ? void 0 : _34.background) === null || _35 === void 0 ? void 0 : _35.alpha) !== null && _36 !== void 0 ? _36 : DEFAULTS_CONFIG.filterSettings.background.alpha,
                image: (_39 = (_38 = (_37 = this.properties.filterSettings) === null || _37 === void 0 ? void 0 : _37.background) === null || _38 === void 0 ? void 0 : _38.image) !== null && _39 !== void 0 ? _39 : DEFAULTS_CONFIG.filterSettings.background.image,
                imageAlpha: (_42 = (_41 = (_40 = this.properties.filterSettings) === null || _40 === void 0 ? void 0 : _40.background) === null || _41 === void 0 ? void 0 : _41.imageAlpha) !== null && _42 !== void 0 ? _42 : DEFAULTS_CONFIG.filterSettings.background.imageAlpha,
                gradientDirection: (_45 = (_44 = (_43 = this.properties.filterSettings) === null || _43 === void 0 ? void 0 : _43.background) === null || _44 === void 0 ? void 0 : _44.gradientDirection) !== null && _45 !== void 0 ? _45 : DEFAULTS_CONFIG.filterSettings.background.gradientDirection,
                gradientColor1: (_48 = (_47 = (_46 = this.properties.filterSettings) === null || _46 === void 0 ? void 0 : _46.background) === null || _47 === void 0 ? void 0 : _47.gradientColor1) !== null && _48 !== void 0 ? _48 : DEFAULTS_CONFIG.filterSettings.background.gradientColor1,
                gradientAlpha1: (_51 = (_50 = (_49 = this.properties.filterSettings) === null || _49 === void 0 ? void 0 : _49.background) === null || _50 === void 0 ? void 0 : _50.gradientAlpha1) !== null && _51 !== void 0 ? _51 : DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1,
                gradientColor2: (_54 = (_53 = (_52 = this.properties.filterSettings) === null || _52 === void 0 ? void 0 : _52.background) === null || _53 === void 0 ? void 0 : _53.gradientColor2) !== null && _54 !== void 0 ? _54 : DEFAULTS_CONFIG.filterSettings.background.gradientColor2,
                gradientAlpha2: (_57 = (_56 = (_55 = this.properties.filterSettings) === null || _55 === void 0 ? void 0 : _55.background) === null || _56 === void 0 ? void 0 : _56.gradientAlpha2) !== null && _57 !== void 0 ? _57 : DEFAULTS_CONFIG.filterSettings.background.gradientAlpha2
            },
            showDivider: (_59 = (_58 = this.properties.filterSettings) === null || _58 === void 0 ? void 0 : _58.showDivider) !== null && _59 !== void 0 ? _59 : DEFAULTS_CONFIG.filterSettings.showDivider
        };
        var element = React.createElement(FancyList, {
            selectedListId: this.properties.selectedListId,
            categoryField: this.properties.categoryField,
            subjectField: this.properties.subjectField,
            descriptionField: this.properties.descriptionField,
            showAllCategories: (_61 = (_60 = this.properties.filterSettings) === null || _60 === void 0 ? void 0 : _60.showAllCategories) !== null && _61 !== void 0 ? _61 : DEFAULTS_CONFIG.filterSettings.showAllCategories,
            defaultExpanded: this.properties.defaultExpanded,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName,
            context: this.context,
            titleSettings: titleSettings,
            filterSettings: filterSettings
        });
        ReactDom.render(element, this.domElement);
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
            var previousList, previousListName, fields, selectedList, newListName;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(propertyPath === 'selectedListId')) return [3 /*break*/, 2];
                        previousList = this._lists.find(function (list) { return list.key === _this._previousListId; });
                        previousListName = previousList ? previousList.text : '';
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
                        selectedList = this._lists.find(function (list) { return list.key === _this.properties.selectedListId; });
                        newListName = selectedList ? selectedList.text : '';
                        // Update title text if:
                        // 1. Title is currently empty/null, OR
                        // 2. Title exactly matches the previous list name
                        if ((!this.properties.webPartTitle || this.properties.webPartTitle.trim() === '') ||
                            (this.properties.webPartTitle.trim() === previousListName)) {
                            if (newListName) {
                                this.properties.webPartTitle = newListName;
                            }
                        }
                        // Store the current list ID as previous for next change
                        this._previousListId = this.properties.selectedListId;
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
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
                        break;
                    case 'Outlook': // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
                        break;
                    case 'Teams': // running in Teams
                    case 'TeamsModern':
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
                        break;
                    default:
                        environmentMessage = strings.UnknownEnvironment;
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
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
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(FancyListWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
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
                        return [4 /*yield*/, this.context.spHttpClient.get(url, SPHttpClient.configurations.v1)];
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
                        return [4 /*yield*/, this.context.spHttpClient.get(url, SPHttpClient.configurations.v1)];
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
    FancyListWebPart.prototype._getAvailableCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, categories, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('🔄 CATEGORIES DEBUG: Getting categories for list:', this.properties.selectedListId);
                        // Return empty array if no list is selected
                        if (!this.properties.selectedListId) {
                            console.log('🔄 CATEGORIES DEBUG: No list selected, returning empty array');
                            return [2 /*return*/, []];
                        }
                        // Return empty array if no category field is selected
                        if (!this.properties.categoryField) {
                            console.log('🔄 CATEGORIES DEBUG: No category field selected, returning empty array');
                            return [2 /*return*/, []];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.context.spHttpClient.get("".concat(this.context.pageContext.web.absoluteUrl, "/_api/web/lists/getbytitle('").concat(this.properties.selectedListId, "')/items?$select=").concat(this.properties.categoryField, "&$orderby=").concat(this.properties.categoryField), SPHttpClient.configurations.v1)];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            console.log('🔄 CATEGORIES DEBUG: Failed to load list data:', response.statusText);
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        categories = Array.from(new Set(data.value.map(function (item) { return item[_this.properties.categoryField] || 'Uncategorized'; }))).sort();
                        console.log('🔄 CATEGORIES DEBUG: Available categories:', categories);
                        return [2 /*return*/, categories];
                    case 4:
                        error_1 = _a.sent();
                        console.log('🔄 CATEGORIES DEBUG: Error loading categories:', error_1);
                        return [2 /*return*/, []];
                    case 5: return [2 /*return*/];
                }
            });
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
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'page1Header',
                                    properties: {
                                        key: 'page1Header',
                                        onRender: function (elem, ctx, changeCallback) {
                                            ReactDom.render(React.createElement('div', {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: '600',
                                                    color: 'rgb(50, 49, 48)',
                                                    marginBottom: '12px'
                                                }
                                            }, 'List Selection Configuration'), elem);
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
                                        }
                                    }
                                },
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'listConfigurationDescription',
                                    properties: {
                                        key: 'listConfigurationDescription',
                                        onRender: function (elem, ctx, changeCallback) {
                                            ReactDom.render(React.createElement('div', {
                                                style: {
                                                    fontSize: '14px',
                                                    color: '#666',
                                                    marginBottom: '16px',
                                                    lineHeight: '1.4'
                                                }
                                            }, 'Select a SharePoint List or Document Library. Then using the drop downs first pick a Category. This is the top level and is Filterable. Next pick your Subject. This is quick description field. Finally pick a Description. This field can be multiline and include rich html components from the list or document library you select.'), elem);
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
                                        }
                                    }
                                },
                                PropertyPaneDropdown('selectedListId', {
                                    label: 'Select List or Library',
                                    options: this._lists.length ? this._lists : [{ key: '', text: this._loadingLists ? 'Loading...' : 'No lists found' }],
                                    selectedKey: this.properties.selectedListId
                                }),
                                PropertyPaneDropdown('categoryField', {
                                    label: 'Category Field (Required First)',
                                    options: this._getAvailableFieldsForCategory(),
                                    selectedKey: this.properties.categoryField,
                                    disabled: !this.properties.selectedListId
                                }),
                                PropertyPaneDropdown('subjectField', {
                                    label: 'Subject Field (Required Second)',
                                    options: this._getAvailableFieldsForSubject(),
                                    selectedKey: this.properties.subjectField,
                                    disabled: !this.properties.selectedListId || !this.properties.categoryField
                                }),
                                PropertyPaneDropdown('descriptionField', {
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
                                            ReactDom.render(React.createElement('div', {
                                                style: {
                                                    marginTop: '16px',
                                                    padding: '8px',
                                                    borderTop: '1px solid #e1dfdd',
                                                    textAlign: 'center'
                                                }
                                            }, [
                                                React.createElement('button', {
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
                                                            // Set the title text to "Testing Fancy List"
                                                            this.properties.webPartTitle = 'Testing Fancy List';
                                                            if (changeCallback)
                                                                changeCallback();
                                                            this.context.propertyPane.refresh();
                                                            // Wait longer for the list to load, then load fields and set category field
                                                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                                                var _a, error_2;
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
                                                                            error_2 = _b.sent();
                                                                            console.error('Error loading fields:', error_2);
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
                                            ReactDom.unmountComponentAtNode(elem);
                                        }
                                    }
                                },
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'pageNavigation',
                                    properties: {
                                        key: 'pageNavigation',
                                        onRender: function (elem, ctx, changeCallback) {
                                            ReactDom.render(React.createElement('div', {
                                                style: {
                                                    marginTop: '16px',
                                                    padding: '8px',
                                                    borderTop: '1px solid #e1dfdd',
                                                    fontSize: '14px',
                                                    color: '#323130'
                                                }
                                            }, [
                                                React.createElement('div', { key: 'navTitle', style: { fontWeight: '600', marginBottom: '8px' } }, 'Page Navigation:'),
                                                React.createElement('div', { key: 'page1', style: { marginBottom: '4px' } }, 'Page 1 - List Selection and Configuration'),
                                                React.createElement('div', { key: 'page2', style: { marginBottom: '4px' } }, 'Page 2 - Title Configuration'),
                                                React.createElement('div', { key: 'page3', style: { marginBottom: '4px' } }, 'Page 3 - Filter Configuration'),
                                                React.createElement('div', { key: 'page4', style: { marginBottom: '4px' } }, 'Page 4 - Category Look and Feel'),
                                                React.createElement('div', { key: 'page5', style: { marginBottom: '4px' } }, 'Page 5 - Subject Look and Feel'),
                                                React.createElement('div', { key: 'page6', style: { marginBottom: '4px' } }, 'Page 6 - Description Look and Feel'),
                                                React.createElement('div', { key: 'page7', style: { marginBottom: '4px' } }, 'Page 7 - About')
                                            ]), elem);
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
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
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'titleConfiguration',
                                    properties: {
                                        key: 'titleConfiguration',
                                        onRender: function (elem, ctx, changeCallback) {
                                            var _a, _b;
                                            ReactDom.render(React.createElement(TitleConfiguration, {
                                                label: 'Title Configuration',
                                                settings: {
                                                    enabled: ((_a = _this.properties.titleSettings) === null || _a === void 0 ? void 0 : _a.enabled) || DEFAULTS_CONFIG.titleSettings.enabled,
                                                    webPartTitle: _this.properties.webPartTitle || DEFAULTS_CONFIG.titleSettings.webPartTitle,
                                                    shape: ((_b = _this.properties.titleSettings) === null || _b === void 0 ? void 0 : _b.shape) || DEFAULTS_CONFIG.titleSettings.shape,
                                                    showDivider: _this.properties.showTitleDivider || DEFAULTS_CONFIG.titleSettings.showDivider,
                                                    backgroundType: _this.properties.webPartTitleBackgroundType || DEFAULTS_CONFIG.titleSettings.background.type,
                                                    backgroundColor: _this.properties.webPartTitleBackgroundColor || DEFAULTS_CONFIG.titleSettings.background.color,
                                                    backgroundAlpha: _this.properties.webPartTitleBackgroundAlpha || DEFAULTS_CONFIG.titleSettings.background.alpha,
                                                    gradientDirection: _this.properties.webPartTitleBackgroundGradientDirection || DEFAULTS_CONFIG.titleSettings.background.gradientDirection,
                                                    gradientColor1: _this.properties.webPartTitleBackgroundGradientColor1 || DEFAULTS_CONFIG.titleSettings.background.gradientColor1,
                                                    gradientColor2: _this.properties.webPartTitleBackgroundGradientColor2 || DEFAULTS_CONFIG.titleSettings.background.gradientColor2,
                                                    gradientAlpha: _this.properties.webPartTitleBackgroundGradientAlpha1 || DEFAULTS_CONFIG.titleSettings.background.gradientAlpha1,
                                                    imageUrl: _this.properties.webPartTitleBackgroundImage || DEFAULTS_CONFIG.titleSettings.background.image,
                                                    imageAlpha: _this.properties.webPartTitleBackgroundImageAlpha || DEFAULTS_CONFIG.titleSettings.background.imageAlpha,
                                                    font: {
                                                        family: _this.properties.webPartTitleFont || DEFAULTS_CONFIG.titleSettings.font.family,
                                                        size: _this.properties.webPartTitleFontSize || DEFAULTS_CONFIG.titleSettings.font.size,
                                                        formatting: _this.properties.webPartTitleFormatting || DEFAULTS_CONFIG.titleSettings.font.formatting,
                                                        color: _this.properties.webPartTitleColor || DEFAULTS_CONFIG.titleSettings.font.color,
                                                        alignment: _this.properties.webPartTitleAlignment || DEFAULTS_CONFIG.titleSettings.font.alignment
                                                    }
                                                },
                                                onPropertyChange: function (propertyPath, newValue) {
                                                    // Handle property changes and update the web part properties
                                                    switch (propertyPath) {
                                                        case 'enabled':
                                                            if (!_this.properties.titleSettings)
                                                                _this.properties.titleSettings = __assign({}, DEFAULTS_CONFIG.titleSettings);
                                                            _this.properties.titleSettings.enabled = newValue;
                                                            break;
                                                        case 'webPartTitle':
                                                            _this.properties.webPartTitle = newValue;
                                                            break;
                                                        case 'shape':
                                                            if (!_this.properties.titleSettings)
                                                                _this.properties.titleSettings = __assign({}, DEFAULTS_CONFIG.titleSettings);
                                                            _this.properties.titleSettings.shape = newValue;
                                                            break;
                                                        case 'showDivider':
                                                            _this.properties.showTitleDivider = newValue;
                                                            break;
                                                        case 'backgroundType':
                                                            _this.properties.webPartTitleBackgroundType = newValue;
                                                            break;
                                                        case 'backgroundColor':
                                                            _this.properties.webPartTitleBackgroundColor = newValue;
                                                            break;
                                                        case 'backgroundAlpha':
                                                            _this.properties.webPartTitleBackgroundAlpha = newValue;
                                                            break;
                                                        case 'gradientDirection':
                                                            _this.properties.webPartTitleBackgroundGradientDirection = newValue;
                                                            break;
                                                        case 'gradientColor1':
                                                            _this.properties.webPartTitleBackgroundGradientColor1 = newValue;
                                                            break;
                                                        case 'gradientColor2':
                                                            _this.properties.webPartTitleBackgroundGradientColor2 = newValue;
                                                            break;
                                                        case 'gradientAlpha':
                                                            _this.properties.webPartTitleBackgroundGradientAlpha1 = newValue;
                                                            break;
                                                        case 'imageUrl':
                                                            _this.properties.webPartTitleBackgroundImage = newValue;
                                                            break;
                                                        case 'imageAlpha':
                                                            _this.properties.webPartTitleBackgroundImageAlpha = newValue;
                                                            break;
                                                        case 'font.family':
                                                            _this.properties.webPartTitleFont = newValue;
                                                            break;
                                                        case 'font.size':
                                                            _this.properties.webPartTitleFontSize = newValue;
                                                            break;
                                                        case 'font.formatting':
                                                            _this.properties.webPartTitleFormatting = newValue;
                                                            break;
                                                        case 'font.color':
                                                            _this.properties.webPartTitleColor = newValue;
                                                            break;
                                                        case 'font.alignment':
                                                            _this.properties.webPartTitleAlignment = newValue;
                                                            break;
                                                    }
                                                    if (changeCallback)
                                                        changeCallback();
                                                    _this.context.propertyPane.refresh();
                                                }
                                            }), elem);
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                // Page 3: Filter Buttons Configuration (FilterModuleControl)
                {
                    groups: [
                        {
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'filterConfiguration',
                                    properties: {
                                        key: 'filterConfiguration',
                                        onRender: function (elem, ctx, changeCallback) {
                                            // Load categories asynchronously and re-render when ready
                                            _this._getAvailableCategories().then(function (availableCategories) {
                                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
                                                ReactDom.render(React.createElement(FilterModuleControl, {
                                                    label: 'Filter Configuration',
                                                    settings: {
                                                        enableFilters: (_b = (_a = _this.properties.filterSettings) === null || _a === void 0 ? void 0 : _a.enableFilters) !== null && _b !== void 0 ? _b : DEFAULTS_CONFIG.filterSettings.enableFilters,
                                                        font: {
                                                            family: ((_c = _this.properties.filterSettings) === null || _c === void 0 ? void 0 : _c.font.family) || DEFAULTS_CONFIG.filterSettings.font.family,
                                                            size: ((_d = _this.properties.filterSettings) === null || _d === void 0 ? void 0 : _d.font.size) || DEFAULTS_CONFIG.filterSettings.font.size,
                                                            formatting: ((_e = _this.properties.filterSettings) === null || _e === void 0 ? void 0 : _e.font.formatting) || DEFAULTS_CONFIG.filterSettings.font.formatting,
                                                            alignment: ((_f = _this.properties.filterSettings) === null || _f === void 0 ? void 0 : _f.font.alignment) || DEFAULTS_CONFIG.filterSettings.font.alignment
                                                        },
                                                        activeColors: {
                                                            background: ((_g = _this.properties.filterSettings) === null || _g === void 0 ? void 0 : _g.activeColors.background) || DEFAULTS_CONFIG.filterSettings.activeColors.background,
                                                            font: ((_h = _this.properties.filterSettings) === null || _h === void 0 ? void 0 : _h.activeColors.font) || DEFAULTS_CONFIG.filterSettings.activeColors.font
                                                        },
                                                        inactiveColors: {
                                                            background: ((_j = _this.properties.filterSettings) === null || _j === void 0 ? void 0 : _j.inactiveColors.background) || DEFAULTS_CONFIG.filterSettings.inactiveColors.background,
                                                            font: ((_k = _this.properties.filterSettings) === null || _k === void 0 ? void 0 : _k.inactiveColors.font) || DEFAULTS_CONFIG.filterSettings.inactiveColors.font
                                                        },
                                                        shape: ((_l = _this.properties.filterSettings) === null || _l === void 0 ? void 0 : _l.shape) || DEFAULTS_CONFIG.filterSettings.shape,
                                                        backgroundShape: ((_m = _this.properties.filterSettings) === null || _m === void 0 ? void 0 : _m.backgroundShape) || DEFAULTS_CONFIG.filterSettings.backgroundShape,
                                                        showAllCategories: (_p = (_o = _this.properties.filterSettings) === null || _o === void 0 ? void 0 : _o.showAllCategories) !== null && _p !== void 0 ? _p : DEFAULTS_CONFIG.filterSettings.showAllCategories,
                                                        defaultFilterSelection: (_r = (_q = _this.properties.filterSettings) === null || _q === void 0 ? void 0 : _q.defaultFilterSelection) !== null && _r !== void 0 ? _r : DEFAULTS_CONFIG.filterSettings.defaultFilterSelection,
                                                        showDivider: ((_s = _this.properties.filterSettings) === null || _s === void 0 ? void 0 : _s.showDivider) || DEFAULTS_CONFIG.filterSettings.showDivider,
                                                        backgroundType: ((_t = _this.properties.filterSettings) === null || _t === void 0 ? void 0 : _t.background.type) || DEFAULTS_CONFIG.filterSettings.background.type,
                                                        backgroundColor: ((_u = _this.properties.filterSettings) === null || _u === void 0 ? void 0 : _u.background.color) || DEFAULTS_CONFIG.filterSettings.background.color,
                                                        backgroundAlpha: ((_v = _this.properties.filterSettings) === null || _v === void 0 ? void 0 : _v.background.alpha) || DEFAULTS_CONFIG.filterSettings.background.alpha,
                                                        gradientDirection: ((_w = _this.properties.filterSettings) === null || _w === void 0 ? void 0 : _w.background.gradientDirection) || DEFAULTS_CONFIG.filterSettings.background.gradientDirection,
                                                        gradientColor1: ((_x = _this.properties.filterSettings) === null || _x === void 0 ? void 0 : _x.background.gradientColor1) || DEFAULTS_CONFIG.filterSettings.background.gradientColor1,
                                                        gradientColor2: ((_y = _this.properties.filterSettings) === null || _y === void 0 ? void 0 : _y.background.gradientColor2) || DEFAULTS_CONFIG.filterSettings.background.gradientColor2,
                                                        gradientAlpha: ((_z = _this.properties.filterSettings) === null || _z === void 0 ? void 0 : _z.background.gradientAlpha1) || DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1,
                                                        imageUrl: ((_0 = _this.properties.filterSettings) === null || _0 === void 0 ? void 0 : _0.background.image) || DEFAULTS_CONFIG.filterSettings.background.image,
                                                        imageAlpha: ((_1 = _this.properties.filterSettings) === null || _1 === void 0 ? void 0 : _1.background.imageAlpha) || DEFAULTS_CONFIG.filterSettings.background.imageAlpha
                                                    },
                                                    availableCategories: availableCategories,
                                                    onPropertyChange: function (propertyPath, newValue) {
                                                        // Handle property changes and update the web part properties
                                                        if (!_this.properties.filterSettings) {
                                                            _this.properties.filterSettings = __assign({}, DEFAULTS_CONFIG.filterSettings);
                                                        }
                                                        switch (propertyPath) {
                                                            case 'enabled':
                                                                _this.properties.filterSettings.enableFilters = newValue;
                                                                break;
                                                            case 'shape':
                                                                _this.properties.filterSettings.shape = newValue;
                                                                break;
                                                            case 'backgroundShape':
                                                                _this.properties.filterSettings.backgroundShape = newValue;
                                                                break;
                                                            case 'showDivider':
                                                                _this.properties.filterSettings.showDivider = newValue;
                                                                break;
                                                            case 'backgroundType':
                                                                _this.properties.filterSettings.background.type = newValue;
                                                                break;
                                                            case 'backgroundColor':
                                                                _this.properties.filterSettings.background.color = newValue;
                                                                break;
                                                            case 'backgroundAlpha':
                                                                _this.properties.filterSettings.background.alpha = newValue;
                                                                break;
                                                            case 'gradientDirection':
                                                                _this.properties.filterSettings.background.gradientDirection = newValue;
                                                                break;
                                                            case 'gradientColor1':
                                                                _this.properties.filterSettings.background.gradientColor1 = newValue;
                                                                break;
                                                            case 'gradientColor2':
                                                                _this.properties.filterSettings.background.gradientColor2 = newValue;
                                                                break;
                                                            case 'gradientAlpha':
                                                                _this.properties.filterSettings.background.gradientAlpha1 = newValue;
                                                                break;
                                                            case 'imageUrl':
                                                                _this.properties.filterSettings.background.image = newValue;
                                                                break;
                                                            case 'imageAlpha':
                                                                _this.properties.filterSettings.background.imageAlpha = newValue;
                                                                break;
                                                            case 'font.family':
                                                                _this.properties.filterSettings.font.family = newValue;
                                                                break;
                                                            case 'font.size':
                                                                _this.properties.filterSettings.font.size = newValue;
                                                                break;
                                                            case 'font.formatting':
                                                                _this.properties.filterSettings.font.formatting = newValue;
                                                                break;
                                                            case 'font.alignment':
                                                                _this.properties.filterSettings.font.alignment = newValue;
                                                                break;
                                                            case 'activeColors.background':
                                                                _this.properties.filterSettings.activeColors.background = newValue;
                                                                break;
                                                            case 'activeColors.font':
                                                                _this.properties.filterSettings.activeColors.font = newValue;
                                                                break;
                                                            case 'inactiveColors.background':
                                                                _this.properties.filterSettings.inactiveColors.background = newValue;
                                                                break;
                                                            case 'inactiveColors.font':
                                                                _this.properties.filterSettings.inactiveColors.font = newValue;
                                                                break;
                                                            case 'showAllCategories':
                                                                console.log('🔄 WEBPART DEBUG: showAllCategories property changed to:', newValue);
                                                                _this.properties.filterSettings.showAllCategories = newValue;
                                                                break;
                                                            case 'defaultFilterSelection':
                                                                console.log('🔄 WEBPART DEBUG: defaultFilterSelection property changed to:', newValue);
                                                                _this.properties.filterSettings.defaultFilterSelection = newValue;
                                                                break;
                                                        }
                                                        if (changeCallback)
                                                            changeCallback();
                                                        _this.context.propertyPane.refresh();
                                                    }
                                                }), elem);
                                            });
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                // Page 4: Category Section Configuration
                {
                    groups: [
                        {
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'categorySectionConfiguration',
                                    properties: {
                                        key: 'categorySectionConfiguration',
                                        onRender: function (elem, ctx, changeCallback) {
                                            ReactDom.render(React.createElement(SectionModuleControl, {
                                                sectionType: 'category',
                                                sectionSettings: _this.properties.categorySectionSettings || DEFAULTS_CONFIG.categorySectionSettings,
                                                onChange: function (settings) {
                                                    _this.properties.categorySectionSettings = settings;
                                                    if (changeCallback)
                                                        changeCallback();
                                                    _this.context.propertyPane.refresh();
                                                }
                                            }), elem);
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                // Page 5: Subject Section Configuration
                {
                    groups: [
                        {
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'subjectSectionConfiguration',
                                    properties: {
                                        key: 'subjectSectionConfiguration',
                                        onRender: function (elem, ctx, changeCallback) {
                                            ReactDom.render(React.createElement(SectionModuleControl, {
                                                sectionType: 'subject',
                                                sectionSettings: _this.properties.subjectSectionSettings || DEFAULTS_CONFIG.subjectSectionSettings,
                                                onChange: function (settings) {
                                                    _this.properties.subjectSectionSettings = settings;
                                                    if (changeCallback)
                                                        changeCallback();
                                                    _this.context.propertyPane.refresh();
                                                }
                                            }), elem);
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                // Page 6: Description Section Configuration
                {
                    groups: [
                        {
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'descriptionSectionConfiguration',
                                    properties: {
                                        key: 'descriptionSectionConfiguration',
                                        onRender: function (elem, ctx, changeCallback) {
                                            ReactDom.render(React.createElement(SectionModuleControl, {
                                                sectionType: 'description',
                                                sectionSettings: _this.properties.descriptionSectionSettings || DEFAULTS_CONFIG.descriptionSectionSettings,
                                                onChange: function (settings) {
                                                    _this.properties.descriptionSectionSettings = settings;
                                                    if (changeCallback)
                                                        changeCallback();
                                                    _this.context.propertyPane.refresh();
                                                }
                                            }), elem);
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
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
                                PropertyPaneLabel('version', {
                                    text: "Version: ".concat(DEFAULTS_CONFIG.aboutInfo.version)
                                }),
                                PropertyPaneLabel('description', {
                                    text: DEFAULTS_CONFIG.aboutInfo.description
                                })
                            ]
                        },
                        {
                            groupName: 'User Story',
                            groupFields: [
                                PropertyPaneLabel('userStory', {
                                    text: DEFAULTS_CONFIG.aboutInfo.userStory
                                })
                            ]
                        },
                        {
                            groupName: 'Features',
                            groupFields: [
                                PropertyPaneLabel('features1', {
                                    text: "\u2022 ".concat(DEFAULTS_CONFIG.aboutInfo.features[0])
                                }),
                                PropertyPaneLabel('features2', {
                                    text: "\u2022 ".concat(DEFAULTS_CONFIG.aboutInfo.features[1])
                                }),
                                PropertyPaneLabel('features3', {
                                    text: "\u2022 ".concat(DEFAULTS_CONFIG.aboutInfo.features[2])
                                }),
                                PropertyPaneLabel('features4', {
                                    text: "\u2022 ".concat(DEFAULTS_CONFIG.aboutInfo.features[3])
                                }),
                                PropertyPaneLabel('features5', {
                                    text: "\u2022 ".concat(DEFAULTS_CONFIG.aboutInfo.features[4])
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return FancyListWebPart;
}(BaseClientSideWebPart));
export default FancyListWebPart;
//# sourceMappingURL=FancyListWebPart.js.map