// Reverse Integer
// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let sign = x < 0 ? '-' : ''
  x = sign == '-' ? x : -x
  x = x.toString().split('').reverse().join('')
  x = +(sign + parseInt(x))
  if ( x > 2147483647 || x <  -2147483648) return 0
  return x
};