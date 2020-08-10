// Decode the Morse code
// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

decodeMorse = function(morseCode){
  return  morseCode
    .replace(/([.-]+)\s?/g, (_, c) => MORSE_CODE[c] )
    .split(' ').filter( v => v != '').join(' ')
}