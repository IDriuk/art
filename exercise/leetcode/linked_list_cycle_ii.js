// Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next || !head.next.next) {
      return null
  }
  
  let p1 = head.next
  let p2 = head.next.next
  
  while (p1 != p2) {
      if (!p2.next || !p2.next.next) {
          return null
      }
      p1 = p1.next
      p2 = p2.next.next
  }
  
  p1 = head
  while (p1 != p2) {
      p1 = p1.next
      p2 = p2.next
  }
  
  return p1
};