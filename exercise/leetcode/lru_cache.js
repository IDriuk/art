// LRU Cache
// https://leetcode.com/problems/lru-cache/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.cache = []
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  let index = this.cache.findIndex( ([k, _]) => k == key)
  if (index >= 0) {
      let [[key, val]] = this.cache.splice(index, 1)
      this.cache.push([key, val])
      return val
  } else {
      return index
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  let index = this.cache.findIndex( ([k, _]) => k == key)
  if (index > -1) {
      let [[key, _]] = this.cache.splice(index, 1)
      this.cache.push([key, value])
      return
  }
  
  if (this.cache.length == this.capacity) {
      this.cache.shift()
  }
  
  this.cache.push([key, value])
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

/*
private final int capacity;
private final Map<Integer, Node> cache;
private final Node head;
private final Node tail;

public LRUCache(int capacity) {
  this.capacity = capacity;
  cache = new HashMap<>();
  head = new Node();
  tail = new Node();
  head.next = tail;
  tail.prev = head;
}

public int get(int key) {
  if (!cache.containsKey(key)) {
    return -1;
  }
  Node node = cache.get(key);
  moveToHead(node);
  return node.val;
}

public void set(int key, int value) {
  if (cache.containsKey(key)) {
    Node node = cache.get(key);
    node.val = value;
    moveToHead(node);
  } else {
    Node newNode = new Node(key, value);
    addNode(newNode);
    cache.put(key, newNode);
    if (cache.size() > capacity) {
      Node last = tail.prev;
      removeNode(last);
      cache.remove(last.key);
    }
  }
}

private void moveToHead(Node node) {
  removeNode(node);
  addNode(node);
}

private void removeNode(Node node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
}

private void addNode(Node node) {
  node.prev = head;
  node.next = head.next;
  head.next.prev = node;
  head.next = node;
}
*/