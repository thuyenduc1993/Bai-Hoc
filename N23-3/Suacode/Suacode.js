function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGuXAvtsGyFxAlzXJagKcY1PPvI0hYRwRkw&usqp=CAU"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 200;
        // console.log('ok: ' + this.left);
    }
    this.moveDown = function (){
        this.top += 50;
    }
    this.moveGrade =function (){
        this.left -=200;
    }

}

let hero = new Hero('pikachu.png', 20, 30, 200);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }else if(hero.top <window.innerHeight -hero.size){
        hero.moveDown();
    }else if(hero.left>= window.innerWidth -hero.size){
        hero.moveGrade();

    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 200)
}

start();