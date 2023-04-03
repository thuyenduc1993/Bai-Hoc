let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
// khởi tạo quả bóng
let ball = {
    x: 200,
    y: 200,
    dx: 8,
    dy: 2,
    radius :10
}
//Tạo thanh đỡ
let bars = {
    width: 150,
    height: 40,
    x: 440,
    y: canvas.height - 10,
    speed: 15,
    isMovingLeft: false,
    isMovingRight: false,
};
// khổi tạo kích thước khối
let BrickConfig = {
    offsetX: 25,
    offsetY: 25,
    margin: 25,
    width: 70,
    height: 15,
    totalRow:3,
    totalCol:10
};
let isGameOver = false;
let isGameWin = false;
let UserScore = 0;
let MaxScore = BrickConfig.totalCol * BrickConfig.totalRow;





// Di chuyển thanh ngang
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        bars.isMovingLeft = true;
    } else if (event.keyCode === 39) {
        bars.isMovingRight = true;
    }
})
document.addEventListener('keyup', function (event) {
    if (event.keyCode === 37) {
        bars.isMovingLeft = false;
    } else if (event.keyCode === 39) {
        bars.isMovingRight = false;
    }
})
// vẽ quả bóng
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}
// vẽ hình vuông
function drawBars() {
    ctx.beginPath();
    ctx.rect(bars.x, bars.y, bars.width, bars.height);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}
// 2 * OFFSET + 5 * WIDTH + 4 * MARIN =800
// OFFSET = MARIN = 25;
// => WIDTH
function drawBricks() {
    BrickList.forEach(function (b) {
        if(!b.isBroken){
            ctx.beginPath();
            ctx.rect(b.x,b.y,BrickConfig.width,BrickConfig.height)
            ctx.fill();
            ctx.closePath();
        }
    })
}

//
let BrickList = [];
for ( let i = 0; i < BrickConfig.totalRow; i++) {
    for (let j = 0; j < BrickConfig.totalCol; j++) {
        BrickList.push({
            x: BrickConfig.offsetX+ j * (BrickConfig.width +BrickConfig.margin),
            y:BrickConfig.offsetY + i * (BrickConfig.height +BrickConfig.margin),
            isBroken:false
        })

    }

}

// bóng trúng thanh
function theBallHitsTheBar() {
    if (ball.x + ball.radius >= bars.x && ball.x + ball.radius <= bars.x + bars.width &&
        ball.y + ball.radius >= canvas.height - bars.height) {
        ball.dy = -ball.dy;
    }

}
//bóng trúng gạch
function handleBallCollideBricks() {
    BrickList.forEach(function (b) {
        if (!b.isBroken) {
            if (ball.x >= b.x && ball.x <= b.x + BrickConfig.width &&
                ball.y + ball.radius >= b.y && ball.y - ball.radius <= b.y + BrickConfig.height) {
                ball.dy = -ball.dy;
                b.isBroken = true;
                UserScore += 1;
                if (UserScore >= MaxScore) {
                    isGameOver = true;
                    isGameWin = true;
                }
            }
            document.getElementById('score').innerHTML=UserScore
        }
    })
}
// giới hạn bong
    function updatePaddlePosition() {
    if (bars.isMovingLeft) {
        bars.x -= bars.speed;
    } else if (bars.isMovingRight) {
        bars.x += bars.speed;
    }
    if (bars.x < 0) {
        bars.x = 0;
    } else if (bars.x > canvas.width - bars.width) {
        bars.x = canvas.width - bars.width;
    }
}
function handleBallCollideBounds() {
    if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y < ball.radius) {
        ball.dy = -ball.dy
    }
}
function updateBallPosition() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}
// kiểm tra game
function checkGameOver() {
    if (ball.y > canvas.height - ball.radius) {
        isGameOver = true;
    }
}
// tình Huống game
function handleGameOver() {
    if (isGameWin){
        alert('Game Win');
    } else {
        alert('Game Over')
    }
}

    function draw() {
        if (!isGameOver) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();
            drawBars();
            drawBricks();


            handleBallCollideBounds();
            theBallHitsTheBar();
            handleBallCollideBricks();

            updatePaddlePosition();
            updateBallPosition();

            checkGameOver();
            requestAnimationFrame(draw);
        } else {
            handleGameOver();
        }
    }

    draw();
