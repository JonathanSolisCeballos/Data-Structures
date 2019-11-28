//Binary Tree
(function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  let node1 = new Node("root");
  let node2 = new Node("left");
  let node3 = new Node("rootSubtree");
  let node4 = new Node("left");
  let node5 = new Node("right");

  node1.left = node2;
  node1.right = node3;
  node3.left = node4;
  node3.right = node5;
  

  const printTree = (node)=>{//Preorder NLR

    console.log(node.data);

    if(node.left) printTree(node.left)
    
    if(node.right) printTree(node.right)
  }

  printTree(node1);

})();
