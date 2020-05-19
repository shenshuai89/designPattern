
class Subject{
    constructor(){
        this.state = 0
        this.observers = []
    }
    getState(){
        return this.state
    }
    setState(val){
        // 当被观察者sub更新变化，将所有的观察者observer都执行更新方法
        this.state = val
        this.notifyAllObservers()
    }
    attach(observer){
        this.observers.push(observer)
    }
    notifyAllObservers(){
        this.observers.forEach(item =>{
            item.update()
        })
    }
}

class Observer{
    constructor(name,subject){
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update(){
        console.log(`${this.name}被通知更新了，新的state: ${this.subject.getState()}`);
    }
}

let sub = new Subject()

let o1 = new Observer("o1", sub)
let o2 = new Observer("o2", sub)
let o3 = new Observer("o3", sub)

sub.setState(1)
sub.setState(100)