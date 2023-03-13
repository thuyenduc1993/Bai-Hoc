function chech(){
    let day = +document.getElementById("month").value;
    switch (day) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("resul").innerHTML= `tháng ${day} có 31 ngày`;
            break;
        case 2:
            document.getElementById("resul").innerHTML=`tháng ${day} có 28 ngày hoặc 29 ngày `;
            break;
        case 4:
        case 6:
        case 9:g
        case 11:
            document.getElementById("result").innerHTML=`tháng${day}có 30 ngày`;
            break;
        default:
            document.getElementById("result").innerHTML=`Không phải là một tháng trong năm`;
    }

}