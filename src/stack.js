const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor() {
    this.array = []
  }

  push(element) {
    this.array.push(element)
  }

  pop() {
    return this.array.pop()
  }

  peek() {
    return this.array[this.array.length - 1]
  }
}

module.exports = {
  Stack
};
