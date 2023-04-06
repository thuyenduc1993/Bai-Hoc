import {Employee} from "./Employee";
export class EmployeeManager {
    static employees : Employee[] =[];
    constructor() {
    }
    getAll(){
        return EmployeeManager.employees;
    }
    setAdd(employee){
        EmployeeManager.employees.push(employee);
    }
    delete(index){
        EmployeeManager.employees.splice(1,1)
    }
    editName(index:number,new_name){
        EmployeeManager.employees[index].name= new_name
    }
}