class Rectangle {
    x;
    y;
    width;
    height;
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height =height;
    }
    DrawRec() {
        let canvas = document.getElementById('canvass');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) / 2;
    }
    Area() {
        return `Diện tích hình chữ nhật là = ${(this.width * this.height)}`;
    }
}
let rec = new Rectangle(200,300,400,300);
rec.DrawRec();
rec.width = 20;
rec.height = 10;
document.getElementById('area').innerHTML = rec.getArea();
document.getElementById('perimeter').innerHTML =rec.getPerimeter();
