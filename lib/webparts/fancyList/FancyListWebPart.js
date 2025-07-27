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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
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
        var element = React.createElement(FancyList, {
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
            titleSettings: titleSettings
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
                                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
                                            ReactDom.render(React.createElement(FilterModuleControl, {
                                                label: 'Filter Configuration',
                                                settings: {
                                                    font: {
                                                        family: ((_a = _this.properties.filterSettings) === null || _a === void 0 ? void 0 : _a.font.family) || DEFAULTS_CONFIG.filterSettings.font.family,
                                                        size: ((_b = _this.properties.filterSettings) === null || _b === void 0 ? void 0 : _b.font.size) || DEFAULTS_CONFIG.filterSettings.font.size,
                                                        formatting: ((_c = _this.properties.filterSettings) === null || _c === void 0 ? void 0 : _c.font.formatting) || DEFAULTS_CONFIG.filterSettings.font.formatting,
                                                        alignment: ((_d = _this.properties.filterSettings) === null || _d === void 0 ? void 0 : _d.font.alignment) || DEFAULTS_CONFIG.filterSettings.font.alignment
                                                    },
                                                    activeColors: {
                                                        background: ((_e = _this.properties.filterSettings) === null || _e === void 0 ? void 0 : _e.activeColors.background) || DEFAULTS_CONFIG.filterSettings.activeColors.background,
                                                        font: ((_f = _this.properties.filterSettings) === null || _f === void 0 ? void 0 : _f.activeColors.font) || DEFAULTS_CONFIG.filterSettings.activeColors.font
                                                    },
                                                    inactiveColors: {
                                                        background: ((_g = _this.properties.filterSettings) === null || _g === void 0 ? void 0 : _g.inactiveColors.background) || DEFAULTS_CONFIG.filterSettings.inactiveColors.background,
                                                        font: ((_h = _this.properties.filterSettings) === null || _h === void 0 ? void 0 : _h.inactiveColors.font) || DEFAULTS_CONFIG.filterSettings.inactiveColors.font
                                                    },
                                                    shape: ((_j = _this.properties.filterSettings) === null || _j === void 0 ? void 0 : _j.shape) || DEFAULTS_CONFIG.filterSettings.shape,
                                                    backgroundShape: ((_k = _this.properties.filterSettings) === null || _k === void 0 ? void 0 : _k.backgroundShape) || DEFAULTS_CONFIG.filterSettings.backgroundShape,
                                                    showDivider: ((_l = _this.properties.filterSettings) === null || _l === void 0 ? void 0 : _l.showDivider) || DEFAULTS_CONFIG.filterSettings.showDivider,
                                                    backgroundType: ((_m = _this.properties.filterSettings) === null || _m === void 0 ? void 0 : _m.background.type) || DEFAULTS_CONFIG.filterSettings.background.type,
                                                    backgroundColor: ((_o = _this.properties.filterSettings) === null || _o === void 0 ? void 0 : _o.background.color) || DEFAULTS_CONFIG.filterSettings.background.color,
                                                    backgroundAlpha: ((_p = _this.properties.filterSettings) === null || _p === void 0 ? void 0 : _p.background.alpha) || DEFAULTS_CONFIG.filterSettings.background.alpha,
                                                    gradientDirection: ((_q = _this.properties.filterSettings) === null || _q === void 0 ? void 0 : _q.background.gradientDirection) || DEFAULTS_CONFIG.filterSettings.background.gradientDirection,
                                                    gradientColor1: ((_r = _this.properties.filterSettings) === null || _r === void 0 ? void 0 : _r.background.gradientColor1) || DEFAULTS_CONFIG.filterSettings.background.gradientColor1,
                                                    gradientColor2: ((_s = _this.properties.filterSettings) === null || _s === void 0 ? void 0 : _s.background.gradientColor2) || DEFAULTS_CONFIG.filterSettings.background.gradientColor2,
                                                    gradientAlpha: ((_t = _this.properties.filterSettings) === null || _t === void 0 ? void 0 : _t.background.gradientAlpha1) || DEFAULTS_CONFIG.filterSettings.background.gradientAlpha1,
                                                    imageUrl: ((_u = _this.properties.filterSettings) === null || _u === void 0 ? void 0 : _u.background.image) || DEFAULTS_CONFIG.filterSettings.background.image,
                                                    imageAlpha: ((_v = _this.properties.filterSettings) === null || _v === void 0 ? void 0 : _v.background.imageAlpha) || DEFAULTS_CONFIG.filterSettings.background.imageAlpha
                                                },
                                                onPropertyChange: function (propertyPath, newValue) {
                                                    // Handle property changes and update the web part properties
                                                    if (!_this.properties.filterSettings) {
                                                        _this.properties.filterSettings = __assign({}, DEFAULTS_CONFIG.filterSettings);
                                                    }
                                                    switch (propertyPath) {
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