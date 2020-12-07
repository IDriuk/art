// Binary Tree Maximum Path Sum
// https://leetcode.com/problems/binary-tree-maximum-path-sum/

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
 * @return {number}
 */
var maxPathSum = function(root) {
  if (!root) { return null }
  
  let max = -Infinity
  
  walk(root)
  
  return max
  
  function walk(node) {
      if(!node) { return 0 }
      
      let left = walk(node.left)
      let right = walk(node.right)
      let val = node.val
      
      left = left > 0 ? left : 0
      right = right > 0 ? right : 0
      
      let res = val + Math.max(left, right)
      let current = Math.max(res, left + val + right)
      if (current > max) { max = current }
      
      return res
  }
};