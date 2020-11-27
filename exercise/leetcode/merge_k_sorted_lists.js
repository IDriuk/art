// Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(ls) {
  let head = new ListNode()
  let node = head
  
  lists = ls.filter( l => l != null)
  
  while (lists.length) {
      let min = Infinity
      for (list of lists) {
          if (list.val < min) {
              min = list.val
          }
      }
      
      for (let i = 0; i < lists.length; i++) {
          if (lists[i].val == min) {
              node.next = lists[i]
              lists[i] = lists[i].next
              node = node.next
              node.next = null
          }
      }
      
      lists = lists.filter( l => l )
  }
  
  return head.next
};