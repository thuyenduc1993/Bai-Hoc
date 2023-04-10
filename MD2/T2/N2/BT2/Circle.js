"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.Area = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.perimeter = function () {
        return this.radius * Math.PI * 2;
    };
    Circle.prototype.howToColor = function () {
        console.log("Color all four sides.");
    };
    return Circle;
}());
exports.Circle = Circle;
