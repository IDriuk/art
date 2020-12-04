// Word Search II
// https://leetcode.com/problems/word-search-ii/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  if (!board.length || !board[0].length) {
    return [];
  }

  let m = board.length;
  let n = board[0].length;
  let root = buildTrie(words);
  let res = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      track(i, j, root);
    }
  }

  return res;

  function track(i, j, prev) {
    if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] == "#") {
      return;
    }

    let c = board[i][j];
    if (prev.next[c]) {
      let node = prev.next[c];
      if (node.word) {
        res.push(node.word);
        node.word = null;
      }
      board[i][j] = "#";
      track(i - 1, j, node);
      track(i + 1, j, node);
      track(i, j - 1, node);
      track(i, j + 1, node);
      board[i][j] = c;
    }
  }

  function buildTrie(words) {
    let root = new TrieNode();
    let i = 0;
    while (i < words.length) {
      let node = root;
      let word = words[i];
      for (let i = 0; i < word.length; i++) {
        let l = word.charAt(i);
        if (!node.next[l]) {
          node.next[l] = new TrieNode();
        }
        node = node.next[l];
      }
      node.word = word;
      i++;
    }
    return root;
  }

  function TrieNode() {
    this.next = {};
    this.word = null;
  }
};
