// Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/submissions/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0
  
  while ( i < m) {
      if (nums1[i] > nums2[0]) {
          let tmp = nums1[i]
          nums1[i] = nums2[0]
          nums2[0] = tmp
          let j =0
          while ( nums2[j] > nums2[j + 1] ) {
              tmp = nums2[j]
              nums2[j] = nums2[j + 1]
              nums2[j + 1] = tmp
              j++
          }
      }
      i++
  }
  
  let j = 0
  while ( i < m + n ) {
      nums1[i] = nums2[j]
      i++
      j++
  }
};