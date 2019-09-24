//O(n)
//Minimo común divisor
//lcd(a,b)


const EuclidesMCD = (a, b) => {
    if ((typeof a !== 'number') || (typeof b !== 'number')) 
        throw Error('Los valores deben ser numéricos');

    let iaux; //auxiliar
    a = Math.abs(a); //tomamos valor absoluto
    b = Math.abs(b);
    let i1 = Math.max(a, b); //i1 = el más grande
    let i2 = Math.min(a, b); //i2 = el más pequeño
  
    do {
      iaux = i2; //guardar divisor
      i2 = i1 % i2; //resto pasa a divisor
      i1 = iaux; //divisor pasa a dividendo
    } while (i2 !== 0);
    return i1; //ultimo resto no nulo
}

function lcm(a, b) {
    //if the user enters 0 or a negative number
    return (!a || !b) ? 0 : Math.abs((a * b) / EuclidesMCD(a, b));
 }

console.log(lcm(15,8))