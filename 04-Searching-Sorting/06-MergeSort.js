// Merge Sort

function sortArray(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = sortArray(arr.slice(0, mid));
  let right = sortArray(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let res = [];
  let i = 0, j = 0;
  
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      res.push(left[i]);
      i++;
    }else {
      res.push(right[j]);
      j++;
    }
  }

  while(i < left.length) {
    res.push(left[i]);
    i++;
  }

  while(j < right.length) {
    res.push(right[j]);
    j++
  };

  return res;
}

// let arr = [5,1,1,2,0,0];
let arr = [5,2,3,1]
console.log(sortArray(arr));