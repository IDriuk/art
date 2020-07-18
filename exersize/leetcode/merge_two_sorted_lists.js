// Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) { return l2 }
  if (!l2) { return l1 }
  
  var first, second;
  
  if (l1.val <= l2.val) {
      first = l1;
      second = l2;
  } else {
      first = l2;
      second = l1;
  }
  
  var head = first;
  var prev;
  
  while (first.next) {
      prev = first
      first = first.next
      while (second) {
          if (second.val > first.val ) { 
              break 
          } else {
              prev.next = second
              second = second.next
              prev = prev.next
              prev.next = first
          } 
      }
  }
  
  if (!first.next && second) {
      first.next = second
  }
  
  return head
  
};