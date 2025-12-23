// Find Peak Element Leetcode => 162

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

function findPeakElement(arr) {
  let left = 0;
  let right = arr.length -1;

  while(left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if(arr[mid+1] > arr[mid]) {
      left  = mid + 1;
    }
    else {
      right = mid;
    }
  }

  return left;
};

// let nums = [1,2,3,1];
let arr = [1,2,1,3,5,6,4];
console.log(findPeakElement(arr));