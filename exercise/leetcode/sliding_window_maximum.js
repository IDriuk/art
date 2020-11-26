// Sliding Window Maximum
// https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (!k) { return null }
  if (k == 1) { return nums }
  if (k >= nums.length) { return [Math.max(...nums)] }
  
  let q = nums.slice(0, k)
  let max = Math.max(...q)
  let res = [max]
  let pos = q.lastIndexOf(max)
  
  for (let i = k; i < nums.length; i++) {
      q.shift()
      q.push(nums[i])
      pos--
      if (pos < 0) {
          max = Math.max(...q)
          pos = q.lastIndexOf(max)
      } else if (nums[i] >= max) {
          max = nums[i]
          pos = k - 1
      }
      
      res.push(max)
  }
  
  return res
};

/*
public int[] maxSlidingWindow(int[] nums, int k) {
  int n = nums.length;
  if (n * k == 0) return new int[0];
  if (k == 1) return nums;

  int[] left = new int[n];
  left[0] = nums[0];
  int[] right = new int[n];
  right[n - 1] = nums[n - 1];
  for (int i = 1; i < n; i++) {
    // from left to right
    if (i % k == 0) left[i] = nums[i];  // block_start
    else left[i] = Math.max(left[i - 1], nums[i]);

    // from right to left
    int j = n - i - 1;
    if ((j + 1) % k == 0) right[j] = nums[j];  // block_end
    else right[j] = Math.max(right[j + 1], nums[j]);
  }

  int[] output = new int[n - k + 1];
  for (int i = 0; i < n - k + 1; i++)
    output[i] = Math.max(left[i + k - 1], right[i]);

  return output;
} 
*/