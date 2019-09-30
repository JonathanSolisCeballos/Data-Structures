const factorial = n => n < 2 ? 1 : n * factorial(n - 1);

class Factorial {
    constructor(){
        this.cost = {};
    }
    getValue(n) {
       // this.cost.['fib(n)'] = 5;
        return n < 2 ? 1 : n * factorial(n - 1)
    }
}

let fact = new Factorial();
console.log(fact.getValue(5))
console.log(factorial(5))