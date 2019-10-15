
function printLinkedList(firstNode) {
  let current = firstNode;
  do {
    console.log(current);
    current = current.next;
  } while (current != null);
}
/* 
printLinkedList(node1); */


function createNodes() {
  let n1 = new Node("nodo 1");
  let n2 = new Node("nodo 2");
  let n3 = new Node("nodo 3");
  console.log(n1, n2, n3);
}
/* createNodes() */




////////////////////

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.tail = {data:"Tail", next:null};
    this.head = {data:"Head", next: this.tail};
    this.length = 0;
  }
  
  insertHead(data) {
    let newNode = new Node(data);
    
    if (this.head.next === this.tail) {
        this.head.next = newNode;
        newNode.next = this.tail;
    } else {
        let temp = this.head.next;
        this.head.next = newNode;
        newNode.next = temp;
    }
  }
  
  insertTail(data) {
    let newNode = new Node(data);
    
    if (this.head.next === this.tail) {
        this.head.next = newNode;
        newNode.next = this.tail;
    } else {
      this.tail.data = newNode.data;
      let newTail = new Node("Tail");
      newNode.next = newTail;
      this.tail.next = newNode.next;
      
    }
  }
  
  generateNode() {
    // this.insertHead("soy nuevo")
    // this.insertHead("soy mas nuevo")
    this.insertTail("last node");
    this.insertTail("very last node");
    
    
    return this.head
  }
}

let newList = new LinkedList();
console.log(newList.generateNode())






