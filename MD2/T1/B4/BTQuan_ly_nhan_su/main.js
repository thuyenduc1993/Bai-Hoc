"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var EmployeeManager_1 = require("./EmployeeManager");
var employee = new Employee_1.Employee("BVD", "25/06/1993", "Hà Nôi", "Hà Nội");
var employee1 = new Employee_1.Employee("DVT", "25/06/1994", "Hà Nôi", "Hà Nội");
var employee2 = new Employee_1.Employee("TVM", "25/06/1995", "Hà Nôi", "Hà Nội");
var employeeManager = new EmployeeManager_1.EmployeeManager();
employeeManager.setAdd(employee);
employeeManager.setAdd(employee1);
employeeManager.setAdd(employee2);
// console.table(employeeManager.getAll());
// employeeManager.delete(1);
// console.table((employeeManager.getAll()))
console.table((employeeManager.getAll()));
employeeManager.editNAME(1, 'tu');
console.table((employeeManager.getAll()));
