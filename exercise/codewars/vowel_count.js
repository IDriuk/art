// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  
  for (let l of str) {
    if (vowels.indexOf(l) >= 0 ) {
      vowelsCount++
    }
  }
  
  
  return vowelsCount;
}