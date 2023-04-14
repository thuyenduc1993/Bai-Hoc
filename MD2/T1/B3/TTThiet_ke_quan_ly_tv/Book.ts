export class Book {
    ID: string;
    Name: string;

    constructor(ID: string, Name: string) {
        this.ID = ID;
        this.Name = Name;
    }
    getName(): string{
        return this.Name;
    }
    getID(): string{
        return this.ID;
    }
    setName(name:string):void{
        this.Name = name;
    }
}