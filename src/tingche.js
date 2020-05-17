class Park{
    constructor(floors){
        this.floors = floors || []
        this.carList = {}
        this.camera = new Camera()
        this.screen = new Screen()
    }
    in(car){
        const info = this.camera.shot(car)
        const i = parseInt(Math.random()*100%100)
        const place = this.floors[0].places[i]
        place.in()
        info.place = place
        this.carList[car.IdCode] = info
    }
    out(car){
        const info = this.carList[car.IdCode]
        const place = info.place
        place.out()
        this.screen.showCar(car, info.inTime)
        delete this.carList[car.IdCode]
    }
    emptyNum(){
        return this.floors.map(floor =>{
            return `${floor.index} 层还有 ${floor.emptyPlacesNum()}个空位`
        }).join("\n")
    }
}
class Car{
    constructor(IdCode){
        this.IdCode = IdCode
    }
}
class Floor{
    constructor(index, places){
        this.index = index
        this.places = places || []
    }
    emptyPlacesNum(){
        let num = 0
        this.places.forEach(p =>{
            if(p.empty){
                num = num+1
            }
        })
        return num
    }
}

class Places{
    constructor(){
        this.empty = true
    }
    in(){
        this.empty = false
    }
    out(){
        this.empty = true
    }
}
class Camera{
    shot(car){
        return {
            IdCode : car.IdCode,
            inTime : Date.now()
        }
    }
}
class Screen{
    showCar(car,time){
        console.log(`车牌号： ${car.IdCode},停留时间${ Date.now() - time}`);
    }
}

const floors = []
for(let i =0;i<3;i++){
    const places = []
    for(let j = 0; j<100;j++){
        places[j] = new Places()
    }
    floors[i] = new Floor(i+1, places)
}
const park = new Park(floors)

const car1 = new Car(1111)
const car2 = new Car(2222)
const car3 = new Car(3333)

console.log(`停车场的车位信息`);
console.log(park.emptyNum());
console.log(`第一辆车进入`);
park.in(car1)
console.log(park.emptyNum());
console.log(`第二辆车进入`);
park.in(car2)
console.log(park.emptyNum());
console.log(`第一辆车离开`);
setTimeout( ()=>  {
    park.out(car1);
    console.log(park.emptyNum());
    console.log(`第三辆车进入`);
    park.in(car3)
    console.log(park.emptyNum());
    console.log(`第二辆车离开`);
    setTimeout(()=>{
        park.out(car2)
        console.log(park.emptyNum());
    },300)
    
},200)


