let node1 = {
  data: "i'm node 1",
  prev: null,
  next: null
}

let node2 = {
  data: "i'm node 2",
  prev: null,
  next: null
}

let node3 = {
  data: "i'm node 3",
  prev: null,
  next: null
}

node1.next = node2;
node2.next = node3;
node2.prev = node1;
node3.prev = node2;
/* 
console.log(node2.next);
console.log(node3.prev); */


function printLinkedList(node,direction) {
  let current = node;
  switch(direction){
    case "LR":
        do {
          console.log(current);
          current = current.next;
        } while (current != null);
      break;
    case "RL":
        do {
          console.log(current);
          current = current.prev;
        } while (current != null);
      break;
    default:
      console.log("No direction was provided");
      break;
  }
}
printLinkedList(node3,"RL");