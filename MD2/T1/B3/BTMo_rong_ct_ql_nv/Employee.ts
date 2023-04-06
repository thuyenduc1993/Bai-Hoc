export enum Gender {
    Male="nam",
    Female= "nu",
    Other="khac"
}
export class Employee{
    name: string;
    gender: Gender;
    birthday: string;
    email: string;
    iphoneName:string;


    constructor(name: string, gender: Gender, birthday: string, email: string, iphoneName: string) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.iphoneName = iphoneName;
    }
    getTer(){
        return `${this.name},${this.gender},${this.birthday},${this.email},${this.iphoneName}`
    }
    setName(name:string){
        this.name = name;
    }
    setGender(gender: Gender){
        this.gender = gender;
    }
    setBirthday(birthday: string){
        this.birthday = birthday;
    }
    setEmail(email: string){
        this.email = email;
    }
    setIphoneName(iphoneName: string){
        this.iphoneName = iphoneName;
    }
}
