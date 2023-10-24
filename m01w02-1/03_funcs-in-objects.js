// a function in an object is called method

// arrow functions DO NOT create `this`

let myDinosaur = {
  species: 'velociraptor',
  name: 'red fang',
  sayHello: function() {
    console.log(`${this.name} says hello and its species is ${this.species}`);
  },
  bff: {
    sayHello: function() {
      this
    }
  }
};

const copy = myDinosaur;
myDinosaur = null;

// myDinosaur.name // 'blue'

console.log(copy);
copy.sayHello();

