"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point2D_1 = require("./Point2D");
var Point3D_1 = require("./Point3D");
var point2D = new Point2D_1.Point2D(2, 4);
console.log(point2D.getXY());
var point3D = new Point3D_1.Point3D(2, 3, 5);
console.log(point3D.getXYZ());
