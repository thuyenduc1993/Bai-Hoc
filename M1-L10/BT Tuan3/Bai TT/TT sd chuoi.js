let imgObj = null;
imgObj = document.getElementById('image');
function init() {
    imgObj = document.getElementById('image');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    tyle.limgObj.seft = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = init;