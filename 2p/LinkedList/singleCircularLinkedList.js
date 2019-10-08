let node1 = {
  data: "i'm node 1",
  next: null
}

let node2 = {
  data: "i'm node 2",
  next: null
}

let node3 = {
  data: "i'm node 3",
  next: null
}


node1.next = node2;
node2.next = node3;
node3.next = node1;

/* console.log(node2.next.data);
console.log(node3.next.data); */


function printLinkedList(firstNode) {
  let current = firstNode;
  do {
    console.log(current);
    current = current.next;
  } while (current != firstNode);
}

printLinkedList(node1);