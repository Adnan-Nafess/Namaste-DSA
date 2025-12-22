// Search In Rotated Soretd Array Leetcode => 33; 

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1

function search(arr, target) {
  let left = 0;
  let right =  arr.length -1;
  
  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if(arr[mid] === target) return mid;

    if(arr[left] <= arr[mid]) {
      if(target < arr[mid] && target >= arr[left]) {
        right = mid - 1;
      }
      else {
        left = mid + 1;
      }
    }
    else {
      if(target > arr[mid] && target <= arr[right]) {
        left = mid + 1;
      }
      else {
        right = mid - 1;
      }
    }
  }

  return -1;
  
}

// let arr = [4, 5, 6, 7, 0, 1, 2], target = 6;
let arr = [4,5,6,7,0,1,2], target = 0;
// let arr = [4,5,6,7,0,1,2], target = 3;
// let arr = [1], target = 0;

console.log(search(arr, target));