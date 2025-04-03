// ex1
class Dog{
    name:string
    age:Number
    constructor(name:string, age:Number){
        this.name = name
        this.age = age
    }
    bark():string {
        return "Woof Woof!"
    }
}

// ----------------------------------------------------------------------


// ex2
class BankAccount{
    public accountNumber: string
    private balance:Number
    constructor(accountNumber:string, balance:Number){
        this.accountNumber = accountNumber
        this.balance = balance
    }
    getBalance():Number{
        return this.balance
    }
}

const b = new BankAccount("123", 100)
//b.balance // Error!

// ----------------------------------------------------------------------


// ex3
class Viechle{
    public brand:string
    protected speed:Number
    constructor(brand:string, speed:Number){
        this.brand = brand
        this.speed = speed
    }
    move():string{
        return "The vehicle is moving"
    }

}

class Car extends Viechle{
    public doors:Number
    constructor(brand:string, speed:Number, doors:Number){
        super(brand, speed)
        this.doors = doors
    }
    honk():string{
        return "Beep Beep!"
    }
}


// ----------------------------------------------------------------------


// ex4
interface Shape{
    getArea():Number
}

class Rectangle implements Shape{
    height:Number
    width:Number
    constructor(height:Number, width:Number){
        this.height = height
        this.width = width
    }
    getArea():Number{
        return Number(this.height) * Number(this.width)
    }
}

// ----------------------------------------------------------------------


// ex5
class MathUtils{
    static PI:Number = 3.14
    static circleArea(radius:Number):Number{
        return Number(this.PI) * Number(Math.pow(Number(radius), 2))
    }

}

//console.log(MathUtils.circleArea(10)) // 3.14 * 10 ^ 2

// ----------------------------------------------------------------------


// ex6
interface Printable{
    print():string
}

class Product{
    name:string
    price:Number
    constructor(name:string, price:Number){
        this.name = name
        this.price = price
    }
}

class Book extends Product implements Printable{
    author:string
    constructor(name:string, price:Number, author:string){
        super(name, price)
        this.author = author
    }

    print():string{
        return `Book: ${this.name}, Price: ${this.price}$, Author: ${this.author}`
    }
}


// ----------------------------------------------------------------------

// ex7
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
