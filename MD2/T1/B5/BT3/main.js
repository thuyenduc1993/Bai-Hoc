"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangle_1 = require("./Triangle");
// let shape = new Shape("BVD","red");
// console.log(shape);
var triangle = new Triangle_1.Triangle('tam giac', 'green', 4, 7, 8);
console.log(triangle.perimeter());
console.log(triangle.area());
