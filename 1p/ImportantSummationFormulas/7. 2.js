const sigmaSumOneByOne = (upTo) => {
    let sum = 0;
    for(let i = 1; i<=upTo;i++){
        sum += i;
    }
    return sum
}

const sigmaFormulaSumOneByOne = (upTo) =>{
    return (upTo * (upTo + 1)) / 2;
}

console.log(sigmaSumOneByOne(10));
console.log(sigmaFormulaSumOneByOne(10));