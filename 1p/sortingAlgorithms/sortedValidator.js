const sortedValidatorAsc = (arr) => {
    for(let i=0;i<(arr.length-1);i++){
        if(arr[i] > arr[i+1])
            return false
    }
    return true
}

let unsortedArr = [2,4,6,2,4,67,2,4];//unsorted array
let sortedArr = [1,2,3,4,5,6,7,8,9,10];//sorted array

console.log(sortedValidatorAsc(unsortedArr));//false
console.log(sortedValidatorAsc(sortedArr));//true