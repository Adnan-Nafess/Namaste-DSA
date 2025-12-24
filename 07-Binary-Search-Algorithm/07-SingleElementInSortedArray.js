// Single Element in a Sorted Array Leetcode => 540

// Example 1:
// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:
// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

function singleNonDuplicate(arr) {
  let left = 0;
  let right = arr.length -1;
  let leftCount = 0;

  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    
    // Pair Exist on left 
    if(mid > left && arr[mid] === arr[mid-1]) {
      leftCount = mid - 1 - left;
      if(leftCount % 2 === 1) {
        right = mid - 2; 
      }else {
        left = mid + 1;
      }
    } // Pair Exist on Right
    else if(mid > right && arr[mid] === arr[mid+1]) {
      leftCount = mid - 1 - left;
      if(leftCount % 2 === 1) {
        left = mid + 2;
      }else {
        right = mid - 1;
      }
    }else {
      return arr[mid];
    }
  }
}

// let arr = [1, 1, 2, 2, 3, 3, 4, 8, 8];
// let arr = [3,3,7,7,10,10,11];
let arr = [1,1,2,3,3,4,4,8,8]
// let arr = [1, 1, 2, 2, 3, 4, 4, 8, 8];
console.log(singleNonDuplicate(arr));