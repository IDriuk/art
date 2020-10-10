// Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length <= 0 ) {
      return null
  } else if (preorder.length == 1 ) {
      return new TreeNode(preorder[0])
  } else {
      let val = preorder.shift()
      let i = inorder.indexOf(val)
      
      let inorderLeft = inorder.slice(0, i)
      let inorderRight = inorder.slice(i + 1)
      
      let preorderLeft = preorder.slice(0, i)
      let preorderRight = preorder.slice(i)
      
      return new TreeNode(
          val, 
          buildTree(preorderLeft, inorderLeft), 
          buildTree(preorderRight, inorderRight)
      )
  }
  
};