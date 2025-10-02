// Find Second Largest Numbers in an Array

function findSecondLargest(arr) {
  let largest =  -Infinity;
  let secondLargest = -Infinity;

  if(arr.length < 2) {
    return null;
  }

  for(let i=0; i<arr.length; i++) {
    if(arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }else if(arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;

};

// let arr = [10];
let arr = [4, 9, 0, 8, 7, 1, 9];
let result = findSecondLargest(arr);

console.log(result);