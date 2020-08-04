// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript

String.prototype.toJadenCase = function () {
  return this.split(' ').map( w => {
    const letters = w.split('')
    letters[0] = letters[0].toUpperCase()
    return letters.join('')
  }).join(' ')
};


/* 
  String.prototype.toJadenCase = function() {
    return this.replace(/(^|\s)[a-z]/g, function(s){ return s.toUpperCase() });
  };
*/