
function init() {
    imgplay = document.getElementById("image");
    imgplay.style.position = ('relative');
    imgplay.style.left = " 0px";
}
function moveRight() {
    imgplay.style.left = parseInt(imgplay.style.left) + 10 + 'px';
}
window.onload = init;
