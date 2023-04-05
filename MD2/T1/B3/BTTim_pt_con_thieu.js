var number = [0, 1, 3, 4, 5, 7, 9, 10];
var number1 = [];
var i = 0;
while (i < 10) {
    if (number.indexOf(i) === -1) {
        number1.push(i);
    }
    i++;
}
console.log(number1);
