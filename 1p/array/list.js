let e = [1,2,3,4,5,2,2,3,3]

const list = (arr) => {
  let mapSet = {};
  let repeated = [];
  for (let i = 0; i < arr.length; i++) {
    if (mapSet[arr[i]]) repeated.push(arr[i]);
    else mapSet[arr[i]] = arr[i];
  }
  return repeated;
};
console.log(list(e))