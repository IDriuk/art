// Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = function(n) {
  let sum = 0

  while (n) {
    n &= (n - 1)
    sum++
  }

  return sum
};