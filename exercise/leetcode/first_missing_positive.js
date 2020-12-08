// First Missing Positive
// https://leetcode.com/problems/first-missing-positive/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let ar = nums.filter( v => v > 0 )
  let set = new Set(ar)
  let i = 1
  while (set.has(i)) { i++ }
  return i
};

/* 
public int firstMissingPositive(int[] nums) {
  if (nums == null || nums.length == 0) {
    return 1;
  }
  int length = nums.length;
  for (int i = 0; i < length; i++) {
    int num = nums[i];
    while (nums[i] <= length && nums[i] > 0 && nums[num - 1] != num) {
      nums[i] = nums[num - 1];
      nums[num - 1] = num;
      num = nums[i];
    }
  }
  for (int i = 0; i < length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return length + 1; // Nothing in middle missing, return largest
} 
*/