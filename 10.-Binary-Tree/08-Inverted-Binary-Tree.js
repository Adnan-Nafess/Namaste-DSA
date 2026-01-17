// Inverted Binary Tree (Leetcode 226)

// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * Invert Binary Tree (Recursive)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;

    // swap children
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // recurse
    invertTree(root.left);
    invertTree(root.right);

    return root;
};

/**
 * Helper: build tree from array (level-order)
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

/**
 * Helper: level-order traversal (for output)
 */
function levelOrder(root) {
    if (!root) return [];

    let res = [];
    let queue = [root];

    while (queue.length) {
        let curr = queue.shift();
        res.push(curr ? curr.val : null);

        if (curr) {
            queue.push(curr.left);
            queue.push(curr.right);
        }
    }
    return res;
}

let arr = [4, 2, 7, 1, 3, 6, 9];
let root = buildTree(arr);

console.log("Before invert:", levelOrder(root));

invertTree(root);

console.log("After invert :", levelOrder(root));
