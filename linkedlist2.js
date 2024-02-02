// Node class representing each element in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // LinkedList class representing the linked list itself
  class LinkedList {
    constructor() {
      this.head = null;
    }
}

const linkedList = new linkedList();

linkedList.head = new Node(1);
linkedList.head.next = new Node(2);
linkedList.head.next.next = new Node(3);

console.log(linkedList.head.next.next);