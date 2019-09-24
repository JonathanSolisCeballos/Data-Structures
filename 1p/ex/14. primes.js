//O(n^2)
//Sucesión de números primos

const primeNumbers = (n) => {
    let arrPrimes = [],primeFounded = 1;
    arrPrimes.push(2);
    let divisible = false;

    let i = 3;
    while(primeFounded < n){
        divisible = false;
        if(!((i%2)===0)){
            for(let c = 2; c < i; c++){
                if((i % c) === 0){
                    divisible = true
                }
            }
            if(!divisible){
                primeFounded++;
                arrPrimes.push(i);
            }
        }
        i++;
    }
    return arrPrimes;
}

console.log(primeNumbers(15));