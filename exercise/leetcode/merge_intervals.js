// Merge Intervals
// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let starts = []
  let ends = []
  
  for( let el of intervals) {
      starts.push(el[0])
      ends.push(el[1])
  }
  
  starts.sort((a, b) => a - b)
  ends.sort((a, b) => a - b)
  
  let res = []
  
  while (starts.length && ends.length) {
      let start = starts.shift()
      let end = ends.shift()
      let nextStart = starts[0]
      
      while ( nextStart <= end ) {
          starts.shift()
          nextStart = starts[0]
          end = Math.max(end, ends.shift())   
      }
      
      res.push([start, end])
  }
  
  return res
};

/*
class Solution {
    private class IntervalComparator implements Comparator<Interval> {
        @Override
        public int compare(Interval a, Interval b) {
            return a.start < b.start ? -1 : a.start == b.start ? 0 : 1;
        }
    }

    public List<Interval> merge(List<Interval> intervals) {
        Collections.sort(intervals, new IntervalComparator());

        LinkedList<Interval> merged = new LinkedList<Interval>();
        for (Interval interval : intervals) {
            // if the list of merged intervals is empty or if the current
            // interval does not overlap with the previous, simply append it.
            if (merged.isEmpty() || merged.getLast().end < interval.start) {
                merged.add(interval);
            }
            // otherwise, there is overlap, so we merge the current and previous
            // intervals.
            else {
                merged.getLast().end = Math.max(merged.getLast().end, interval.end);
            }
        }

        return merged;
    }
}
*/