function perfectNumber(num) {
    var sum = 0;
    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
var num1 = 6;
console.log(perfectNumber(num1));
