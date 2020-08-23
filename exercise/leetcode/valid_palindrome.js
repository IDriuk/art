// Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase().replace(/([^a-z0-9])/g, '')
  return str == str.split('').reverse().join('')
};