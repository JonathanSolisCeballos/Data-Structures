module.exports = class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder(node = this.root) {
    let arr = [];
    function pre(node) {
      arr.push(node.data);

      if (node.left) pre(node.left);

      if (node.right) pre(node.right);
    }
    pre(node);
    return arr;
  }

  inOrder(node = this.root) {
    let arr = [];
    function inOrd(node) {
      if (node.left) inOrd(node.left);

      arr.push(node.data);

      if (node.right) inOrd(node.right);
    }
    inOrd(node);
    return arr;
  }

  postOrder(node = this.root) {
    let arr = [];
    function postOrd(node) {
      if (node.left) postOrd(node.left);

      if (node.right) postOrd(node.right);
      arr.push(node.data);
    }
    postOrd(node);
    return arr;
  }

  breadthFirst() {
    let node = this.root;
    let queue = [node];
    let result = [];

    while (queue.length) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      result.push(node.data);
    }
    return result;
  }
};
