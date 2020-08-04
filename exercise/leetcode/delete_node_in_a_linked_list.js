/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  let cur = node
  while (true) {
      cur.val = cur.next.val
      if (!cur.next.next) {
          cur.next = null
          return
      }
      cur = cur.next
  }
};

/* public void deleteNode(ListNode node) {
  node.val = node.next.val;
  node.next = node.next.next;
} */