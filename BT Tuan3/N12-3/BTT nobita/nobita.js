
let nobita = document.getElementById("nobita");

function upnobita() {
    nobita.style.top = parseInt(nobita.style.top) - 5 +"px";
}
function downnobita() {
    nobita.style.top = parseInt(nobita.style.top) + 10 + "px";
}
function leftnobita() {
    nobita.style.left = parseInt(nobita.style.left) - 7 +"px";
}
function rightnobita () {
    nobita.style.left = parseInt(nobita.style.left) +7 + "px";
}
// evt có thể thay dổi
function nobimove (evt) {
    switch (evt.keyCode) {
        case 38:
            upnobita();
            break;
        case 40 :
            downnobita();
            break
        case 37 :
            leftnobita();
            break
        case 39 :
            rightnobita ()
            break

    }
}
// Đăt ra để sử lý
function clickme () {
    window.addEventListener("keydown",nobimove);
}

