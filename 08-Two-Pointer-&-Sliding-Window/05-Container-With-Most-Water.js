// Container with Most Water Leetcode => 11

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

function maxArea(arr) {
  let i = 0;
  let j = arr.length -1;
  let maxWater = 0;

  while(i < j) {
    let area = Math.min(arr[i], arr[j]) * (j-i);
    maxWater = Math.max(maxWater, area);

    if(arr[i] > arr[j]) {
      j--;
    }
    else {
      i++
    }
  }

  return maxWater;
}

let arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));