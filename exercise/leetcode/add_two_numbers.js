// Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
  if (!l1) { return l2 }
  if (!l2) { return l1 }
  
  let cur1 = l1
  let cur2 = l2
  let over = 0
  
  let sum = new ListNode()
  let curs = sum
  
  while (true) {
      let val1 = cur1 ? cur1.val : 0
      let val2 = cur2 ? cur2.val : 0
  
      let val = val1 + val2 + over
      
      if (val >= 10) {
          val = val - 10
          over = 1
      } else {
          over = 0
      }
      
      curs.val = val
      
      if (cur1) { cur1 = cur1.next }
      if (cur2) { cur2 = cur2.next }
  
      if (cur1 || cur2 || over) {
          curs.next = new ListNode()  
          curs = curs.next
      } else {
          return sum
      }
  }
};

/*
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummyHead = new ListNode(0);
    ListNode p = l1, q = l2, curr = dummyHead;
    int carry = 0;
    while (p != null || q != null) {
        int x = (p != null) ? p.val : 0;
        int y = (q != null) ? q.val : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}
*/