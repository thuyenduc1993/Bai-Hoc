import {Colorable} from "./Colorable";

export class Rectangle implements Colorable {
    width:number;
    height:number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getWith():number{
        return this.width;
    }
    getHeight():number{
        return this.height;
    }
    setWidth(value:number){
        this.width = value;
    }
    setHeight(value:number){
        this.height = value;
    }
    Area():number {
        return this.width * this.height;
    }
    perimeter() {
        return (this.width + this.height)*2;
    }
    howToColor() {
        return "Color all four sides..";
    }
}