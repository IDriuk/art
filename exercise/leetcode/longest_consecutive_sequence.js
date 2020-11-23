// Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let ar = []
  
  let min = 0
  for ( let num of nums) {
      if (num < min) {
          min = num
      }
  }
  
  for ( let num of nums) {
      ar[num - min] = true
  }
  
  let longest = 0
  let current = 0
  
  for (let i = 0; i < ar.length; i++) {
      if (!ar[i]) {
          current = 0
      } else {
          current++
          if (current > longest) {
              longest = current
          }
      }
  }
  
  return longest
};