class Fibonacci {
  getValue(n) {
    //regresar un valor
    return n <= 2 ? 1 : this.getValue(n - 1) + this.getValue(n - 2);
  }

  getCost(n) {
    //cuantas llamadas en la función ocupa
    let cost = 0;
    function val(num) {
      cost++;
      return num <= 2 ? 1 : val(num - 1) + val(num - 2);
    }
    val(n);
    return cost;
  }

  getSucesion(n) {
    //sucesión de fibonacci
    let arr = [];
    for (let i = 0; i < n; n++) {
      arr.push(this.getValue(i));
    }
    return arr;
  }
  getTable(n) {
    //Obteber la tabla del costo de cada fib(n).
    let table = {
      "fib(n)": [],
      cost: []
    };
    for (let i = 0; i < n; i++) {
      console.log("hola");
      table["fib(n)"].push(this.getValue(i));
      table.cost.push(this.getCost(i));
    }
    return table;
  }
}

let fib = new Fibonacci();
console.log(fib.getValue(3));
console.table(fib.getTable(5));
