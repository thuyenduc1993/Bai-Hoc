"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getWith = function () {
        return this.width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setWidth = function (value) {
        this.width = value;
    };
    Rectangle.prototype.setHeight = function (value) {
        this.height = value;
    };
    Rectangle.prototype.Area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return (this.width + this.height) * 2;
    };
    Rectangle.prototype.howToColor = function () {
        return "Color all four sides..";
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
