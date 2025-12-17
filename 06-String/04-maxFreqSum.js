// Find Most Frequent Vowel and Consonant Leetcode => 3541

// Example 1:
// Input: s = "successes"
// Output: 6
// Explanation:
// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.

// Example 2:
// Input: s = "aeiaeia"
// Output: 3
// Explanation:
// The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
// There are no consonants in s. Hence, maximum consonant frequency = 0.
// The output is 3 + 0 = 3.

function maxFreqSum(s) {
  let map = {};

  // store all the values with freq in a map
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  // find the max vowel and consonant inside the map

  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonat = 0;
  let mapKeys = Object.keys(map);

  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.includes(mapKeys[i])) {
      if (map[mapKeys[i]] > maxVowel) {
        maxVowel = map[mapKeys[i]];
      }
    } else {
      if (map[mapKeys[i]] > maxConsonat) {
        maxConsonat = map[mapKeys[i]];
      }
    }
  }

  return maxConsonat + maxVowel;
}

// let s = "aeiaeia";
let s = "successes";

console.log(maxFreqSum(s));
