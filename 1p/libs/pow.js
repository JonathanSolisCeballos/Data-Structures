module.exports = function(number, power) {
    let sum = number;
    for(let i = 2; i <= power; i++){
        sum *= number;
        
    }
    return sum;
}