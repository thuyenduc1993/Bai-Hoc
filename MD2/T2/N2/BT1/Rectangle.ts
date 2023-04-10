import {Resizeable} from "./Resizeable";

export class Rectangle implements Resizeable{
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getWidth():number{
        return this.width;
    }
    getHeight():number{
        return this.height;
    }
    setWidth(value:number){
        this.width = value;
    }
    setHeight(value:number){
        this.width = value;
    }

    Area():number {
        return this.width * this.width
    }
    resize(percent: number) {
        this.width = this.width + this.width * (percent/100);
    }

}