function result() {
    let a = document.getElementById('numbera').value;
    let b = document.getElementById('numberb').value;
    let d=b-a;
    if (d>16) {
        document.getElementById('kt').innerHTML = d +'đủ điều kiện vào lớp 10';
    }else  {
        document.getElementById('kt').innerHTML = 'không đủ tuổi';
    }
}