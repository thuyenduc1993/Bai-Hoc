import {Book} from "./Book";
import {BookManager} from "./BookManager";


let book = new Book("001","BVD");
let book1 = new Book("002","BVF");
let book2 = new Book("003" ,"BVG");
let book3 = new Book("004","BVH");

let bookManager = new BookManager();
bookManager.add(book);
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
// console.table(bookManager.getList())
// bookManager.deleter("003")
bookManager.update("003","Bùi Văn Đức")
console.table(bookManager.getList())

