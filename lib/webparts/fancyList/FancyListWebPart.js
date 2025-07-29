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
        return _this;
    }
    // Testing defaults for Page 1
    // Helper methods for Page 1 structured testing
    FancyListWebPart.prototype.getPage1Controls = function () {
        return DEFAULTS_CONFIG.TESTING_VALUES[0];
    };
    FancyListWebPart.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    FancyListWebPart.prototype.processPage1Controls = function () {
        return __awaiter(this, void 0, void 0, function () {
            var page1Data, _i, _a, control, _b, _c, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        page1Data = this.getPage1Controls();
                        _i = 0, _a = page1Data.controls;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 16];
                        control = _a[_i];
                        _b = control.control;
                        switch (_b) {
                            case 'selectedListId': return [3 /*break*/, 2];
                            case 'categoryField': return [3 /*break*/, 7];
                            case 'subjectField': return [3 /*break*/, 8];
                            case 'descriptionField': return [3 /*break*/, 9];
                            case 'showAllCategories': return [3 /*break*/, 10];
                            case 'defaultExpanded': return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 12];
                    case 2:
                        this.properties.selectedListId = control.value;
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 5, , 6]);
                        _c = this;
                        return [4 /*yield*/, this._loadFields(control.value)];
                    case 4:
                        _c._fields = _d.sent();
                        this._fieldsLoadedForList = control.value;
                        console.log('🔍 Test Defaults - Available fields after list selection:', this._fields);
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _d.sent();
                        console.error('Error loading fields:', error_1);
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        this.properties.categoryField = control.value;
                        console.log('🔍 Test Defaults - Available fields for Category dropdown:', this._getAvailableFieldsForCategory());
                        return [3 /*break*/, 13];
                    case 8:
                        this.properties.subjectField = control.value;
                        console.log('🔍 Test Defaults - Available fields for Subject dropdown:', this._getAvailableFieldsForSubject());
                        return [3 /*break*/, 13];
                    case 9:
                        this.properties.descriptionField = control.value;
                        console.log('🔍 Test Defaults - Available fields for Description dropdown:', this._getAvailableFieldsForDescription());
                        return [3 /*break*/, 13];
                    case 10:
                        this.properties.showAllCategories = control.value;
                        return [3 /*break*/, 13];
                    case 11:
                        this.properties.defaultExpanded = control.value;
                        return [3 /*break*/, 13];
                    case 12:
                        console.log("Unknown control: ".concat(control.control));
                        return [3 /*break*/, 13];
                    case 13:
                        // Refresh property pane
                        this.context.propertyPane.refresh();
                        // Wait for the specified timing
                        return [4 /*yield*/, this.delay(control.timing)];
                    case 14:
                        // Wait for the specified timing
                        _d.sent();
                        _d.label = 15;
                    case 15:
                        _i++;
                        return [3 /*break*/, 1];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    FancyListWebPart.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, _129, _130, _131, _132, _133, _134, _135, _136, _137, _138, _139, _140, _141, _142, _143, _144, _145, _146, _147, _148, _149, _150, _151, _152, _153, _154, _155, _156, _157, _158, _159, _160, _161, _162, _163, _164, _165, _166, _167, _168, _169, _170, _171, _172, _173, _174, _175, _176, _177, _178, _179, _180, _181, _182, _183, _184, _185, _186, _187, _188, _189, _190, _191, _192, _193, _194, _195, _196, _197, _198, _199, _200, _201, _202, _203, _204, _205, _206, _207, _208, _209, _210, _211, _212, _213, _214, _215, _216, _217, _218, _219, _220, _221, _222, _223, _224, _225, _226, _227, _228, _229, _230, _231, _232, _233, _234, _235, _236, _237, _238, _239, _240, _241, _242, _243, _244, _245, _246, _247, _248, _249, _250, _251, _252, _253, _254, _255, _256, _257, _258, _259, _260, _261, _262, _263, _264, _265, _266, _267, _268, _269, _270, _271;
        // Map individual properties to the format expected by FancyList component
        // Use default values if properties are undefined
        // Map title properties to the format expected by FancyList component
        var titleSettings = {
            enabled: (_b = (_a = this.properties.titleSettings) === null || _a === void 0 ? void 0 : _a.enabled) !== null && _b !== void 0 ? _b : DEFAULTS_CONFIG.titleSettings.enabled,
            webPartTitle: (_c = this.properties.webPartTitle) !== null && _c !== void 0 ? _c : '',
            shape: (_e = (_d = this.properties.titleSettings) === null || _d === void 0 ? void 0 : _d.shape) !== null && _e !== void 0 ? _e : DEFAULTS_CONFIG.titleSettings.shape,
            backgroundType: (_f = this.properties.webPartTitleBackgroundType) !== null && _f !== void 0 ? _f : DEFAULTS_CONFIG.titleSettings.background.type,
            backgroundColor: (_g = this.properties.webPartTitleBackgroundColor) !== null && _g !== void 0 ? _g : DEFAULTS_CONFIG.titleSettings.background.color,
            backgroundAlpha: (_h = this.properties.webPartTitleBackgroundAlpha) !== null && _h !== void 0 ? _h : DEFAULTS_CONFIG.titleSettings.background.alpha,
            gradientDirection: (_j = this.properties.webPartTitleBackgroundGradientDirection) !== null && _j !== void 0 ? _j : DEFAULTS_CONFIG.titleSettings.background.gradientDirection,
            gradientColor1: (_k = this.properties.webPartTitleBackgroundGradientColor1) !== null && _k !== void 0 ? _k : DEFAULTS_CONFIG.titleSettings.background.gradientColor1,
            gradientColor2: (_l = this.properties.webPartTitleBackgroundGradientColor2) !== null && _l !== void 0 ? _l : DEFAULTS_CONFIG.titleSettings.background.gradientColor2,
            gradientAlpha: (_m = this.properties.webPartTitleBackgroundGradientAlpha1) !== null && _m !== void 0 ? _m : DEFAULTS_CONFIG.titleSettings.background.gradientAlpha1,
            imageUrl: (_o = this.properties.webPartTitleBackgroundImage) !== null && _o !== void 0 ? _o : DEFAULTS_CONFIG.titleSettings.background.image,
            imageAlpha: (_p = this.properties.webPartTitleBackgroundImageAlpha) !== null && _p !== void 0 ? _p : DEFAULTS_CONFIG.titleSettings.background.imageAlpha,
            font: {
                family: (_q = this.properties.webPartTitleFont) !== null && _q !== void 0 ? _q : DEFAULTS_CONFIG.titleSettings.font.family,
                size: (_r = this.properties.webPartTitleFontSize) !== null && _r !== void 0 ? _r : DEFAULTS_CONFIG.titleSettings.font.size,
                color: (_s = this.properties.webPartTitleColor) !== null && _s !== void 0 ? _s : DEFAULTS_CONFIG.titleSettings.font.color,
                formatting: (_t = this.properties.webPartTitleFormatting) !== null && _t !== void 0 ? _t : DEFAULTS_CONFIG.titleSettings.font.formatting,
                alignment: (_u = this.properties.webPartTitleAlignment) !== null && _u !== void 0 ? _u : DEFAULTS_CONFIG.titleSettings.font.alignment
            },
            divideSpace: (_w = (_v = this.properties.titleSettings) === null || _v === void 0 ? void 0 : _v.divideSpace) !== null && _w !== void 0 ? _w : DEFAULTS_CONFIG.titleSettings.divideSpace
        };
        // Map filter properties to the format expected by FancyList component
        var filterSettings = {
            enableFilters: (_y = (_x = this.properties.filterSettings) === null || _x === void 0 ? void 0 : _x.enableFilters) !== null && _y !== void 0 ? _y : DEFAULTS_CONFIG.filterSettings.enableFilters,
            defaultFilterSelection: (_0 = (_z = this.properties.filterSettings) === null || _z === void 0 ? void 0 : _z.defaultFilterSelection) !== null && _0 !== void 0 ? _0 : DEFAULTS_CONFIG.filterSettings.defaultFilterSelection,
            font: {
                family: (_3 = (_2 = (_1 = this.properties.filterSettings) === null || _1 === void 0 ? void 0 : _1.font) === null || _2 === void 0 ? void 0 : _2.family) !== null && _3 !== void 0 ? _3 : DEFAULTS_CONFIG.filterSettings.font.family,
                size: (_6 = (_5 = (_4 = this.properties.filterSettings) === null || _4 === void 0 ? void 0 : _4.font) === null || _5 === void 0 ? void 0 : _5.size) !== null && _6 !== void 0 ? _6 : DEFAULTS_CONFIG.filterSettings.font.size,
                color: '#605e5c', // Default filter font color
                formatting: (_9 = (_8 = (_7 = this.properties.filterSettings) === null || _7 === void 0 ? void 0 : _7.font) === null || _8 === void 0 ? void 0 : _8.formatting) !== null && _9 !== void 0 ? _9 : DEFAULTS_CONFIG.filterSettings.font.formatting,
                alignment: (_12 = (_11 = (_10 = this.properties.filterSettings) === null || _10 === void 0 ? void 0 : _10.font) === null || _11 === void 0 ? void 0 : _11.alignment) !== null && _12 !== void 0 ? _12 : DEFAULTS_CONFIG.filterSettings.font.alignment
            },
            activeColors: {
                background: (_15 = (_14 = (_13 = this.properties.filterSettings) === null || _13 === void 0 ? void 0 : _13.activeColors) === null || _14 === void 0 ? void 0 : _14.background) !== null && _15 !== void 0 ? _15 : DEFAULTS_CONFIG.filterSettings.activeColors.background,
                font: (_18 = (_17 = (_16 = this.properties.filterSettings) === null || _16 === void 0 ? void 0 : _16.activeColors) === null || _17 === void 0 ? void 0 : _17.font) !== null && _18 !== void 0 ? _18 : DEFAULTS_CONFIG.filterSettings.activeColors.font
            },
            inactiveColors: {
                background: (_21 = (_20 = (_19 = this.properties.filterSettings) === null || _19 === void 0 ? void 0 : _19.inactiveColors) === null || _20 === void 0 ? void 0 : _20.background) !== null && _21 !== void 0 ? _21 : DEFAULTS_CONFIG.filterSettings.inactiveColors.background,
                font: (_24 = (_23 = (_22 = this.properties.filterSettings) === null || _22 === void 0 ? void 0 : _22.inactiveColors) === null || _23 === void 0 ? void 0 : _23.font) !== null && _24 !== void 0 ? _24 : DEFAULTS_CONFIG.filterSettings.inactiveColors.font
            },
            shape: (_26 = (_25 = this.properties.filterSettings) === null || _25 === void 0 ? void 0 : _25.shape) !== null && _26 !== void 0 ? _26 : DEFAULTS_CONFIG.filterSettings.shape,
            backgroundShape: (_28 = (_27 = this.properties.filterSettings) === null || _27 === void 0 ? void 0 : _27.backgroundShape) !== null && _28 !== void 0 ? _28 : DEFAULTS_CONFIG.filterSettings.backgroundShape,
            showAllCategories: (_30 = (_29 = this.properties.filterSettings) === null || _29 === void 0 ? void 0 : _29.showAllCategories) !== null && _30 !== void 0 ? _30 : DEFAULTS_CONFIG.filterSettings.showAllCategories,
            background: {
                type: (_33 = (_32 = (_31 = this.properties.filterSettings) === null || _31 === void 0 ? void 0 : _31.background) === null || _32 === void 0 ? void 0 : _32.type) !== null && _33 !== void 0 ? _33 : DEFAULTS_CONFIG.filterSettings.background.type,
                color: (_36 = (_35 = (_34 = this.properties.filterSettings) === null || _34 === void 0 ? void 0 : _34.background) === null || _35 === void 0 ? void 0 : _35.color) !== null && _36 !== void 0 ? _36 : DEFAULTS_CONFIG.filterSettings.background.color,
                alpha: (_39 = (_38 = (_37 = this.properties.filterSettings) === null || _37 === void 0 ? void 0 : _37.background) === null || _38 === void 0 ? void 0 : _38.alpha) !== null && _39 !== void 0 ? _39 : DEFAULTS_CONFIG.filterSettings.background.alpha,
                image: (_42 = (_41 = (_40 = this.properties.filterSettings) === null || _40 === void 0 ? void 0 : _40.background) === null || _41 === void 0 ? void 0 : _41.image) !== null && _42 !== void 0 ? _42 : DEFAULTS_CONFIG.filterSettings.background.image,
                imageAlpha: (_45 = (_44 = (_43 = this.properties.filterSettings) === null || _43 === void 0 ? void 0 : _43.background) === null || _44 === void 0 ? void 0 : _44.imageAlpha) !== null && _45 !== void 0 ? _45 : DEFAULTS_CONFIG.filterSettings.background.imageAlpha,
                gradientDirection: (_48 = (_47 = (_46 = this.properties.filterSettings) === null || _46 === void 0 ? void 0 : _46.background) === null || _47 === void 0 ? void 0 : _47.gradientDirection) !== null && _48 !== void 0 ? _48 : DEFAULTS_CONFIG.filterSettings.background.gradientDirection,
                gradientColor1: (_51 = (_50 = (_49 = this.properties.filterSettings) === null || _49 === void 0 ? void 0 : _49.background) === null || _50 === void 0 ? void 0 : _50.gradientColor1) !== null && _51 !== void 0 ? _51 : DEFAULTS_CONFIG.filterSettings.background.gradientColor1,
                gradientAlpha1: (_54 = (_53 = (_52 = this.properties.filterSettings) === null || _52 === void 0 ? void 0 : _52.background) === null || _53 === void 0 ? void 0 : _53.gradientAlpha1) !== null && _54 !== void 0 ? _54 : DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1,
                gradientColor2: (_57 = (_56 = (_55 = this.properties.filterSettings) === null || _55 === void 0 ? void 0 : _55.background) === null || _56 === void 0 ? void 0 : _56.gradientColor2) !== null && _57 !== void 0 ? _57 : DEFAULTS_CONFIG.filterSettings.background.gradientColor2,
                gradientAlpha2: (_60 = (_59 = (_58 = this.properties.filterSettings) === null || _58 === void 0 ? void 0 : _58.background) === null || _59 === void 0 ? void 0 : _59.gradientAlpha2) !== null && _60 !== void 0 ? _60 : DEFAULTS_CONFIG.filterSettings.background.gradientAlpha2
            },
            divideSpace: (_62 = (_61 = this.properties.filterSettings) === null || _61 === void 0 ? void 0 : _61.divideSpace) !== null && _62 !== void 0 ? _62 : DEFAULTS_CONFIG.filterSettings.divideSpace
        };
        // Map category section properties to the format expected by FancyList component
        var categorySectionSettings = {
            sectionType: 'category',
            resetButtonText: (_64 = (_63 = this.properties.categorySectionSettings) === null || _63 === void 0 ? void 0 : _63.resetButtonText) !== null && _64 !== void 0 ? _64 : DEFAULTS_CONFIG.categorySectionSettings.resetButtonText,
            description: (_66 = (_65 = this.properties.categorySectionSettings) === null || _65 === void 0 ? void 0 : _65.description) !== null && _66 !== void 0 ? _66 : DEFAULTS_CONFIG.categorySectionSettings.description,
            font: {
                family: (_69 = (_68 = (_67 = this.properties.categorySectionSettings) === null || _67 === void 0 ? void 0 : _67.font) === null || _68 === void 0 ? void 0 : _68.family) !== null && _69 !== void 0 ? _69 : DEFAULTS_CONFIG.categorySectionSettings.font.family,
                size: (_72 = (_71 = (_70 = this.properties.categorySectionSettings) === null || _70 === void 0 ? void 0 : _70.font) === null || _71 === void 0 ? void 0 : _71.size) !== null && _72 !== void 0 ? _72 : DEFAULTS_CONFIG.categorySectionSettings.font.size,
                color: (_75 = (_74 = (_73 = this.properties.categorySectionSettings) === null || _73 === void 0 ? void 0 : _73.font) === null || _74 === void 0 ? void 0 : _74.color) !== null && _75 !== void 0 ? _75 : DEFAULTS_CONFIG.categorySectionSettings.font.color,
                formatting: (_78 = (_77 = (_76 = this.properties.categorySectionSettings) === null || _76 === void 0 ? void 0 : _76.font) === null || _77 === void 0 ? void 0 : _77.formatting) !== null && _78 !== void 0 ? _78 : DEFAULTS_CONFIG.categorySectionSettings.font.formatting,
                alignment: ((_81 = (_80 = (_79 = this.properties.categorySectionSettings) === null || _79 === void 0 ? void 0 : _79.font) === null || _80 === void 0 ? void 0 : _80.alignment) !== null && _81 !== void 0 ? _81 : DEFAULTS_CONFIG.categorySectionSettings.font.alignment)
            },
            background: {
                type: (_84 = (_83 = (_82 = this.properties.categorySectionSettings) === null || _82 === void 0 ? void 0 : _82.background) === null || _83 === void 0 ? void 0 : _83.type) !== null && _84 !== void 0 ? _84 : DEFAULTS_CONFIG.categorySectionSettings.background.type,
                color: (_87 = (_86 = (_85 = this.properties.categorySectionSettings) === null || _85 === void 0 ? void 0 : _85.background) === null || _86 === void 0 ? void 0 : _86.color) !== null && _87 !== void 0 ? _87 : DEFAULTS_CONFIG.categorySectionSettings.background.color,
                alpha: (_90 = (_89 = (_88 = this.properties.categorySectionSettings) === null || _88 === void 0 ? void 0 : _88.background) === null || _89 === void 0 ? void 0 : _89.alpha) !== null && _90 !== void 0 ? _90 : DEFAULTS_CONFIG.categorySectionSettings.background.alpha,
                image: (_93 = (_92 = (_91 = this.properties.categorySectionSettings) === null || _91 === void 0 ? void 0 : _91.background) === null || _92 === void 0 ? void 0 : _92.image) !== null && _93 !== void 0 ? _93 : DEFAULTS_CONFIG.categorySectionSettings.background.image,
                imageAlpha: (_96 = (_95 = (_94 = this.properties.categorySectionSettings) === null || _94 === void 0 ? void 0 : _94.background) === null || _95 === void 0 ? void 0 : _95.imageAlpha) !== null && _96 !== void 0 ? _96 : DEFAULTS_CONFIG.categorySectionSettings.background.imageAlpha,
                gradientDirection: (_99 = (_98 = (_97 = this.properties.categorySectionSettings) === null || _97 === void 0 ? void 0 : _97.background) === null || _98 === void 0 ? void 0 : _98.gradientDirection) !== null && _99 !== void 0 ? _99 : DEFAULTS_CONFIG.categorySectionSettings.background.gradientDirection,
                gradientColor1: (_102 = (_101 = (_100 = this.properties.categorySectionSettings) === null || _100 === void 0 ? void 0 : _100.background) === null || _101 === void 0 ? void 0 : _101.gradientColor1) !== null && _102 !== void 0 ? _102 : DEFAULTS_CONFIG.categorySectionSettings.background.gradientColor1,
                gradientAlpha1: (_105 = (_104 = (_103 = this.properties.categorySectionSettings) === null || _103 === void 0 ? void 0 : _103.background) === null || _104 === void 0 ? void 0 : _104.gradientAlpha1) !== null && _105 !== void 0 ? _105 : DEFAULTS_CONFIG.categorySectionSettings.background.gradientAlpha1,
                gradientColor2: (_108 = (_107 = (_106 = this.properties.categorySectionSettings) === null || _106 === void 0 ? void 0 : _106.background) === null || _107 === void 0 ? void 0 : _107.gradientColor2) !== null && _108 !== void 0 ? _108 : DEFAULTS_CONFIG.categorySectionSettings.background.gradientColor2,
                gradientAlpha2: (_111 = (_110 = (_109 = this.properties.categorySectionSettings) === null || _109 === void 0 ? void 0 : _109.background) === null || _110 === void 0 ? void 0 : _110.gradientAlpha2) !== null && _111 !== void 0 ? _111 : DEFAULTS_CONFIG.categorySectionSettings.background.gradientAlpha2
            },
            shape: (_113 = (_112 = this.properties.categorySectionSettings) === null || _112 === void 0 ? void 0 : _112.shape) !== null && _113 !== void 0 ? _113 : DEFAULTS_CONFIG.categorySectionSettings.shape,
            autoExpand: (_115 = (_114 = this.properties.categorySectionSettings) === null || _114 === void 0 ? void 0 : _114.autoExpand) !== null && _115 !== void 0 ? _115 : DEFAULTS_CONFIG.categorySectionSettings.autoExpand,
            hoverColor: (_117 = (_116 = this.properties.categorySectionSettings) === null || _116 === void 0 ? void 0 : _116.hoverColor) !== null && _117 !== void 0 ? _117 : DEFAULTS_CONFIG.categorySectionSettings.hoverColor,
            icons: {
                enabled: (_120 = (_119 = (_118 = this.properties.categorySectionSettings) === null || _118 === void 0 ? void 0 : _118.iconSettings) === null || _119 === void 0 ? void 0 : _119.enabled) !== null && _120 !== void 0 ? _120 : DEFAULTS_CONFIG.categorySectionSettings.iconSettings.enabled,
                iconPosition: (_123 = (_122 = (_121 = this.properties.categorySectionSettings) === null || _121 === void 0 ? void 0 : _121.iconSettings) === null || _122 === void 0 ? void 0 : _122.iconPosition) !== null && _123 !== void 0 ? _123 : DEFAULTS_CONFIG.categorySectionSettings.iconSettings.iconPosition,
                collapsedIcon: (_126 = (_125 = (_124 = this.properties.categorySectionSettings) === null || _124 === void 0 ? void 0 : _124.iconSettings) === null || _125 === void 0 ? void 0 : _125.collapsedIcon) !== null && _126 !== void 0 ? _126 : DEFAULTS_CONFIG.categorySectionSettings.iconSettings.collapsedIcon,
                expandedIcon: (_129 = (_128 = (_127 = this.properties.categorySectionSettings) === null || _127 === void 0 ? void 0 : _127.iconSettings) === null || _128 === void 0 ? void 0 : _128.expandedIcon) !== null && _129 !== void 0 ? _129 : DEFAULTS_CONFIG.categorySectionSettings.iconSettings.expandedIcon
            },
            divideSpace: (_131 = (_130 = this.properties.categorySectionSettings) === null || _130 === void 0 ? void 0 : _130.divideSpace) !== null && _131 !== void 0 ? _131 : DEFAULTS_CONFIG.categorySectionSettings.divideSpace
        };
        // Map subject section properties to the format expected by FancyList component
        var subjectSectionSettings = {
            sectionType: 'subject',
            resetButtonText: (_133 = (_132 = this.properties.subjectSectionSettings) === null || _132 === void 0 ? void 0 : _132.resetButtonText) !== null && _133 !== void 0 ? _133 : DEFAULTS_CONFIG.subjectSectionSettings.resetButtonText,
            description: (_135 = (_134 = this.properties.subjectSectionSettings) === null || _134 === void 0 ? void 0 : _134.description) !== null && _135 !== void 0 ? _135 : DEFAULTS_CONFIG.subjectSectionSettings.description,
            font: {
                family: (_138 = (_137 = (_136 = this.properties.subjectSectionSettings) === null || _136 === void 0 ? void 0 : _136.font) === null || _137 === void 0 ? void 0 : _137.family) !== null && _138 !== void 0 ? _138 : DEFAULTS_CONFIG.subjectSectionSettings.font.family,
                size: (_141 = (_140 = (_139 = this.properties.subjectSectionSettings) === null || _139 === void 0 ? void 0 : _139.font) === null || _140 === void 0 ? void 0 : _140.size) !== null && _141 !== void 0 ? _141 : DEFAULTS_CONFIG.subjectSectionSettings.font.size,
                color: (_144 = (_143 = (_142 = this.properties.subjectSectionSettings) === null || _142 === void 0 ? void 0 : _142.font) === null || _143 === void 0 ? void 0 : _143.color) !== null && _144 !== void 0 ? _144 : DEFAULTS_CONFIG.subjectSectionSettings.font.color,
                formatting: (_147 = (_146 = (_145 = this.properties.subjectSectionSettings) === null || _145 === void 0 ? void 0 : _145.font) === null || _146 === void 0 ? void 0 : _146.formatting) !== null && _147 !== void 0 ? _147 : DEFAULTS_CONFIG.subjectSectionSettings.font.formatting,
                alignment: ((_150 = (_149 = (_148 = this.properties.subjectSectionSettings) === null || _148 === void 0 ? void 0 : _148.font) === null || _149 === void 0 ? void 0 : _149.alignment) !== null && _150 !== void 0 ? _150 : DEFAULTS_CONFIG.subjectSectionSettings.font.alignment)
            },
            background: {
                type: (_153 = (_152 = (_151 = this.properties.subjectSectionSettings) === null || _151 === void 0 ? void 0 : _151.background) === null || _152 === void 0 ? void 0 : _152.type) !== null && _153 !== void 0 ? _153 : DEFAULTS_CONFIG.subjectSectionSettings.background.type,
                color: (_156 = (_155 = (_154 = this.properties.subjectSectionSettings) === null || _154 === void 0 ? void 0 : _154.background) === null || _155 === void 0 ? void 0 : _155.color) !== null && _156 !== void 0 ? _156 : DEFAULTS_CONFIG.subjectSectionSettings.background.color,
                alpha: (_159 = (_158 = (_157 = this.properties.subjectSectionSettings) === null || _157 === void 0 ? void 0 : _157.background) === null || _158 === void 0 ? void 0 : _158.alpha) !== null && _159 !== void 0 ? _159 : DEFAULTS_CONFIG.subjectSectionSettings.background.alpha,
                image: (_162 = (_161 = (_160 = this.properties.subjectSectionSettings) === null || _160 === void 0 ? void 0 : _160.background) === null || _161 === void 0 ? void 0 : _161.image) !== null && _162 !== void 0 ? _162 : DEFAULTS_CONFIG.subjectSectionSettings.background.image,
                imageAlpha: (_165 = (_164 = (_163 = this.properties.subjectSectionSettings) === null || _163 === void 0 ? void 0 : _163.background) === null || _164 === void 0 ? void 0 : _164.imageAlpha) !== null && _165 !== void 0 ? _165 : DEFAULTS_CONFIG.subjectSectionSettings.background.imageAlpha,
                gradientDirection: (_168 = (_167 = (_166 = this.properties.subjectSectionSettings) === null || _166 === void 0 ? void 0 : _166.background) === null || _167 === void 0 ? void 0 : _167.gradientDirection) !== null && _168 !== void 0 ? _168 : DEFAULTS_CONFIG.subjectSectionSettings.background.gradientDirection,
                gradientColor1: (_171 = (_170 = (_169 = this.properties.subjectSectionSettings) === null || _169 === void 0 ? void 0 : _169.background) === null || _170 === void 0 ? void 0 : _170.gradientColor1) !== null && _171 !== void 0 ? _171 : DEFAULTS_CONFIG.subjectSectionSettings.background.gradientColor1,
                gradientAlpha1: (_174 = (_173 = (_172 = this.properties.subjectSectionSettings) === null || _172 === void 0 ? void 0 : _172.background) === null || _173 === void 0 ? void 0 : _173.gradientAlpha1) !== null && _174 !== void 0 ? _174 : DEFAULTS_CONFIG.subjectSectionSettings.background.gradientAlpha1,
                gradientColor2: (_177 = (_176 = (_175 = this.properties.subjectSectionSettings) === null || _175 === void 0 ? void 0 : _175.background) === null || _176 === void 0 ? void 0 : _176.gradientColor2) !== null && _177 !== void 0 ? _177 : DEFAULTS_CONFIG.subjectSectionSettings.background.gradientColor2,
                gradientAlpha2: (_180 = (_179 = (_178 = this.properties.subjectSectionSettings) === null || _178 === void 0 ? void 0 : _178.background) === null || _179 === void 0 ? void 0 : _179.gradientAlpha2) !== null && _180 !== void 0 ? _180 : DEFAULTS_CONFIG.subjectSectionSettings.background.gradientAlpha2
            },
            shape: (_182 = (_181 = this.properties.subjectSectionSettings) === null || _181 === void 0 ? void 0 : _181.shape) !== null && _182 !== void 0 ? _182 : DEFAULTS_CONFIG.subjectSectionSettings.shape,
            autoExpand: (_184 = (_183 = this.properties.subjectSectionSettings) === null || _183 === void 0 ? void 0 : _183.autoExpand) !== null && _184 !== void 0 ? _184 : DEFAULTS_CONFIG.subjectSectionSettings.autoExpand,
            hoverColor: (_186 = (_185 = this.properties.subjectSectionSettings) === null || _185 === void 0 ? void 0 : _185.hoverColor) !== null && _186 !== void 0 ? _186 : DEFAULTS_CONFIG.subjectSectionSettings.hoverColor,
            icons: {
                enabled: (_189 = (_188 = (_187 = this.properties.subjectSectionSettings) === null || _187 === void 0 ? void 0 : _187.iconSettings) === null || _188 === void 0 ? void 0 : _188.enabled) !== null && _189 !== void 0 ? _189 : DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.enabled,
                iconPosition: (_192 = (_191 = (_190 = this.properties.subjectSectionSettings) === null || _190 === void 0 ? void 0 : _190.iconSettings) === null || _191 === void 0 ? void 0 : _191.iconPosition) !== null && _192 !== void 0 ? _192 : DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.iconPosition,
                collapsedIcon: (_195 = (_194 = (_193 = this.properties.subjectSectionSettings) === null || _193 === void 0 ? void 0 : _193.iconSettings) === null || _194 === void 0 ? void 0 : _194.collapsedIcon) !== null && _195 !== void 0 ? _195 : DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.collapsedIcon,
                expandedIcon: (_198 = (_197 = (_196 = this.properties.subjectSectionSettings) === null || _196 === void 0 ? void 0 : _196.iconSettings) === null || _197 === void 0 ? void 0 : _197.expandedIcon) !== null && _198 !== void 0 ? _198 : DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.expandedIcon
            },
            divideSpace: (_200 = (_199 = this.properties.subjectSectionSettings) === null || _199 === void 0 ? void 0 : _199.divideSpace) !== null && _200 !== void 0 ? _200 : DEFAULTS_CONFIG.subjectSectionSettings.divideSpace
        };
        // Map description section properties to the format expected by FancyList component
        var descriptionSectionSettings = {
            sectionType: 'description',
            resetButtonText: (_202 = (_201 = this.properties.descriptionSectionSettings) === null || _201 === void 0 ? void 0 : _201.resetButtonText) !== null && _202 !== void 0 ? _202 : DEFAULTS_CONFIG.descriptionSectionSettings.resetButtonText,
            description: (_204 = (_203 = this.properties.descriptionSectionSettings) === null || _203 === void 0 ? void 0 : _203.description) !== null && _204 !== void 0 ? _204 : DEFAULTS_CONFIG.descriptionSectionSettings.description,
            font: {
                family: (_207 = (_206 = (_205 = this.properties.descriptionSectionSettings) === null || _205 === void 0 ? void 0 : _205.font) === null || _206 === void 0 ? void 0 : _206.family) !== null && _207 !== void 0 ? _207 : DEFAULTS_CONFIG.descriptionSectionSettings.font.family,
                size: (_210 = (_209 = (_208 = this.properties.descriptionSectionSettings) === null || _208 === void 0 ? void 0 : _208.font) === null || _209 === void 0 ? void 0 : _209.size) !== null && _210 !== void 0 ? _210 : DEFAULTS_CONFIG.descriptionSectionSettings.font.size,
                color: (_213 = (_212 = (_211 = this.properties.descriptionSectionSettings) === null || _211 === void 0 ? void 0 : _211.font) === null || _212 === void 0 ? void 0 : _212.color) !== null && _213 !== void 0 ? _213 : DEFAULTS_CONFIG.descriptionSectionSettings.font.color,
                formatting: (_216 = (_215 = (_214 = this.properties.descriptionSectionSettings) === null || _214 === void 0 ? void 0 : _214.font) === null || _215 === void 0 ? void 0 : _215.formatting) !== null && _216 !== void 0 ? _216 : DEFAULTS_CONFIG.descriptionSectionSettings.font.formatting,
                alignment: ((_219 = (_218 = (_217 = this.properties.descriptionSectionSettings) === null || _217 === void 0 ? void 0 : _217.font) === null || _218 === void 0 ? void 0 : _218.alignment) !== null && _219 !== void 0 ? _219 : DEFAULTS_CONFIG.descriptionSectionSettings.font.alignment)
            },
            background: {
                type: (_222 = (_221 = (_220 = this.properties.descriptionSectionSettings) === null || _220 === void 0 ? void 0 : _220.background) === null || _221 === void 0 ? void 0 : _221.type) !== null && _222 !== void 0 ? _222 : DEFAULTS_CONFIG.descriptionSectionSettings.background.type,
                color: (_225 = (_224 = (_223 = this.properties.descriptionSectionSettings) === null || _223 === void 0 ? void 0 : _223.background) === null || _224 === void 0 ? void 0 : _224.color) !== null && _225 !== void 0 ? _225 : DEFAULTS_CONFIG.descriptionSectionSettings.background.color,
                alpha: (_228 = (_227 = (_226 = this.properties.descriptionSectionSettings) === null || _226 === void 0 ? void 0 : _226.background) === null || _227 === void 0 ? void 0 : _227.alpha) !== null && _228 !== void 0 ? _228 : DEFAULTS_CONFIG.descriptionSectionSettings.background.alpha,
                image: (_231 = (_230 = (_229 = this.properties.descriptionSectionSettings) === null || _229 === void 0 ? void 0 : _229.background) === null || _230 === void 0 ? void 0 : _230.image) !== null && _231 !== void 0 ? _231 : DEFAULTS_CONFIG.descriptionSectionSettings.background.image,
                imageAlpha: (_234 = (_233 = (_232 = this.properties.descriptionSectionSettings) === null || _232 === void 0 ? void 0 : _232.background) === null || _233 === void 0 ? void 0 : _233.imageAlpha) !== null && _234 !== void 0 ? _234 : DEFAULTS_CONFIG.descriptionSectionSettings.background.imageAlpha,
                gradientDirection: (_237 = (_236 = (_235 = this.properties.descriptionSectionSettings) === null || _235 === void 0 ? void 0 : _235.background) === null || _236 === void 0 ? void 0 : _236.gradientDirection) !== null && _237 !== void 0 ? _237 : DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientDirection,
                gradientColor1: (_240 = (_239 = (_238 = this.properties.descriptionSectionSettings) === null || _238 === void 0 ? void 0 : _238.background) === null || _239 === void 0 ? void 0 : _239.gradientColor1) !== null && _240 !== void 0 ? _240 : DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientColor1,
                gradientAlpha1: (_243 = (_242 = (_241 = this.properties.descriptionSectionSettings) === null || _241 === void 0 ? void 0 : _241.background) === null || _242 === void 0 ? void 0 : _242.gradientAlpha1) !== null && _243 !== void 0 ? _243 : DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientAlpha1,
                gradientColor2: (_246 = (_245 = (_244 = this.properties.descriptionSectionSettings) === null || _244 === void 0 ? void 0 : _244.background) === null || _245 === void 0 ? void 0 : _245.gradientColor2) !== null && _246 !== void 0 ? _246 : DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientColor2,
                gradientAlpha2: (_249 = (_248 = (_247 = this.properties.descriptionSectionSettings) === null || _247 === void 0 ? void 0 : _247.background) === null || _248 === void 0 ? void 0 : _248.gradientAlpha2) !== null && _249 !== void 0 ? _249 : DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientAlpha2
            },
            shape: (_251 = (_250 = this.properties.descriptionSectionSettings) === null || _250 === void 0 ? void 0 : _250.shape) !== null && _251 !== void 0 ? _251 : DEFAULTS_CONFIG.descriptionSectionSettings.shape,
            autoExpand: (_253 = (_252 = this.properties.descriptionSectionSettings) === null || _252 === void 0 ? void 0 : _252.autoExpand) !== null && _253 !== void 0 ? _253 : DEFAULTS_CONFIG.descriptionSectionSettings.autoExpand,
            hoverColor: (_255 = (_254 = this.properties.descriptionSectionSettings) === null || _254 === void 0 ? void 0 : _254.hoverColor) !== null && _255 !== void 0 ? _255 : DEFAULTS_CONFIG.descriptionSectionSettings.hoverColor,
            icons: {
                enabled: (_258 = (_257 = (_256 = this.properties.descriptionSectionSettings) === null || _256 === void 0 ? void 0 : _256.iconSettings) === null || _257 === void 0 ? void 0 : _257.enabled) !== null && _258 !== void 0 ? _258 : DEFAULTS_CONFIG.descriptionSectionSettings.iconSettings.enabled,
                iconPosition: (_261 = (_260 = (_259 = this.properties.descriptionSectionSettings) === null || _259 === void 0 ? void 0 : _259.iconSettings) === null || _260 === void 0 ? void 0 : _260.iconPosition) !== null && _261 !== void 0 ? _261 : DEFAULTS_CONFIG.descriptionSectionSettings.iconSettings.iconPosition,
                collapsedIcon: (_264 = (_263 = (_262 = this.properties.descriptionSectionSettings) === null || _262 === void 0 ? void 0 : _262.iconSettings) === null || _263 === void 0 ? void 0 : _263.collapsedIcon) !== null && _264 !== void 0 ? _264 : DEFAULTS_CONFIG.descriptionSectionSettings.iconSettings.collapsedIcon,
                expandedIcon: (_267 = (_266 = (_265 = this.properties.descriptionSectionSettings) === null || _265 === void 0 ? void 0 : _265.iconSettings) === null || _266 === void 0 ? void 0 : _266.expandedIcon) !== null && _267 !== void 0 ? _267 : DEFAULTS_CONFIG.descriptionSectionSettings.iconSettings.expandedIcon
            },
            divideSpace: (_269 = (_268 = this.properties.descriptionSectionSettings) === null || _268 === void 0 ? void 0 : _268.divideSpace) !== null && _269 !== void 0 ? _269 : DEFAULTS_CONFIG.descriptionSectionSettings.divideSpace
        };
        var element = React.createElement(FancyList, {
            selectedListId: this.properties.selectedListId,
            categoryField: this.properties.categoryField,
            subjectField: this.properties.subjectField,
            descriptionField: this.properties.descriptionField,
            showAllCategories: (_271 = (_270 = this.properties.filterSettings) === null || _270 === void 0 ? void 0 : _270.showAllCategories) !== null && _271 !== void 0 ? _271 : DEFAULTS_CONFIG.filterSettings.showAllCategories,
            defaultExpanded: this.properties.defaultExpanded,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName,
            context: this.context,
            titleSettings: titleSettings,
            filterSettings: filterSettings,
            categorySectionSettings: categorySectionSettings,
            subjectSectionSettings: subjectSectionSettings,
            descriptionSectionSettings: descriptionSectionSettings
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
            var url, response, data, filteredLists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(this.context.pageContext.web.absoluteUrl, "/_api/web/lists?$filter=Hidden eq false and (BaseTemplate eq 100 or BaseTemplate eq 106)&$select=Id,Title,BaseTemplate,TemplateFeatureId");
                        console.log('🔍 LIST DEBUG - Loading lists from URL:', url);
                        return [4 /*yield*/, this.context.spHttpClient.get(url, SPHttpClient.configurations.v1)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        console.log('🔍 LIST DEBUG - Raw API response:', data);
                        console.log('🔍 LIST DEBUG - Total items returned:', data.value.length);
                        // Log each list with its template info
                        data.value.forEach(function (list, index) {
                            console.log("\uD83D\uDD0D LIST DEBUG - Item ".concat(index + 1, ":"), {
                                Title: list.Title,
                                Id: list.Id,
                                BaseTemplate: list.BaseTemplate,
                                TemplateFeatureId: list.TemplateFeatureId
                            });
                        });
                        filteredLists = data.value.map(function (list) { return ({ key: list.Title, text: list.Title }); });
                        console.log('🔍 LIST DEBUG - Final filtered lists:', filteredLists);
                        return [2 /*return*/, filteredLists];
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
        if (!this.properties.selectedListId) {
            return [{ key: '', text: 'Select a list first' }];
        }
        if (this._loadingFields) {
            return [{ key: '', text: 'Loading...' }];
        }
        // Category always shows all available fields
        return this._fields;
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
        // Subject shows all fields except the selected Category
        return this._fields.filter(function (field) { return field.key !== _this.properties.categoryField; });
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
        // Description shows all fields except Category and Subject
        return this._fields.filter(function (field) {
            return field.key !== _this.properties.categoryField &&
                field.key !== _this.properties.subjectField;
        });
    };
    FancyListWebPart.prototype._getAvailableCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, categories, error_2;
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
                        error_2 = _a.sent();
                        console.log('🔄 CATEGORIES DEBUG: Error loading categories:', error_2);
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
                                    label: 'Select List',
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
                                                        var error_3;
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    _a.trys.push([0, 2, , 3]);
                                                                    // Process Page 1 controls using structured data
                                                                    return [4 /*yield*/, this.processPage1Controls()];
                                                                case 1:
                                                                    // Process Page 1 controls using structured data
                                                                    _a.sent();
                                                                    // Set the title text to "Testing Fancy List" (from Page 2 data)
                                                                    this.properties.webPartTitle = 'Testing Fancy List';
                                                                    if (changeCallback)
                                                                        changeCallback();
                                                                    this.context.propertyPane.refresh();
                                                                    console.log('Page 1 testing completed successfully');
                                                                    return [3 /*break*/, 3];
                                                                case 2:
                                                                    error_3 = _a.sent();
                                                                    console.error('Error during Page 1 testing:', error_3);
                                                                    return [3 /*break*/, 3];
                                                                case 3: return [2 /*return*/];
                                                            }
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
                                            var _a, _b, _c, _d;
                                            ReactDom.render(React.createElement(TitleConfiguration, {
                                                label: 'Title Configuration',
                                                settings: {
                                                    enabled: ((_a = _this.properties.titleSettings) === null || _a === void 0 ? void 0 : _a.enabled) || DEFAULTS_CONFIG.titleSettings.enabled,
                                                    webPartTitle: _this.properties.webPartTitle || DEFAULTS_CONFIG.titleSettings.webPartTitle,
                                                    shape: ((_b = _this.properties.titleSettings) === null || _b === void 0 ? void 0 : _b.shape) || DEFAULTS_CONFIG.titleSettings.shape,
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
                                                    },
                                                    divideSpace: (_d = (_c = _this.properties.titleSettings) === null || _c === void 0 ? void 0 : _c.divideSpace) !== null && _d !== void 0 ? _d : DEFAULTS_CONFIG.titleSettings.divideSpace
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
                                                        case 'divideSpace':
                                                            _this.properties.titleSettings.divideSpace = newValue;
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
                                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
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
                                                        backgroundType: ((_s = _this.properties.filterSettings) === null || _s === void 0 ? void 0 : _s.background.type) || DEFAULTS_CONFIG.filterSettings.background.type,
                                                        backgroundColor: ((_t = _this.properties.filterSettings) === null || _t === void 0 ? void 0 : _t.background.color) || DEFAULTS_CONFIG.filterSettings.background.color,
                                                        backgroundAlpha: ((_u = _this.properties.filterSettings) === null || _u === void 0 ? void 0 : _u.background.alpha) || DEFAULTS_CONFIG.filterSettings.background.alpha,
                                                        gradientDirection: ((_v = _this.properties.filterSettings) === null || _v === void 0 ? void 0 : _v.background.gradientDirection) || DEFAULTS_CONFIG.filterSettings.background.gradientDirection,
                                                        gradientColor1: ((_w = _this.properties.filterSettings) === null || _w === void 0 ? void 0 : _w.background.gradientColor1) || DEFAULTS_CONFIG.filterSettings.background.gradientColor1,
                                                        gradientColor2: ((_x = _this.properties.filterSettings) === null || _x === void 0 ? void 0 : _x.background.gradientColor2) || DEFAULTS_CONFIG.filterSettings.background.gradientColor2,
                                                        gradientAlpha: ((_y = _this.properties.filterSettings) === null || _y === void 0 ? void 0 : _y.background.gradientAlpha1) || DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1,
                                                        imageUrl: ((_z = _this.properties.filterSettings) === null || _z === void 0 ? void 0 : _z.background.image) || DEFAULTS_CONFIG.filterSettings.background.image,
                                                        imageAlpha: ((_0 = _this.properties.filterSettings) === null || _0 === void 0 ? void 0 : _0.background.imageAlpha) || DEFAULTS_CONFIG.filterSettings.background.imageAlpha,
                                                        divideSpace: (_2 = (_1 = _this.properties.filterSettings) === null || _1 === void 0 ? void 0 : _1.divideSpace) !== null && _2 !== void 0 ? _2 : DEFAULTS_CONFIG.filterSettings.divideSpace
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
                                                            case 'divideSpace':
                                                                console.log('🔄 WEBPART DEBUG: divideSpace property changed to:', newValue);
                                                                _this.properties.filterSettings.divideSpace = newValue;
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
                    groups: [
                        {
                            groupFields: [
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'aboutInfo',
                                    properties: {
                                        key: 'aboutInfo',
                                        onRender: function (elem, ctx, changeCallback) {
                                            ReactDom.render(React.createElement('div', {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: '600',
                                                    color: '#323130',
                                                    marginBottom: '8px'
                                                }
                                            }, 'About'), elem);
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
                                        }
                                    }
                                },
                                PropertyPaneLabel('version', {
                                    text: "Version: ".concat(DEFAULTS_CONFIG.aboutInfo.version)
                                }),
                                PropertyPaneLabel('description', {
                                    text: DEFAULTS_CONFIG.aboutInfo.description
                                }),
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'featuresHeader',
                                    properties: {
                                        key: 'featuresHeader',
                                        onRender: function (elem, ctx, changeCallback) {
                                            ReactDom.render(React.createElement('div', {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: '600',
                                                    color: '#323130',
                                                    marginTop: '16px',
                                                    marginBottom: '4px'
                                                }
                                            }, 'Features'), elem);
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
                                        }
                                    }
                                },
                                PropertyPaneLabel('features1', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.features[0])
                                }),
                                PropertyPaneLabel('features2', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.features[1])
                                }),
                                PropertyPaneLabel('features3', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.features[2])
                                }),
                                PropertyPaneLabel('features4', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.features[3])
                                }),
                                PropertyPaneLabel('features5', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.features[4])
                                }),
                                PropertyPaneLabel('features6', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.features[5])
                                }),
                                PropertyPaneLabel('features7', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.features[6])
                                }),
                                PropertyPaneLabel('features8', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.features[7])
                                }),
                                PropertyPaneLabel('features9', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.features[8])
                                }),
                                {
                                    type: 1, // PropertyPaneFieldType.Custom
                                    targetProperty: 'knownIssuesHeader',
                                    properties: {
                                        key: 'knownIssuesHeader',
                                        onRender: function (elem, ctx, changeCallback) {
                                            ReactDom.render(React.createElement('div', {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: '600',
                                                    color: '#323130',
                                                    marginTop: '16px',
                                                    marginBottom: '4px'
                                                }
                                            }, 'Known Issues'), elem);
                                        },
                                        onDispose: function (elem) {
                                            ReactDom.unmountComponentAtNode(elem);
                                        }
                                    }
                                },
                                PropertyPaneLabel('knownIssues1', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.knownIssues[0])
                                }),
                                PropertyPaneLabel('knownIssues2', {
                                    text: "".concat(DEFAULTS_CONFIG.aboutInfo.knownIssues[1])
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