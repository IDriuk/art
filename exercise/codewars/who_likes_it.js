// Who likes it?
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  let length = names.length
  let likes = ' likes this'
  let like = ' like this'
  return length == 0 ? 'no one' + likes:
         length == 1 ? names[0] + likes:
         length == 2 ? names[0] + ' and ' + names[1] + like:
         length == 3 ? names[0] + ', ' + names[1] + ' and ' + names[2] + like:
         names[0] + ', ' + names[1] + ' and ' + (length - 2) + ' others' + like
}

/*
function likes (names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
} 
*/