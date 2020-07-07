// https://leetcode.com/problems/single-number/
// input [2,2,1], output [1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var set = {}
  
  while ( nums.length ) {
      var num = nums.pop()
      set[num] = set[num] ? set[num] + 1 : 1
  }
  
  var keys = Object.keys(set)
  
  for (var i = 0; i < keys.length; i++) {
      var num = keys[i]
      var count = set[num]
      if ( count == 1) {
          return num
      }
  } 
};