class Product{
    constructor(name){
        this.name = name
    }
    init(){
        console.log(`这是工厂模式的init方法，创建的产品名${this.name}`);
    }
    fun1(){
        console.log(`function111`);
    }
    fun2(){
        console.log(`function222`);
    }
}

class Factory{
    create(name){
        return new Product(name)
    }
}

/* ----工厂模式---- */
console.log("---工厂模式测试---");
let F = new Factory()
let pro = F.create('pro1')
pro.init()
pro.fun1()