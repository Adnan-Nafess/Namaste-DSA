// Largest Odd Number Leetcode => 1903


// Example 1:
// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

// Example 2:
// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".

// Example 3:
// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.


function oddLargestNumber(num) {
  let n = num.length -1;

  while(n >= 0) {
    if(Number(num[n]) % 2 === 1) {
      return num.substring(0, n+1);
    }
    n--;
  }
  return "";
};

let num = "52";
// let num = "4206";
// let num = "35427";

console.log(oddLargestNumber(num));