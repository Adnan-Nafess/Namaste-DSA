// Odd Even Linked List 328

// Define Node structure
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Create Linked List from Array (Helper Function)
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

// Convert Linked List to Array (for easy output)
function printLinkedList(head) {
  const result = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}

// Function to group odd and even nodes
function oddEvenList(head) {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  let evenStart = even;

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenStart;
  return head;
}

// 🔹 TEST CASE
let head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original List:", printLinkedList(head));

let result = oddEvenList(head);
console.log("After Odd-Even Reorder:", printLinkedList(result));
