import {Colorable} from "./Colorable";
export class Square implements Colorable {
    width:number

    constructor(width: number) {
        this.width = width;
    }
    setWidth(value:number){
        this.width = value;
    }
    getWidth():number{
        return this.width;
    }
    Area():number {
        return this.width * this.width
    }
    perimeter() {
        return (this.width + this.width) * 2;
    }

    howToColor() {
        return "Color all four sides..";
    }
}