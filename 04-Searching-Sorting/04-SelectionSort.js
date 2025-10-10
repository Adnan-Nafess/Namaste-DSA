// Selection Sort

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

let arr = [7, 1, 5, 12, 0, 4, 3, 2];
console.log(selectionSort(arr)); // ✅ [0,1,2,3,4,5,7,12]
