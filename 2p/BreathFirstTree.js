
//Binary Tree
(function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  let node1 = new Node("1");
  let node2 = new Node("2");
  let node3 = new Node("3");
  let node4 = new Node("4");
  let node5 = new Node("5");
  let node6 = new Node("6");
  let node7 = new Node("7");
  
  node1.left = node2;
  node1.right = node3;
  node2.left = node6;
  node2.right = node7;
  node3.left = node4;
  node3.right = node5;
  

  const breathFirst = (node)=>{//Preorder NLR

    console.log(node.data);

    if(node.left) printTree(node.left)
    
    if(node.right) printTree(node.right)
  }

  breathFirst(node1);



  console.log(node1.data);
  console.log(node2.data);
  console.log(node3.data);
  console.log(node4.data);
  console.log(node5.data);
  console.log(node6.data);
  console.log(node7.data);
})();
