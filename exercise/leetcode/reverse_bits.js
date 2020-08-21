// Reverse Bits
// https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let str = n.toString(2)
  let zerosCount = 32 - str.length
  for ( let i = 0; i < zerosCount; i++) {
    str = '0' + str
  }
  return parseInt(str.split('').reverse().join(''), 2)
};

/* 
class Solution {
  public:
  uint32_t reverseBits(uint32_t n) {
    uint32_t ret = 0, power = 31;
    while (n != 0) {
      ret += (n & 1) << power;
      n = n >> 1;
      power -= 1;
    }
    return ret;
  }
}; 
*/