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
var Rectangle_1 = require("./Rectangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, width, length) {
        return _super.call(this, color, filled, width, length) || this;
    }
    Square.prototype.getSide = function () {
        return this.getWidth();
    };
    Square.prototype.setSide = function (side) {
        this.setWidth(side);
        this.setLength(side);
    };
    //Override method
    Square.prototype.setWidth = function (value) {
        this.setSide(value);
    };
    //Override method
    Square.prototype.setLength = function (value) {
        this.setSide(value);
    };
    //Override method
    Square.prototype.toString = function () {
        return "A Square with side=" + this.getSide() + ", which is a subclass of " + _super.prototype.toString.call(this);
    };
    return Square;
}(Rectangle_1.Rectangle));
var square = new Square("red", true, 5, 8);
console.log(square);
console.log(square.toString());
