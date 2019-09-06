const arr1 = [5,22,6,3,1];

const sort = (inputArray) => {
let arr = [...inputArray];
let aux = 0;
    for(let i = 0; i < (arr.length - 1); i++){
        for(let j = 0;j< (arr.length -1);j++){
            if(arr[j+1] < arr[j]){
                aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
    }
    return arr;
}

console.log(arr1);
console.log(sort(arr1));