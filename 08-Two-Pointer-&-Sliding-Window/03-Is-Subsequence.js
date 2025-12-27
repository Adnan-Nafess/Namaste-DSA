// Is Subsequence Leetcode => 392

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false


function isSubsequence(s, t) {
  let i = 0;
  let j = 0;

  while(j < t.length) {
    if(s[i] === t[j]) {
      i++;
    };
    j++;
  }

  return i === s.length;
}

let s = "abc", t = "ahbgdc";
// let s = "axc", t = "ahbgdc";

console.log(isSubsequence(s, t));