class Fibonacci {
    constructor(value) {
        this.value = value;
    }
    getValue() {//regresar un valor

    }
    cost() {//cuantas llamadas en la función ocupa

    }
    getSucesion(){//sucesión de fibonacci

    }
    getTable(){//Obteber la tabla del costo de cada fib(n).

    }
    fib(n) {
        if(n===0) return;

        return (n < 2) ? n : this.fib(n - 1) + this.fib(n);
    }
}


let fib = new Fibonacci()
console.log(fib.fib(5))