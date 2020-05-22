const EventEmitter = require("events").EventEmitter
class Dog extends EventEmitter{
    constructor(name){
        super()
        this.name = name
    }
    
}
let coco = new Dog("coco")

coco.on("bark", function(){
    console.log(this.name, " 旺 旺 旺");
})

coco.on("bark", function(){
    console.log(this.name, " 旺 旺 旺 ....");
})

setInterval(() => {
    coco.emit("bark")
}, 2000);