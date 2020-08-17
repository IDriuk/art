// Remove Duplicates from Sorted Array
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/solution/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  while (true) {
      if (nums[i] == nums[i + 1]) {
          nums.splice(i + 1, 1)
      } else {
          i++
      }
      if (nums[i] == undefined) {
          return nums.length
      }
  }
};

/* public int removeDuplicates(int[] nums) {
  if (nums.length == 0) return 0;
  int i = 0;
  for (int j = 1; j < nums.length; j++) {
      if (nums[j] != nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1;
} */