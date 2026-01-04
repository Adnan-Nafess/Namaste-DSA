// Evaluate Reverse Polish Notation (Leetcode 150)

// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22


function evalRPN(arr) {
  let stack = [];

  for(let i=0; i<arr.length; i++) {
    if(arr[i] === "*" || arr[i] === "+" || arr[i] === "/" || arr[i] === "-") {
      let a = stack.pop();
      let b = stack.pop();
      let ans = eval(`${b} ${arr[i]} ${a}`);
      stack.push(Math.trunc(ans));
    }
    else {
      stack.push(arr[i]);
    }
  }

  return Number(stack.pop());
}


// let arr = ["2","1","+","3","*"];
let arr = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

console.log(evalRPN(arr));