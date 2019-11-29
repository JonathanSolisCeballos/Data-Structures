(function () {
  const Matrix = require("./Matrix");

  let matrix1 = new Matrix(6, 6);
  console.log(matrix1)
  console.log(matrix1.isSquared())

  let notSquaredMatrix = new Matrix(8, 3);
  console.log(notSquaredMatrix.isSquared())
  /*   console.log(matrix1.matrix); */

  // matrix1.matrix[0][0] = 1;
  // matrix1.matrix[1][1] = 1;
  // matrix1.matrix[2][2] = 1;

  /* matrix1.matrix[0][0] = 1;
  matrix1.matrix[0][1] = 2;
  matrix1.matrix[0][2] = 6;

  matrix1.matrix[1][0] = 2;
  matrix1.matrix[1][1] = 8;
  matrix1.matrix[1][2] = 4;

  matrix1.matrix[2][0] = 6;
  matrix1.matrix[2][1] = 4;
  matrix1.matrix[2][2] = 5;

  // matrix1.initRandom();

  console.table(matrix1.matrix);

  console.log(matrix1.getRow(0));
  console.log(matrix1.getCol(1));

  console.log(`Matrix isSquared: ${matrix1.isSquared()}`);
  console.log(`Matrix isIdentity: ${matrix1.isIdentity()}`);
  console.log(`Matrix isSymetric: ${matrix1.isSymetric()}`); */
})();