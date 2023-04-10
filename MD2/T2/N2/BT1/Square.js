"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(width) {
        this.width = width;
    }
    Square.prototype.getWith = function () {
        return this.width;
    };
    Square.prototype.setWith = function (value) {
        this.width = value;
    };
    Square.prototype.Area = function () {
        return this.width * this.width;
    };
    Square.prototype.resize = function (percent) {
        this.width = this.width + this.Area() * (percent / 100);
    };
    return Square;
}());
exports.Square = Square;
