class Circle {
    public color: string;
    public radius: number;
    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }
}
let circleLis :Circle[] =[]
circleLis.push(new Circle("yellow",20));
circleLis.push(new Circle("red",21));
circleLis.push(new Circle("blue",22));
function ShowCircle (circle:Circle) {
    console.log( `${circle.color},${circle.radius}`);
    // console.log(circle);
}
circleLis.forEach(ShowCircle);