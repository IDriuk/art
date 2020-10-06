// House Robber III
// https://leetcode.com/problems/house-robber-iii/solution/

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
var rob = function(root) {
  
  let countRob = memoize(helper)
  
  return countRob(root, false)
  
  function helper(node, parentRobbed) {
      if (!node) {
          return 0
      }
      
      if (parentRobbed) {
          let result = helper(node.left, false) + helper(node.right, false)
          return result
      } else {
          let rob = node.val + helper(node.left, true) + helper(node.right, true)
          let notRob = helper(node.left, false) + helper(node.right, false)
          let result = Math.max(rob, notRob)
          return result
      }
  }
  
  function memoize(fn) {
    const cache = {};
    return function(...args) {
      if (cache[args]) {
        return cache[args];
      }

      const result = fn.apply(this, args);
      cache[args] = result;

      return result;
    };
  }

};

/*
class Solution:
    def rob(self, root: TreeNode) -> int:
        def helper(node):
            # return [rob this node, not rob this node]
            if not node:
                return (0, 0)
            left = helper(node.left)
            right = helper(node.right)
            # if we rob this node, we cannot rob its children
            rob = node.val + left[1] + right[1]
            # else we could choose to either rob its children or not
            not_rob = max(left) + max(right)
            return [rob, not_rob]

        return max(helper(root)) 
*/