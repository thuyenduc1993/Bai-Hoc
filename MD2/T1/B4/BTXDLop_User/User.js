"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var Int;
(function (Int) {
    Int[Int["admin"] = 1] = "admin";
    Int[Int["user"] = 2] = "user";
})(Int || (Int = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return "".concat(this.name, ",").concat(this.email, ",").concat(this.role);
    };
    Object.defineProperty(User.prototype, "isAdmin", {
        get: function () {
            if (this.role === Int.admin) {
                return "Admin";
            }
            else if (this.role === Int.user) {
                return "Nhân viên";
            }
            return "người bình thương";
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    return User;
}());
exports.User = User;
