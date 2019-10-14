//const factorial = n => (n < 2 ? 1 : n * factorial(n - 1));
// console.log(factorial(5))

(function() {
  class Factorial {
    constructor(n) {
      this.n = n;
    }

    getValue(n = this.n) {
      let cost = 0;
      function factN(n) {
        cost++;
        return n < 2 ? 1 : n * factN(n - 1);
      }
      return [factN(n), cost]; //this is to improve performance when needed both factN and it's cost, so dont need to call getCost() again.
    }
    getCost(n = this.n) {
      //How many times the function has to be called (Recursion) to resolve the n position.
      let cost = 0;
      function factN(n) {
        cost++;
        return n < 2 ? 1 : n * factN(n - 1);
      }
      factN(n);
      return cost;
    }

    getSucesion(n = this.n) {
      //sucesión de fibonacci
      let arr = [];
      for (let i = 0; i < n; i++) {
        arr.push(this.getValue(i)[0]);
      }
      return arr;
    }
    getTable() {
      //Obteber la tabla del costo de cada fib(n).
      console.time("⌚");
      let table = {
        "Fact(n)": [],
        cost: []
      };
      let [fibN, cost] = [0, 0];

      for (let i = 0; i < this.n; i++) {
        [fibN, cost] = this.getValue(i);
        table["Fact(n)"].push(fibN);
        table.cost.push(cost);
      }
      console.timeEnd("⌚");
      return table;
    }
  }

  let fact = new Factorial(6);
  console.log(fact.getValue()[0]);
  console.table(fact.getTable());
  console.log(fact.getSucesion());
})();
