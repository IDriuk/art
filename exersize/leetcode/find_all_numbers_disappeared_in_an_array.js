// Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let seq = []
  
  for (let i = 0; i < nums.length; i++) {
      seq.push(i + 1)
  }
  
  for (let index of nums) {
      seq[index - 1] = false
  }
   
  return seq.reduce((ac, val) => {
      if (val) { ac.push(val) }
      return ac
  }, [])
};