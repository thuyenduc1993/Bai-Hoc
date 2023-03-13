function display() {
    document.getElementById("result").value+=value;
}
function clearall() {
    document.getElementById("result").value="";
}
function finalresult(){
    let a=document.getElementById("result").value;
    b=eval(a)
    document.getElementById("result").value=b;
}