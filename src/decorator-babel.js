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