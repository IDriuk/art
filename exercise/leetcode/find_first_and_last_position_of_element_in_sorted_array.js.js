// Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/

var searchRange = function(nums, target) {
  if (!nums || nums.length == 0) {
      return [-1, -1]
  }
  
  let min = -1
  let max = -1

  let l = 0
  let r = nums.length
  
  do {
      let mid = Math.floor((l + r) / 2)
      let val = nums[mid]
      if (val <= target) {
          l = mid
          max = val == target ? mid: max
      } else {
          r = mid
      }
  } while(l < r - 1) 

  l = 0
  r = nums.length
  
  do {
      let mid = Math.floor((l + r) / 2)
      let val = nums[mid]
      if (val >= target) {
          r = mid
          min = val == target ? mid: max
      } else {
          l = mid
      }
      if ( nums[l] == target) { 
        min = l 
      }
  } while(l < r - 1) 

  max = min > max ? min : max
  min = max >= 0 && min < 0 ? max: min

  return [min, max]
};


/* 
class Solution:
    def extreme_insertion_index(self, nums, target, left):
        lo = 0
        hi = len(nums)

        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] > target or (left and target == nums[mid]):
                hi = mid
            else:
                lo = mid+1

        return lo


    def searchRange(self, nums, target):
        left_idx = self.extreme_insertion_index(nums, target, True)

        if left_idx == len(nums) or nums[left_idx] != target:
            return [-1, -1]

        return [left_idx, self.extreme_insertion_index(nums, target, False)-1] 
*/