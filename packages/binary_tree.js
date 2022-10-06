function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function BinaryTree(arr) {
    if (!arr.length) return null;
    const root = new TreeNode(arr[0]);
    const rootarr = [root];
    for (let i = 1; i < arr.length; i += 2) {
        const curNode = rootarr.shift();
        curNode.left = new TreeNode(arr[i]);
        curNode.right = new TreeNode(arr[i + 1]);
        rootarr.push(curNode.left);
        rootarr.push(curNode.right);
    }
    return root;
}

module.exports = BinaryTree;