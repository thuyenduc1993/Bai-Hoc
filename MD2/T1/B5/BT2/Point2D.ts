export class Point2D{
    private x:number;
    private y:number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX():number{
        return this.x;
    }
    getY():number{
        return this.y
    }
    setX(value:number){
        this.x = value;
    }
    setY(value:number){
        this.y = value;
    }
    getXY(){
        return this.x * this.y
    }
    setXY(x:number,y:number){
        this.x = x;
        this.y = y
    }
}