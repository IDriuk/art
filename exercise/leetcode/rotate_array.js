// Rotate Array
// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  while ( k >= nums.length) {
      k -= nums.length
  }
  
  let ar = [...nums]
  ar = ar.reverse()
  ar = [...ar.slice(0,k).reverse(), ...ar.slice(k).reverse()]

  for ( let i = 0; i < nums.length; i++ ) {
      nums[i] = ar[i]
  }
};