//BINARY SORTED UNBALANCED TREE
//Binary Tree
(function() {
  const BinaryTree = require('./BinaryTree.js');
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class BSUT extends BinaryTree{
    //Binary Unsorted Balanced Tree
    constructor() {
      super();
    }
    insert(data) {
      const node = this.root;
      if (this.root === null) this.root = new Node(data);
      else {
        const searchTree = function(node) {
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

    remove(data) {
      const removeNode = function(node, data) {
        if (node == null) {
          return null;
        }
        if (data == node.data) {
          // node has no children 
          if (node.left == null && node.right == null) {
            return null;
          }
          // node has no left child 
          if (node.left == null) {
            return node.right;
          }
          // node has no right child 
          if (node.right == null) {
            return node.left;
          }
          // node has two children 
          var tempNode = node.right;
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
      this.root = removeNode(this.root, data);
    }
  }

  let tree = new BSUT();
  tree.insert(25);
  tree.insert(15);
  tree.insert(50);
  tree.insert(10);
  tree.insert(22);
  tree.insert(35);
  tree.insert(70);
  tree.insert(4);
  tree.insert(12);
  tree.insert(18);
  tree.insert(24);
  tree.insert(31);
  tree.insert(44);
  tree.insert(66);
  tree.insert(90);
  
  console.log(tree.root);
  console.log(`Tree Transversal InOrder: ${tree.inOrder()}`);
  console.log(`Tree Transversal preOrder: ${tree.preOrder()}`);
  console.log(`Tree Transversal postOrder: ${tree.postOrder()}`);
  console.log(`Tree Transversal breadthFirst: ${tree.breadthFirst()}`);
  
  tree.remove(50);
  console.log(tree.root);
})();
