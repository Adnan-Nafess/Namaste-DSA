// Linear Search

function linearSearch(arr, target) {
  
  for(let i=0; i<arr.length; i++) {
    // check if element is present or not
    if(arr[i] === target) {
      return i;
    }
  }

  return -1;
};

let arr = [4, 9, 1, 0, 2];
let target = 1;

console.log(linearSearch(arr, target));