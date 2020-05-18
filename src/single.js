class SingleObject{
    login(){
        console.log('login modal');
    }
}
SingleObject.getInstance = (function(){
    let instance=null
    return function(){
        if(!instance){
            instance = new SingleObject()
        }
        return instance
    }
})()
console.log("---单例模式测试---");
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(`obj1 === obj2`, obj1 === obj2);