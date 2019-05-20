'use strict';

const greet = require('../lib/greet');
const faker = require('faker');

const name = faker.name.firstName();

describe('Proper use', () => {
  it('Should return "hello john"', () => {
    expect(greet(name)).toBe(`hello ${name}`);
  });
});

describe('Improper use', () => {
  it('Should return null', () => {
    expect(greet(faker.random.number())).toBe(null);
  });
});

describe('Hello world!', () => {
  it('Should return "hello world"', () => {
    expect(greet('world')).toBe('hello world');
  });
});