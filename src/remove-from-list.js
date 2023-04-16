const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {
  if (!l) return null;
  if (l.value === k) {
    if (l.next) {
      return removeKFromList(l.next, k)
    } else return null
  } else l.next = removeKFromList(l.next, k);
  return l;
} 

module.exports = {
  removeKFromList
};
