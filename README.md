# Linked List Data Structure

<img align="right" alt="Coding" width ="400" src = "https://media.geeksforgeeks.org/wp-content/uploads/20240410135517/linked-list.webp"/>
## Overview

A **Linked List** is a linear data structure where each element (node) is a separate object, consisting of two main parts:
- **Data**: Stores the value.
- **Pointer/Reference**: Stores the address of the next node.

Unlike arrays, linked lists do not store elements in contiguous memory locations. This structure allows efficient insertions and deletions, making it a great choice when frequent insertions or deletions are needed.

## Types of Linked Lists

1. **Singly Linked List**:
   - Each node contains data and a reference to the next node.
   - Traversal is unidirectional, from the head to the tail.
   
2. **Doubly Linked List**:
   - Each node contains data, a reference to the next node, and a reference to the previous node.
   - Supports bidirectional traversal.
   
3. **Circular Linked List**:
   - The last node points back to the head of the list, forming a circle.
   - Can be either singly or doubly linked.

## Operations

1. **Insertion**:
   - Insert at the beginning.
   - Insert at the end.
   - Insert after a given node.

2. **Deletion**:
   - Delete from the beginning.
   - Delete from the end.
   - Delete a specific node by value.

3. **Traversal**:
   - Visiting each node starting from the head.

4. **Search**:
   - Find an element by its value.

5. **Length**:
   - Calculate the total number of nodes in the list.

## Advantages

- Dynamic size: No need to declare the size of a linked list at the time of creation.
- Efficient insertions/deletions: No shifting of elements as in arrays.

## Disadvantages

- Higher memory usage: Each node requires extra memory for the reference pointer.
- No random access: Nodes must be accessed sequentially, making searching slower.
  
## Use Cases

- **Implementation of stacks and queues**.
- **Dynamic memory allocation**.
- **Undo functionality in applications** (using a doubly linked list).
- **Adjacency list representation in graphs**.

## Complexity

| Operation   | Time Complexity (Singly) | Time Complexity (Doubly) |
|-------------|--------------------------|--------------------------|
| Insertion   | O(1) at head, O(n) at tail| O(1)                     |
| Deletion    | O(1) at head, O(n) at tail| O(1)                     |
| Traversal   | O(n)                      | O(n)                     |
| Search      | O(n)                      | O(n)                     |

## Conclusion

The Linked List is a versatile and fundamental data structure that is widely used in various algorithms and system designs. Its dynamic nature and ease of insertion/deletion make it suitable for situations where the size of the data is unpredictable, and random access is not required.

---
