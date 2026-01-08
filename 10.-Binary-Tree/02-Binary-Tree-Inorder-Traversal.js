// Binary Tree Inorder Traversal (Leetcode 94)

// ================= TreeNode Definition =================
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// ================= Build Tree from Array (Level Order) =================
function buildTree(arr) {
  if (!arr.length) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    let curr = queue.shift();

    // left child
    if (arr[i] !== null && arr[i] !== undefined) {
      curr.left = new TreeNode(arr[i]);
      queue.push(curr.left);
    }
    i++;

    // right child
    if (arr[i] !== null && arr[i] !== undefined) {
      curr.right = new TreeNode(arr[i]);
      queue.push(curr.right);
    }
    i++;
  }

  return root;
}

// ================= Inorder Traversal =================
function inorderTraversal(root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;          // BASE CASE
    traversal(curr.left);       // LEFT
    ans.push(curr.val);         // ROOT
    traversal(curr.right);      // RIGHT
  }

  traversal(root);
  return ans;
}

// ================= TEST IN VS CODE =================
let arr = [1,2,3,4,5,null,8,null,null,6,7,9];
let root = buildTree(arr);

console.log(inorderTraversal(root));
