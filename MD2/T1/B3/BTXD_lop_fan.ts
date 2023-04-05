enum Speed {
    SLOW =1,
    MEDIUM,
    FAST,
}
class Fan {
    private speed = Speed.SLOW;
    private on : boolean;
    private radius : number;
    private color : string;
    constructor() {
    }
    getSpeed() {
        return this.speed;
    }
    getStatus(){
        return this.on;
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    setStatus(status : boolean){
        this.on = status;
    }
    setRadius(radius : number ){
        this.radius = radius;
    }
    setColor(color : string){
        this.color=color;
    }
    toString () {
        if(this.on) {
            return `${this.speed},${this.color},${this.radius} Fan is on`;
        }else {
            return `${this.speed},${this.color},${this.radius} Fan is off`;
        }
    }

}
let fan1 = new Fan();
let fan2 = new Fan();
fan1.setSpeed(Speed.FAST);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setStatus(true);
fan1.toString();
console.log(fan1.toString())
// console.log(fan1)
fan2.setSpeed(Speed.MEDIUM);
fan2.setRadius(5);
fan2.setColor('blue');
fan2.setStatus(false);
// console.log(fan2)

