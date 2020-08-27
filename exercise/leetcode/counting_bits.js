// Counting Bits
// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let answer = []
  for ( let i = 0; i <= num; i++) {
      answer.push(i.toString(2).replace(/0/g, '').length)
  }
  return answer
};

// public int[] countBits(int num) {
//   int[] res = new int[num  + 1];
//   for (int i = 0; i <= num; i++) {
//       if (i <= 1) {
//           res[i] = i&1;
//       } else {
//           res[i] = res[i>>1] + (i&1);
//       }
//   }
//   return res;
// }