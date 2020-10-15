// Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits == "") {
      return []
  }
  
  let dMap = {
      "2": ["a", "b", "c"],
      "3": ["d", "e", "f"],
      "4": ["g", "h", "i"],
      "5": ["j", "k", "l"],
      "6": ["m", "n", "o"],
      "7": ["p", "q", "r", "s"],
      "8": ["t", "u", "v"],
      "9": ["w", "x", "y", "z"]
  }
  
  let maped = digits.split("").map( d => dMap[d])
  let len = maped.length
  let res = [] 
  
  combine(maped, 0, "")
  
  return res
  
  function combine(m, i, s) {
      if ( i == len ) {
          res.push(s)
      } else {
          let letters = m[i]
          for (let l of letters) {
              combine(m, i + 1, s + l)
          }
      }
  }
};