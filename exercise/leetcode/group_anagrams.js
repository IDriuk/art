// Group Anagrams
// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let sMap = {}
  
  for (let s of strs) {
      let sorted = s.split('').sort().join('')
      if (sMap[sorted]) {
          sMap[sorted].push(s)
      } else {
          sMap[sorted] = [s]
      }
  }
  
  return Object.entries(sMap).map( x => x[1])
};