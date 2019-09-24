let a = "323";
let b = "321";

const howMany = (arr) => {
  let mapSet = {};
  for (let i = 0; i < arr.length; i++) {
    if (mapSet[arr[i]]) mapSet[arr[i]] += 1;
    else mapSet[arr[i]] = 1;
  }

  return Object.entries(mapSet).filter(el=>el[1]>=2).length;
};

console.log(howMany(b));