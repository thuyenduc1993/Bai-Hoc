function result() {
    let a = +document.getElementById('numbera').value;
    if (a >100000000) {
        let b = (a/100)*1
        document.getElementById('kt').innerHTML = 'thưởng'+ b + 'Triệu ';
    }else if (a>100000000 && a<150000000) {
        let c = (a/100)*1.5
        document.getElementById('kt').innerHTML = 'thưởng' + c + 'Triệu';
    }else if (a>150000000 && a<200000000) {
        let d = (a/100)*2
        document.getElementById('kt').innerHTML = 'thưởng' + d + 'Triệu';
    }else {
        document.getElementById('kt').innerHTML = 'không được thưởng';
    }
}