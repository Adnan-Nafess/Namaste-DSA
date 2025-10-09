// Binary Search

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while(start <= end) {
    // mid
    let mid = Math.floor((start + end) /2);

    if(arr[mid] === target) {
      return mid;
    }else if(arr[mid] < target) {
      start = mid +1;
    }else {
      end = mid -1;
    }
  }

  return -1;
};


let arr = [-1,0,3,5,9,12];
let target = 9;

console.log(binarySearch(arr, target));