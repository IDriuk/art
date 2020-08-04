// Shortest Unsorted Continuous Subarray
// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const sorted = [...nums].sort((a, b) => (a - b) )
  
  let minIndex = 0
  let maxIndex = -1
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] != sorted[i]) {
          minIndex = i
          break
      }
  }
  
  for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] != sorted[i]) {
          maxIndex = i
          break
      }
  }
  
  return maxIndex - minIndex + 1
};

/* without using extra space
public class Solution {
    public int findUnsortedSubarray(int[] nums) {
        int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
        boolean flag = false;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1])
                flag = true;
            if (flag)
                min = Math.min(min, nums[i]);
        }
        flag = false;
        for (int i = nums.length - 2; i >= 0; i--) {
            if (nums[i] > nums[i + 1])
                flag = true;
            if (flag)
                max = Math.max(max, nums[i]);
        }
        int l, r;
        for (l = 0; l < nums.length; l++) {
            if (min < nums[l])
                break;
        }
        for (r = nums.length - 1; r >= 0; r--) {
            if (max > nums[r])
                break;
        }
        return r - l < 0 ? 0 : r - l + 1;
    }
} 
*/