"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var Square_1 = require("./Square");
var circle = new Circle_1.Circle(5);
var rectangle = new Rectangle_1.Rectangle(5, 6);
var square = new Square_1.Square(8);
var array = [circle, rectangle, square];
array.forEach(function (item) {
    item.resize(5);
    console.log(item.Area());
});
