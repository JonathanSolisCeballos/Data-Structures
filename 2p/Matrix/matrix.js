(function() {
  //Validar que los valores estén dentros de los límites
  class Matrix {
    constructor(row, column) {
      this.rows = row;
      this.columns = column;

      //Initialize the matrix with zeros

      //Old school but workable for better understanding.
      // this.matrix = new Array(row); .
      // for (let i = 0; i < this.rows; i++) {
      //   this.matrix[i] = new Array(this.columns);
      //   for (let j = 0; j < this.columns; j++) {
      //     this.matrix[i][j] = 0;
      //   }
      // }

      //Cool way to do it with ES6
      this.matrix = new Array(this.rows)
        .fill(0)
        .map(() => new Array(this.columns).fill(0));
    }

    initRandom() {
      //Initialize the matrix with random numbers from 0-100
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          this.matrix[i][j] = Math.ceil(Math.random() * 100);
        }
      }
    }

    getRow(r) {
      //Get the N row of te matrix
      //validar tamaño
      return r > this.matrix.length
        ? Error("valor fuera de los límites")
        : this.matrix[r];
    }

    getCol(c) {
      //Get the N column of the matrix
      if (c > this.columns) return Error("valor fuera de los límites");
      else {
        let arr = [];
        for (let i = 0; i < this.rows; i++) {
          arr.push(this.matrix[i][c]);
        }
        return arr;
      }
    }

    isSquared() {
      //tell if the matrix has the same amout of rows and columns
      return this.rows === this.columns ? true : false;
    }
    isSymetric() {
      if (!this.isSquared()) return false;
      else {
        for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.columns; j++) {
            if (i != j && this.matrix[i][j] != this.matrix[j][i]) return false;
          }
        }
        return true;
      }
    }

    isIdentity() {
      //Tell if the matrix is identity.
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          if (i === j && this.matrix[i][j] != 1) return false;
          else if (i != j && this.matrix[i][j] != 0) return false;
        }
      }
      return true;
    }
  }

  let matrix1 = new Matrix(3, 3);
  console.log(matrix1.matrix);

  // matrix1.matrix[0][0] = 1;
  // matrix1.matrix[1][1] = 1;
  // matrix1.matrix[2][2] = 1;

  matrix1.matrix[0][0] = 1;
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
  console.log(`Matrix isSymetric: ${matrix1.isSymetric()}`);
})();
