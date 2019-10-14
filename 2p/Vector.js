(function() {
  class Vector {
    constructor(arr) {
      this.arr = arr;
    }

    sum(arrayToSum) {
      return this.arr.map((el, index) => el + arrayToSum[index]);
    }

    subt(arrayToSum) {
      return this.arr.map((el, index) => el - arrayToSum[index]);
    }

    mul(arrayToSum) {
      return this.arr.map((el, index) => el * arrayToSum[index]);
    }
  }
  let vector = new Vector([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(vector.arr);
  console.log(vector.sum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
  console.log(vector.subt([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
  console.log(vector.mul([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
})();
