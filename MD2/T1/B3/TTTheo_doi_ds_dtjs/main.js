"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TTTheo_doi_ds_dtjs_1 = require("./TTTheo_doi_ds_dtjs");
var book1 = new TTTheo_doi_ds_dtjs_1.Book('The Design of EveryDay Things', 'Don Norman', false);
var book2 = new TTTheo_doi_ds_dtjs_1.Book('The Most Human Human', 'Brian Christian', true);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
        console.log('You already read "' + bookInfo);
    }
    else {
        console.log('You still need to read "' + bookInfo);
    }
}
