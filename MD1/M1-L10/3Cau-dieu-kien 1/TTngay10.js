let year = +prompt("năm nhuận");
if ( year %4===0) {
    if (year %100===0) {
        if (year %400===0){
            alert(year+"năm nhuận");
        } else {
            alert (year+"năm nhuận");
        }
    }else {
        alert(year + "năm nhuận");
    }
}else{
    alert (year +"năm nhuận");
}

