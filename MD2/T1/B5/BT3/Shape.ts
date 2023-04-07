export class Shape{
     name: string;
     color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
     getName():string{
        return this.name;
     }
     setName(value:string){
        this.name = value;
     }
     getColor():string{
        return this.color;
     }
     setColor(value:string){
        this.color = value;
     }
}