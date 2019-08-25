const sigmaSumOneByOnePowN = (upTo,pow) => {
    let sum = 0;
    for(let i = 1; i<=upTo;i++){
        sum += Math.pow(i,pow);
    }
    return sum
}


const sigmaFormulaSumOneByOnePowN = (upTo, pow) =>{
    return (1 / (pow + 1)) * (Math.pow(upTo,pow + 1));
}

console.log(sigmaSumOneByOnePowN(10,3));
console.log(sigmaFormulaSumOneByOnePowN(10,3));