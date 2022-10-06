# Array to Binary Tree

Construct a complete binary tree from given array

# How to install ?

```
npm i array-to-tree-nodes
```

# Example

```jsx
//importing package
const BinaryTree = require("array-to-tree-nodes");

let arr = [1, 2, 3];
let tree = BinaryTree(arr);
console.log(tree);

let arr_two = [5, 4, 8, 11, null, 13, 4, 7];
let tree_two = BinaryTree(arr_two);
console.log(tree_two);
```

### Expected output

```jsx
/*
// 1
TreeNode {
    val: 1,
    left: TreeNode { val: 2, left: null, right: null },
    right: TreeNode { val: 3, left: null, right: null }
}

// 2
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
```
