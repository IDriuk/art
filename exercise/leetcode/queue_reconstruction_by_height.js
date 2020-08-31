// Queue Reconstruction by Height
// https://leetcode.com/problems/queue-reconstruction-by-height/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let ar = people.sort( (a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0])
  
  return ar.reduce( (ac, v) => [
                                ...ac.slice(0, v[1]), 
                                v, 
                                ...ac.slice(v[1])
                               ], [])
};