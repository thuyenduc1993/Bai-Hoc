"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.setRadius = function (value) {
        this.radius = value;
    };
    Circle.prototype.acreage = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.perimeter = function () {
        return this.radius * Math.PI * 2;
    };
    return Circle;
}());
exports.Circle = Circle;
