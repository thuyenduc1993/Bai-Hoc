import {Shape} from "./Shape";
import {Triangle} from "./Triangle";

let shape = new Shape("BVD","red");
console.log(shape);

let triangle = new Triangle('BVD','red',4,7,8);
console.log(triangle.perimeter());
console.log(triangle.area());
