// Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if ( s.length <= 1 ) { return s }

  let pal = ""
  
  for (let i = 0; i < s.length; i++) {
      countMax(i, i)
      countMax(i, i + 1)
  }
  
  function countMax(start, end) {
      if ( 
        s.charAt(start) != s.charAt(end) || 
        start < 0 || 
        end > s.length - 1
      ) {
        return
      }

      let len = end - start + 1
      if( len > pal.length) {
        pal = s.substr(start, len)
      }

      countMax(start - 1, end + 1)
  }

  return pal
};

/*
public String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";
    int start = 0, end = 0;
    for (int i = 0; i < s.length(); i++) {
        int len1 = expandAroundCenter(s, i, i);
        int len2 = expandAroundCenter(s, i, i + 1);
        int len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}

private int expandAroundCenter(String s, int left, int right) {
    int L = left, R = right;
    while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}
*/