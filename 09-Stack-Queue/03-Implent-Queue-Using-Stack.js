// Implement Queue using Two Stacks (LeetCode 232)

var MyQueue = function () {
  this.s1 = []; // input stack
  this.s2 = []; // output stack
};

// Push element x to the back of queue
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

// Removes the element from the front of queue and returns it
MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop();
};

// Get the front element
MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2[this.s2.length - 1];
};

// Returns whether the queue is empty
MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};


const obj = new MyQueue();
obj.push(10);
obj.push(20);
obj.push(30);

console.log(obj.peek());  // 10
console.log(obj.pop());   // 10
console.log(obj.peek());  // 20
console.log(obj.empty()); // false
