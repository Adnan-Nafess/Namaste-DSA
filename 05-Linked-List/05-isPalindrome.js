// isPalindrome Leetcode 234

// ✅ Definition for singly linked list node
function ListNode(val) {
  this.val = val;
  this.next = null;
};

// ✅ Helper function: create linked list from array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

// ✅ Helper function: print linked list (for debugging)
function printLinkedList(head) {
  let curr = head;
  let result = "";
  while (curr) {
    result += curr.val + (curr.next ? " -> " : "");
    curr = curr.next;
  }
  console.log(result);
};

// ✅ Main function: check if linked list is palindrome
function isPalindrome(head) {
  if (!head || !head.next) return true;

  // step 1: find middle
  let slow = fast = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // step 2: reverse the second half
  let prev = null;
  let curr = slow;
  while(curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // step 3: check isPalindrome or not
  let firstList = head;
  let secondList = prev;
  while(secondList) {
    if(firstList.val != secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  };

  return true;

};

// ✅ Example Test Cases
const list1 = createLinkedList([1, 2, 2, 1]);
const list2 = createLinkedList([1, 2, 3, 2, 1]);
const list3 = createLinkedList([1, 2, 3]);

console.log("List 1:");
printLinkedList(list1);
console.log("Is Palindrome?", isPalindrome(list1)); // true

console.log("\nList 2:");
printLinkedList(list2);
console.log("Is Palindrome?", isPalindrome(list2)); // true

console.log("\nList 3:");
printLinkedList(list3);
console.log("Is Palindrome?", isPalindrome(list3)); // false