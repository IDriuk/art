// Sort List
// https://leetcode.com/problems/sort-list/

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

var sortList = function(head) {
  if (!head) {
      return head
  }
  
  return sort(head)
  
  function sort(h) {
      if (!h.next) {
          return h
      }
      
      let p1 = h
      let p2 = h
      
      while (true) {
          if (p2.next && p2.next.next) {
              p2 = p2.next.next
          } else { 
              break 
          }
          p1 = p1.next
      }
      
      let right= p1.next
      p1.next = null
      
      return merge(sort(h), sort(right))
  }
  
  
  function merge(l, r) {
      let min
      
      if (Math.min(l.val, r.val) == l.val) {
          min = l
          l = l.next
      } else {
          min = r
          r = r.next
      }
      
      let node = min
      
      while (l && r) {
          if (Math.min(l.val, r.val) == l.val) {
              node.next = l
              l = l.next
          } else {
              node.next = r
              r = r.next
          }
          node = node.next
      }
      
      if (l) {
          node.next = l
      } else if (r) {
          node.next = r
      }
      
      return min
  }
  
};


/* var sortList = function(head) {
  if (!head) {
      return head
  }
  
  let node = head
  let ar = []
  
  while (node) {
      ar.push(node.val)
      node = node.next
  }
  
  ar.sort( (a, b) => a - b)
  
  let resHead = new ListNode(ar.shift())
  node = resHead
  while (ar.length){
      node.next = new ListNode(ar.shift())
      node = node.next
  }
  
  return resHead
}; */