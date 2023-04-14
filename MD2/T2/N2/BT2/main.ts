import {Circle} from "./Circle";
import {Square} from "./Square";
import {Rectangle} from "./Rectangle";

let circle = new Circle(9);
let square = new Square(6);
let rectangle = new Rectangle(10,15);

let arr = [circle,square,rectangle];

arr.forEach((item)=>{
    if(item===square) {
        console.log(item.howToColor());
        console.log(`diện tích vuông = ${item.Area()}`)
    }else {
        console.log(`diên tích hình tròn =  ${circle.Area()}`);
        console.log(`diên tích hình chữ nhật  ${rectangle.Area()}`);
    }
})