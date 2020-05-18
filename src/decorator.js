class Circle{
    draw(){
        console.log("draw a circle");
    }
}

class Decorator{
    constructor(circle){
        this.circle = circle
    }
    draw(){
        this.circle.draw()
        this.setRedBorder()
    }
    setRedBorder(){
        console.log("set this circle red border");
    }
}

console.log("---装饰器模式---");
let c = new Circle()
c.draw()
console.log("---Decorator的方法---")
let dec = new Decorator(c)
dec.draw()