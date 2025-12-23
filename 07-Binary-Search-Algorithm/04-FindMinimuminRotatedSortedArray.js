// Find Minimum in Rotated Sorted Array Leetcode => 153

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 


function findMin(arr) {
  let left = 0; 
  let right = arr.length -1;

  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    // if array is sorted corner case
    if(arr[left] <= arr[right]) {
      return arr[left];
    }

    if(arr[mid] < arr[mid-1]) {
      return arr[mid];
    }

    if(arr[left] > arr[mid]) {
      right = mid - 1;
    }
    else {
      left = mid + 1;
    }
  }
}

let arr = [4,5,6,7,0,1,2]
// let arr = [11,13,15,17]
// let arr = [3,4,5,1,2];

console.log(findMin(arr));
