// Split a String in Balanced String Leetcode => 1221;

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".


function balancedStringSplit(s) {
  let count = 0;
  let R = 0;
  let L = 0;

  for(let i=0; i<s.length; i++) {
    if(s[i] === "R") {
      R++;
    }else {
      L++;
    }

    if(L === R) {
      count++;
      L = 0;
      R = 0;
    }
  }

  return count;
}


let s = "RLRRLLRLRL";
// let s = "RLRRRLLRLL";
// let s = "LLLLRRRR";
console.log(balancedStringSplit(s));