class MathUtils{
    static PI:Number = 3.14
    static circleArea(radius:Number):Number{
        return Number(this.PI) * Number(Math.pow(Number(radius), 2))
    }

}


console.log(MathUtils.circleArea(10)) // 3.14 * 10 ^ 2






