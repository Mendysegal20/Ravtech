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






