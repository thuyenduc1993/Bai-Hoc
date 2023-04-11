export class Cylinder {
    private static getBaseArea(radius:number){
        return Math.PI * radius * radius;
    }
    public static getPerimeter(radius:number){
        return  2 * Math.PI * radius;
    }
    public static getVolume(radius: number, height: number): number {
        let baseArea: number = this.getBaseArea(radius);
        let perimeter: number = this.getPerimeter(radius);
        let volume: number = perimeter * height + 2 * baseArea;
        return volume;
    }
}