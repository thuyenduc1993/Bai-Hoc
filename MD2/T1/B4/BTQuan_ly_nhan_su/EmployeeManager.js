"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
var EmployeeManager = exports.EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.getAll = function () {
        return EmployeeManager.employees;
    };
    EmployeeManager.prototype.setAdd = function (employee) {
        EmployeeManager.employees.push(employee);
    };
    EmployeeManager.prototype.delete = function (index) {
        EmployeeManager.employees.splice(index, 1);
    };
    EmployeeManager.prototype.editName = function (index, new_name) {
        EmployeeManager.employees[index].setName(new_name);
    };
    EmployeeManager.employees = [];
    return EmployeeManager;
}());
