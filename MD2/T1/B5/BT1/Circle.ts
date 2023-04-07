export class Circle{
    private color: string;
    private radius: number;

    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }
    getColor():string{
        return this.color;
    }
    getRadius():number{
        return  this.radius;
    }
    setColor(color:string){
        this.color = color;
    }
    setRadius(value:number){
        this.radius = value;
    }
    acreage():number{
        return this.radius * this.radius * Math.PI;
    }
    perimeter():number{
        return  this.radius * Math.PI * 2;
    }
}