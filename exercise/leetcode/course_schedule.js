// Course Schedule
// https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let currents = {}
  let prevs = {}
  
  for (let p of prerequisites ) {
      let [current, prev] = p
      if (currents[current] && currents[current].length > 0) {
        currents[current].push(prev)
      } else {
        currents[current] = [prev]
      }
      if (prevs[prev] && prevs[prev].length > 0) {
        prevs[prev].push(current)
      } else {
        prevs[prev] = [current]
      }
  }
  
  let ends =Object.keys(prevs).filter( i => !currents[i])

  while( ends.length ) {
    let end = ends.shift()
    let curs = prevs[end]
    delete prevs[end]
    for (let i = 0; i < curs.length; i++) {
      let cur = curs[i]
      let cprevs = currents[cur]
      currents[cur] = cprevs.filter( v => v != end)
      if (currents[cur].length == 0) { 
        delete currents[cur]
        if (prevs[cur]) {
          ends.push(cur)
        }
      }
    }
  }

  let currentsEmpty = Object.keys(currents).length == 0
  let prevsEmpty = Object.keys(prevs).length == 0
  
  return  currentsEmpty && prevsEmpty
};