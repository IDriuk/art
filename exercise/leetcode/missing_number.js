// Missing Number
// https://leetcode.com/problems/missing-number/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let ar = new Array(nums.length + 1).fill(0)
  
  
  for ( let i = 0; i < nums.length; i++ ) {
      ar[nums[i]] = 1
  }
  
  for ( let i = 0; i < ar.length; i++ ) {
      if (!ar[i]) return i
  }
};

// class Solution {
//   public int missingNumber(int[] nums) {
//       int expectedSum = nums.length*(nums.length + 1)/2;
//       int actualSum = 0;
//       for (int num : nums) actualSum += num;
//       return expectedSum - actualSum;
//   }
// }

// class Solution {
//   public int missingNumber(int[] nums) {
//       int missing = nums.length;
//       for (int i = 0; i < nums.length; i++) {
//           missing ^= i ^ nums[i];
//       }
//       return missing;
//   }
// }