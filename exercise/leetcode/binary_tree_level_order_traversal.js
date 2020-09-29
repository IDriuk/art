// Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) { return [] }
  
  let res = []
  let q = [root, 's']
  let ar = []
  
  while ( true ) {
      let node = q.shift()
      
      if (node == 's') {
          res.push(ar)
          ar = []
          if (q.length) {
              q.push('s')
          } else {
              break
          }
      } else {
          ar.push(node.val)
          if (node.left != null) q.push(node.left)
          if (node.right != null) q.push(node.right)
      }
  }
  
  return res
};