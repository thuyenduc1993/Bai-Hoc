class Battery {
    energy;
    constructor(energy) {
        this.energy = energy;
    }
    setEnergy(energy) {
        this.energy =energy;
    }
    getEnergy() {
        return this.energy;
    }
    DecreaseEnergy() {
        if (this.energy > 0){
            this.energy--;
        }
    }
}
class FlashLamp {
    status;
    battery;
    constructor(status,battery) {
        this.status = status;
        this.battery =battery;
    }
    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    Light(){
        if (this.status) {
            return  "Lighting";
        }
        return "Not lighting"
    }
    TurnOn() {
            return this.status = true;
    }
    Turnof() {
           return this.status = false;
    }
}
let battery = new Battery(true);
battery.setEnergy(50);
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);
document.write(flashLamp.getBatteryInfo());
flashLamp.Light();
document.write( " Đang bật : <br/>")
flashLamp.TurnOn();
flashLamp.Light();
document.write("Tình trang pin" +' : '+ flashLamp.getBatteryInfo() + "<br/>");

document.write("Đang tắt<br/>")
flashLamp.Turnof();
flashLamp.Light();
