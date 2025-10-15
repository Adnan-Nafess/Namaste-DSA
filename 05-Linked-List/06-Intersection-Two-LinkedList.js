// Intersection Two Linked List Leetcode 160

// ✅ Definition for singly linked list node
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// ✅ Helper function: print linked list (for debugging)
function printLinkedList(head) {
  let curr = head;
  let res = "";
  while (curr) {
    res += curr.val + (curr.next ? " -> " : "");
    curr = curr.next;
  }
  console.log(res);
}

function getIntersectionNode(headA, headB) {
  // Put all nodes of headB inside a set
  let store = new Set();

  while(headB) {
    store.add(headB);
    headB = headB.next;
  }

  // Check for each node of headA if it's present in the set
  while(headA) {
    if(store.has(headA)) {
      return headA;
    }
    headA = headA.next;
  } 

  return null;
};

// ✅ Helper: Create intersection manually
function createIntersection() {
  // Common part (intersection)
  const common = new ListNode(8);
  common.next = new ListNode(10);

  // List A: 3 -> 7 -> 8 -> 10
  const headA = new ListNode(3);
  headA.next = new ListNode(7);
  headA.next.next = common; // intersection at node 8

  // List B: 99 -> 1 -> 8 -> 10
  const headB = new ListNode(99);
  headB.next = new ListNode(1);
  headB.next.next = common; // intersection at node 8

  return { headA, headB };
}

// ✅ Test Case
const { headA, headB } = createIntersection();

console.log("List A:");
printLinkedList(headA);

console.log("List B:");
printLinkedList(headB);

const intersectionNode = getIntersectionNode(headA, headB);

if (intersectionNode) {
  console.log("\n✅ Intersection found at node with value:", intersectionNode.val);
} else {
  console.log("\n❌ No intersection found");
}