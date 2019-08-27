//O(n)
//Sucesión de Fibonacci

const fibonacci = (n) => {
    if(typeof n != 'number')
        throw Error('El valor dado (n) debe ser un número');
    if(n === 0) return 0;
    else{
        let a = 0,b=1,aux=0;
        for(let i = 1; i <= n ; i++){
            aux = b;
            b = a + b;
            a = aux;
        }
        return aux;
    }
}

console.log(fibonacci(29));