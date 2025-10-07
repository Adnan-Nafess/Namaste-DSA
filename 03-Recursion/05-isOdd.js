// sum of all odd number in an array

let arr = [5, 3, 2, 10, 1];


function isOddElement(n) {
  let isOdd = ((arr[n] % 2) !== 0);

  if (n === 0) {
    return  isOdd ? arr[n] : 0;
  }
  return ((isOdd ? arr[n] : 0) + isOddElement(n - 1));
};


console.log(isOddElement(arr.length -1));