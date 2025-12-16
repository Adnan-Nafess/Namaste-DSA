// length of last world leetcode => 58

// Example 1:
// Input: s = " fly me  the  moon ";
// output: 4
// Explanation: The last world is "moon" with length 4;

//// Example 2:
// Input: s = "Hello World";
// output: 5
// Explanation: The last world is "World" with length 5;

// 1st Approch in using javascript method

/*
function lengthOfLastWords(str) {
  str = str.trim();
  str = str.split(" ");
  return str[str.length-1].length;
};

// let str = "Hello World";
let str = " fly me  the  moon ";
console.log(lengthOfLastWords(str));  
*/

// 2nd Approach 
/*
function lengthOfLastWords(str) {
  let n = str.length-1;
  let count = 0;

  while(n >= 0) {
    if(str[n] !== " ") break;
    --n;
  }

  while(n >= 0) {
    if(str[n] === " ") break;
    --n;
    count++;
  }

  return count;
};

// let str = "Hello World";
let str = " fly me  the  moon ";
console.log(lengthOfLastWords(str));
*/

// 3rd Approach

function lengthOfLastWords(str) {
  let n = str.length-1;
  let count = 0;

  while(n >= 0) {
    if(str[n] !== " ") {
      count++;
    }else if(count > 0) {
      break;
    }
    n--;
  }
  return count;
};

// let str = "Hello World";
let str = " fly me  the  moon ";
console.log(lengthOfLastWords(str));