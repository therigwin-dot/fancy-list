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
import { PropertyPaneToggle, PropertyPaneDropdown } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPHttpClient } from '@microsoft/sp-http';
import * as strings from 'FancyListWebPartStrings';
import FancyList from './components/FancyList';
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
        return _this;
    }
    FancyListWebPart.prototype.render = function () {
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
            context: this.context
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
    FancyListWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath) {
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
                        else if (propertyPath === 'defaultExpanded') {
                            // Refresh the web part when expand setting changes
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
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
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
                                PropertyPaneToggle('showAllCategories', {
                                    label: 'Show "All" Category Option',
                                    onText: 'On',
                                    offText: 'Off'
                                }),
                                PropertyPaneToggle('defaultExpanded', {
                                    label: 'Expand Panels by Default',
                                    onText: 'On',
                                    offText: 'Off'
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