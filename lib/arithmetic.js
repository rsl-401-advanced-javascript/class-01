'use strict';

let arithmetic = module.exports = {};

arithmetic.add = arr => {
  if (arithmetic.arrayCheck(arr)) {
    return arr.reduce((acc,curr) => curr === (curr|0) ? acc += curr : acc, 0);
  } else {
    return null;
  };
};

arithmetic.subtract = arr => {
  if (arithmetic.arrayCheck(arr)) {
    return arr.reduce((acc,curr) => curr === (curr|0) ? acc - curr : acc);
  } else {
    return null;
  };
};

arithmetic.multiply = arr => {
  if (arithmetic.arrayCheck(arr)) {
    return arr.reduce((acc,curr) => curr === (curr|0) ? acc * curr : acc);
  } else {
    return null;
  };
};

arithmetic.divide = (a,b) => {
  if ((a === (a|0) && b === (b|0)) && a !== 0 && b !== 0) {
    return a/b;
  } else {
    return null;
  }
}

arithmetic.arrayCheck = input => Array.isArray(input);