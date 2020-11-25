// Sliding Window Maximum
// https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (!k) { return null }
  if (k == 1) { return nums }
  if (k >= nums.length) { return [Math.max(...nums)] }
  
  let q = nums.slice(0, k)
  let max = Math.max(...q)
  let res = [max]
  let pos = q.lastIndexOf(max)
  
  for (let i = k; i < nums.length; i++) {
      q.shift()
      q.push(nums[i])
      pos--
      if (pos < 0) {
          max = Math.max(...q)
          pos = q.lastIndexOf(max)
      } else if (nums[i] >= max) {
          max = nums[i]
          pos = k - 1
      }
      
      res.push(max)
  }
  
  return res
};