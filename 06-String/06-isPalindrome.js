// 125 Valid Palindrome

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// 1st Approach 
/*
function isPalindrome(s) {
  s = s.toLowerCase();

  let filterString = "";
  let prev = "";

  for(let i=0; i<s.length; i++) {
    if(s[i].match(/[a-z0-9]/)) {
      filterString = filterString + s[i];
       prev = s[i] + prev;
    }
  }

  return filterString === prev;
}
*/


// 2nd Approach using Two Pointer 

function isPalindrome (s) {
  s = s.toLowerCase();

  let i = 0;
  let j = s.length -1;
  
  while(i <= j) {
    if(!s[i].match(/[a-z0-9]/)) {
      i++;
    }
    else if(!s[j].match(/[a-z0-9]/)) {
      j--;
    }
    else if(s[i] === s[j]) {
      i++;
      j--;
    }
    else {
      return false;
    }
  }

  return true;
}


let s = "A man, a plan, a canal: Panama";
// let s = "race a car"
// let s = " "

console.log(isPalindrome(s));