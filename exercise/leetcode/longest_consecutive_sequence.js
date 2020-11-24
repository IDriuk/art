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

/*
class Solution:
    def longestConsecutive(self, nums):
        longest_streak = 0
        num_set = set(nums)

        for num in num_set:
            if num - 1 not in num_set:
                current_num = num
                current_streak = 1

                while current_num + 1 in num_set:
                    current_num += 1
                    current_streak += 1

                longest_streak = max(longest_streak, current_streak)

        return longest_streak
*/