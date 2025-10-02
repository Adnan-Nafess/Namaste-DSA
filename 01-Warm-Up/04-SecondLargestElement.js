// Find Second Largest Numbers in an Array

function findSecondLargest(arr) {
  let largest =  -Infinity;
  let secondLargest = -Infinity;

  for(let i=0; i<arr.length; i++) {
    if(arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }else if(arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;

};

let arr = [4, 9, 0, 8, 7, 1];
let result = findSecondLargest(arr);

console.log(result);