// Node class representing each element in the linked list
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  // LinkedList class representing the linked list itself
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a new node to the end of the linked list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    // Print the elements of the linked list
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  
  linkedList.print();
  