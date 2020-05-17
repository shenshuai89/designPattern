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

export default Factory