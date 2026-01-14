// Binary Tree Postorder Traversal (Leetcode 145)

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    let curr = queue.shift();

    if (arr[i] !== null) {
      curr.left = new TreeNode(arr[i]);
      queue.push(curr.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      curr.right = new TreeNode(arr[i]);
      queue.push(curr.right);
    }
    i++;
  }

  return root;
}

const postorderTraversal = function (root) {
  if (!root) return [];

  let s1 = [root];
  let s2 = [];

  while (s1.length > 0) {
    let curr = s1.pop(); // ✅ declared
    s2.push(curr);

    if (curr.left) s1.push(curr.left);
    if (curr.right) s1.push(curr.right);
  }

  let ans = [];

  while (s2.length > 0) {
    ans.push(s2.pop().val);
  }

  return ans;
};

let arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
let root = buildTree(arr);

console.log(postorderTraversal(root));
