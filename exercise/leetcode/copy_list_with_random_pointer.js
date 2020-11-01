// Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/submissions/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head == null) { return null }
  
  let copyHead = { 
      val: head.val, 
      next: null, 
      random: null
  }
  head.weave = copyHead
  
  let cur = head
  let copyCur = copyHead
  
  while(cur.next) {
      let next = cur.next
      let copyNext = {
          val: next.val,
          next: null,
          random: null
      }
      
      next.weave = copyNext
      copyCur.next = copyNext

      cur = cur.next
      copyCur = copyCur.next        
  }
  
  cur = head
  do {
      let weave = cur.weave
      let random = cur.random
      
      weave.random = random != null ? random.weave : null
      
      cur = cur.next
  } while(cur)
  
  return copyHead
};