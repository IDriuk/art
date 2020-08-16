// Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let position = 32
  let count = 0
  let bit = 1
  
  while (position) {
      if (n & bit) {
          count++
      }
      bit = bit << 1
      position--
  }
  
  return count
};

/*
public int hammingWeight(int n) {
    int sum = 0;
    while (n != 0) {
        sum++;
        n &= (n - 1);
    }
    return sum;
} 
*/