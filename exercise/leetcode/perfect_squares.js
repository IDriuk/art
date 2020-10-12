// Perfect Squares
// https://leetcode.com/problems/perfect-squares/submissions/

var numSquares = function(n) {
  let min = Infinity

  count(n)

  return min

  function count(n, c = 0) {
    if (n == 0 && c < min) {
      min = c
      return
    } else if (n < 0 || c >= min) {
      return
    } else {
      let s = Math.floor(Math.sqrt(n))

      for ( let i = s; i >= 1; i--) {
        count(n - i * i, c + 1)
      }
    }
  }
};