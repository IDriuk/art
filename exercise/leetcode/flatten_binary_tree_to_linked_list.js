// Flatten Binary Tree to Linked List
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
  flat(root)
  
  function flat (node) {
      if (!node) return
      
      if (!node.left && !node.right) {
          return node
      } else {
          let next
          let right
          if (node.left && node.right) {
              right = node.right
              node.right = node.left
              next = flat(node.right)
              next.right = right
              next = flat(next.right)
              node.left = null
          } else if ( node.left ) {
              node.right = node.left
              next = flat(node.right)
              node.left = null
          } else {
              next = flat(node.right)
          }
          return next
      }
  }
};