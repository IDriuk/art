// https://leetcode.com/problems/move-zeroes/submissions/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeroCount = 0
  let i = 0
  while ( i < nums.length - zeroCount){
      if (nums[i] == 0) {
          nums.splice(i, 1)
          nums.push(0)
          zeroCount++
      } else {
          i++
      }
  }
};