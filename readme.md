## js前端设计模式

## 安装环境
> 为了是npm安装更快，可以加上--registry=https://registry.npm.taobao.org
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin --registry=https://registry.npm.taobao.org

## 解析es6的loader
babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest

## Factory工厂模式
通过一个Factory工厂类的方法返回一个需要用new的new Obj()对象,create方法中不需要关系Product内部的实现
```js
class Factory{
    create(name){
        return new Product(name)
    }
}
// factory方法的使用
let F = new Factory()
let pro = F.create('pro1')
pro.init()
pro.fun1()
```

## Single单例模式
一个项目中，一些对象只能出现一次，第二次请求是会返回第一次显示的结果，如登录界面，如提示框modal，只能显示单个实例对象
```js
class Modal{
    login(){
        console.log("login")
    }
}
Modal.getInstance = (function(){
    let instance = null
    return function(){
        if(!instance){
            instance = new Modal()
        }
        return instance
    }
})()
```

## Adaptee适配器模式
把一些老式的接口，不能满足新的业务需求的接口，通过一个新定义的类将老式接口进行封装转换，满足新业务的需求
```js
class Target{
    constructor(){
        this.target = new Adaptee()
    }
    request(){
        return `${this.target.showInfo()} - 转换 - 中国的扁平三孔接头`
    }
}
```

## Decorator装饰器模式
给现有类添加一些新的方法(装饰一些新功能)
```js
class Circle{
    draw(){
        console.log("draw a circle");
    }
}

class Decorator{
    constructor(circle){
        this.circle = circle
    }
    draw(){
        this.circle.draw()
        this.setRedBorder()
    }
    setRedBorder(){
        console.log("set this circle red border");
    }
}
```
* Es7的装饰器方法，安装babel-plugin-transform-decorators-legacy插件解析
```js
@testAlert("ok")
class Demo{

}
// 可以传参的装饰器方法
function testAlert(isDec){
    return function(target){
        target.isDec = isDec
    }
}
console.log("Es7的装饰器方法，需要babel插件",Demo.isDec)
```
* 使用core-decorators一些装饰器方法
```js
import { readonly } from 'core-decorators'

class Person{
    @readonly
    name(){
        return "core-decorators"
    }
}

let p = new Person()
console.log(p.name())
p.name = function(){}
```

## proxy代理器模式
一些对象的接口外部不能够访问，通过一层代理可以进行访问
使用ES6的Proxy对象示例
```js
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
```

## 适配器模式、装饰器模式、代理模式的区别
- 适配器和代理模式的区别
> 适配器模式是由于原来对象的接口（可以被访问）不能满足业务需求，需要添加一个新接口的处理，和原对象的方法名不一样。代理模式是原对象的属性不能被访问到，用一个代理对象进行设置，将属性和接口设置的和原来的一模一样。
- 装饰器模式和代理模式
> 装饰器模式：扩展新功能，原功能保持不变且可以直接使用。代理模式：显示的是原有对象的功能，但是功能经过处理或限制部分显示。

## Observer观察者模式
定义一个观察者和一个被观察者对象，当被观察者sub更新变化，将所有的观察者observer都执行更新方法
```js
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
```