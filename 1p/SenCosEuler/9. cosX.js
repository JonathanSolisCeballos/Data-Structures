const factorial = require('../libs/factorial.js');
const pow = require('../libs/pow.js');

const alt = (i) => {
  if(i%2===0) return -1;
  else return 1;
};

const cosX = (x, upTo) =>{
    let sum = 1;
    for(let i = 2,c = 2; c<= upTo;i+=2,c++){
      // console.log(sum)
      sum += (alt(c) * (pow(x,i) / factorial(i)));
    }
    return sum;
};

console.log(cosX(10,15));