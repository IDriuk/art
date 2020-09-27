// Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return nums.sort((a,b) => a - b)[nums.length - k]
};

/*
var findKthLargest = function(nums, k) {
    return nums.sort((a,b) => b - a)[k - 1]
};
*/