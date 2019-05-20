'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(arr) {
  if (arithmetic.arrayCheck(arr)) {
    return arr.reduce((acc,curr) => this.numberCheck(curr) ? acc += curr : acc, 0);
  } else {
    return null;
  }
};

arithmetic.subtract = function(arr) {
  if (arithmetic.arrayCheck(arr)) {
    return arr.reduce((acc,curr) => this.numberCheck(curr) ? acc - curr : acc);
  } else {
    return null;
  }
};

arithmetic.multiply = function(arr) {
  if (arithmetic.arrayCheck(arr)) {
    return arr.reduce((acc,curr) => this.numberCheck(curr) ? acc * curr : acc);
  } else {
    return null;
  }
};

arithmetic.divide = function(a,b) {
  if (this.numberCheck(a) && this.numberCheck(b) && a !== 0 && b !== 0) {
    return a/b;
  } else {
    return null;
  }
};

arithmetic.arrayCheck = input => Array.isArray(input);
arithmetic.numberCheck = input => input === (input|0);