// Reverse Linked List Leetcode 206

// -------------------------------
// ✅ Definition for singly-linked list
// -------------------------------
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// -------------------------------
// ✅ Reverse Linked List Function
// -------------------------------
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next; // save next node
    curr.next = prev;     // reverse link
    prev = curr;          // move prev forward
    curr = temp;          // move curr forward
  }

  return prev; // new head of reversed list
}

// -------------------------------
// ✅ Helper: Create Linked List from Array
// -------------------------------
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return head;
}

// -------------------------------
// ✅ Helper: Print Linked List
// -------------------------------
function printLinkedList(head) {
  let res = [];
  let curr = head;
  while (curr) {
    res.push(curr.val);
    curr = curr.next;
  }
  console.log(res.join(" -> "));
}

// -------------------------------
// ✅ Test Example
// -------------------------------
let arr = [1, 2, 3, 4, 5];
let head = createLinkedList(arr);

console.log("Original Linked List:");
printLinkedList(head);

let reversed = reverseList(head);

console.log("\nReversed Linked List:");
printLinkedList(reversed);
