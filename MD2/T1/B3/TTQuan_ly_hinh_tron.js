var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var circleLis = [];
circleLis.push(new Circle("yellow", 20));
circleLis.push(new Circle("red", 21));
circleLis.push(new Circle("blue", 22));
function ShowCircle(Circle) {
    console.log("".concat(Circle.color, ",").concat(Circle.radius));
}
circleLis.forEach(ShowCircle);
