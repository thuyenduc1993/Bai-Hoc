let  year = +prompt('năm');
let nhuan= false;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            nhuan = true;
        }
    } else {
        nhuan = true;
    }
}
if (nhuan) {
    alert(year + " là năm nhuận");
}else {
    alert(year +"không năm nhuận" );
    console.log(333)
}
