const rep = arr => {
  let repetidos = [];
  let temporal = [];
  let primerRep;

  arr.forEach((value, index) => {
    temporal = [...arr];
    temporal.splice(index, 1);
    if (temporal.indexOf(value) != -1 && repetidos.indexOf(value) === -1) {
      repetidos.push(value);
    }
  });
  console.log(repetidos)
  return repetidos[0];

};
console.log(rep([5, 2, 3, 4, 5, 6,23,6,23, 6, 7]));
