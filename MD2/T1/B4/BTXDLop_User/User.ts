enum Int {
    admin =1,
    user
}
export class User {
    protected name: string;
    protected email: string;
    public role: number;


    constructor(name: string, email: string, role:number) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo() {
        return `${this.name},${this.email},${this.role}`;
    }
    get isAdmin(){
        if(this.role===Int.admin){
            return "Admin";
        }else if(this.role===Int.user){
            return  "Nhân viên"
        }
        return "người bình thương"
    }
    setName(name: string){
        this.name = name;
    }
    setEmail(email: string){
        this.email = email;
    }
    setRole(role: number){
        this.role = role;
    }
}