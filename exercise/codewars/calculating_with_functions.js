// Calculating with Functions
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function applyMath(ld, s) {
  let { op, d } = s
  
  switch (op) {
      case '+': return ld + parseInt(d)
      case '-': return ld - d
      case '*': return ld * d
      case '/': return Math.floor(ld / d)
  }
}

function zero(s) {
  if(!s) return '0'
  
  return applyMath(0, s)
}
function one(s) {
  if(!s) return '1'
  return applyMath(1, s)
}
function two(s) {
  if(!s) return '2'
  return applyMath(2, s)
}
function three(s) {
  if(!s) return '3'
  return applyMath(3, s)
}
function four(s) {
  if(!s) return '4'
  return applyMath(4, s)
}
function five(s) {
  if(!s) return '5'
  return applyMath(5, s)
}
function six(s) {
  if(!s) return '6'
  return applyMath(6, s)
}
function seven(s) {
  if(!s) return '7'
  return applyMath(7, s)
}
function eight(s) {
  if(!s) return '8'
  return applyMath(8, s)
}
function nine(s) {
  if(!s) return '9'
  return applyMath(9, s)
}

function plus(d) {
  return {op: '+', d}
}
function minus(d) {
  return {op: '-', d}
}
function times(d) {
  return {op: '*', d}
}
function dividedBy(d) {
  return {op: '/', d}
}

// function zero(func)   { return func ? func(0) : 0; };
// function one(func)    { return func ? func(1) : 1; };
// function two(func)    { return func ? func(2) : 2; };
// function three(func)  { return func ? func(3) : 3; };
// function four(func)   { return func ? func(4) : 4; };
// function five(func)   { return func ? func(5) : 5; };
// function six(func)    { return func ? func(6) : 6; };
// function seven(func)  { return func ? func(7) : 7; };
// function eight(func)  { return func ? func(8) : 8; };
// function nine(func)   { return func ? func(9) : 9; };

// function plus( b )      { return function( a ) { return a + b; }; };
// function minus( b )     { return function( a ) { return a - b; }; };
// function times( b )     { return function( a ) { return a * b; }; };
// function dividedBy( b ) { return function( a ) { return a / b; }; };