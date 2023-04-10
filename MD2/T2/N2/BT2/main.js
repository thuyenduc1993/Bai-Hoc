"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Square_1 = require("./Square");
var Rectangle_1 = require("./Rectangle");
var circle = new Circle_1.Circle(9);
var square = new Square_1.Square(6);
var rectangle = new Rectangle_1.Rectangle(10, 15);
var arr = [circle, square, rectangle];
arr.forEach(function (item) {
    if (item === square) {
        console.log(item.howToColor());
        console.log("di\u1EC7n t\u00EDch vu\u00F4ng = ".concat(item.Area()));
    }
    else {
        console.log("di\u00EAn t\u00EDch h\u00ECnh tr\u00F2n =  ".concat(circle.Area()));
        console.log("di\u00EAn t\u00EDch h\u00ECnh ch\u1EEF nh\u1EADt = ".concat(rectangle.Area()));
    }
});
