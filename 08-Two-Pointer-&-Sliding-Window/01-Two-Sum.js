// Two Sum Leetcide => 1

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// 1st approach brute force 

// function twoSum(arr, target) {
//   for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++) {
//       if(arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// 2nd Approach and optimal approach

function twoSum(arr, target) {
  let n = arr.length;
  let map = {};

  for(let i=0; i<n; i++) {
    map[arr[i]] = i;
  }

  for(let i=0; i<n; i++) {
    let pairToFind = target - arr[i];
    if(map[pairToFind] && map[pairToFind] != i) {
      return [i, map[pairToFind]];
    }
  }
}


// let arr = [2, 7, 11, 15], target = 9;
let arr = [3,3], target = 6;

console.log(twoSum(arr, target));