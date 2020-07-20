// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
// Mumbling

function accum(s) {
	const result = []
  
  for (let i = 0; i < s.length; i++) {
    let j = i
    let upper = s[i].toUpperCase()
    let lower = ''
    while (j--) {
      lower = `${lower}${upper.toLowerCase()}`
    }
    result.push(`${upper}${lower}`)
  }
  
  return result.join('-')
}