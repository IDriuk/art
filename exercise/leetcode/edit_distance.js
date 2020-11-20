// Edit Distance
// https://leetcode.com/problems/edit-distance/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let w1 = word1.split('')
  let w2 = word2.split('')
  let len1 = w1.length
  let len2 = w2.length
  
  if (len1 == 0) {
      return len2
  }
  if (len2 == 0) {
      return len1
  }

  let tab = new Array(len1 + 1).fill(null).map( _ => new Array(len2 + 1).fill(null))
  return count(0, 0)
  
  function count(i, j) {
      if (tab[i][j] != null) {
          return tab[i][j]
      }
      if ( i == len1) {
          return len2 - j
      }
      if ( j == len2) {
          return len1 - i
      }
      
      let eq = w1[i] == w2[j] ? count(i + 1, j + 1) : +Infinity
      let ins = 1 + count(i, j + 1)
      let del = 1 + count(i + 1, j)
      let rep = 1 + count(i + 1, j + 1)
      
      let res = Math.min(eq, ins, del, rep)
      tab[i][j] = res
      
      return res
  }
  
};

/*
var minDistance = function(word1, word2) {
  if (word1 == word2) { return 0 }
  
  let m = word1.length
  let n = word2.length
  
  let d = new Array(m + 1).fill(null).map( _ => new Array(n + 1).fill(0))
  
  for (let i = 1; i < m + 1; i++) {
      d[i][0] = i
  }
  
  for (let j = 1; j < n + 1; j++) {
      d[0][j] = j
  }
  
  for (let i = 1; i < m + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
          d[i][j] = Math.min(
              d[i][j - 1] + 1, 
              d[i - 1][j] + 1,
              word1.charAt(i - 1) == word2.charAt(j - 1) ?
              d[i - 1][j - 1] : d[i - 1][j - 1] + 1
          )
      }
  }
  
  return d[m][n]
};
*/