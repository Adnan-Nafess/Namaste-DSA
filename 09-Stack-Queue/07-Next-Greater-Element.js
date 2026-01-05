// Next Greater Element | Leetcode 496


// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

function nextGreaterElement(nums1, nums2) {
  let stack = [];
  let map = {}; // value -> next greater

  // Step 1: process nums2
  for (let num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      let smaller = stack.pop();
      map[smaller] = num;
    }
    stack.push(num);
  }

  // Step 2: remaining elements have no next greater
  while (stack.length > 0) {
    map[stack.pop()] = -1;
  }

  // Step 3: build result for nums1
  let result = [];
  for (let num of nums1) {
    result.push(map[num]);
  }

  return result;
};

let nums1 = [4,1,2], nums2 = [1,3,4,2];
console.log(nextGreaterElement(nums1, nums2))