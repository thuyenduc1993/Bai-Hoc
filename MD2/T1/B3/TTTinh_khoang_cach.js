var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    return Circle;
}());
function distance(circle1, circle2, x) {
    var distance = Math.pow(circle1.radius - circle2.radius, 2) + Math.pow(x, 2); // Math.pow là ham bình phương
    return Math.sqrt(distance);
}
var circle1 = new Circle(9);
var circle2 = new Circle(5);
console.log(distance(circle1, circle2, 24));
