// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  return nums.reduce((a, v, i) => {
      return [...a, nums.slice(0, i + 1).reduce( (a, v) => a + v, 0)]
  }, [])
};