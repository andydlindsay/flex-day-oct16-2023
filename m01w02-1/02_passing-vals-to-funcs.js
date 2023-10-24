// const myNum = 10;

// let copy = myNum;
// copy = null;

// const changeMyNum = function(num) {
//   num = 20;
//   console.log('the num is', num);
// };

// console.log(myNum); // 10

// changeMyNum(myNum);

// console.log(myNum); // 10


const myDinosaur = {
  species: 'T Rex',
  colour: 'mottled grey feathers'
};

console.log(myDinosaur);

const changeMyObject = function(obj) {
  obj.species = 'triceratops';
  console.log('inside the function', obj);
};

changeMyObject(myDinosaur);

console.log(myDinosaur);


