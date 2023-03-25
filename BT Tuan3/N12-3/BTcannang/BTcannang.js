
function kt() {
    let kg = document.getElementById("kg").value;
    let height = document.getElementById("m").value;
    let BMI = kg/height;
    // console.log(kg)
    if (BMI <18.5 ) {
        document.getElementById("result").innerHTML=BMI + "Underweight";
    } else if (BMI>=18.5 && BMI <25.5 ) {
        document.getElementById("result").innerHTML=BMI + "Normal";
    }else if (BMI>=25.5 && BMI <30.0) {
        document.getElementById("result").innerHTML=BMI +"Overweight";
    }else if (BMI>=30.0) {
        document.getElementById("result").innerHTML=BMI + "Obese";
    }
}