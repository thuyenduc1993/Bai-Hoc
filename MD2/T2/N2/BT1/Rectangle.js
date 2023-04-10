"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setWidth = function (value) {
        this.width = value;
    };
    Rectangle.prototype.setHeight = function (value) {
        this.width = value;
    };
    Rectangle.prototype.Area = function () {
        return this.width * this.width;
    };
    Rectangle.prototype.resize = function (percent) {
        this.width = this.width + this.width * (percent / 100);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
