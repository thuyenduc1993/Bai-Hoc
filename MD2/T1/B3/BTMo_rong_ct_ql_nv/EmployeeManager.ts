import {Employee} from "./Employee";
export class EmployeeManager {
    employee:Employee[]=[];
    constructor() {
    }
    disPlay(){
        return this.employee;
    }
    add(employees){
        this.employee.push(employees);
    }
    delete(index:number){
        this.employee.splice(1,1);
    }
}