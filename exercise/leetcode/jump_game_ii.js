// Jump Game II
// https://leetcode.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let jumps = new Array(nums.length)
  let last = nums.length - 1
  jumps[last] = 0
  
  for (let i = last - 1; i >=0 ; i--) {
      let min = Infinity
      for (let j = 1; j <= nums[i]; j++) {
          let pos = i + j
          if ( pos > last) { 
              break 
          } else if (jumps[pos] || jumps[pos] == 0 ) {
              let cur = jumps[pos] + 1
              if ( cur < min) {
                  min = cur  
              }
          }
      }
      jumps[i] = min
  }
  
  return jumps[0]
};

/*
public int jump(int[] A) {
  int step = 0;
  int last = 0; // How far we already can reach
  int cur = 0; // How far can we reach for next step

  for (int i = 0; i < A.length; i++) {
    if (i > last) { // Run out of we can reach, need one more step
      last = cur;
      step++;
      if (last >= A.length) return step;
    }
    cur = Math.max(cur, i + A[i]);
  }
  return step;
}
*/