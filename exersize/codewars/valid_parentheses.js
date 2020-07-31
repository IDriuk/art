// Valid parentheses
// https://leetcode.com/problems/valid-parentheses/submissions/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s || s == "") return true
  let ar = s.split('')
  const map = {'(': ')', '[' : ']', '{' : '}'}
  let stack = []
  
  for ( let i = 0; i < ar.length; i++ ) {
      if ( ar[i] in map) {
          stack.push(ar[i])
      } else if (map[stack[stack.length - 1]] == ar[i]) {
          stack.pop()
      } else {
          return false
      }
  }
  
  return !stack.length
}