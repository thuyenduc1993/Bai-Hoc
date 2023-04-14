import {Shape} from "./Shape";

export class Triangle extends Shape{
    side1: number;
    side2: number;
    side3: number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getSide1():number{
        return this.side1
    }
    getSide2():number{
        return this.side2
    }
    getSide3():number{
        return this.side3
    }
    setSide1(value:number){
        this.side1 = value;
    }
    setSide2(value:number){
        this.side2 = value;
    }
    setSide3(value:number){
        this.side3 = value;
    }
    perimeter():number{
        return this.side1 + this.side2 + this.side3;
    }
    area():number{
        let p = this.perimeter();
        return p * ((p - this.side1) * (p - this.side2) * (p - this.side3));
    }

}