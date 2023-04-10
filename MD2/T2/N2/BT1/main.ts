import {Rectangle} from "./Rectangle";
import {Circle} from "./Circle";
import {Square} from "./Square";

let circle = new Circle(5);
let rectangle = new Rectangle(5,6);
let square = new Square(8);

let array = [circle,rectangle,square];

array.forEach((item)=>{
    item.resize(5);
    console.log(item.Area());
})

