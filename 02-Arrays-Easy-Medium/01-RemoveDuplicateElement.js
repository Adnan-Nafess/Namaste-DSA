// Remove Duplicate From Sorted Array Leetcode no 26

function removeDuplicatesElement(nums) {
    let x = 0;

    for(let i=0; i<nums.length; i++) {
        if(nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }

    return x + 1;
};

let arr = [0,0,1,1,1,2,2,3,3,4];
let result = removeDuplicatesElement(arr);

console.log(result);
console.log(arr.slice(0, result));  // Output => [ 0, 1, 2, 3, 4 ] 