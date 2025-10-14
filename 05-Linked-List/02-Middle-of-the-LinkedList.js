// Middle of the Linked List Leetcode 876

// -------------------------------
// ✅ Node structure
// -------------------------------
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// -------------------------------
// ✅ Function to find the middle node
// -------------------------------
function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// -------------------------------
// ✅ Helper: Create Linked List from Array
// -------------------------------
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// -------------------------------
// ✅ Helper: Print Linked List
// -------------------------------
function printLinkedList(head) {
  let curr = head;
  let result = [];
  while (curr !== null) {
    result.push(curr.val);
    curr = curr.next;
  }
  console.log(result.join(" -> "));
}

// -------------------------------
// ✅ Test Example
// -------------------------------
let arr = [1, 2, 3, 4, 5, 6];
let head = createLinkedList(arr);

console.log("Original Linked List:");
printLinkedList(head);

let middle = middleNode(head);
console.log("\nMiddle node value:", middle.val);

console.log("\nLinked List from middle:");
printLinkedList(middle);
