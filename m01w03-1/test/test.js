// describe(); // always optional => groups tests together
// it(); // it is a test

// describe('basic Mocha tests', () => {

  // it('can fail a test', () => {
  //   throw new Error('ooops');
  // });
  
// });

const sayHello = require('../say-hello');
const assert = require('assert');

describe('tests for the sayHello function', () => {

  it('can return a greeting for the given name', () => {
    const actual = sayHello('Elise');
    const expected = 'hello there Elise';

    assert.equal(actual, expected);
  });

  it('can handle having no arguments passed in', () => {
    const actual = sayHello();
    const expected = 'hello there';

    assert.equal(typeof actual, 'string');
    assert.equal(actual, expected);
  });

});
