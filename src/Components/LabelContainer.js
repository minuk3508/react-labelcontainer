"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var bi_1 = require("react-icons/bi");
var react_2 = require("react");
var react_3 = require("react");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  width: 300px;\n  height: ", ";\n  margin: 10px 20px;\n  background-color: #ffffff;\n  border-radius: 20px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  transition: all 0.3s;\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  width: 300px;\n  height: ", ";\n  margin: 10px 20px;\n  background-color: #ffffff;\n  border-radius: 20px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  transition: all 0.3s;\n"])), function (props) { return props.height; });
var Button = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 50px;\n  border: none;\n  background-color: white;\n  :hover {\n    cursor: pointer;\n    background-color: rgba(100, 100, 111, 0.2);\n    color: white;\n  }\n"], ["\n  width: 100%;\n  height: 50px;\n  border: none;\n  background-color: white;\n  :hover {\n    cursor: pointer;\n    background-color: rgba(100, 100, 111, 0.2);\n    color: white;\n  }\n"])));
var Title = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  width: 100%;\n  height: 70px;\n  border-radius: 20px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  width: 100%;\n  height: 70px;\n  border-radius: 20px;\n"])));
var Description = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  padding: 5%;\n  font-size: 0.8rem;\n  color: gray;\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n"], ["\n  display: flex;\n  padding: 5%;\n  font-size: 0.8rem;\n  color: gray;\n  width: 100%;\n  height: auto;\n  border-radius: 20px;\n"])));
var CheckBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  border: none;\n  background-color: white;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  border: none;\n  background-color: white;\n"])));
var MarkingBox = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n  height: 100%;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n  height: 100%;\n"])));
var Marking = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 38%;\n  height: 64%;\n  color: white;\n  background-color: ", ";\n  border-radius: 50%;\n  transition: all 0.3s;\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 38%;\n  height: 64%;\n  color: white;\n  background-color: ", ";\n  border-radius: 50%;\n  transition: all 0.3s;\n  :hover {\n    cursor: pointer;\n  }\n"])), function (props) { return props.checkedValue; });
var CheckValue = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 70%;\n  height: 100%;\n"], ["\n  display: flex;\n  align-items: center;\n  width: 70%;\n  height: 100%;\n"])));
var HoverWrapper = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0% 10%;\n  width: 100%;\n  height: 50px;\n  background-color: white;\n  border: 1px, solid, black;\n  :hover {\n    cursor: pointer;\n    background-color: rgba(100, 100, 111, 0.2);\n    color: white;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0% 10%;\n  width: 100%;\n  height: 50px;\n  background-color: white;\n  border: 1px, solid, black;\n  :hover {\n    cursor: pointer;\n    background-color: rgba(100, 100, 111, 0.2);\n    color: white;\n  }\n"])));
var LabelContainer = /** @class */ (function () {
    function LabelContainer() {
    }
    LabelContainer.Wrapper = function (_a) {
        var children = _a.children, height = _a.height;
        return react_1.default.createElement(Container, { height: height }, children);
    };
    LabelContainer.Title = function (_a) {
        var children = _a.children;
        return react_1.default.createElement(Title, null, children);
    };
    LabelContainer.Description = function (_a) {
        var children = _a.children;
        return react_1.default.createElement(Description, null, children);
    };
    LabelContainer.Button = function (_a) {
        var children = _a.children, giveMeFn = _a.giveMeFn;
        return react_1.default.createElement(Button, { onClick: giveMeFn }, children);
    };
    LabelContainer.Checking = function (_a) {
        var children = _a.children, giveMeFn = _a.giveMeFn;
        var _b = (0, react_2.useState)(false), value = _b[0], setValue = _b[1];
        var ref = (0, react_3.useRef)(null);
        var onClick = function () {
            if (giveMeFn) {
                giveMeFn();
            }
            setValue(function (prev) { return !prev; });
        };
        return (react_1.default.createElement(CheckBox, null,
            react_1.default.createElement(MarkingBox, null,
                react_1.default.createElement(Marking, { onClick: onClick, checkedValue: value ? "black" : "#f1f1f1" },
                    react_1.default.createElement(bi_1.BiCheck, { size: "24" }))),
            react_1.default.createElement(CheckValue, { ref: ref }, children)));
    };
    LabelContainer.Hover = function (_a) {
        var children = _a.children, giveMeFn = _a.giveMeFn;
        var onMouseEnter = function () {
            if (giveMeFn)
                giveMeFn();
        };
        var onMouseLeave = function () {
            if (giveMeFn)
                giveMeFn();
        };
        return (react_1.default.createElement(HoverWrapper, { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
            children,
            react_1.default.createElement(bi_1.BiChevronRight, null)));
    };
    return LabelContainer;
}());
exports.default = LabelContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=LabelContainer.js.map