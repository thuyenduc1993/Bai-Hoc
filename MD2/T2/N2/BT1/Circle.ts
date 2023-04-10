import {Resizeable} from "./Resizeable";

export class Circle implements Resizeable{
    radius:number

    constructor( radius: number) {

        this.radius = radius;
    }
    getRadius():number{
        return this.radius
    }
    setRadius(value:number){
        this.radius = value;
    }
    Area():number {
        return this.radius * this.radius * Math.PI;
    }

    resize(percent: number) {
          this.radius = this.radius + this.radius *(percent/100);
    }
}