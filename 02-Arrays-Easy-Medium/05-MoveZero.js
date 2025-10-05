// Move Zero Leetcode => 283

function moveZero(nums) {
  let x = 0;    // point to the index

  for(let i=0; i<nums.length; i++) {
    if(nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  // move all zero till the end
  for(let i=x; i<nums.length; i++) {
    nums[i] = 0;
  }
};

let nums = [0, 1, 0, 3, 12];
moveZero(nums);

console.log(nums);

