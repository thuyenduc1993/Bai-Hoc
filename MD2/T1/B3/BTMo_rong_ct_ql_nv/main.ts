import {Employee, Gender} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let employee =new Employee("Bùi Văn Đức",Gender.Male, "25/06/1993","thuyenduc93@gmail.com","0358417516");
let employee1 =new Employee("Bùi Văn Đức",Gender.Other,"25/06/1993","thuyenduc93@gmail.com","0358417516");
let employee2 =new Employee("Bùi Văn Đức",Gender.Other,"25/06/1993","thuyenduc93@gmail.com","0358417516");
let employee3 =new Employee("Bùi Văn Đức",Gender.Female,"25/06/1993","thuyenduc93@gmail.com","0358417516");

let employeeManager = new EmployeeManager();
employeeManager.add(employee1);
employeeManager.add(employee2);
employeeManager.add(employee3);
employeeManager.add(employee);
//
employeeManager.delete(1);
console.table(employeeManager.disPlay())
