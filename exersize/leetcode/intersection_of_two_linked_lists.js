// https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  
  let pA = headA
  let pB = headB
  let lastA
  let lastB
  
  while (true) {
      if (pA == pB) {
          return pA
      } else {
          if (!pA.next) lastA = pA
          if (!pB.next) lastB = pB
          if ( lastA && lastB && lastA != lastB ) return null
          pA = pA.next || headB
          pB = pB.next || headA
      }
  }
};