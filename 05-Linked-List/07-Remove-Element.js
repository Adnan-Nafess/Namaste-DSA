// Remove Elements Leetcode 203

// 🔹 Definition for singly-linked list node
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 🔹 Function to remove elements from the linked list
function removeElements(head, val) {
  // Create a sentinel (dummy) node before the head
  let sentinel = new ListNode(0);
  sentinel.next = head;

  let prev = sentinel;

  // Traverse the list
  while (prev && prev.next) {
    if (prev.next.val === val) {
      // Skip the node if value matches
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  // Return new head (skipping dummy)
  return sentinel.next;
}

// 🔹 Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// 🔹 Helper function to print a linked list
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// 🔹 Example usage:
let head = createLinkedList([1, 2, 6, 3, 4, 5, 6]);
console.log("Before removing:");
printLinkedList(head);

head = removeElements(head, 6);
console.log("After removing 6:");
printLinkedList(head);
