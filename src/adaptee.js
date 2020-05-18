class Adaptee{
    showInfo(){
        return "德国的圆孔插头"
    }
}

class Target{
    constructor(){
        this.target = new Adaptee()
    }
    request(){
        return `${this.target.showInfo()} - 转换 - 中国的扁平三孔接头`
    }
}

let light = new Target()
let info = light.request()
console.log("---使用的是适配器模式---");
console.log(info);