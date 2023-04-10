"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(width) {
        this.width = width;
    }
    Square.prototype.setWidth = function (value) {
        this.width = value;
    };
    Square.prototype.getWidth = function () {
        return this.width;
    };
    Square.prototype.Area = function () {
        return this.width * this.width;
    };
    Square.prototype.perimeter = function () {
        return (this.width + this.width) * 2;
    };
    Square.prototype.howToColor = function () {
        return "Color all four sides..";
    };
    return Square;
}());
exports.Square = Square;
