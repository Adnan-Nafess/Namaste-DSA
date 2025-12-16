// Find Words Containing Leetcode => 2942

// Example 1:
// Input: words = ["Leet", "code"], x = "e";
// output: [0, 1];
// Explanation: "e" occurs in both words "Leet" and "code" hence, we return indices 0 and 1;

// Example 2:
// Input: words = ["abc", "bcd", "aaaa", "cbc"], x = "a";
// output: [0, 2];
// Explanation: "a" occurs in "abc" and "aaaa" hence, we return indices 0 and 2;

// Example 3:
// Input: words = ["abc", "bcd", "aaaa", "cbc"], x = "z";
// output: [];
// Explanation: "z" doen not occurs in any of the words hence, we return the empty array;

// 1st approch in using javascript method
/*
function findWordsContaining(words, x) {
  let res = [];

  for(let i=0; i<words.length; i++) {
    if(words[i].includes(x)) {
      res.push(i);
    }
  }
  return res;
};

let words = ["Leet", "code"], x = "e";
// let words = ["abc", "bcd", "aaaa", "cbc"], x = "a";
// let words = ["abc", "bcd", "aaaa", "cbc"], x = "z";
console.log(findWordsContaining(words, x));
*/


// 2nd Approach using language agnostic

function findWordsContaining(words, x) {
  let res = [];

  for(let i=0; i<words.length; i++) {
    for(let j=0; j<words[i].length; j++) {
      if(words[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
};

// let words = ["Leet", "code"], x = "e";
let words = ["abc", "bcd", "aaaa", "cbc"], x = "a";
// let words = ["abc", "bcd", "aaaa", "cbc"], x = "z";
console.log(findWordsContaining(words, x));
