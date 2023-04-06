"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, birthday, address, jobPosition) {
        this.name = name;
        this.birthday = birthday;
        this.address = address;
        this.jobPosition = jobPosition;
    }
    Employee.prototype.getTer = function () {
        return "".concat(this.name, ",").concat(this.birthday, ",").concat(this.address, ",").concat(this.jobPosition);
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    Employee.prototype.setJobPosition = function (jobPosition) {
        this.jobPosition = jobPosition;
    };
    return Employee;
}());
exports.Employee = Employee;
