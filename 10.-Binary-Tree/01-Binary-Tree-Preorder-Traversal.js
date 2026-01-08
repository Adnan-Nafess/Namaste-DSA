// Binary Tree Preorder Traversal (Leetcode 144)

// TreeNode definition
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Function to build tree from array (level order)
function buildTree(arr) {
  if (!arr.length) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    let current = queue.shift();

    if (arr[i] !== null && arr[i] !== undefined) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (arr[i] !== null && arr[i] !== undefined) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Preorder Traversal function
function preorderTraversal(root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    ans.push(curr.val);      // Root
    traversal(curr.left);    // Left
    traversal(curr.right);   // Right
  }

  traversal(root);
  return ans;
}

// ===== TEST CASE =====
let arr = [1,2,3,4,5,null,8,null,null,6,7,9];
let root = buildTree(arr);

console.log(preorderTraversal(root));
