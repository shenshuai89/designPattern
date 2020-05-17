class Car{
    constructor(idCode,type){
        this.idCode = idCode
        this.type = type
    }
}
class Zhuanche extends Car{
    constructor(idCode,type){
        super(idCode,type)
        this.price = 5
    }
}
class Kuaiche extends Car{
    constructor(idCode,type){
        super(idCode,type)
        this.price = 2
    }
}

class Trip{
    constructor(car, mile){
        this.car = car
        this.mile = mile
    }
    start(){
        console.log(`行程开始，车牌号${this.car.idCode}`);
    }
    end(){
        console.log(`行程结束，价格是${this.car.price*this.mile}`);
    }
}

let kcar = new Kuaiche("66666","大众")
let zcar = new Zhuanche("88888","宝马")
let trip = new Trip(kcar, 10)
let trip1 = new Trip(zcar, 20)
trip.start()
trip.end()
trip1.start()
trip1.end()