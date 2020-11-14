// Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
  let res = true
  
  validate(root)
  
  return res
  
  function validate(node, min = -Infinity, max = +Infinity) {
      if (!node) {
          return
      } else if ( node.val >= max || node.val <= min) {
          res = false
          return
      } else {
          validate(node.left, min, node.val)
          validate(node.right, node.val, max)   
      }
  }
};