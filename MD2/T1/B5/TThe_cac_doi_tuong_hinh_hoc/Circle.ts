import {Shape} from "./Shape";

export class Circle extends Shape {
    color: string;
    filled: boolean;
    radius: number = 1

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter(): number {
        return this.radius * Math.PI * 2;
    }

    toString(): string {
        return "A Circle with radius=" + this.getRadius() + ", which is a subclass of " + super.toString();
    }
}
let circle = new Circle("blue",true,4);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());
