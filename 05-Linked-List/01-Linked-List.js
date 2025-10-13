// Design Linked List Leetcode 707

// 🧱 Node structure
function Node(val) {
  this.val = val;
  this.next = null;
}

// 🧠 Linked List class
var MyLinkedList = function() {
  this.head = null;
  this.size = 0;
};

// 🔍 Get value at index
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) curr = curr.next;
  return curr.val;
};

// 🪄 Add node at head
MyLinkedList.prototype.addAtHead = function(val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// 🧩 Add node at tail
MyLinkedList.prototype.addAtTail = function(val) {
  const newNode = new Node(val);
  if (!this.head) this.head = newNode;
  else {
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

// ➕ Add at specific index
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0) return this.addAtHead(val);
  if (index === this.size) return this.addAtTail(val);

  const newNode = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) curr = curr.next;

  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
};

// ❌ Delete at specific index
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) this.head = this.head.next;
  else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    curr.next = curr.next.next;
  }
  this.size--;
};

// 🧠 Helper function: print list
MyLinkedList.prototype.printList = function() {
  let curr = this.head;
  let str = "";
  while (curr) {
    str += curr.val + (curr.next ? " -> " : "");
    curr = curr.next;
  }
  console.log(str || "Empty list");
};

// ------------------------------------------------------
// 🚀 Driver Code (Run and Test Here)
const list = new MyLinkedList();

list.addAtHead(10);
list.addAtTail(20);
list.addAtTail(30);
list.addAtIndex(1, 15);
list.printList();  // Output: 10 -> 15 -> 20 -> 30

console.log("Get index 2:", list.get(2)); // 20

list.deleteAtIndex(1);
list.printList();  // Output: 10 -> 20 -> 30

list.deleteAtIndex(0);
list.printList();  // Output: 20 -> 30

list.addAtHead(5);
list.printList();  // Output: 5 -> 20 -> 30

console.log("Size:", list.size); // 3

