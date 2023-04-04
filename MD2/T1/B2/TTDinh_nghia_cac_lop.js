class Shape {
    color;
    filled
    constructor(color,filled) {
        this.color = color;
        this.filled =filled;
    }
}




// class Circle {
//     color;
//     filled;
//     radius;
//     constructor(color,filled,radius) {
//         this.color = color;
//         this.filled = filled;
//         this.radius = radius;
//     }
//     getArea(){
//         return this.radius * this.radius * Math.PI;
//     }
//     getPerimeter(){
//         return this.radius * Math.PI;
//     }
// }
// let new_circle = new Circle('red',5,7);
// console.log(new_circle);
// console.log(new_circle.getArea());
// console.log(new_circle.getPerimeter());


class Rectangle {
    width;
    length;
    filled;
    color;
    constructor(width,length,filled,color) {
        this.width = width;
        this.length = length;
        this.filled = filled;
        this.color = color;
    }
    getArea(){
        return this.width * this.length;
    }
    getPerimeter(){
        return (this.width + this.length) * 2;
    }
}
let new_rectangle = new Rectangle(5,10,5,"red")
console.log(new_rectangle);
console.log(new_rectangle.getArea());
console.log(new_rectangle.getPerimeter());



class Square {
    color;
    filled;
    side ;
    constructor(color,filled,side ) {
        this.color = color;
        this.filled = filled;
        this.side = side
    }
}
let square = new Square("red", 5, 5.8);

console.log(square);