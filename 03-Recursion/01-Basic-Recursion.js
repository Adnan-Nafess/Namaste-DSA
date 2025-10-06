// Print Num 5 to 1

function fun(nums) {
  if(nums === 0) return;    // Base Case

  console.log(nums);
  nums = nums -1;
  fun(nums);
};

let nums = 5;
fun(nums);