import {Rectangle} from "./Rectangle";

class Square extends Rectangle {
    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled, width, length);
    }

    getSide(): number {
        return this.getWidth();
    }

    setSide(side: number) {
        this.setWidth(side);
        this.setLength(side);
    }

    //Override method
    setWidth(value: number) {
        this.setSide(value);
    }

    //Override method
    setLength(value: number) {
        this.setSide(value);
    }

    //Override method
    toString(): string {
        return "A Square with side=" + this.getSide() + ", which is a subclass of " + super.toString();
    }
}
let square = new Square("red",true,5,8);
console.log(square);
console.log(square.toString());