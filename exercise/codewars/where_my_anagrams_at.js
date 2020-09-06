// Where my anagrams at?
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
  let s = word.split('').sort().join('')
  let result = words.filter( w => s == w.split('').sort().join(''))
  return result
}

/*  
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}
*/