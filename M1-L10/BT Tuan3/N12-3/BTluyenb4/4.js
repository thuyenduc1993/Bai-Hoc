function result() {
    let a = +document.getElementById('numbera').value;
    let b = +document.getElementById('numberb').value;
    let c = +document.getElementById('numberc').value;
    if (a>b&&a>c) {
        document.getElementById('kt').innerHTML = a +'là số lớn nhất';
    }else if (b>c) {
        document.getElementById('kt').innerHTML = b + 'là số lớn nhất';
    }else {
        document.getElementById('kt').innerHTML = c + 'là số lớn nhất';
    }
}