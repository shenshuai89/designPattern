function each(data) {
    // data是一个可以迭代的对象
    for (let item of data) {
        console.log(item,data[item]);
    }
}

let arr = [1,2,3]
let nodeList = document.getElementsByName('p')
let m = new Map()
m.set("a", 100)
m.set("b", 200)

each(arr)
each(nodeList)
each(m)