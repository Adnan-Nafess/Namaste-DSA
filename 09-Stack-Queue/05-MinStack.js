// Min Stack (LeetCode 155)

var MinStack = function () {
  this.s = [];
};

// Push element val onto stack
MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
    // First element: value = min
    this.s.push([val, val]);
  } else {
    // Compare current value with previous min
    let currentMin = Math.min(val, this.s[this.s.length - 1][1]);
    this.s.push([val, currentMin]);
  }
};

// Removes the element on top of the stack
MinStack.prototype.pop = function () {
  this.s.pop();
};

// Get the top element
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0];
};

// Retrieve the minimum element in the stack
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};

// ✅ Test in VS Code
const obj = new MinStack();
obj.push(5);
obj.push(3);
obj.push(7);

console.log(obj.top());    // 7
console.log(obj.getMin()); // 3
obj.pop();
console.log(obj.getMin()); // 3
obj.pop();
console.log(obj.getMin()); // 5
