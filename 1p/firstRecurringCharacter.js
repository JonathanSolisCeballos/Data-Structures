let i = "ABCDA";

const firstRecurringCharacter = (arr) => {
  let mapSet = {};
  for (let i = 0; i < arr.length; i++) {
    if (mapSet[arr[i]]) return true //arr[i];
    else mapSet[arr[i]] = arr[i];
  }
  return false;
};

console.log(firstRecurringCharacter(i.split("")));