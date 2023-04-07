import {Shape} from "./Shape";

export class Rectangle extends Shape{
    color: string;
    filled: boolean;
    private width: number;
    private length: number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(value  : number) {
        this.width = value;
    }

    getLength(): number {
        return this.length;
    }

    setLength(value: number) {
        this.length = value;
    }
    getArea():number{
        return this.width * this.length;
    }
    getPerimeter():number{
        return (this.width+this.length)*2;
    }
    toString(): string {
        return `A Rectangle with ${this.width} and ${this.length} and ${super.toString()} `;
    }
}
let rectangle = new Rectangle('red',true,5,8);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());