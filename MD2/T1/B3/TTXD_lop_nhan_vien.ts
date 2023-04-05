class Staff {
    public name: string;
    private email: string;
    public age: number;
    constructor(name: string, email: string, age: number ) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    setName(name) :void {
        this.name = name;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email) :void {
        this.email = email;
    }
    getAge(){
        return this.age;
    }
    setAge(age) :void {
        this.age = age;
    }
}
let staff = new Staff('BVDuc', 'thuyenduc@gmail.com',30);
let nameStaff = staff.getName();
console.log(nameStaff);
staff.setName('BVThuyen');
let currentNameStaff = staff.getName();
console.log(currentNameStaff);