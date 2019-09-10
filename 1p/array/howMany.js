let i = "ABCDEAAB";

const howMany = (arr) => {
  let mapSet = {};
  let howMany = 1;
  for (let i = 0; i < arr.length; i++) {
    if (mapSet[arr[i]]) howMany ++;
    else mapSet[arr[i]] = arr[i];
  }
  return howMany;
};

console.log(howMany(i));