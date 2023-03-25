function result() {
    let a = +document.getElementById('numbera').value;
    if (a >8.0) {
        document.getElementById('kt').innerHTML =  'học lực giỏi';
    }else if (a>6.5 && a<8.0) {
        document.getElementById('kt').innerHTML =   'học lực khá';
    }else if (a>5 && a<5) {
        document.getElementById('kt').innerHTML = 'học lực trung binh';
    }else {
        document.getElementById('kt').innerHTML = 'học lực yếu';
    }
}