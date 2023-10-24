const myNum = 10;

const changeMyNum = function(num) {
  num = 20;
  console.log('the num is', num);
};

console.log(myNum); // 10

changeMyNum(myNum);

console.log(myNum); // 10
