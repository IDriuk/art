// Decode String
// https://leetcode.com/problems/decode-string/submissions/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let decoded = s
  do {
    decoded = decoded.replace(/(\d+)\[([a-z]+)\]/gi, (m, d, s) => {
      let i = +d
      let res = ''
      while (i--) {
        res += s
      }
      return res
    })
  } while (/\d/.test(decoded))
  
  return decoded
};