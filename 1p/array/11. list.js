 let e = [1,2,3,4,5,2,2,3,3]

const list = (arr) => {
  let mapSet = {};
  for (let i = 0; i < arr.length; i++) {
    if (mapSet[arr[i]]) mapSet[arr[i]] += 1;
    else mapSet[arr[i]] = 1;
  }

  return Object.entries(mapSet).filter(el=>el[1]>=2);
};
console.log(list(e))

