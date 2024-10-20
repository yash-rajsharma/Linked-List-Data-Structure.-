// Linked List: A fundamental data structure allowing efficient insertion and deletion operations compared to arrays.
// A Linked List consists of nodes connected by pointers, enabling dynamic size adjustment.

// Types of Linked Lists:
// 1. Singly Linked List: Each node has a reference to the next node only.
// 2. Doubly Linked List: Each node has references to both the next and previous nodes, allowing traversal in both directions.

//------------------------ Singly Linked List ----------------------------------

// Node class represents a single element with a value and a reference to the next node.
class Node {
  constructor(value) {
    // The 'head' is the start of the linked list, with the current node holding the value and a 'next' pointer that initially points to null.
    this.head = {
      value: value,
      next: null,
    };
  }
}

// SinglyLinkedList class manages the list, enabling various operations such as appending, prepending, insertion, removal, and reversal.
class SinglyLinkedList {
  constructor(value) {
    // Initially, the list starts with one node (the head) and both head and tail point to it.
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head; // Tail refers to the last node in the list.
    this.length = 1; // The list has only one node initially.
  }

  // append(value): Adds a new node to the end of the list.
  append(value) {
    const newNode = {
      value: value,
      next: null, // New node’s next points to null since it will be the last node.
    };

    this.tail.next = newNode; // Point the last node’s next to the new node.
    this.tail = newNode; // Update the tail to be the new node.
    this.length++; // Increase the length of the list.
    return this.printList(); // Print the list after the operation.
  }

  // prepend(value): Adds a new node to the beginning of the list.
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head; // New node points to the current head.
    this.head = newNode; // Update the head to be the new node.
    this.length++; // Increase the length of the list.
    return this.printList(); // Print the list after the operation.
  }

  // printList(): Helper function to print the entire list as an array.
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value); // Push each node’s value into the array.
      currentNode = currentNode.next; // Move to the next node.
    }
    return array;
  }

  // insertion(index, value): Inserts a new node at the specified index in the list.
  insertion(index, value) {
    const newNode = {
      value: value,
      next: null,
    };

    if (index >= this.length) {
      // If the index is out of bounds, append the value to the end.
      return this.append(value);
    }

    let leader = this.traverseList(index - 1); // Find the node before the desired index.
    let holdingPointer = leader.next; // Temporarily store the reference to the next node.
    leader.next = newNode; // Update the leader’s next to point to the new node.
    newNode.next = holdingPointer; // The new node points to the node that was originally at the index.
    this.length++; // Increase the length of the list.
    return this.printList(); // Print the list after the operation.
  }

  // remove(index): Removes the node at the specified index.
  remove(index) {
    let pointer = this.traverseList(index - 1); // Find the node just before the one to be removed.
    const unwanted = pointer.next; // Store the node to be removed.
    pointer.next = unwanted.next; // Update the pointer to skip over the unwanted node.
    this.length--; // Decrease the length of the list.
    return this.printList(); // Print the list after the operation.
  }

  // traverseList(index): Helper function to traverse the list and find a node at a specific index.
  traverseList(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode; // Return the node at the specified index.
  }

  // reverse(): Reverses the order of nodes in the list.
  reverse() {
    if (!this.head.next) {
      // If the list has only one node, return the head as is.
      return this.head;
    }

    let first = this.head;
    this.tail = this.head; // The original head becomes the new tail.
    let second = first.next;

    while (second) {
      const temp = second.next; // Temporarily store the next node.
      second.next = first; // Reverse the pointer of the second node to point to the first.
      first = second; // Move the 'first' pointer to the next node.
      second = temp; // Move the 'second' pointer to the next node.
    }

    this.head.next = null; // The new tail should point to null.
    this.head = first; // Update the head to the last node in the original list (now the first).
    return this.printList(); // Print the list after the reversal.
  }
}

//------------------------ Doubly Linked List ----------------------------------

// DoublyLinkedList class manages a linked list where each node has references to both the next and previous nodes.
class DoublyLinkedList {
  constructor(value) {
    // The 'head' node has pointers for both next and prev. Initially, prev is null since it's the first node.
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  // append(value): Adds a new node to the end of the list.
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  // prepend(value): Adds a new node to the beginning of the list.
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  // insertion(index, value): Inserts a new node at the specified index.
  insertion(index, value) {
    const newNode = {
      value: value,
      prev: null,
      next: null,
    };

    if (index >= this.length) {
      // If the index is out of bounds, append the value to the end.
      return this.append(value);
    }

    let leader = this.traverseList(index - 1); // Find the node before the desired index.
    let holdingPointer = leader.next; // Temporarily store the next node.
    leader.next = newNode; // Update the leader’s next to point to the new node.
    newNode.next = holdingPointer; // The new node points to the next node.
    newNode.prev = leader; // The new node points back to the leader.
    holdingPointer.prev = newNode; // The next node points back to the new node.
    this.length++; // Increase the length of the list.
    return this.printList(); // Print the list after the operation.
  }

  // remove(index): Removes a node from the list.
  remove(index) {
    let leader = this.traverseList(index - 1); // Find the node before the one to be removed.
    const unwanted = leader.next; // Store the node to be removed.
    leader.next = unwanted.next; // Skip the unwanted node.
    this.length--; // Decrease the length of the list.
    return this.printList(); // Print the list after
  }

  // printList(): Returns an array representation of the list for easy visualization.
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // traverseList(index): Helper function to find a node at a specific index.
  traverseList(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
}
