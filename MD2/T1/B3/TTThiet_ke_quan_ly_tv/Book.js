"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(ID, Name) {
        this.ID = ID;
        this.Name = Name;
    }
    Book.prototype.getName = function () {
        return this.Name;
    };
    Book.prototype.getID = function () {
        return this.ID;
    };
    Book.prototype.setName = function (name) {
        this.Name = name;
    };
    return Book;
}());
exports.Book = Book;
