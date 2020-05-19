import { readonly } from 'core-decorators'
// 还有deprecate装饰方法的使用

class Person{
    @readonly
    name(){
        return "core-decorators"
    }
}

let p = new Person()
console.log(p.name())
p.name = function(){}  //会报错 Uncaught TypeError: Cannot assign to read only property 'name' of object