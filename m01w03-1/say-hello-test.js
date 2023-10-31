// call the function with known arguments
// expect to get back a known/predictable result
// actual vs expected
const sayHello = require('./say-hello');
// console.log(something);

const assert = require('assert');
// // console.log(assert);

const actual = sayHello('Carol');
const expected = 'hello there Carol!!!!';

assert.strictEqual(actual, expected);
