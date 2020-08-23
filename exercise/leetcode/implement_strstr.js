// Implement strStr()
// https://leetcode.com/problems/implement-strstr/submissions/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  try { return haystack.match(needle).index } catch(e) { return -1}
};