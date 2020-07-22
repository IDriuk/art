// symmetric-tree
// https://leetcode.com/problems/symmetric-tree/submissions/

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
var isSymmetric = function(root) {
  if(!root) { return true }
  let isSym = true
  
  function checkSym(nl, nr) {
      if (!nl && !nr) { 
          return 
      }
      
      if ((nl && !nr) || 
          (!nl && nr) || 
          (nl.val != nr.val )
      ) { 
          isSym = false; 
          return; 
      }
      
      checkSym(nl.right, nr.left)
      checkSym(nl.left, nr.right)
  }
  
  checkSym(root.left, root.right)
  
  return isSym
};

/* 
iterative approach:

public boolean isSymmetric(TreeNode root) {
    Queue<TreeNode> q = new LinkedList<>();
    q.add(root);
    q.add(root);
    while (!q.isEmpty()) {
        TreeNode t1 = q.poll();
        TreeNode t2 = q.poll();
        if (t1 == null && t2 == null) continue;
        if (t1 == null || t2 == null) return false;
        if (t1.val != t2.val) return false;
        q.add(t1.left);
        q.add(t2.right);
        q.add(t1.right);
        q.add(t2.left);
    }
    return true;
}
*/