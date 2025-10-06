// Print 1 to n Number

let n = 10;

function printOnetoN(x) {
  if(x > n) return;

  console.log(x);
  printOnetoN(++x);
};

printOnetoN(1);