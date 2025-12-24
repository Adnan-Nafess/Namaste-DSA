// Peak Index In a Mountain Array Leetcode => 852

// Example 1:
// Input: arr = [0,1,0]
// Output: 1

// Example 2:
// Input: arr = [0,2,1,0]
// Output: 1

// Example 3:
// Input: arr = [0,10,5,2]
// Output: 1


function peakIndexInMountainArray(arr) {
  let left = 0;
  let right = arr.length -1;

  while(left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if(arr[mid+1] > arr[mid]) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }

  return left;
}

// let arr = [0, 1, 0];
// let arr = [0, 2, 1, 0];
let arr = [0, 10, 5, 2];
console.log(peakIndexInMountainArray(arr));