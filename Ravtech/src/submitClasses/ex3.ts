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