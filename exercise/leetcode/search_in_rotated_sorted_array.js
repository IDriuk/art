// Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function(nums, target) {
  let result = -1
  
  if (nums.length) {
      rotateSearch(0, nums.length - 1)
  }
  
  return result
  
  function rotateSearch(left, right) {
      
      let mid = Math.floor((left + right) / 2)
      let lv = nums[left]
      let mv = nums[mid]
      let rv = nums[right]
      
      if (mv == target) {
          result = mid
      } else if (lv == target) {
          result = left
      } else if (rv == target) {
          result = right
      } else if (mid <= left || mid >= right) {
          return
      } else if (target > mv && target < rv) {
          rotateSearch(mid + 1, right - 1)
      } else if (target > lv && target < mv) {
          rotateSearch(left + 1, mid - 1)
      } else if (mv > lv && mv > rv) {
          rotateSearch(mid + 1, right - 1)
      } else if (mv < lv && mv < rv)  {
          rotateSearch(left + 1, mid - 1)
      }
  }
};