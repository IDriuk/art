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
var maxDepth = function(root) {
  function countDepth(node, count) {
      if (!node) return count
      
      var nextCount = count + 1
      var countLeft = node.left ? countDepth(node.left, nextCount) : nextCount
      var countRight = node.right ? countDepth(node.right, nextCount) : nextCount
      
      return Math.max(countLeft, countRight)
  }
  
  return countDepth(root, 0) 
};