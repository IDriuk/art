// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack()
    this.second = new Stack()
  }

  add(el) {
    this.first.push(el)
  }

  remove() {
    let res,val;

    while (true) {
      val = this.first.pop()
      if (val != undefined ) {
        this.second.push(val)
      } else {
        res = this.second.pop()
        break
      }
    }

    while (true) {
      val = this.second.pop()
      if (val != undefined ) {
        this.first.push(val)
      } else {
        return res
      }
    }
  }

  peek() {
    let res,val;

    while (true) {
      val = this.first.pop()
      if (val != undefined ) {
        this.second.push(val)
      } else {
        break
      }
    }

    res = this.second.peek()

    while (true) {
      val = this.second.pop()
      if (val != undefined ) {
        this.first.push(val)
      } else {
        return res
      }
    }
  }
}

module.exports = Queue;
