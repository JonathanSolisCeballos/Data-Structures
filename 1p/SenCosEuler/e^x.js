const factorial = require('../libs/factorial.js');
const pow = require('../libs/pow.js');

const eulerOfX = (x,upTo) => { //X will be the given number
    let sum = 0;
    for(let i = 0; i <= upTo; i++){
        sum += pow(x,i) / factorial(i);
    }
    return sum;
}

//console.log(eulerOfX(2,10));
//console.log(factorial(5));
//console.log(pow(2,5));

console.log(eulerOfX(1,10));
