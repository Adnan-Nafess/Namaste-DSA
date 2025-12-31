// Implement Stack using Two Queues Leetcode => 225

var MyStack = function () {
  this.q1 = []; // main queue
  this.q2 = []; // helper queue
};

// Push element x onto stack
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

// Removes the element on top of the stack and returns it
MyStack.prototype.pop = function () {
  let n = this.q1.length;

  // Move first n-1 elements from q1 to q2
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  // Last element of q1 is the stack top
  let ans = this.q1.shift();

  // Swap q1 and q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans;
};

// Get the top element
MyStack.prototype.top = function () {
  let n = this.q1.length;

  // Move first n-1 elements from q1 to q2
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  // Front element is the top
  let front = this.q1[0];

  // Move top element also to q2
  this.q2.push(this.q1.shift());

  // Swap q1 and q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return front;
};

// Returns whether the stack is empty
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};


var obj = new MyStack();

obj.push(10);
obj.push(20);
obj.push(30);

console.log(obj.top());    // 30
console.log(obj.pop());    // 30
console.log(obj.empty());  // false