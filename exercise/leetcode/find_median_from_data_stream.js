// Find Median from Data Stream
// https://leetcode.com/problems/find-median-from-data-stream/

/**
 * initialize your data structure here.
 */

var Node = function(val = null, next = null) {
  this.val = val
  this.next = next
}

var MedianFinder = function() {
  this.head = null
  this.len = 0
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  let node = new Node(num)
  if (!this.head) {
      this.head = node
  } else if (this.head.val > num) {
      let temp = this.head
      this.head = node
      this.head.next = temp
  } else {
      let cur = this.head
      let prev = null
      while (cur && cur.val <= node.val) {
          prev = cur
          cur = cur.next
      }
      prev.next = node
      node.next = cur
  }
  
  this.len++
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  if (this.len == 0) {
      return null
  } else if (this.len == 1) {
      return this.head.val
  } else {
      let isEven = this.len % 2 == 0
      let mid = Math.floor(this.len / 2)
      let cur = this.head
      let prev = null
      while (mid) {
          prev = cur
          cur = cur.next
          mid--
      }
      return isEven ? (prev.val + cur.val) / 2 : cur.val
  }
};

/** 
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/

/*
class MedianFinder {
    priority_queue<int> lo;                              // max heap
    priority_queue<int, vector<int>, greater<int>> hi;   // min heap

public:
    // Adds a number into the data structure.
    void addNum(int num)
    {
        lo.push(num);                                    // Add to max heap

        hi.push(lo.top());                               // balancing step
        lo.pop();

        if (lo.size() < hi.size()) {                     // maintain size property
            lo.push(hi.top());
            hi.pop();
        }
    }

    // Returns the median of current data stream
    double findMedian()
    {
        return lo.size() > hi.size() ? lo.top() : ((double) lo.top() + hi.top()) * 0.5;
    }
};
*/