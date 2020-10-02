// Unique Binary Search Trees
// https://leetcode.com/problems/unique-binary-search-trees/submissions/

/**
 * @param {number} n
 * @return {number}
 */

var numTrees = function(n) {
  let count = [1, 1]
    
  for (let i = 2; i < n + 1; i++) {
    for (let j = 0; j < i; j++) {
      count[i] = (count[i] ? count[i] : 0) + count[j] * count[i - j - 1];
    }
  }

  return count[n];
};