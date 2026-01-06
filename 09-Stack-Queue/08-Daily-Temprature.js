// Daily Tempratures (Leetcode 739)

// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]

function dailyTempratures(arr) {
  let stack = [];
  let n = arr.length;
  let ans = Array(n).fill(0);

  stack.push(n-1);

  for(let i=n-2; i>=0; i--) {
    while(stack.length) {
      let top = stack[stack.length -1];

      if(arr[i] >= arr[top]) {
        stack.pop();
      }
      else {
        ans[i] = top - i;
        break;
      }
    }
    stack.push(i);
  }
  return ans;
}

let arr = [73,74,75,71,69,72,76,73];
console.log(dailyTempratures(arr));