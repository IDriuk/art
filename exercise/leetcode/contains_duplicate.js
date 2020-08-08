/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = {}
  
  for (let el of nums) {
      if (set[el]) { 
          return true
      } else {
          set[el] = true
      }
  }
  
  return false
};