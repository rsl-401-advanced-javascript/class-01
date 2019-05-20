'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  return a+b;
};

arithmetic.subtract = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  return a-b;
};

arithmetic.multiply = (a,b) => {
  if (a === (a|0) && b === (b|0)) {
    return a * b;
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