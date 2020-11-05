// Word Search
// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
  let result = false
  let height = board.length
  if (!height) { return result }
  let width = board[0].length
  if (height * width < word.length) { return result }
  
  let letters = word.split('')
  let start = letters[0]
  
  for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
          if (board[row][col] == start) {
              check(row, col)
          }
      }
  }
  
  function check(row, col, i = 0) {
      if ( row >= height || row < 0 || 
           col >= width  || col < 0 || 
           !board[row][col] || result) {
          return 
      }
      
      let cur = board[row][col]
      board[row][col] = false
      
      let letter = letters[i]
      let isLast = i == letters.length - 1
      
      if (cur == letter) {
          if (isLast) {
              result = true   
          } else {
              check(row, col + 1, i + 1)
              check(row + 1, col, i + 1)
              check(row, col - 1, i + 1)
              check(row - 1, col, i + 1)
          }
      }
      
      board[row][col] = cur
  }
  
  return result  
};

/* 
var exist = function(board, word) {
  let result = false
  let height = board.length
  if (!height) { return result }
  let width = board[0].length
  if (height * width < word.length) { return result }
  
  let visited = {}
  let letters = word.split('')
  let start = letters[0]
  
  for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
          if (board[row][col] == start) {
              check(row, col)
          }
      }
  }
  
  function check(row, col, i = 0) {
      if ( row >= height || row < 0 || 
           col >= width  || col < 0 || 
           visited[`${row}_${col}`] || result) {
          return 
      }
      
      visited[`${row}_${col}`] = true
      
      let cur = board[row][col]
      let letter = letters[i]
      let isLast = i == letters.length - 1
      
      if (cur == letter) {
          if (isLast) {
              result = true   
          } else {
              check(row + 1, col, i + 1)
              check(row - 1, col, i + 1)
              check(row, col + 1, i + 1)
              check(row, col - 1, i + 1)
          }
      }
      
      visited[`${row}_${col}`] = false
  }
  
  return result  
}; 
*/