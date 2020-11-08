// Jump Game
// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (!nums || !nums.length) { return false }
  if (nums.length == 1) { return true }
  
  let dp = []
  dp[0] = true
  let last = nums.length - 1
  
  for (let i = 0; i < last; i++) {
      if (dp[i]) {
          let jumps = nums[i]
          while (jumps) {
              if (jumps + i == last) {
                  return true
              }
              dp[jumps + i] = true
              jumps--
          }
      }
  }
  
  return false
};

/*
public class Solution {
    public boolean canJump(int[] nums) {
        int lastPos = nums.length - 1;
        for (int i = nums.length - 1; i >= 0; i--) {
            if (i + nums[i] >= lastPos) {
                lastPos = i;
            }
        }
        return lastPos == 0;
    }
}
*/