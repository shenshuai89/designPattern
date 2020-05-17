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