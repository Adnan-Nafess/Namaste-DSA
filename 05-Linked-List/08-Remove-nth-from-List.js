// Remove Nth Node From End of List Leetcode 19


// 🔹 Definition for singly linked list node (constructor function)
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 🔹 Function to remove Nth node from end
function removeNthFromEnd(head, n) {
  // Dummy node to handle edge cases like removing head
  let sentinel = new ListNode(0, head);

  // 1️⃣ Find total length
  let length = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    length++;
  }

  // 2️⃣ Find position before the node to remove
  let prevPos = length - n;
  let prev = sentinel;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }

  // 3️⃣ Remove node
  prev.next = prev.next.next;

  // 4️⃣ Return updated head
  return sentinel.next;
}

// 🔹 Helper: Print linked list
function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}

// 🔹 Create Linked List manually (1 -> 2 -> 3 -> 4 -> 5)
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// 🔹 Print original list
console.log("Original Linked List:");
printList(head);

// 🔹 Remove 2nd node from end
head = removeNthFromEnd(head, 2);

// 🔹 Print updated list
console.log("After removing 2nd node from the end:");
printList(head);
