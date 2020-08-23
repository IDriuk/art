// Count Primes
// https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let nonPrime = []
  let count = 0
  
  for ( let i = 2; i < n; i++ ) {
      if (!nonPrime[i]) {
          count++
          for ( let j = i; i * j < n; j++) {
              nonPrime[i * j] = true
          }
      } 
  }
  
  return count
};