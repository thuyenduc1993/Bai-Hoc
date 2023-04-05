class Fibonacci {
    sum:number = 0;
    fib1:number = 0;
    fib2:number = 1;
    constructor() {
    }
    sumFibonacci(n: number){
        for (let i = 0; i < n; i++) {
            let fib = this.fib1 + this.fib2;
            this.sum += fib;
            this.fib1 = this.fib2;
            this.fib2 = fib;
        }
        return this.sum;
    }
}
let fibonacci= new Fibonacci();
fibonacci.sumFibonacci(10);
// console.log(fibonacci);