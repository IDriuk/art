// Lowest Common Ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let pA = []
  let qA = []
  let hasP = false
  let hasQ = false
  
  search(root, [], p.val, q.val)
  
  let i = 0
  
  while (pA[i] && qA[i] && pA[i].val == qA[i].val) {
      i++
  }
  
  return qA[i - 1]
  
  function search(node, ar, p, q) {
      if (hasP && hasQ) {
          return
      } else if (node) {
          ar.push(node)
          
          if (node.val == p) {
              pA.push(...ar)
              hasP = true
          }
          
          if (node.val == q) {
              qA.push(...ar)
              hasQ = true
          }
          
          search(node.left, ar, p, q)
          search(node.right, ar, p, q)
          
          ar.pop()
      }
      
  }
};

/*
class Solution:

    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """

        # Stack for tree traversal
        stack = [root]

        # Dictionary for parent pointers
        parent = {root: None}

        # Iterate until we find both the nodes p and q
        while p not in parent or q not in parent:

            node = stack.pop()

            # While traversing the tree, keep saving the parent pointers.
            if node.left:
                parent[node.left] = node
                stack.append(node.left)
            if node.right:
                parent[node.right] = node
                stack.append(node.right)

        # Ancestors set() for node p.
        ancestors = set()

        # Process all ancestors for node p using parent pointers.
        while p:
            ancestors.add(p)
            p = parent[p]

        # The first ancestor of q which appears in
        # p's ancestor set() is their lowest common ancestor.
        while q not in ancestors:
            q = parent[q]
        return q 
*/