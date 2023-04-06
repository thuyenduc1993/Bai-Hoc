"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var EmployeeManager_1 = require("./EmployeeManager");
var employee = new Employee_1.Employee("Bùi Văn Đức", Employee_1.Gender.Male, "25/06/1993", "thuyenduc93@gmail.com", "0358417516");
var employee1 = new Employee_1.Employee("Bùi Văn Đức", Employee_1.Gender.Other, "25/06/1993", "thuyenduc93@gmail.com", "0358417516");
var employee2 = new Employee_1.Employee("Bùi Văn Đức", Employee_1.Gender.Other, "25/06/1993", "thuyenduc93@gmail.com", "0358417516");
var employee3 = new Employee_1.Employee("Bùi Văn Đức", Employee_1.Gender.Female, "25/06/1993", "thuyenduc93@gmail.com", "0358417516");
var employeeManager = new EmployeeManager_1.EmployeeManager();
employeeManager.add(employee1);
employeeManager.add(employee2);
employeeManager.add(employee3);
employeeManager.add(employee);
//
employeeManager.delete(1);
console.table(employeeManager.disPlay());
