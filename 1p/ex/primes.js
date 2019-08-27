//Sucesión de números primos

const primeNumbers = (n) => {
    let arrPrimes = [],primeFounded = 0;

    let i = 0;
    while(primeFounded < n){
        let divisible = false;
        if(i%2===0)
            continue;
        else{
            for(let c = 2; c < i; c++){
                if(i % c === 0) continue;
            }
        }
        i++;
    }
}