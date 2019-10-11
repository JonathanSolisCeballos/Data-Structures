let node1 = {
  data: "i'm node 1",
  next: null
}

function printLinkedList(firstNode) {
  let current = firstNode;
  do {
    console.log(current);
    current = current.next;
  } while (current != null);
}
/* 
printLinkedList(node1); */


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createNodes() {
  let n1 = new Node("nodo 1");
  let n2 = new Node("nodo 2");
  let n3 = new Node("nodo 3");
  console.log(n1, n2, n3);
}
/* createNodes() */

class LinkedList {
  constructor() {
    this.lastNode = null;
  }

  putNewNode(data) {
    if (this.lastNode != null) {
      let newNode = new Node(data);
      this.lastNode.next = newNode;
      console.log(this.lastNode)
      this.lastNode = newNode;
    } else {
      console.log("Last node was undefined")
      this.lastNode = new Node(data);
      return this.lastNode;
    }
  }

  generateNode() {
    /*   this.putNewNode("node 1");
      this.putNewNode("node 2");
      this.putNewNode("node 3"); */
    console.log(this.putNewNode("node 1"));
    console.log(this.putNewNode("node 2"));
    console.log(this.putNewNode("node 3"));
  }
}

let newList = new LinkedList();
newList.generateNode();