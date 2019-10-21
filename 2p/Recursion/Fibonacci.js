(function () {
  class Fibonacci {
    constructor(n) {
      this.n = n;
    }

    getValue(n = this.n) {
      //Get the n number of Fibonacci
      let cost = 0;

      function fibN(n) {
        cost++;
        return n < 2 ? n : fibN(n - 1) + fibN(n - 2);
      }

      return [fibN(n), cost]; //this is to improve performance when needed both fibN and it's cost, so dont need to call getCost() again.
    }

    getCost(n = this.n) {
      //How many times the function has to be called (Recursion) to resolve the n position.
      let cost = 0;

      function val(num) {
        cost++;
        return num < 2 ? num : val(num - 1) + val(num - 2);
      }
      val(n);
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
        "fib(n)": [],
        cost: []
      };
      let [fibN, cost] = [0, 0];

      for (let i = 0; i < this.n; i++) {
        [fibN, cost] = this.getValue(i);
        table["fib(n)"].push(fibN);
        table.cost.push(cost);
      }
      console.timeEnd("⌚");
      return table;
    }
  }

  let fib = new Fibonacci(7);
  /*  console.log(fib.getValue()[0]); */
  console.log(fib.getSucesion());
  console.table(fib.getTable());
})();