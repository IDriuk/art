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

/*
class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        amount = len(lists)
        interval = 1
        while interval < amount:
            for i in range(0, amount - interval, interval * 2):
                lists[i] = self.merge2Lists(lists[i], lists[i + interval])
            interval *= 2
        return lists[0] if amount > 0 else None

    def merge2Lists(self, l1, l2):
        head = point = ListNode(0)
        while l1 and l2:
            if l1.val <= l2.val:
                point.next = l1
                l1 = l1.next
            else:
                point.next = l2
                l2 = l1
                l1 = point.next.next
            point = point.next
        if not l1:
            point.next=l2
        else:
            point.next=l1
        return head.next
*/