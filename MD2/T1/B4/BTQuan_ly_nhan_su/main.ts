import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let employee = new Employee("BVD","25/06/1993","Hà Nôi","Hà Nội");
let employee1 = new Employee("DVT","25/06/1994","Hà Nôi","Hà Nội");
let employee2 = new Employee("TVM","25/06/1995","Hà Nôi","Hà Nội");

let employeeManager= new EmployeeManager();
employeeManager.setAdd(employee);
employeeManager.setAdd(employee1);
employeeManager.setAdd(employee2);

// employeeManager.delete(1);
employeeManager.editName(1, 'Tú')
console.table((employeeManager.getAll()))
