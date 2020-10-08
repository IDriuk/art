// Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = null
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  if (!this.root) {
      this.root = { val: word, left: null, right: null}
  } else {
      let node = this.root
      while (true) {
          let c = word.localeCompare(node.val)
          
          if (c == 0) {
              return
          } else if ( c == -1) {
              if(node.left) {
                  node = node.left
              } else {
                  node.left = {val: word, left: null, right: null}
                  return
              }
          } else {
              if(node.right) {
                  node = node.right
              } else {
                  node.right = {val: word, left: null, right: null}
                  return
              }
          }
          
      }
  }
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let node = this.root
  while (node) {
      let c = word.localeCompare(node.val)
      if (c == 0) {
          return true
      } else if (c == -1) {
          node = node.left
      } else {
          node = node.right
      }
  }
  return false
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let node = this.root
  if (!node) { return false }
  
  while (node) {
      let val = node.val
      let valPref = val.substr(0, prefix.length)
      
      let c = prefix.localeCompare(val)
      let cPref = prefix.localeCompare(valPref)
      
      if (cPref == 0 || c == 0) {
          return true
      } else if (c == -1) {
          node = node.left
      } else {
          node = node.right
      }
  }
  return false
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/

/*
class TrieNode {

    // R links to node children
    private TrieNode[] links;

    private final int R = 26;

    private boolean isEnd;

    public TrieNode() {
        links = new TrieNode[R];
    }

    public boolean containsKey(char ch) {
        return links[ch -'a'] != null;
    }
    public TrieNode get(char ch) {
        return links[ch -'a'];
    }
    public void put(char ch, TrieNode node) {
        links[ch -'a'] = node;
    }
    public void setEnd() {
        isEnd = true;
    }
    public boolean isEnd() {
        return isEnd;
    }
}

class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    // Inserts a word into the trie.
    public void insert(String word) {
        TrieNode node = root;
        for (int i = 0; i < word.length(); i++) {
            char currentChar = word.charAt(i);
            if (!node.containsKey(currentChar)) {
                node.put(currentChar, new TrieNode());
            }
            node = node.get(currentChar);
        }
        node.setEnd();
    }

    // search a prefix or whole key in trie and
    // returns the node where search ends
    private TrieNode searchPrefix(String word) {
        TrieNode node = root;
        for (int i = 0; i < word.length(); i++) {
           char curLetter = word.charAt(i);
           if (node.containsKey(curLetter)) {
               node = node.get(curLetter);
           } else {
               return null;
           }
        }
        return node;
    }

    // Returns if the word is in the trie.
    public boolean search(String word) {
       TrieNode node = searchPrefix(word);
       return node != null && node.isEnd();
    }

    // Returns if there is any word in the trie
    // that starts with the given prefix.
    public boolean startsWith(String prefix) {
        TrieNode node = searchPrefix(prefix);
        return node != null;
    }
}

*/