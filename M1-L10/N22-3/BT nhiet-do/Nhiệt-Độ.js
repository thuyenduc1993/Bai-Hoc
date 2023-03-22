class  Temperature {
    constructor(celsius) {
        if (celsius < -273) {
            throw new Error("Temperature below -273C is not possible");
        }
        this.celsius = celsius;
    }
    getFhrenheit() {
        return this.celsius * 1.8 +32;
    }
    getKelvin() {
        return this.celsius + 273.15;
    }
}
let temp = new Temperature(25);
document.write(`Nhiệt độ F : ${temp.getFhrenheit()}`);
document.write('<br>');
document.write(`Nhiệt độ K : ${temp.getKelvin()}`);
