let i = "ABCDE";
let e = [1,2,3,4,5,2]

const firstRecurringCharacter = (arr) => {
  let mapSet = {};
  for (let i = 0; i < arr.length; i++) {
    if (mapSet[arr[i]]) return true //arr[i];
    else mapSet[arr[i]] = arr[i];
  }
  return false;
};

//console.log(firstRecurringCharacter(i.split("")));
console.log(firstRecurringCharacter(e));