// Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head || !n ) { return head }
  
  let pl = head
  let pr = head
  let steps = n - 1
  
  while (steps > 0 && pr.next) {
      pr = pr.next
      steps--
  }
  
  if ( steps > 0 ) { 
      return head 
  } else if (!pr.next) {
      return head.next
  }
  
  pr = pr.next
  while (pr.next) {
      pr = pr.next
      pl = pl.next
  }
  
  pl.next = pl.next.next
  
  return head
};