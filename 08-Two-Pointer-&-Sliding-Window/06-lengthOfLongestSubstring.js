// Length substring Without Repeating Character Leetcode => 3

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


function lengthOfLongestSubstring(s) {
  let i = 0;
  let j = 0;
  let map = {};
  let maxWS = 0;

  for(j=0; j<s.length; j++) {
    if(map[s[j]] != undefined && map[s[j]] >= i) {
      i = map[s[j]] + 1;       
    }

    map[s[j]] = j;
    currWS = j - i + 1;
    maxWS = Math.max(maxWS, currWS);
  }

  return maxWS;
};

let s = "abcabcbb";

console.log(lengthOfLongestSubstring(s));