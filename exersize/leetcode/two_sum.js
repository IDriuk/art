// https://leetcode.com/problems/two-sum/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
      for ( let j = i + 1; j < nums.length; j++) {
          if ( nums[i] + nums[j] == target) {
              return [i, j]
          }
      }
  }
};

/* 
public int[] twoSum(int[] nums, int target) {
  Map<Integer, Integer> map = new HashMap<>();
  for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
      return new int[] { map.get(complement), i };
    }
    map.put(nums[i], i);
  }
  throw new IllegalArgumentException("No two sum solution");
}
*/