var Gender;
(function (Gender) {
    Gender["MALE"] = "nam";
    Gender["FEMALE"] = "nu";
    Gender["OTHER"] = "khac";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, birthday, email, phoneNumber) {
        this.name = "";
        this.gender = Gender.MALE;
        this.email = "";
        this.phoneNumber = "";
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employeeList.push(new Employee("Tran Thi A", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
employeeList.push(new Employee("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
