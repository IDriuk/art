// Linked list cycle
// https://leetcode.com/problems/linked-list-cycle/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let cur = head
  let els = []
  
  while (cur) {
      if ( els.includes(cur) ) {
          return true
      }
      els.push(cur)
      cur = cur.next
  }
  
  return false
};

// faster solution
/* 
  var hasCycle = function(head) {
    
    while (head) {
        if ( head.checked ) {
            return true
        }
        head.checked = true
        head = head.next
    }
    
    return false
  };
*/

// two pointers, fast and slow runners
/*
public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false;
    }
    ListNode slow = head;
    ListNode fast = head.next;
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}
*/