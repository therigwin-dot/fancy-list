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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, _129, _130, _131, _132, _133, _134, _135, _136, _137, _138, _139, _140, _141, _142, _143, _144, _145, _146, _147, _148, _149, _150, _151, _152, _153, _154, _155, _156, _157, _158, _159, _160, _161, _162, _163, _164, _165, _166, _167, _168, _169, _170, _171, _172, _173, _174, _175, _176, _177, _178, _179, _180, _181, _182, _183, _184, _185, _186, _187, _188, _189, _190, _191, _192, _193, _194, _195, _196, _197, _198, _199, _200, _201, _202, _203, _204, _205, _206, _207, _208, _209, _210, _211, _212, _213, _214, _215, _216, _217, _218, _219, _220, _221, _222, _223, _224, _225, _226, _227, _228, _229, _230, _231, _232, _233, _234, _235, _236, _237, _238, _239, _240, _241, _242, _243, _244, _245, _246, _247, _248, _249, _250, _251, _252, _253, _254, _255, _256, _257, _258;
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
            defaultFilterSelection: (_z = (_y = this.properties.filterSettings) === null || _y === void 0 ? void 0 : _y.defaultFilterSelection) !== null && _z !== void 0 ? _z : DEFAULTS_CONFIG.filterSettings.defaultFilterSelection,
            font: {
                family: (_2 = (_1 = (_0 = this.properties.filterSettings) === null || _0 === void 0 ? void 0 : _0.font) === null || _1 === void 0 ? void 0 : _1.family) !== null && _2 !== void 0 ? _2 : DEFAULTS_CONFIG.filterSettings.font.family,
                size: (_5 = (_4 = (_3 = this.properties.filterSettings) === null || _3 === void 0 ? void 0 : _3.font) === null || _4 === void 0 ? void 0 : _4.size) !== null && _5 !== void 0 ? _5 : DEFAULTS_CONFIG.filterSettings.font.size,
                color: '#605e5c', // Default filter font color
                formatting: (_8 = (_7 = (_6 = this.properties.filterSettings) === null || _6 === void 0 ? void 0 : _6.font) === null || _7 === void 0 ? void 0 : _7.formatting) !== null && _8 !== void 0 ? _8 : DEFAULTS_CONFIG.filterSettings.font.formatting,
                alignment: (_11 = (_10 = (_9 = this.properties.filterSettings) === null || _9 === void 0 ? void 0 : _9.font) === null || _10 === void 0 ? void 0 : _10.alignment) !== null && _11 !== void 0 ? _11 : DEFAULTS_CONFIG.filterSettings.font.alignment
            },
            activeColors: {
                background: (_14 = (_13 = (_12 = this.properties.filterSettings) === null || _12 === void 0 ? void 0 : _12.activeColors) === null || _13 === void 0 ? void 0 : _13.background) !== null && _14 !== void 0 ? _14 : DEFAULTS_CONFIG.filterSettings.activeColors.background,
                font: (_17 = (_16 = (_15 = this.properties.filterSettings) === null || _15 === void 0 ? void 0 : _15.activeColors) === null || _16 === void 0 ? void 0 : _16.font) !== null && _17 !== void 0 ? _17 : DEFAULTS_CONFIG.filterSettings.activeColors.font
            },
            inactiveColors: {
                background: (_20 = (_19 = (_18 = this.properties.filterSettings) === null || _18 === void 0 ? void 0 : _18.inactiveColors) === null || _19 === void 0 ? void 0 : _19.background) !== null && _20 !== void 0 ? _20 : DEFAULTS_CONFIG.filterSettings.inactiveColors.background,
                font: (_23 = (_22 = (_21 = this.properties.filterSettings) === null || _21 === void 0 ? void 0 : _21.inactiveColors) === null || _22 === void 0 ? void 0 : _22.font) !== null && _23 !== void 0 ? _23 : DEFAULTS_CONFIG.filterSettings.inactiveColors.font
            },
            shape: (_25 = (_24 = this.properties.filterSettings) === null || _24 === void 0 ? void 0 : _24.shape) !== null && _25 !== void 0 ? _25 : DEFAULTS_CONFIG.filterSettings.shape,
            backgroundShape: (_27 = (_26 = this.properties.filterSettings) === null || _26 === void 0 ? void 0 : _26.backgroundShape) !== null && _27 !== void 0 ? _27 : DEFAULTS_CONFIG.filterSettings.backgroundShape,
            showAllCategories: (_29 = (_28 = this.properties.filterSettings) === null || _28 === void 0 ? void 0 : _28.showAllCategories) !== null && _29 !== void 0 ? _29 : DEFAULTS_CONFIG.filterSettings.showAllCategories,
            background: {
                type: (_32 = (_31 = (_30 = this.properties.filterSettings) === null || _30 === void 0 ? void 0 : _30.background) === null || _31 === void 0 ? void 0 : _31.type) !== null && _32 !== void 0 ? _32 : DEFAULTS_CONFIG.filterSettings.background.type,
                color: (_35 = (_34 = (_33 = this.properties.filterSettings) === null || _33 === void 0 ? void 0 : _33.background) === null || _34 === void 0 ? void 0 : _34.color) !== null && _35 !== void 0 ? _35 : DEFAULTS_CONFIG.filterSettings.background.color,
                alpha: (_38 = (_37 = (_36 = this.properties.filterSettings) === null || _36 === void 0 ? void 0 : _36.background) === null || _37 === void 0 ? void 0 : _37.alpha) !== null && _38 !== void 0 ? _38 : DEFAULTS_CONFIG.filterSettings.background.alpha,
                image: (_41 = (_40 = (_39 = this.properties.filterSettings) === null || _39 === void 0 ? void 0 : _39.background) === null || _40 === void 0 ? void 0 : _40.image) !== null && _41 !== void 0 ? _41 : DEFAULTS_CONFIG.filterSettings.background.image,
                imageAlpha: (_44 = (_43 = (_42 = this.properties.filterSettings) === null || _42 === void 0 ? void 0 : _42.background) === null || _43 === void 0 ? void 0 : _43.imageAlpha) !== null && _44 !== void 0 ? _44 : DEFAULTS_CONFIG.filterSettings.background.imageAlpha,
                gradientDirection: (_47 = (_46 = (_45 = this.properties.filterSettings) === null || _45 === void 0 ? void 0 : _45.background) === null || _46 === void 0 ? void 0 : _46.gradientDirection) !== null && _47 !== void 0 ? _47 : DEFAULTS_CONFIG.filterSettings.background.gradientDirection,
                gradientColor1: (_50 = (_49 = (_48 = this.properties.filterSettings) === null || _48 === void 0 ? void 0 : _48.background) === null || _49 === void 0 ? void 0 : _49.gradientColor1) !== null && _50 !== void 0 ? _50 : DEFAULTS_CONFIG.filterSettings.background.gradientColor1,
                gradientAlpha1: (_53 = (_52 = (_51 = this.properties.filterSettings) === null || _51 === void 0 ? void 0 : _51.background) === null || _52 === void 0 ? void 0 : _52.gradientAlpha1) !== null && _53 !== void 0 ? _53 : DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1,
                gradientColor2: (_56 = (_55 = (_54 = this.properties.filterSettings) === null || _54 === void 0 ? void 0 : _54.background) === null || _55 === void 0 ? void 0 : _55.gradientColor2) !== null && _56 !== void 0 ? _56 : DEFAULTS_CONFIG.filterSettings.background.gradientColor2,
                gradientAlpha2: (_59 = (_58 = (_57 = this.properties.filterSettings) === null || _57 === void 0 ? void 0 : _57.background) === null || _58 === void 0 ? void 0 : _58.gradientAlpha2) !== null && _59 !== void 0 ? _59 : DEFAULTS_CONFIG.filterSettings.background.gradientAlpha2
            },
            showDivider: (_61 = (_60 = this.properties.filterSettings) === null || _60 === void 0 ? void 0 : _60.showDivider) !== null && _61 !== void 0 ? _61 : DEFAULTS_CONFIG.filterSettings.showDivider
        };
        // Map category section properties to the format expected by FancyList component
        var categorySectionSettings = {
            sectionType: 'category',
            resetButtonText: (_63 = (_62 = this.properties.categorySectionSettings) === null || _62 === void 0 ? void 0 : _62.resetButtonText) !== null && _63 !== void 0 ? _63 : DEFAULTS_CONFIG.categorySectionSettings.resetButtonText,
            description: (_65 = (_64 = this.properties.categorySectionSettings) === null || _64 === void 0 ? void 0 : _64.description) !== null && _65 !== void 0 ? _65 : DEFAULTS_CONFIG.categorySectionSettings.description,
            font: {
                family: (_68 = (_67 = (_66 = this.properties.categorySectionSettings) === null || _66 === void 0 ? void 0 : _66.font) === null || _67 === void 0 ? void 0 : _67.family) !== null && _68 !== void 0 ? _68 : DEFAULTS_CONFIG.categorySectionSettings.font.family,
                size: (_71 = (_70 = (_69 = this.properties.categorySectionSettings) === null || _69 === void 0 ? void 0 : _69.font) === null || _70 === void 0 ? void 0 : _70.size) !== null && _71 !== void 0 ? _71 : DEFAULTS_CONFIG.categorySectionSettings.font.size,
                color: (_74 = (_73 = (_72 = this.properties.categorySectionSettings) === null || _72 === void 0 ? void 0 : _72.font) === null || _73 === void 0 ? void 0 : _73.color) !== null && _74 !== void 0 ? _74 : DEFAULTS_CONFIG.categorySectionSettings.font.color,
                formatting: (_77 = (_76 = (_75 = this.properties.categorySectionSettings) === null || _75 === void 0 ? void 0 : _75.font) === null || _76 === void 0 ? void 0 : _76.formatting) !== null && _77 !== void 0 ? _77 : DEFAULTS_CONFIG.categorySectionSettings.font.formatting,
                alignment: ((_80 = (_79 = (_78 = this.properties.categorySectionSettings) === null || _78 === void 0 ? void 0 : _78.font) === null || _79 === void 0 ? void 0 : _79.alignment) !== null && _80 !== void 0 ? _80 : DEFAULTS_CONFIG.categorySectionSettings.font.alignment)
            },
            background: {
                type: (_83 = (_82 = (_81 = this.properties.categorySectionSettings) === null || _81 === void 0 ? void 0 : _81.background) === null || _82 === void 0 ? void 0 : _82.type) !== null && _83 !== void 0 ? _83 : DEFAULTS_CONFIG.categorySectionSettings.background.type,
                color: (_86 = (_85 = (_84 = this.properties.categorySectionSettings) === null || _84 === void 0 ? void 0 : _84.background) === null || _85 === void 0 ? void 0 : _85.color) !== null && _86 !== void 0 ? _86 : DEFAULTS_CONFIG.categorySectionSettings.background.color,
                alpha: (_89 = (_88 = (_87 = this.properties.categorySectionSettings) === null || _87 === void 0 ? void 0 : _87.background) === null || _88 === void 0 ? void 0 : _88.alpha) !== null && _89 !== void 0 ? _89 : DEFAULTS_CONFIG.categorySectionSettings.background.alpha,
                image: (_92 = (_91 = (_90 = this.properties.categorySectionSettings) === null || _90 === void 0 ? void 0 : _90.background) === null || _91 === void 0 ? void 0 : _91.image) !== null && _92 !== void 0 ? _92 : DEFAULTS_CONFIG.categorySectionSettings.background.image,
                imageAlpha: (_95 = (_94 = (_93 = this.properties.categorySectionSettings) === null || _93 === void 0 ? void 0 : _93.background) === null || _94 === void 0 ? void 0 : _94.imageAlpha) !== null && _95 !== void 0 ? _95 : DEFAULTS_CONFIG.categorySectionSettings.background.imageAlpha,
                gradientDirection: (_98 = (_97 = (_96 = this.properties.categorySectionSettings) === null || _96 === void 0 ? void 0 : _96.background) === null || _97 === void 0 ? void 0 : _97.gradientDirection) !== null && _98 !== void 0 ? _98 : DEFAULTS_CONFIG.categorySectionSettings.background.gradientDirection,
                gradientColor1: (_101 = (_100 = (_99 = this.properties.categorySectionSettings) === null || _99 === void 0 ? void 0 : _99.background) === null || _100 === void 0 ? void 0 : _100.gradientColor1) !== null && _101 !== void 0 ? _101 : DEFAULTS_CONFIG.categorySectionSettings.background.gradientColor1,
                gradientAlpha1: (_104 = (_103 = (_102 = this.properties.categorySectionSettings) === null || _102 === void 0 ? void 0 : _102.background) === null || _103 === void 0 ? void 0 : _103.gradientAlpha1) !== null && _104 !== void 0 ? _104 : DEFAULTS_CONFIG.categorySectionSettings.background.gradientAlpha1,
                gradientColor2: (_107 = (_106 = (_105 = this.properties.categorySectionSettings) === null || _105 === void 0 ? void 0 : _105.background) === null || _106 === void 0 ? void 0 : _106.gradientColor2) !== null && _107 !== void 0 ? _107 : DEFAULTS_CONFIG.categorySectionSettings.background.gradientColor2,
                gradientAlpha2: (_110 = (_109 = (_108 = this.properties.categorySectionSettings) === null || _108 === void 0 ? void 0 : _108.background) === null || _109 === void 0 ? void 0 : _109.gradientAlpha2) !== null && _110 !== void 0 ? _110 : DEFAULTS_CONFIG.categorySectionSettings.background.gradientAlpha2
            },
            shape: (_112 = (_111 = this.properties.categorySectionSettings) === null || _111 === void 0 ? void 0 : _111.shape) !== null && _112 !== void 0 ? _112 : DEFAULTS_CONFIG.categorySectionSettings.shape,
            showDivider: (_114 = (_113 = this.properties.categorySectionSettings) === null || _113 === void 0 ? void 0 : _113.showDivider) !== null && _114 !== void 0 ? _114 : DEFAULTS_CONFIG.categorySectionSettings.showDivider,
            autoExpand: (_116 = (_115 = this.properties.categorySectionSettings) === null || _115 === void 0 ? void 0 : _115.autoExpand) !== null && _116 !== void 0 ? _116 : DEFAULTS_CONFIG.categorySectionSettings.autoExpand,
            hoverColor: (_118 = (_117 = this.properties.categorySectionSettings) === null || _117 === void 0 ? void 0 : _117.hoverColor) !== null && _118 !== void 0 ? _118 : DEFAULTS_CONFIG.categorySectionSettings.hoverColor,
            icons: {
                enabled: (_121 = (_120 = (_119 = this.properties.categorySectionSettings) === null || _119 === void 0 ? void 0 : _119.iconSettings) === null || _120 === void 0 ? void 0 : _120.enabled) !== null && _121 !== void 0 ? _121 : DEFAULTS_CONFIG.categorySectionSettings.iconSettings.enabled,
                iconPosition: (_124 = (_123 = (_122 = this.properties.categorySectionSettings) === null || _122 === void 0 ? void 0 : _122.iconSettings) === null || _123 === void 0 ? void 0 : _123.iconPosition) !== null && _124 !== void 0 ? _124 : DEFAULTS_CONFIG.categorySectionSettings.iconSettings.iconPosition,
                collapsedIcon: (_127 = (_126 = (_125 = this.properties.categorySectionSettings) === null || _125 === void 0 ? void 0 : _125.iconSettings) === null || _126 === void 0 ? void 0 : _126.collapsedIcon) !== null && _127 !== void 0 ? _127 : DEFAULTS_CONFIG.categorySectionSettings.iconSettings.collapsedIcon,
                expandedIcon: (_130 = (_129 = (_128 = this.properties.categorySectionSettings) === null || _128 === void 0 ? void 0 : _128.iconSettings) === null || _129 === void 0 ? void 0 : _129.expandedIcon) !== null && _130 !== void 0 ? _130 : DEFAULTS_CONFIG.categorySectionSettings.iconSettings.expandedIcon
            }
        };
        // Map subject section properties to the format expected by FancyList component
        var subjectSectionSettings = {
            sectionType: 'subject',
            resetButtonText: (_132 = (_131 = this.properties.subjectSectionSettings) === null || _131 === void 0 ? void 0 : _131.resetButtonText) !== null && _132 !== void 0 ? _132 : DEFAULTS_CONFIG.subjectSectionSettings.resetButtonText,
            description: (_134 = (_133 = this.properties.subjectSectionSettings) === null || _133 === void 0 ? void 0 : _133.description) !== null && _134 !== void 0 ? _134 : DEFAULTS_CONFIG.subjectSectionSettings.description,
            font: {
                family: (_137 = (_136 = (_135 = this.properties.subjectSectionSettings) === null || _135 === void 0 ? void 0 : _135.font) === null || _136 === void 0 ? void 0 : _136.family) !== null && _137 !== void 0 ? _137 : DEFAULTS_CONFIG.subjectSectionSettings.font.family,
                size: (_140 = (_139 = (_138 = this.properties.subjectSectionSettings) === null || _138 === void 0 ? void 0 : _138.font) === null || _139 === void 0 ? void 0 : _139.size) !== null && _140 !== void 0 ? _140 : DEFAULTS_CONFIG.subjectSectionSettings.font.size,
                color: (_143 = (_142 = (_141 = this.properties.subjectSectionSettings) === null || _141 === void 0 ? void 0 : _141.font) === null || _142 === void 0 ? void 0 : _142.color) !== null && _143 !== void 0 ? _143 : DEFAULTS_CONFIG.subjectSectionSettings.font.color,
                formatting: (_146 = (_145 = (_144 = this.properties.subjectSectionSettings) === null || _144 === void 0 ? void 0 : _144.font) === null || _145 === void 0 ? void 0 : _145.formatting) !== null && _146 !== void 0 ? _146 : DEFAULTS_CONFIG.subjectSectionSettings.font.formatting,
                alignment: ((_149 = (_148 = (_147 = this.properties.subjectSectionSettings) === null || _147 === void 0 ? void 0 : _147.font) === null || _148 === void 0 ? void 0 : _148.alignment) !== null && _149 !== void 0 ? _149 : DEFAULTS_CONFIG.subjectSectionSettings.font.alignment)
            },
            background: {
                type: (_152 = (_151 = (_150 = this.properties.subjectSectionSettings) === null || _150 === void 0 ? void 0 : _150.background) === null || _151 === void 0 ? void 0 : _151.type) !== null && _152 !== void 0 ? _152 : DEFAULTS_CONFIG.subjectSectionSettings.background.type,
                color: (_155 = (_154 = (_153 = this.properties.subjectSectionSettings) === null || _153 === void 0 ? void 0 : _153.background) === null || _154 === void 0 ? void 0 : _154.color) !== null && _155 !== void 0 ? _155 : DEFAULTS_CONFIG.subjectSectionSettings.background.color,
                alpha: (_158 = (_157 = (_156 = this.properties.subjectSectionSettings) === null || _156 === void 0 ? void 0 : _156.background) === null || _157 === void 0 ? void 0 : _157.alpha) !== null && _158 !== void 0 ? _158 : DEFAULTS_CONFIG.subjectSectionSettings.background.alpha,
                image: (_161 = (_160 = (_159 = this.properties.subjectSectionSettings) === null || _159 === void 0 ? void 0 : _159.background) === null || _160 === void 0 ? void 0 : _160.image) !== null && _161 !== void 0 ? _161 : DEFAULTS_CONFIG.subjectSectionSettings.background.image,
                imageAlpha: (_164 = (_163 = (_162 = this.properties.subjectSectionSettings) === null || _162 === void 0 ? void 0 : _162.background) === null || _163 === void 0 ? void 0 : _163.imageAlpha) !== null && _164 !== void 0 ? _164 : DEFAULTS_CONFIG.subjectSectionSettings.background.imageAlpha,
                gradientDirection: (_167 = (_166 = (_165 = this.properties.subjectSectionSettings) === null || _165 === void 0 ? void 0 : _165.background) === null || _166 === void 0 ? void 0 : _166.gradientDirection) !== null && _167 !== void 0 ? _167 : DEFAULTS_CONFIG.subjectSectionSettings.background.gradientDirection,
                gradientColor1: (_170 = (_169 = (_168 = this.properties.subjectSectionSettings) === null || _168 === void 0 ? void 0 : _168.background) === null || _169 === void 0 ? void 0 : _169.gradientColor1) !== null && _170 !== void 0 ? _170 : DEFAULTS_CONFIG.subjectSectionSettings.background.gradientColor1,
                gradientAlpha1: (_173 = (_172 = (_171 = this.properties.subjectSectionSettings) === null || _171 === void 0 ? void 0 : _171.background) === null || _172 === void 0 ? void 0 : _172.gradientAlpha1) !== null && _173 !== void 0 ? _173 : DEFAULTS_CONFIG.subjectSectionSettings.background.gradientAlpha1,
                gradientColor2: (_176 = (_175 = (_174 = this.properties.subjectSectionSettings) === null || _174 === void 0 ? void 0 : _174.background) === null || _175 === void 0 ? void 0 : _175.gradientColor2) !== null && _176 !== void 0 ? _176 : DEFAULTS_CONFIG.subjectSectionSettings.background.gradientColor2,
                gradientAlpha2: (_179 = (_178 = (_177 = this.properties.subjectSectionSettings) === null || _177 === void 0 ? void 0 : _177.background) === null || _178 === void 0 ? void 0 : _178.gradientAlpha2) !== null && _179 !== void 0 ? _179 : DEFAULTS_CONFIG.subjectSectionSettings.background.gradientAlpha2
            },
            shape: (_181 = (_180 = this.properties.subjectSectionSettings) === null || _180 === void 0 ? void 0 : _180.shape) !== null && _181 !== void 0 ? _181 : DEFAULTS_CONFIG.subjectSectionSettings.shape,
            showDivider: (_183 = (_182 = this.properties.subjectSectionSettings) === null || _182 === void 0 ? void 0 : _182.showDivider) !== null && _183 !== void 0 ? _183 : DEFAULTS_CONFIG.subjectSectionSettings.showDivider,
            autoExpand: (_185 = (_184 = this.properties.subjectSectionSettings) === null || _184 === void 0 ? void 0 : _184.autoExpand) !== null && _185 !== void 0 ? _185 : DEFAULTS_CONFIG.subjectSectionSettings.autoExpand,
            hoverColor: (_187 = (_186 = this.properties.subjectSectionSettings) === null || _186 === void 0 ? void 0 : _186.hoverColor) !== null && _187 !== void 0 ? _187 : DEFAULTS_CONFIG.subjectSectionSettings.hoverColor,
            icons: {
                enabled: (_190 = (_189 = (_188 = this.properties.subjectSectionSettings) === null || _188 === void 0 ? void 0 : _188.iconSettings) === null || _189 === void 0 ? void 0 : _189.enabled) !== null && _190 !== void 0 ? _190 : DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.enabled,
                iconPosition: (_193 = (_192 = (_191 = this.properties.subjectSectionSettings) === null || _191 === void 0 ? void 0 : _191.iconSettings) === null || _192 === void 0 ? void 0 : _192.iconPosition) !== null && _193 !== void 0 ? _193 : DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.iconPosition,
                collapsedIcon: (_196 = (_195 = (_194 = this.properties.subjectSectionSettings) === null || _194 === void 0 ? void 0 : _194.iconSettings) === null || _195 === void 0 ? void 0 : _195.collapsedIcon) !== null && _196 !== void 0 ? _196 : DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.collapsedIcon,
                expandedIcon: (_199 = (_198 = (_197 = this.properties.subjectSectionSettings) === null || _197 === void 0 ? void 0 : _197.iconSettings) === null || _198 === void 0 ? void 0 : _198.expandedIcon) !== null && _199 !== void 0 ? _199 : DEFAULTS_CONFIG.subjectSectionSettings.iconSettings.expandedIcon
            }
        };
        // Map description section properties to the format expected by FancyList component
        var descriptionSectionSettings = {
            sectionType: 'description',
            resetButtonText: (_201 = (_200 = this.properties.descriptionSectionSettings) === null || _200 === void 0 ? void 0 : _200.resetButtonText) !== null && _201 !== void 0 ? _201 : DEFAULTS_CONFIG.descriptionSectionSettings.resetButtonText,
            description: (_203 = (_202 = this.properties.descriptionSectionSettings) === null || _202 === void 0 ? void 0 : _202.description) !== null && _203 !== void 0 ? _203 : DEFAULTS_CONFIG.descriptionSectionSettings.description,
            font: {
                family: (_206 = (_205 = (_204 = this.properties.descriptionSectionSettings) === null || _204 === void 0 ? void 0 : _204.font) === null || _205 === void 0 ? void 0 : _205.family) !== null && _206 !== void 0 ? _206 : DEFAULTS_CONFIG.descriptionSectionSettings.font.family,
                size: (_209 = (_208 = (_207 = this.properties.descriptionSectionSettings) === null || _207 === void 0 ? void 0 : _207.font) === null || _208 === void 0 ? void 0 : _208.size) !== null && _209 !== void 0 ? _209 : DEFAULTS_CONFIG.descriptionSectionSettings.font.size,
                color: (_212 = (_211 = (_210 = this.properties.descriptionSectionSettings) === null || _210 === void 0 ? void 0 : _210.font) === null || _211 === void 0 ? void 0 : _211.color) !== null && _212 !== void 0 ? _212 : DEFAULTS_CONFIG.descriptionSectionSettings.font.color,
                formatting: (_215 = (_214 = (_213 = this.properties.descriptionSectionSettings) === null || _213 === void 0 ? void 0 : _213.font) === null || _214 === void 0 ? void 0 : _214.formatting) !== null && _215 !== void 0 ? _215 : DEFAULTS_CONFIG.descriptionSectionSettings.font.formatting,
                alignment: ((_218 = (_217 = (_216 = this.properties.descriptionSectionSettings) === null || _216 === void 0 ? void 0 : _216.font) === null || _217 === void 0 ? void 0 : _217.alignment) !== null && _218 !== void 0 ? _218 : DEFAULTS_CONFIG.descriptionSectionSettings.font.alignment)
            },
            background: {
                type: (_221 = (_220 = (_219 = this.properties.descriptionSectionSettings) === null || _219 === void 0 ? void 0 : _219.background) === null || _220 === void 0 ? void 0 : _220.type) !== null && _221 !== void 0 ? _221 : DEFAULTS_CONFIG.descriptionSectionSettings.background.type,
                color: (_224 = (_223 = (_222 = this.properties.descriptionSectionSettings) === null || _222 === void 0 ? void 0 : _222.background) === null || _223 === void 0 ? void 0 : _223.color) !== null && _224 !== void 0 ? _224 : DEFAULTS_CONFIG.descriptionSectionSettings.background.color,
                alpha: (_227 = (_226 = (_225 = this.properties.descriptionSectionSettings) === null || _225 === void 0 ? void 0 : _225.background) === null || _226 === void 0 ? void 0 : _226.alpha) !== null && _227 !== void 0 ? _227 : DEFAULTS_CONFIG.descriptionSectionSettings.background.alpha,
                image: (_230 = (_229 = (_228 = this.properties.descriptionSectionSettings) === null || _228 === void 0 ? void 0 : _228.background) === null || _229 === void 0 ? void 0 : _229.image) !== null && _230 !== void 0 ? _230 : DEFAULTS_CONFIG.descriptionSectionSettings.background.image,
                imageAlpha: (_233 = (_232 = (_231 = this.properties.descriptionSectionSettings) === null || _231 === void 0 ? void 0 : _231.background) === null || _232 === void 0 ? void 0 : _232.imageAlpha) !== null && _233 !== void 0 ? _233 : DEFAULTS_CONFIG.descriptionSectionSettings.background.imageAlpha,
                gradientDirection: (_236 = (_235 = (_234 = this.properties.descriptionSectionSettings) === null || _234 === void 0 ? void 0 : _234.background) === null || _235 === void 0 ? void 0 : _235.gradientDirection) !== null && _236 !== void 0 ? _236 : DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientDirection,
                gradientColor1: (_239 = (_238 = (_237 = this.properties.descriptionSectionSettings) === null || _237 === void 0 ? void 0 : _237.background) === null || _238 === void 0 ? void 0 : _238.gradientColor1) !== null && _239 !== void 0 ? _239 : DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientColor1,
                gradientAlpha1: (_242 = (_241 = (_240 = this.properties.descriptionSectionSettings) === null || _240 === void 0 ? void 0 : _240.background) === null || _241 === void 0 ? void 0 : _241.gradientAlpha1) !== null && _242 !== void 0 ? _242 : DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientAlpha1,
                gradientColor2: (_245 = (_244 = (_243 = this.properties.descriptionSectionSettings) === null || _243 === void 0 ? void 0 : _243.background) === null || _244 === void 0 ? void 0 : _244.gradientColor2) !== null && _245 !== void 0 ? _245 : DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientColor2,
                gradientAlpha2: (_248 = (_247 = (_246 = this.properties.descriptionSectionSettings) === null || _246 === void 0 ? void 0 : _246.background) === null || _247 === void 0 ? void 0 : _247.gradientAlpha2) !== null && _248 !== void 0 ? _248 : DEFAULTS_CONFIG.descriptionSectionSettings.background.gradientAlpha2
            },
            shape: (_250 = (_249 = this.properties.descriptionSectionSettings) === null || _249 === void 0 ? void 0 : _249.shape) !== null && _250 !== void 0 ? _250 : DEFAULTS_CONFIG.descriptionSectionSettings.shape,
            showDivider: (_252 = (_251 = this.properties.descriptionSectionSettings) === null || _251 === void 0 ? void 0 : _251.showDivider) !== null && _252 !== void 0 ? _252 : DEFAULTS_CONFIG.descriptionSectionSettings.showDivider,
            autoExpand: (_254 = (_253 = this.properties.descriptionSectionSettings) === null || _253 === void 0 ? void 0 : _253.autoExpand) !== null && _254 !== void 0 ? _254 : DEFAULTS_CONFIG.descriptionSectionSettings.autoExpand,
            hoverColor: (_256 = (_255 = this.properties.descriptionSectionSettings) === null || _255 === void 0 ? void 0 : _255.hoverColor) !== null && _256 !== void 0 ? _256 : DEFAULTS_CONFIG.descriptionSectionSettings.hoverColor
        };
        var element = React.createElement(FancyList, {
            selectedListId: this.properties.selectedListId,
            categoryField: this.properties.categoryField,
            subjectField: this.properties.subjectField,
            descriptionField: this.properties.descriptionField,
            showAllCategories: (_258 = (_257 = this.properties.filterSettings) === null || _257 === void 0 ? void 0 : _257.showAllCategories) !== null && _258 !== void 0 ? _258 : DEFAULTS_CONFIG.filterSettings.showAllCategories,
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