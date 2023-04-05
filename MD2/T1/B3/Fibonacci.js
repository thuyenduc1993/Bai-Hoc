var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
        this.sum = 0;
        this.fib1 = 0;
        this.fib2 = 1;
    }
    Fibonacci.prototype.sumFibonacci = function (n) {
        for (var i = 0; i < n; i++) {
            var fib = this.fib1 + this.fib2;
            this.sum += fib;
            this.fib1 = this.fib2;
            this.fib2 = fib;
        }
        return this.sum;
    };
    return Fibonacci;
}());
var fibonacci = new Fibonacci();
fibonacci.sumFibonacci(10);
// console.log(fibonacci);
