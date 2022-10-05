const BinaryTree = require('../index.js')

console.log(typeof BinaryTree);
console.log(BinaryTree([1, 2, 3]));
console.log(BinaryTree([5, 4, 8, 11, null, 13, 4, 7]));


/*
fumction

TreeNode {
    val: 1,
    left: TreeNode { val: 2, left: null, right: null },
    right: TreeNode { val: 3, left: null, right: null }
}

TreeNode {
  val: 5,
  left: TreeNode {
    val: 4,
    left: TreeNode { val: 11, left: [TreeNode], right: [TreeNode] },
    right: TreeNode { val: null, left: null, right: null }
  },
  right: TreeNode {
    val: 8,
    left: TreeNode { val: 13, left: null, right: null },
    right: TreeNode { val: 4, left: null, right: null }
  }
}
*/