const sigmaSumPowI = (upTo,number) => {
  let sum = 0;
  for(let i = 0; i<=upTo;i++){
      sum += Math.pow(number,i);
  }
  return sum;
};


const sigmaFormulaSumPowI = (upTo, number) =>{
  return (Math.pow(number,upTo+1) - 1) / (number - 1);
}

console.log(sigmaSumPowI(10,2));
console.log(sigmaFormulaSumPowI(10,2));