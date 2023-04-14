"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.book = [];
    }
    BookManager.prototype.add = function (books) {
        this.book.push(books);
    };
    BookManager.prototype.getList = function () {
        return this.book;
    };
    BookManager.prototype.findBook = function (Id) {
        var i = 0;
        this.book.forEach(function (book, index) {
            if (book.ID === Id) {
                i = index;
            }
        });
        return i;
    };
    BookManager.prototype.deleter = function (ID) {
        if (this.findBook(ID) != -1) {
            this.book.splice(this.findBook(ID), 1);
        }
        else {
            throw new Error;
        }
    };
    BookManager.prototype.update = function (ID, name) {
        if (this.findBook(ID) - 1) {
            this.book[this.findBook(ID)].setName(name);
        }
        else {
            throw new Error;
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;
