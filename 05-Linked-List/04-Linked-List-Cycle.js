// Linked List Cycle Leetcode 141

// -------------------------------
// ✅ Definition for singly-linked list
// -------------------------------
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// -------------------------------
// ✅ Detect Cycle Function
// -------------------------------
function hasCycle(head) {
  let seenNodes = new Set();
  let curr = head;

  while (curr) {
    if (seenNodes.has(curr)) {
      return true; // Cycle detected
    }
    seenNodes.add(curr);
    curr = curr.next;
  }

  return false; // No cycle
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
// ✅ Helper: Create a Cycle in Linked List
// -------------------------------
function createCycle(head, pos) {
  if (pos < 0) return head;

  let tail = head;
  let cycleNode = null;
  let index = 0;

  while (tail.next) {
    if (index === pos) cycleNode = tail;
    tail = tail.next;
    index++;
  }

  // connect last node to cycleNode
  tail.next = cycleNode;
  return head;
}

// -------------------------------
// ✅ Test Cases
// -------------------------------

// Example 1: No cycle
let list1 = createLinkedList([3, 2, 0, -4]);
console.log("Has Cycle (list1):", hasCycle(list1)); // false

// Example 2: Create a cycle at index 1 (0-based)
let list2 = createLinkedList([3, 2, 0, -4]);
list2 = createCycle(list2, 1);
console.log("Has Cycle (list2):", hasCycle(list2)); // true

// Example 3: Single node without cycle
let list3 = createLinkedList([1]);
console.log("Has Cycle (list3):", hasCycle(list3)); // false

// Example 4: Single node with cycle
let list4 = createLinkedList([1]);
list4.next = list4; // self-cycle
console.log("Has Cycle (list4):", hasCycle(list4)); // true
