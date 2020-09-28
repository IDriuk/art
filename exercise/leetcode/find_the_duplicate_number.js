// Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let tortoise = 0
  let hare = 0
  
  do {
      tortoise = nums[tortoise]
      hare = nums[nums[hare]]
  } while (tortoise != hare)
      
  tortoise = 0
  
  while (tortoise != hare) {
      tortoise = nums[tortoise]
      hare = nums[hare]
  }
  
  return tortoise
};