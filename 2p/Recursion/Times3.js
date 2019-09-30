class Times3 {
  recursion(n) {
    return n === 0 ? 3 : 2 * this.recursion(n - 1) + 3;
  }

  makeTable(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(this.recursion(i));
    }
    return arr;
  }
}

let a = new Times3();
console.table(a.makeTable(10));
