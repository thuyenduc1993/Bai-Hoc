export class Shape{
    color: string = "red";
    filled: boolean = true;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
    getColor(): string{
        return this.color;
    }
     getFilled(){
        return this.filled;
    }
    setColor(color: string) {
        this.color = color;
    }
    setFilled(filled: boolean){
        this.filled = filled;
    }
    toString(): string {
        return "A Shape with color of " + this.getColor() + " and " + (this.getFilled()? "filled" : "not filled");
    }

}

let shape = new Shape("blue", false);
console.table(shape);
console.log(shape.toString());