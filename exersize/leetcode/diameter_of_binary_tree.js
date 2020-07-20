// https://leetcode.com/problems/diameter-of-binary-tree/submissions/
// Diameter of Binary Tree

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
var diameterOfBinaryTree = function(root) {
  if (!root) { return 0 }
  if (!root.left && !root.right) { return 0 }
  
  let diameter = 0
  
  function countSides(node) {
      let increment = 1
      let leftChildInc = 0
      let rightChildInc = 0
      
      if (node.left) {
          leftChildInc = countSides(node.left)
      }
      
      if (node.right) {
          rightChildInc = countSides(node.right)
      }
      
      let subDiameter = leftChildInc + rightChildInc
      if (subDiameter > diameter) { diameter = subDiameter }
      
      return increment + Math.max(leftChildInc, rightChildInc)
  }
  
  let countLeft = 0
  let countRight = 0
  if (root.left) {
      countLeft = countSides(root.left)
  }
  if (root.right) {
      countRight = countSides(root.right) 
  }
  let rootDiameter = countLeft + countRight
  
  return Math.max(diameter, rootDiameter) 
};