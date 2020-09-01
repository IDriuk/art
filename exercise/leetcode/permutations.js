// Permutations
// https://leetcode.com/problems/permutations/submissions/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []
  
  function perm(results, nums) {
      if (nums.length == 1) {
          results.push(nums[0])
          res.push(results)
      }
      
      for ( let i = 0; i < nums.length; i++) {
          let leftNums = [...nums.slice(0, i), ...nums.slice(i + 1)]
          let num = nums[i]
          let nextResults = [...results, num]
          perm(nextResults, leftNums)
      }
  }
  
  perm([], nums)

  return res
};