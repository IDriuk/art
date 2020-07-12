// https://leetcode.com/problems/majority-element/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var min = nums.length / 2
  var set = {}
  var index = nums.length - 1
  var val
  
  while (index >= 0) {
      val = nums[index--]
      if (set[val] ) {
          set[val]++
      } else {
          set[val] = 1
      }
      if (set[val] >= min) return val
  }
};