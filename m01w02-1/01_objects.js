const studentOneName = 'alice';
const studentOneCohort = 'oct16 2023';
const studentOneIsGraduated = false;

// objects are collections of key/value pairs, hash, dictionary, associative array

const studentOne = {
  isGraduated: false
};

studentOne['name'] = 'alice';
console.log(studentOne);
studentOne['name'] = 'bob';
console.log(studentOne);

const keyName = 'age';
studentOne[keyName] = 42;

// [].slice()

// for (let i = 0; i < Array.length; i++) {
//   arr[i]
//   arr.i
// }

studentOne.keyName = 50;
studentOne.age = 50;

console.log(studentOne);

// studentOne = [];


const myArr = [1,2,3];
myArr.push(1); // [1]
myArr[1] = 2; // [1,2]
myArr[1] = 5; // [1,5]

// myArr[i]

const nestedArray = [
  [1,2,3],
  [4,5,6]
];

// nestedArray[1][1]

const nestedObj = {
  name: 'carol',
  friends: ['dean', 'elise'],
  pet: {
    species: 'dog',
    colour: 'brown',
    name: 'Dioji'
  }
};

// square bracket syntax
// nestedObj['friends'][0]
nestedObj['name'] // 'carol'
nestedObj['pet']['name'] // 'dioji'

// dot syntax
nestedObj.name // 'carol'
nestedObj.pet.name // 'dioji'

console.log()
