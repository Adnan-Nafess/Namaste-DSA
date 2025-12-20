// Valid Anagram Leetcode => 242

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false


function isAnagram(s, t) {
  if(s.length !== t.length) return false;

  let map = {};

  for(let i=0; i<s.length; i++) {
    if(!map[s[i]]) {
      map[s[i]] = 1;
    }else {
      map[s[i]]++;
    }
  }

  for(let i=0; i<t.length; i++) {
    if(!map[t[i]] || map[t[i]] < 0) {
      return false;
    }else {
      map[t[i]]--
    }
  }

  return true;
}


let s = "anagram", t = "nagaram";
// let s = "rat", t = "car";
console.log(isAnagram(s, t));

