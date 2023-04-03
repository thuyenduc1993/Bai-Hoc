let new_game = new Game(450,540, 100,50);
new_game.Draw();
document.addEventListener('keydown',function (event) {
    const code = event.keyCode;
    switch (code) {
        case 37: // left arrow
            new_game.Right = true;
            break;
        case 39: // right arrow
            new_game.Left = true;
            break;
    }
});
document.addEventListener('keyup',function (event) {
    const code = event.keyCode;
    switch (code) {
        case 37: // left arrow
            new_game.Right = false;
            break;
        case 39: // right arrow
            new_game.Left = false;
            break;
    }
});