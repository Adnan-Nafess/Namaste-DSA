// Binary Tree Levek order Traversal 102

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let queue = [root];
    let ans = [];

    while (queue.length) {
        let levelArr = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            levelArr.push(curr.val);

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        ans.push(levelArr);
    }

    return ans;
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

// ✅ TEST CASE
let arr = [3, 9, 20, null, null, 15, 7];
let root = buildTree(arr);

console.log(levelOrder(root));
