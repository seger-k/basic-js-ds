const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor() {
    this.key = null;
  }

  root() {
    return this.key;
  }

  add(data) {
    this.key = addNode(this.key, data);
    function addNode(node, value) {
      if (!node) return new Node(value);
      if (node.data === value) return node;
      if (value < node.data) {
        node.left = addNode(node.left, value)
      } else {
        node.right = addNode(node.right, value)
      }
      return node;
    }
  }

  has(data) {
    return hasNode(this.key, data);
    function hasNode(node, value) {
      if (!node) return false;
      if (node.data === value) return true;
      if (value < node.data) {
        return hasNode(node.left, value) 
      } else {
        return hasNode(node.right, value)
      }
    }
  }

  find(data) {
    return findNode(this.key, data);
    function findNode(node, value) {
      if (!node) return null;
      if (node.data === value) return node; 
      if (value < node.data) {
        return findNode(node.left, value)
      } else {
        return findNode(node.right, value)
      }
    }
  }

  remove(data) {
    this.key = removeNode(this.key, data);
    function removeNode(node, value) {
      if (!node) return null;
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) minRight = minRight.left;
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.key) return null;
    let node = this.key;
    while (node.left) node = node.left;
    return node.data;
  }

  max() {
    if (!this.key) return null;
    let node = this.key;
    while (node.right) node = node.right;
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};