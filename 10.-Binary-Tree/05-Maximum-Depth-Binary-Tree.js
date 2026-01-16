// Maximum Depth Binary Tree (Leetcode 104)

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * Maximum Depth of Binary Tree (Recursive)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;

    let maxLeft = maxDepth(root.left);
    let maxRight = maxDepth(root.right);

    return 1 + Math.max(maxLeft, maxRight);
};

/**
 * Helper function to build tree from array (LeetCode-style)
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

let arr = [3, 9, 20, null, null, 15, 7];
let root = buildTree(arr);

console.log(maxDepth(root));
