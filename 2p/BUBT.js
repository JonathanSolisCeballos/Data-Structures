//BINARY UNSORTED BALANCED TREE
//BINARY SORTED UNBALANCED TREE

//Binary Tree
(function () {
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class BST { //unsorted balanced binary tree
    constructor() {
      this.root = null
    }
    add(data) {
      const node = this.root;
      if (this.root === null) this.root = new Node(data);
      else {
        const searchTree = function (node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }

    preOrder(node = this.root) {
      console.log(node.data);

      if (node.left) this.preOrder(node.left)

      if (node.right) this.preOrder(node.right)
    }

    inOrder(node = this.root) {
      if (node.left) this.inOrder(node.left)
      console.log(node.data);
      if (node.right) this.inOrder(node.right)
    }
  }

  let tree = new BST();
  tree.add(1);
  tree.add(5);
  tree.add(10);
  tree.add(2);
  tree.inOrder();

  console.log(tree.root)


})();