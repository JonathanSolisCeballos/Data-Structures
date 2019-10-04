const JanuaryFirst = (year) => {
  return ((year + Math.floor((year - 1)/4) - Math.floor((year-1)/100) + Math.floor((year-1)/400)) % 7)
}

console.log(JanuaryFirst(2000));
console.log(JanuaryFirst(2019));
console.log(JanuaryFirst(2020));
console.log(JanuaryFirst(2072));
console.log(JanuaryFirst(3000));
//console.log(10-1/100)