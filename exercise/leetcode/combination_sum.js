// Combination Sum
// https://leetcode.com/problems/combination-sum/submissions/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = []
  const num = candidates.sort( (a,b) => a - b)
  
  function dfs(num, start, result, sum, target) {
      if (sum == target) {
          res.push([...result])
          return
      }
      
      for (let i = start; i < num.length; i++) {
          if (num[i] + sum > target) break
          
          result.push(num[i])
          dfs(num, i, result, sum + num[i], target)
          result.pop()
      }
  }

  dfs(num, 0, [], 0, target)
  
  return res
  
};