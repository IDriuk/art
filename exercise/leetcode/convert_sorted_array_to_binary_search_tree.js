// Convert Sorted Array to Binary Search Tree
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums || nums.length <= 0) return null
  
  let middle = ~~(nums.length / 2)
  let left = nums.slice(0, middle)
  let right = nums.slice(middle + 1)
  let root = new TreeNode(nums[middle])
  
  root.right = sortedArrayToBST(right)
  root.left = sortedArrayToBST(left)
  
  return root
};