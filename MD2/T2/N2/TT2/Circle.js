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
    Circle.prototype.setRadius = function (value) {
        this.radius = value;
    };
    Circle.prototype.toString = function () {
        return "".concat(this.getRadius());
    };
    return Circle;
}());
exports.Circle = Circle;
