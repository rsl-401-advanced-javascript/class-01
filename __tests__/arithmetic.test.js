'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Add', () => {
  it('This should return a + b', () => {
    expect(arithmetic.add(2,2)).toBe(4);
  });
});

describe('Subtract', () => {
  it('This should return a - b', () => {
    expect(arithmetic.subtract(2,2)).toBe(0);
  });
});

describe('Multiply', () => {
  it('This should return a * b', () => {
    expect(arithmetic.multiply(2,2)).toBe(4);
  });
});

describe('Divide', () => {
  it('This should return a / b', () => {
    expect(arithmetic.divide(2,2)).toBe(1);
  });
});

describe('Divide', () => {
  it('This should return a / b', () => {
    expect(arithmetic.divide(2,0)).toBe(null);
  });
});
