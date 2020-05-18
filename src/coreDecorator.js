import { readonly } from 'core-decorators'

class Person{
    @readonly
    name(){
        return "core-decorators"
    }
}

let p = new Person()
console.log(p.name())
p.name = function(){}  //会报错 Uncaught TypeError: Cannot assign to read only property 'name' of object