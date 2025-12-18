// Largest Common Prefix Leetcode => 14

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function largestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0]; // Base word

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // remove last char
      if (prefix === "") return "";
    }
  }

  return prefix;
}


let strs = ["flower","flow","flight"];
// let strs = ["dog","racecar","car"];

console.log(largestCommonPrefix(strs));