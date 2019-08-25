const factorial = require('../libs/factorial.js');
const pow = require('../libs/pow.js');

const alt = (i) => {
  if(i%2===0) return -1;
  else return 1;
};

const senX = (x, upTo) =>{
    let sum = 0;
    for(let i = 1,c = 1; c<= upTo;i+=2,c++){
      sum += (alt(c) * (pow(x,i) / factorial(i)));
    }
    return sum;
};

console.log(senX(8,15));