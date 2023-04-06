export class Employee{
    public name: string;
    private birthday: string;
    private address: string;
    public jobPosition: string;

    constructor(name: string, birthday: string, address: string, jobPosition: string) {
        this.name = name;
        this.birthday = birthday;
        this.address = address;
        this.jobPosition = jobPosition;
    }
    getTer(){
        return `${this.name},${this.birthday},${this.address},${this.jobPosition}`;
    }
    setName(name:string){
        this.name = name;
    }
    setBirthday(birthday:string){
        this.birthday = birthday;
    }
    setAddress(address: string){
        this.address = address;
    }
    setJobPosition(jobPosition:string){
        this.jobPosition =jobPosition;
    }
}