// Meeting Rooms II
// https://leetcode.com/problems/meeting-rooms-ii/

/*
class Solution {

  public int minMeetingRooms(Interval[] intervals) {

    if (intervals.length == 0) {
      return 0;
    }

    Integer[] start = new Integer[intervals.length]
    Integer[] end = new Integer[intervals.length]

    for (int i = 0; i < intervals.length; i++) {
      start[i] = intervals[i].start
      end[i] = intervals[i].end
    }

    Arrays.sort(
      end,
      new Comparator<Integer>() {
        public int compare(Integer a, Integer b) {
          return a - b
        }
      }
    )

    Arrays.sort(
      start,
      new Comparator<Integer>() {
        public int compare(Integer a, Integer b) {
          return a - b
        }
      }
    )

    int startPointer = 0, endPointer = 0

    int usedRooms = 0;

    while (startPointer < intervals.length) {

      if (start[startPointer] >= end[endPointer]) {
        usedRooms -= 1
        endPointer += 1
      }

      usedRooms += 1
      startPointer += 1
    }

    return usedRooms
  }
} 
*/