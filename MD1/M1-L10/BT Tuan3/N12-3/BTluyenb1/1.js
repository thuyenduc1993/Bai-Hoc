function result() {
    let a =document.getElementById('numbera').value;
    let b =document.getElementById('numberb').value;
    c=a/b;
    if (a%b===0) {
        document.getElementById('kt').innerHTML = c;
    } else {
        document.getElementById('kt').innerHTML = 'không chia hết';
    }
}