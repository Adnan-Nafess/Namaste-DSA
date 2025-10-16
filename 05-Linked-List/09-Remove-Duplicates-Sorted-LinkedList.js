// Remove Duplicates from Sorted Linked List Leetcode 83

// 🔹 Definition for singly linked list node
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 🔹 Function to remove duplicates from sorted linked list
function deleteDuplicates(head) {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      // Skip the duplicate node
      curr.next = curr.next.next;
    } else {
      // Move to the next unique node
      curr = curr.next;
    }
  }

  return head;
}

// 🔹 Helper: Print linked list
function printList(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}

// 🔹 Create Linked List: 1 -> 1 -> 2 -> 3 -> 3
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

// 🔹 Print original list
console.log("Original Linked List:");
printList(head);

// 🔹 Remove duplicates
head = deleteDuplicates(head);

// 🔹 Print updated list
console.log("After removing duplicates:");
printList(head);
