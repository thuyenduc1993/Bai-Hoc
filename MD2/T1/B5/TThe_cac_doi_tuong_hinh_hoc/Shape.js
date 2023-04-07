"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = "red";
        this.filled = true;
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.getFilled = function () {
        return this.filled;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.toString = function () {
        return "A Shape with color of " + this.getColor() + " and " + (this.getFilled() ? "filled" : "not filled");
    };
    return Shape;
}());
exports.Shape = Shape;
var shape = new Shape("blue", false);
console.table(shape);
console.log(shape.toString());
