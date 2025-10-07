// Sum of all element in an array

let arr = [5, 3, 2, 0, 1];

function sumArr(n) {
  if(n === 0) return arr[n];

  return arr[n] + sumArr(n -1);
};

console.log(sumArr(arr.length -1));

