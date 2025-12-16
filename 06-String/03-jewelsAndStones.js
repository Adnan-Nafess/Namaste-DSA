// Jewels and Stones Leetcode => 771

// Example 1
// Input: jewels = "Z", stones = "zz"
// output: 0

// Example 2
// Input: jewels = "aA", stones = "aAAbbb"

// 1st Approch using javascript method
/*
function numJewelsInStone(jewels, stone) {
  let count  = 0;

  for(let i=0; i<stone.length; i++) {
    if(jewels.includes(stone[i])) {
      count++
    }
  }
  return count;
};

let jewels = "Z", stone = "zz"
// let jewels = "aA", stone = "aAAbbb"
console.log(numJewelsInStone(jewels, stone));
*/

// 2nd Approch using language agnostic
/*
function numJewelsInStone(jewels, stone) {
  let count  = 0;

  for(let i=0; i<stone.length; i++) {
    for(let j=0; j<jewels.length; j++) {
      if(stone[i] === jewels[j]) {
        count++
        break;
      }
    }
  }

  return count;
  
};

// let jewels = "Z", stone = "zz"
let jewels = "aA", stone = "aAAbbb"
console.log(numJewelsInStone(jewels, stone));
*/


// 3rd Approch using Set

function numJewelsInStone(jewels, stone) {
  let count  = 0;
  let jSet = new Set(jewels);

  for(let ch of stone) {
    if(jSet.has(ch)) {
    count++;
    }
  }

  return count++;
};

// let jewels = "Z", stone = "zz"
let jewels = "aA", stone = "aAAbbb"
console.log(numJewelsInStone(jewels, stone));