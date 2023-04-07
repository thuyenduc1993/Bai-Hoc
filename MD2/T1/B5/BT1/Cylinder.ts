import {Circle} from "./Circle";

export class Cylinder extends Circle{
    private height: number;

    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this.height = height;
    }
    getHeight():number{
        return this.height;
    }
    setHeight(value:number){
        this.height = value;
    }
    volume():number{
        return this.acreage() * this.height;
    }
}