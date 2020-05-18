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