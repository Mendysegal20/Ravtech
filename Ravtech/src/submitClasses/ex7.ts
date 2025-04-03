import { Book } from "./ex6"

class Library{
    books:Book[]
    constructor(){
        this.books = []
    }

    addBook(book:Book):void{
        this.books.push(book)
    }

    printAllBooks():void{
        this.books.forEach(book =>{
            console.log(book.print())
        })
    }
}

const library = new Library()

const b1 = new Book("Harri Poter", 100, "J. K. Rowling")
const b2 = new Book("Game Of Thrones", 200, "George R. R. Martin")

// we can do ut with a loop as well
library.addBook(b1)
library.addBook(b2)
library.printAllBooks()
