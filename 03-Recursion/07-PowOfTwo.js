// Power Of Two Leetcode => 231

function isPowerOfTwo(n) {
  if(n === 1) return true;
  else if(n < 1 || n % 2 !== 0) return false;

  return isPowerOfTwo(n/2);
};

console.log(isPowerOfTwo(16));  // true
console.log(isPowerOfTwo(1));   // true
console.log(isPowerOfTwo(3));   // false
