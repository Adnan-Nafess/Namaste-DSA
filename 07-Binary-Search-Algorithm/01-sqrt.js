// sqrt Leetcode => 69

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


function sqrt(x) {
  if(x < 2) return x;

  let left = 2;
  let right = Math.floor(x / 2);

  while(left <= right) {
    let mid = Math.floor(left+(right-left)/2);
    if(x === mid**2) {
      return mid;
    }else if(x < mid**2) {
      right = mid - 1;
    }else {
      left = mid + 1;
    }
  }

  return right;
}

let x = 4;
// let x = 9;
// let x = 8;

console.log(sqrt(x));