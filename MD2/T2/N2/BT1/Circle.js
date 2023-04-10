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
    Circle.prototype.Area = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.resize = function (percent) {
        this.radius = this.radius + this.radius * (percent / 100);
    };
    return Circle;
}());
exports.Circle = Circle;
