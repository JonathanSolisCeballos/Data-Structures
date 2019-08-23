module.exports = function factorial(x) {
    if(x < 0 ) throw Error('El número ingresado debe ser 0 o positivo. Fue encontrado un número negativo');
    else if(x === 0 || x === 1) return 1;
    else{
        let sum = 1;
        for(let i = 2; i <= x ; i++){
            sum *= i;
        }
        return sum;
    }
}

