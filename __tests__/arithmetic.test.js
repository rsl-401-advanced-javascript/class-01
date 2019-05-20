'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

const randNum = faker.random.number();
const randWord = faker.random.word();

describe('Add', () => {
  it('This should return null', () => {
    expect(arithmetic.add(randNum,randNum)).toBe(null);
  });
});

describe('Add', () => {
  it('This should return the sum', () => {
    expect(arithmetic.add([randNum,randNum])).toBe(randNum + randNum);
  });
});

describe('Add', () => {
  it('This should return the sum without the non-number', () => {
    expect(arithmetic.add([randNum,randNum,randWord])).toBe(randNum + randNum);
  });
});

describe('Subtract', () => {
  it('This should return the null', () => {
    expect(arithmetic.subtract(randNum,randNum)).toBe(null);
  });
});

describe('Subtract', () => {
  it('This should return the difference', () => {
    expect(arithmetic.subtract([randNum,randNum])).toBe(randNum - randNum);
  });
});

describe('Subtract', () => {
  it('This should return the difference without the non-number', () => {
    expect(arithmetic.subtract([randNum,randNum,randWord])).toBe(randNum - randNum);
  });
});

describe('Multiply', () => {
  it('This should return null', () => {
    expect(arithmetic.multiply(randNum,randNum)).toBe(null);
  });
});

describe('Multiply', () => {
  it('This should return the product', () => {
    expect(arithmetic.multiply([randNum,randNum])).toBe(randNum * randNum);
  });
});

describe('Multiply', () => {
  it('This should return the product without the non-number', () => {
    expect(arithmetic.multiply([randNum,randNum,randWord])).toBe(randNum * randNum);
  });
});

describe('Divide', () => {
  it('This should return a / b', () => {
    expect(arithmetic.divide(randNum,randNum)).toBe(randNum / randNum);
  });
});

describe('Divide', () => {
  it('This should return null', () => {
    expect(arithmetic.divide(randNum,0)).toBe(null);
  });
});
