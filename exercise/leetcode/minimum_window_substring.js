// Minimum Window Substring
// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s == t) { return t }
  
  let arS = s.split("")
  let arT = t.split("")
  let lenT = t.length
  
  let hash = {}
  for (let c of arT) {
      if (!hash[c]) {
          hash[c] = 1
      } else {
          hash[c] += 1
      }
  }
  
  let minLen = Infinity
  let minSub = ''
  let sub = []
  let subHash = {}
  let count = 0
  
  for (let i = 0; i < arS.length; i++) {
      let c = arS[i]
      sub.push(c)
      
      if (!subHash[c]) {
          subHash[c] = 1
      } else {
          subHash[c] += 1
      }
      
      if (hash[c] && hash[c] >= subHash[c]) {
          count++
      }
      
      if (count == lenT) {
          while(true) {
              let l = sub[0]
              if (!hash[l]) {
                  sub.shift()
              } else if (subHash[l] > hash[l]) {
                  sub.shift()
                  subHash[l]--
              } else {
                  if (minLen > sub.length) {
                      minSub = sub.join('')
                      minLen = sub.length
                  }
                  break
              }
          }
          let l = sub.shift()
          subHash[l]--
          count--
      }
  }
  
  return minSub
};