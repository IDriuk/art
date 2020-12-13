// Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/submissions/

/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function(s) {
  let max = 0
  let stack = [-1]
  
  for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) == '(') {
          stack.push(i)
      } else {
          stack.pop()
          if (!stack.length) {
              stack.push(i)
          } else {
              max = Math.max(max, i - stack[stack.length - 1])
          }
      }
  }
  
  return max
};

/* 
var longestValidParentheses = function(s) {
  if (!s) { return 0 }
  
  let ar =  s.split('')
  let max = 0
  let open = []
  let close = 0
  
  for (let i = 0; i < ar.length; i++) {
      let el = ar[i]
      if (el == ')' && !open.length) {
          close = 0
      } else if ( el == '(' ) {
          open.push(i)
      } else {
          open.pop()
          close++
          if (close > max) { max = close }
      }
  }

  if (!open.length) {
      return max * 2
  } else {
      let start = 0
      let ars = []
      while (open.length) {
        let end = open.shift()
        ars.push(ar.slice(start, end))
        start = end + 1
      }
      ars.push(ar.slice(start))

      let maxes = []
      for (let ar of ars) {
        let localS = ar.join('')
        let localMax = longestValidParentheses(localS)
        maxes.push(localMax)
      }
      return Math.max(...maxes)
  }
  
}; 
*/

/*
public class Solution {
    public int longestValidParentheses(String s) {
        int left = 0, right = 0, maxlength = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                left++;
            } else {
                right++;
            }
            if (left == right) {
                maxlength = Math.max(maxlength, 2 * right);
            } else if (right >= left) {
                left = right = 0;
            }
        }
        left = right = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) == '(') {
                left++;
            } else {
                right++;
            }
            if (left == right) {
                maxlength = Math.max(maxlength, 2 * left);
            } else if (left >= right) {
                left = right = 0;
            }
        }
        return maxlength;
    }
}
*/