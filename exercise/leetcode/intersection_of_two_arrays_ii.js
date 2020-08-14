// Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
  let result = []
  let hash = {}
  
  for ( let i = 0; i < nums1.length; i++) {
      let el = nums1[i]
      if (hash[el]) {
          hash[el] += 1
      } else {
          hash[el] = 1
      }
  }
  
  for ( let i = 0; i < nums2.length; i++) {
      let el = nums2[i]
      if (hash[el]) {
          result.push(el)
          hash[el]--
      }
  }
  
  return result
};

// class Solution {
//   public int[] intersect(int[] nums1, int[] nums2) {
      
   
//       if (nums1 == null || nums2 == null || nums1.length == 0 || nums2.length == 0) {
//           return new int[0];
//       }
       
//       int i = 0;
//       int j = 0;
       
//       Arrays.sort(nums1);
//       Arrays.sort(nums2);
       
//       List<Integer> result = new ArrayList<>();
       
//       while (i < nums1.length && j < nums2.length) {
//           if (nums1[i] == nums2[j]) {
//               result.add(nums1[i]);
//               i++;
//               j++;
//           } else if (nums1[i] < nums2[j]){
//               i++;
//           } else {
//               j++;
//           }
//       }
       
//       // Convert list to array
//       return listToArray(result);
//   }
   
//   private int[] listToArray(List<Integer> list) {
//       int[] result = new int[list.size()];
       
//       for (int i = 0; i < list.size(); i++) {
//           result[i] = list.get(i);
//       }
       
//       return result;
//   }
// }