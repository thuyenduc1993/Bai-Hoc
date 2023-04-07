"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Cylinder_1 = require("./Cylinder");
var circle = new Circle_1.Circle("red", 5);
console.log("Di\u1EC7n tich =  ".concat(circle.acreage()));
console.log("Chu vi = ".concat(circle.perimeter()));
var cylinder = new Cylinder_1.Cylinder('red', 6, 7);
console.log("Th\u1EC3 t\u00EDch = ".concat(cylinder.volume()));
