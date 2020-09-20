// Partition Labels
// https://leetcode.com/problems/partition-labels/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let length = S.length
  if (length == 0) return []
  
  let set = {}
  
  for (let i = 0; i < length; i++) {
      if (set[S[i]]) {
          set[S[i]].max = i
      } else {
          set[S[i]] = {min: i, max: i}
      }
  }
  
  let ar = Object.entries(set).map(el => el[1]).sort((a, b) => a.min - b.min)
  
  let res = []
  let {min, max} = ar[0]

  while (ar.length) {
      let el = ar.shift()
      
      if ( el.min > max) {
          res.push(el.min - min)
          min = el.min
          max = el.max
      } else if (el.max > max) {
          max = el.max
      }
  }

  let dif = res.reduce( (ac, v) => ac - v, length)
  if (dif) { res.push(dif) }

  
  return res
};

/*
class Solution {
    public List<Integer> partitionLabels(String S) {
        int[] last = new int[26];
        for (int i = 0; i < S.length(); ++i)
            last[S.charAt(i) - 'a'] = i;
        
        int j = 0, anchor = 0;
        List<Integer> ans = new ArrayList();
        for (int i = 0; i < S.length(); ++i) {
            j = Math.max(j, last[S.charAt(i) - 'a']);
            if (i == j) {
                ans.add(i - anchor + 1);
                anchor = i + 1;
            }
        }
        return ans;
    }
}
*/