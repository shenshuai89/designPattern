// 使用装饰器定义log方法

function log(target, name, descriptor){
    let oldValue = descriptor.value
    descriptor.value = function(){
        console.log(`使用装饰器方法定义的log`, arguments);
        return oldValue.apply(this, arguments)
    }
    return descriptor
}

class Math{
    @log
    add(a,b){
        return a + b
    }
}
let m = new Math()
console.log(m.add(6,6));