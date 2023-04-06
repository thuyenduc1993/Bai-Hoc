"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employee = [];
    }
    EmployeeManager.prototype.disPlay = function () {
        return this.employee;
    };
    EmployeeManager.prototype.add = function (employees) {
        this.employee.push(employees);
    };
    EmployeeManager.prototype.delete = function (index) {
        this.employee.splice(1, 1);
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
