// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s)
{
  let ar = s.split('')
  let isOdd = ar.length % 2
  let half = ar.length / 2

  
  if (isOdd) {
    return ar[~~half]
  } else {
    return [ar[half -1], ...ar[half]].join('')
  }
  
}