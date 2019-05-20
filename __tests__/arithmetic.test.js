'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Add', () => {
  it('This should return null', () => {
    expect(arithmetic.add(2,2)).toBe(null);
  });
});

describe('Add', () => {
  it('This should return the sum', () => {
    expect(arithmetic.add([2,2])).toBe(4);
  });
});

describe('Add', () => {
  it('This should return the sum without the non-number', () => {
    expect(arithmetic.add([2,2,'hello'])).toBe(4);
  });
});

describe('Subtract', () => {
  it('This should return the null', () => {
    expect(arithmetic.subtract(2,2)).toBe(null);
  });
});

describe('Subtract', () => {
  it('This should return the difference', () => {
    expect(arithmetic.subtract([2,2])).toBe(0);
  });
});

describe('Subtract', () => {
  it('This should return the difference without the non-number', () => {
    expect(arithmetic.subtract([2,2,'hello'])).toBe(0);
  });
});

describe('Multiply', () => {
  it('This should return null', () => {
    expect(arithmetic.multiply(2,2)).toBe(null);
  });
});

describe('Multiply', () => {
  it('This should return the product', () => {
    expect(arithmetic.multiply([2,2])).toBe(4);
  });
});

describe('Multiply', () => {
  it('This should return the product without the non-number', () => {
    expect(arithmetic.multiply([2,2,'hello'])).toBe(4);
  });
});

describe('Divide', () => {
  it('This should return a / b', () => {
    expect(arithmetic.divide(2,2)).toBe(1);
  });
});

describe('Divide', () => {
  it('This should return null', () => {
    expect(arithmetic.divide(2,0)).toBe(null);
  });
});
