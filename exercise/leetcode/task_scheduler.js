// Task Scheduler
// https://leetcode.com/problems/task-scheduler/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let taskMap = {}
  
  for (let task of tasks) {
      if (taskMap[task]) {
        taskMap[task].count++
      } else {
        taskMap[task] = { count: 1, position: -1 }
      }
  }

  let schedule = []

  let entries = Object.entries(taskMap)

  while (true) {
    let maxIndex = -1
    let maxCount = 0

    for (let i in entries) {
      let [char, { count, position }] = entries[i]
      let cur = schedule.length - 1
      if ((position < 0 || cur - position >= n) && count > maxCount) {
        maxIndex = i
        maxCount = count
      } 
    }

    if ( maxIndex >= 0 ) {
      let task = entries.splice(maxIndex, 1)
      let [[ char, { count, position }]] = task

      schedule.push(char)

      if (count > 1) {
        entries.push([
          char, 
          { 
            count: count - 1, 
            position: schedule.length - 1
          }])
      }
    } else {
      if (!entries.length) {
        return schedule.length
      }
      schedule.push("idle")
    }
    
  }
};