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
function ShowCircle(circle) {
    console.log("".concat(circle.color, ",").concat(circle.radius));
    // console.log(circle);
}
circleLis.forEach(ShowCircle);
