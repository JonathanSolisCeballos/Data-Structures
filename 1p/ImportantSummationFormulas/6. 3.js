const sigmaSumOneByOnePow2 = (upTo) => {
    let sum = 0;
    for(let i = 1; i<=upTo;i++){
        sum += Math.pow(i,2);
    }
    return sum
}


const sigmaFormulaSumOneByOnePow2 = (upTo) =>{
    return ((upTo * (upTo + 1)) * (2*upTo + 1)) / 6;
}

console.log(sigmaSumOneByOnePow2(10));
console.log(sigmaFormulaSumOneByOnePow2(10));