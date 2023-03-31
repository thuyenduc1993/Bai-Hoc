class Game {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('canvas');
        this.ctx = this. canvas.getContext('2d');
        this.Right = false;
        this.Left = false;

    }
    Draw() {
        this.ctx.beginPath()
        this.ctx.rect(this.x,this.y,this.width,this.height);
        this. ctx.fillStyle ='red';
        this.ctx.fill();
        this. ctx.closePath();
    }
    Move(x) {
        this.ctx.clearRect(this.x,this.y,this.width,this.height);
        if (this.Left) {
            this.x -= 5;
            if (this.x < 0) {
                this.x = 0;
            }
        } else if (this.Right) {
            this.x += 5;
            if (this.x + this.width > this.canvas.width) {
                this.x = this.canvas.width - this.width;
            }
        }        this.Draw();
    }
}

