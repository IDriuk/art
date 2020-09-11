// String incrementer
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString (str) {
  if ( !/\d/.test(str)) { return str + '1'}
  
  return str.replace(/\d+/, val => {
    let d = (+val + 1).toString()
    let dif = val.length - d.length
    while (dif > 0) {
      d = `0${d}`
      dif--
    } 

    return d
  })
}

// let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)