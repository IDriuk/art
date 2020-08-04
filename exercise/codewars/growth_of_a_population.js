// Growth of a Population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
  let perc = percent / 100 || 0
  let pcurrent = p0
  let result = 0
  
  while ( pcurrent < p) {
    pcurrent = pcurrent + pcurrent * perc + aug
    result++
  }

  return result
}