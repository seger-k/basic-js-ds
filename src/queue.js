const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (!this.head) this.head = node;
    else this.tail.next = node;
    this.tail = node;
  }

  dequeue() {
    let {value} = this.head;
    this.head = this.head.next;
    return value;
  }
}

module.exports = {
  Queue
};
