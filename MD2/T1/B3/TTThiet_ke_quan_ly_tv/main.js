"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var BookManager_1 = require("./BookManager");
var book = new Book_1.Book("001", "BVD");
var book1 = new Book_1.Book("002", "BVF");
var book2 = new Book_1.Book("003", "BVG");
var book3 = new Book_1.Book("004", "BVH");
var bookManager = new BookManager_1.BookManager();
bookManager.add(book);
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
// console.table(bookManager.getList())
// bookManager.deleter("003")
bookManager.update("003", "Bùi Văn Đức");
console.table(bookManager.getList());
