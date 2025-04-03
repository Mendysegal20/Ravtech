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

export class Book extends Product implements Printable{
    author:string
    constructor(name:string, price:Number, author:string){
        super(name, price)
        this.author = author
    }

    print():string{
        return `Book: ${this.name}, Price: ${this.price}$, Author: ${this.author}`
    }
}







