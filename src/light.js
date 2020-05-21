// 红绿灯的状态模式
class State{
    constructor(color){
        this.color = color
    }
    handle(context){
        console.log(`turn to ${this.color} light`);
        context.setState(this)
    }
}

class Context{
    constructor(){
        this.state = null
    }
    getState(){
        return this.state
    }
    setState(state){
        this.state = state
    }
}
let light = new Context()

let green = new State("green")
let red = new State("red")
let blue = new State("blue")
green.handle(light)
console.log(light.getState());

red.handle(light)
blue.handle(light)
// console.log(light.getState());