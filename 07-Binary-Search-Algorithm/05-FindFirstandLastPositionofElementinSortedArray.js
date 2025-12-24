// Find First and Last Position of Element in Sorted Array Leetcode => 34

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

// 1st Approach
/*
function searchRange(arr, target) {
  let left = 0;
  let right = arr.length -1;
  let ans = [-1, -1];

  while(left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if(arr[mid] < target) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }

  if(arr[left] === target) {
    ans[0] = left;
  }

  left = 0;
  right = arr.length -1;

  while(left < right) {
    let mid = Math.ceil(left + (right - left) / 2);

    if(arr[mid] > target) {
      right = mid - 1;
    }
    else {
      left = mid;
    }
  }

  if(arr[left] === target) {
    ans[1] = left;
  }

  return ans;
} */

// 2nd Approach

function searchRange(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let ans = [-1, -1];

  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);

    if (arr[m] === target) {
      ans[0] = m;
      r = m - 1;
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  l = 0;
  r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);

    if (arr[m] === target) {
      ans[1] = m;
      l = m + 1;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return ans;
}

let arr = [5, 7, 7, 8, 8, 10],
  target = 8;
// let arr = [5,7,7,8,8,10], target = 6;
// let arr = [], target = 0;

console.log(searchRange(arr, target));
