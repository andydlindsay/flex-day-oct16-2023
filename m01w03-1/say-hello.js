const sayHello = (name) => {
  if (!name) {
    return 'hello there';
  }

  return `hello there ${name}`;
};

// module.exports = {
//   sayHello: sayHello,
//   testVal: 'did this work?'
// };

// module.exports.sayHello = sayHello;
// module.exports.myVar = 'what is up';

module.exports = sayHello;
