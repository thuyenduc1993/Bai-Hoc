import {Resizeable} from "./Resizeable";
export class Square implements Resizeable{
    width:number;

    constructor(width: number) {
        this.width = width;
    }
    getWith():number{
        return this.width;
    }
    setWith(value:number){
        this.width = value;
    }

    Area():number {
        return this.width * this.width;
    }
    resize(percent: number) {
        this.width = this.width + this.Area() * (percent/100);
    }
}