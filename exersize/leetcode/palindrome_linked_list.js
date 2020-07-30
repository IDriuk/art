// Palindrome Linked List
//https://leetcode.com/problems/palindrome-linked-list/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) return true
  var cur = head
  var ar = []
  
  while (cur) {
      ar.push(cur.val)
      cur = cur.next
  }
  
  let i = 0;
  let j = ar.length - 1
  while (i <= j) {
      if (ar[i] != ar[j]) {
          return false
      }
      i++
      j--
  }
  
  return true
};