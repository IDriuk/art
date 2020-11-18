// Serialize and Deserialize Binary Tree
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) {
      return ''
  }
  
  let res = []
  let q = [root]
  let node
  
  while (q.length > 0) {
      node = q.shift()
      if (!node) {
          res.push('null')
      } else {
          res.push(node.val)
          q.push(node.left)
          q.push(node.right)
      }
  }
  
  while (res[res.length - 1] == 'null') {
      res.pop()
  }
  
  return res.join(',')
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  if (!data || data == '') {
      return null
  }
  
  let ar = data.split(',')
  let root = new TreeNode(ar.shift())
  let q = [root]
  let node
  let val
  
  while (q.length > 0) {
      node = q.shift()
      if (ar.length > 0) {
          val = ar.shift()
          if (val != 'null') {    
              node.left = new TreeNode(+val)
              q.push(node.left)
          }
      }
      if (ar.length > 0) {
          val = ar.shift()
          if (val != 'null') {    
              node.right = new TreeNode(+val)
              q.push(node.right)
          }
      }     
  }
  
  return root
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/