// Write a function that return the number of negative numbers in an array

function countNegative(arr) {

  let count = 0;

  for(let i=0; i<arr.length; i++) {
    if(arr[i] < 0) {
      count++
    }
  }

  return count;

};

let arr = [2, -9, 17, 0, 1, -10, -4, 8];
console.log(countNegative(arr));



