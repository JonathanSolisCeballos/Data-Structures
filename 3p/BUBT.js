//BINARY UNSORTED BALANCED TREE
const BinaryTree = require('./BinaryTree.js');
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BSUT extends BinaryTree {
  //Binary Unsorted Balanced Tree
  constructor() {
    super();
  }
  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) this.root = newNode;
    else {
      let node = this.root;
      let queue = [node];

      while (queue.length) {
        node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        if (!node.left) {
          node.left = newNode;
          break;
        } else if (!node.right) {
          node.right = newNode;
          break;
        }
      }
    }
  }

  findRightmostNode() {
    let current = this.root;
    while (current.right != null) {
      current = current.right;
    }
    return current.left ? current.left : current;
  }

  find(data) {
    let node = this.root;
    let queue = [node];
    // let result = [];

    while (queue.length) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (data === node.data) return node;
      // result.push(node.data);
    }
    return null;
  }

  remove(data) {
    console.log(`Find (${data}): ${JSON.stringify(tree.find(data))}`);
    if (nodeFind) {
      if (!nodeFind.left && !nodeFind.right) {
        nodeFind = null;
        return true;
      } else {
        console.log('has left or right, looking for rightmost node');
        let rightMostNode = this.findRightmostNode();
        nodeFind.data = rightMostNode.data;
        console.log(rightMostNode);
        rightMostNode = null;
        console.log(rightMostNode);
        return true;
      }
    } else return false;
  }
}

let tree = new BSUT();
tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(3);
tree.insert(9);
tree.insert(13);
tree.insert(17);

console.log(tree.root);
console.log(`Tree Transversal InOrder: ${tree.inOrder()}`);
console.log(`Tree Transversal preOrder: ${tree.preOrder()}`);
console.log(`Tree Transversal postOrder: ${tree.postOrder()}`);
console.log(`Tree Transversal breadthFirst: ${tree.breadthFirst()}`);
console.log(`Rightmost Node: ${JSON.stringify(tree.findRightmostNode())}`);

let dataToFind = 3;
console.log(`Find (${dataToFind}): ${JSON.stringify(tree.find(dataToFind))}`);

let dataToRemove = 15;
console.log(
  `Remove (${dataToRemove}): ${JSON.stringify(tree.remove(dataToRemove))}`
);

console.log(tree.root);
console.log(`Tree Transversal InOrder: ${tree.inOrder()}`);
console.log(`Tree Transversal preOrder: ${tree.preOrder()}`);
console.log(`Tree Transversal postOrder: ${tree.postOrder()}`);
console.log(`Tree Transversal breadthFirst: ${tree.breadthFirst()}`);
