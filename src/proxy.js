// 定义明星对象
let star = {
    name:"TFboys",
    age:16,
    phone:16666666666
}

let agent = new Proxy(star, {
    get:function(target,key){
        if(key == "name"){
            return "经纪人"
        }
        if(key == "phone"){
            return 1999999999
        }
        if(key == "price"){
            return 20000
        }
        return target[key]
    },
    set:function(target,key,val){
        if(key == "setPrice"){
            if(val <15000){
                throw new Error("出价太低")
            }else{
                target[key] = val
                return true
            }
        }
    }
})

console.log("---使用ES6的Proxy对象演示代理模式---");
console.log(agent.name);
console.log(agent.price);
console.log(agent.phone);

agent.setPrice = 26000
console.log("重新设置出价",agent.setPrice);
// agent.setPrice = 6000  Uncaught Error: 出价太低