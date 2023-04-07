import {Point2D} from "./Point2D";

export class Point3D extends Point2D{
    private z:number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    getZ():number{
        return this.z;
    }
    setZ(value:number){
        this.z = value;
    }
    getXYZ():number{
        return this.getXY() * this.z
    }
    setXYZ(x:number,y:number,z:number){
        this.getXY()
        this.z = z
    }
}