var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan() {
        this.speed = Speed.SLOW;
    }
    Fan.prototype.getSpeed = function () {
        return this.speed;
    };
    Fan.prototype.getStatus = function () {
        return this.on;
    };
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    Fan.prototype.getColor = function () {
        return this.color;
    };
    Fan.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Fan.prototype.setStatus = function (status) {
        this.on = status;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.toString = function () {
        if (this.on) {
            return "".concat(this.speed, ",").concat(this.color, ",").concat(this.radius, " Fan is on");
        }
        else {
            return "".concat(this.speed, ",").concat(this.color, ",").concat(this.radius, " Fan is off");
        }
    };
    return Fan;
}());
var fan1 = new Fan();
var fan2 = new Fan();
fan1.setSpeed(Speed.FAST);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setStatus(true);
fan1.toString();
console.log(fan1.toString());
// console.log(fan1)
fan2.setSpeed(Speed.MEDIUM);
fan2.setRadius(5);
fan2.setColor('blue');
fan2.setStatus(false);
// console.log(fan2)
