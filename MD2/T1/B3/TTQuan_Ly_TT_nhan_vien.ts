enum Gender {
    MALE ='nam',
    FEMALE ='nu',
    OTHER = 'khac',
}
class Employee{
    name: string = "";
    gender: Gender=Gender.MALE;
    birthday?:Date;
    email: string = "";
    phoneNumber:string ="";
    constructor(name: string, gender: Gender, birthday:Date, email: string, phoneNumber:string) {
        this.name = name;
        this.gender = gender;
        this.birthday= birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
let employeeList : Employee[] = [];

employeeList.push(new Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));

employeeList.push(new Employee("Tran Thi A", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));

employeeList.push(new Employee("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(employee:Employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);