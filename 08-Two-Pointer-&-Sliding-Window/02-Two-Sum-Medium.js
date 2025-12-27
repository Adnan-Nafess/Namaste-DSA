// Two Sum || - Input Array is Sorted Leetcode => 167

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

function twoSum(arr, target) {
  let i = 0;
  let j = arr.length -1;

  while (i < j) {
    let sum = arr[i] + arr[j];

    if(sum === target) { 
      return [i+1, j+1]
    }  
    else if(sum > target) {
      j--;
    }
    else {
      i++;
    } 
  }
};

// let arr = [0, 2, 7, 11, 15], target = 9;
let arr = [2,3,4], target = 6;

console.log(twoSum(arr, target));