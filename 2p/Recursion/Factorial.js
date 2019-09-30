const factorial = n => (n < 2 ? 1 : n * factorial(n - 1));
// console.log(factorial(5))

class Factorial {
  getValue(n) {
    return n < 2 ? 1 : n * factorial(n - 1);
  }
}

let fact = new Factorial();
console.log(fact.getValue(5));
