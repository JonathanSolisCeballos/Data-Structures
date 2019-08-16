const sigmaSumOneByOnePowN = (upTo,pow) => {
    let sum = 0;
    for(let i = 1; i<=upTo;i++){
        sum += Math.pow(i,pow);
    }
    return sum
}


const sigmaFormulaSumOneByOnePowN = (n, k) =>{
    return (1 / (k + 1)) * (Math.pow(n,k + 1));
}

console.log(sigmaSumOneByOnePowN(10,2));
console.log(sigmaFormulaSumOneByOnePowN(10,2));