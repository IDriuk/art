// Take a Ten Minute Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  let counts = {
    n: 0,
    s: 0,
    w: 0,
    e: 0
  }
  
  for ( let d of ['n', 's', 'w', 'e']) {
    counts[d] = walk.filter(dir => dir == d).length
  }
  
  let { n, s, w, e } = counts
  
  return n != s || w != e || n + s + e + w != 10 ? false : true

}