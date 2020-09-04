// Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
  let set = nums.reduce( (ac, v) => {
      ac[v] = ac[v] ? ac[v] + 1 : 1
      return ac
  }, {})
  
  return Object.entries(set).sort( (a, b) => b[1] - a[1]).slice(0,k).map( v => v[0])
};