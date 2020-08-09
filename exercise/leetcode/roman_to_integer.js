// Roman to Integer
// https://leetcode.com/problems/roman-to-integer/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const rtom = { 
      I: 1, 
      V: 5, 
      X: 10, 
      L: 50, 
      C: 100, 
      D: 500, 
      M: 1000 
  }
  
  return s
      .split('')
      .map( (el, i, a) => {
          let v = rtom[a[i]]
          let nV = rtom[a[i + 1]]
          return v < nV ? -v : v})
      .reduce( (ac, v) => ac + v)
};