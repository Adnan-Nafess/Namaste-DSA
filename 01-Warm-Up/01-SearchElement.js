// Write a function that search for an elements in an array and return the index, if the element in not present then 
// just return -1

function searchElement(arr, target) {

  for(let i=0; i<arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }

  return -1;

};

let arr = [4, 2, 0, 10, 8, 30];

let result = searchElement(arr, 10);

console.log(result);