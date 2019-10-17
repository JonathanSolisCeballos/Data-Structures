(function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.tail = { data: "Tail", next: null };
      this.head = { data: "Head", next: this.tail };
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
        console.log("this");
      } else {
        this.tail.data = newNode.data;
        let newTail = new Node("Tail");
        this.tail.next = newTail;
        this.tail = newTail;
      }
    }

    generateNode() {
      this.insertHead("soy nuevo");
      this.insertHead("soy mas nuevo");

      this.insertTail("last node");
      this.insertTail("very last node");

      return this.head;
    }

    deleteHead() {
      this.head.next = this.head.next.next;
      return "Deleted head";
    }
    deleteTail() {
      let current = this.head;
      do {
        if (current.next.next.next === null) {
          current.next = this.tail;
          break;
        }
        current = current.next;
      } while (current.next.next != null);
      return "Deleted Tail";
    }
    size() {
      this.toString();
      return this.length;
    }
    toString() {
      let current = this.head;
      this.length = 0;
      var data = "";
      do {
        data += `${current.data}, `;
        current = current.next;
        this.length++;
      } while (current != null);
      return data;
    }
  }

  let newList = new LinkedList();
  newList.generateNode();
  console.log(newList.toString());
  console.log(newList.size());

  // console.log(newList.deleteHead());

  // console.log(newList.toString());
  // console.log(newList.size());

  newList.deleteTail();

  console.log(newList.toString());
})();
