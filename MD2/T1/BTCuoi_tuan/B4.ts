function perfectNumber(num: number): boolean {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
let  num1 = 6;
console.log(perfectNumber(num1));
