// 28. Find the Index of the First Occurrence in a String

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function str (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  for(let i=0; i<=n - m; i++) {
    let j = 0;
    for(j=0; i<m; j++) {
      if(haystack[i+j] !== needle[j]) {
        break;
      }
    }
    if(j === m) {
      return i;
    }
  }

  return -1;
}


let haystack = "sadbutsad", needle = "sad";

console.log(str(haystack, needle));