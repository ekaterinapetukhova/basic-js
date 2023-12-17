const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    value = String(value);

    if (value) {
      this.arr.push(`( ${value} )`);
    } else {
      this.arr.push(`( )`);
    }

    return this;
  },

  removeLink(position) {
    if (
      position <= 0 ||
      position > this.arr.length ||
      !Number.isInteger(position) ||
      position === undefined
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
      
    this.arr.splice(position - 1, 1);
    
    return this;

  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const x = this.arr.join('~~');
    this.arr = [];
    return x;
  }
};

module.exports = {
  chainMaker
};
