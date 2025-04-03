"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex6_1 = require("./ex6");
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.printAllBooks = function () {
        this.books.forEach(function (book) {
            console.log(book.print());
        });
    };
    return Library;
}());
var library = new Library();
var b1 = new ex6_1.Book("Harri Poter", 100, "J. K. Rowling");
var b2 = new ex6_1.Book("Game Of Thrones", 200, "George R. R. Martin");
// we can do ut with a loop as well
library.addBook(b1);
library.addBook(b2);
library.printAllBooks();
