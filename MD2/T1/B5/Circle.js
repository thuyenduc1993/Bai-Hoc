"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, filled, radius) {
        var _this = _super.call(this, color, filled) || this;
        _this.radius = 1;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return this.radius * Math.PI * 2;
    };
    Circle.prototype.toString = function () {
        return "A Circle with radius=" + this.getRadius() + ", which is a subclass of " + _super.prototype.toString.call(this);
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
var circle = new Circle("blue", true, 4);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());
