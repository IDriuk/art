// Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 
var inorderTraversal = function(root) {
    
    let res = []
    
    function trav(node) {
        if (!node) { 
            return 
        } else {
            trav(node.left)
            res.push(node.val)
            trav(node.right)
        }    
    }
    
    trav(root)
    
    return res
};

/*
var inorderTraversal = function(root) {
    
    let res = []
    let stack = []
    let cur = root
    
    while ( cur || stack.length > 0) {
        while ( cur ) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
    
    return res
}; 
*/