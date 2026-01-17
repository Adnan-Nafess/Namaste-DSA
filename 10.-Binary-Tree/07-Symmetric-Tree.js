// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Build tree from level-order array
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

function isSymmetric (root) {

  function isMirror(left, right) {
    if(!left && !right) return true;

    if(!left || !right) return false;

    return left.val === right.val &&
       isMirror(left.left, right.right) &&
       isMirror(left.right, right.left)
  }

  return isMirror(root.left, root.right);

}

// TEST
// let arr = [2, 3, 3, 4, 5, null, 4];
let arr = [1, 2, 2, 3, 4, 4, 3];
let root = buildTree(arr);

console.log(isSymmetric(root));
