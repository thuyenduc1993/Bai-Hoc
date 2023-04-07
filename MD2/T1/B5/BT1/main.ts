import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";

let circle = new Circle("red",5);
console.log(`Diện tich =  ${circle.acreage()}`);
console.log(`Chu vi = ${circle.perimeter()}`);

let cylinder = new Cylinder('red',6,7);
console.log(`Thể tích = ${cylinder.volume()}`);
