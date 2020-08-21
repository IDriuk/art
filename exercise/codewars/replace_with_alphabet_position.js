// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/[a-z]/g, m => `${alphabet.indexOf(m) + 1} `)
    .trim()
}


/*
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
} 
 */