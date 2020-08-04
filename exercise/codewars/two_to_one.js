// Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  let set = {}
  return (s1 + s2).split('').sort().reduce((ac, el) => {
    if (!set[el]) {
      set[el] = true
      ac.push(el)
    }
    return ac
  }, []).join('')

}

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

/*
function longest(s1, s2) {
  return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
} 
*/