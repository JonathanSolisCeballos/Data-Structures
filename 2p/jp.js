/*ubbTree Class//unsorted, binary, balanced
---------
---------
constructor()
insert(n)
remove(n)
yours()//traversal
bft()//breadth-first */
class Nodo {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
class UBBTree {
  constructor() {
    this.root = null;
  }
  insertar(numero) {
    //15,7, 6  ---- 6
    let newNode = new Nodo(numero);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      function loop(nodo) {
        //7
        if (numero < nodo.data) {
          if (nodo.left === null) nodo.left = newNode;
          else loop(nodo.left);
        } else {
          if (nodo.right === null) nodo.right = newNode;
          else loop(nodo.right);
        }
      }
      loop(current);
    }
  }

  preOrder(tree = this.root) {
    //N,L,R.    // 1,5,10
    console.log(tree.data);
    if (tree.left != null) {
      this.preOrder(tree.left);
      // console.log(tree.left);
    }
    if (tree.right) {
      this.preOrder(tree.right);
      // console.log(tree.right);
    }
  }
  breadthFirstTraversal = (tree, callback) => {
    if (tree == null) {
      return;
    }

    let queue = [tree];

    while (queue.length > 0) {
      let item = queue.shift();
      let value = item.value;
      callback(value);

      if (item.left == null && item.right == null) {
        continue;
      }
      if (item.left != null) {
        queue.push(item.left);
      }
      if (item.right != null) {
        queue.push(item.right);
      }
    }
  };
}

const tree = new UBBTree();

tree.insertar(1);
tree.insertar(5);
tree.insertar(10);
tree.insertar(2);
console.log(tree.root);

tree.preOrder();
tree.breadthFirstTraversal(tree.root, console.log);
