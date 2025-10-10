// Insertion Sort

function insertionSort(arr) {
  let n = arr.length;

  for(let i=0; i<n; i++) {

    let curr = arr[i];
    let prev = i - 1;

    while(arr[prev] > curr && prev >= 0) {
      arr[prev +1] = arr[prev];
      prev--;
    }

    arr[prev +1] = curr;

  }

  return arr;
};

let arr = [7, 1, 5, 12, -10, 0, 4, 2, 3];

console.log(insertionSort(arr));