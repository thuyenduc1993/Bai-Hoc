"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Male"] = "nam";
    Gender["Female"] = "nu";
    Gender["Other"] = "khac";
})(Gender = exports.Gender || (exports.Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, birthday, email, iphoneName) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.iphoneName = iphoneName;
    }
    Employee.prototype.getTer = function () {
        return "".concat(this.name, ",").concat(this.gender, ",").concat(this.birthday, ",").concat(this.email, ",").concat(this.iphoneName);
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Employee.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Employee.prototype.setEmail = function (email) {
        this.email = email;
    };
    Employee.prototype.setIphoneName = function (iphoneName) {
        this.iphoneName = iphoneName;
    };
    return Employee;
}());
exports.Employee = Employee;
