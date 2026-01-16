// Path Sum (Leetcode 112)

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// Top Down Approach

// var hasPathSum = function(root, targetSum) {
//     if (!root) return false;

//     // if leaf node
//     if (!root.left && !root.right) {
//         return root.val === targetSum;
//     }

//     let remainingSum = targetSum - root.val;

//     return (
//         hasPathSum(root.left, remainingSum) ||
//         hasPathSum(root.right, remainingSum)
//     );
// };

// Bottom Up Approach

function hasPathSum (root, targetSum) {
  if(!root) return false;

  if(!root.left && !root.right) {
    return root.val === targetSum;
  }

  let leftHasPathSum = hasPathSum(root.left, targetSum - root.val);
  let rightHasPathSum = hasPathSum(root.right, targetSum - root.val);

  return leftHasPathSum || rightHasPathSum;
}

/**
 * Helper: build tree from array (LeetCode style)
 */
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

// let arr = [5,4,8,11,null,13,4,7,2,null,null,null,1];
// let targetSum = 27;

let arr = [1,2,3], targetSum = 5

let root = buildTree(arr);
console.log(hasPathSum(root, targetSum)); // true
