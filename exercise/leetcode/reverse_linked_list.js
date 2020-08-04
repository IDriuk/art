// https://leetcode.com/problems/reverse-linked-list/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head 
  
  var temp
  var prev = new ListNode
  var tail = head
  
  while (true) {
      if (head.next) {
          temp = head.next
          head.next = prev
          prev = head
          head = temp   
      } else {
          head.next = prev
          tail.next = null
          return head
      }
  }
  
};