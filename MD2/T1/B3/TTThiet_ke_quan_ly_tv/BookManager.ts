import {Book} from "./Book";


export class BookManager {
    book: Book[] = [];

    constructor() {
    }

    add(books: Book): void {
        this.book.push(books);
    }

    getList() {
        return this.book;
    }

    findBook(Id: string) {
        let i = 0;
        this.book.forEach((book, index) => {
            if (book.ID === Id) {
                i = index
            }
        })
        return i
    }

    deleter(ID: string) {
        if (this.findBook(ID) != -1) {
            this.book.splice(this.findBook(ID), 1);
        }else {
            throw new Error
        }
    }
    update(ID: string,name:string){
        if(this.findBook(ID) !-1 ){
            this.book[this.findBook(ID)].setName(name);
        }else {
            throw new Error
        }
    }
}