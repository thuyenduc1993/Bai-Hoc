import{Colorable} from "./Colorable";

export class Circle implements Colorable{
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
     getRadius():number{
        return this.radius;
     }
     setRadius(radius:number){
        this.radius = radius;
     }
    Area():number{
        return this.radius * this.radius * Math.PI;
    }
    perimeter():number{
        return this.radius * Math.PI * 2;
    }

    howToColor() {
        return "Color all four sides.";
    }
}