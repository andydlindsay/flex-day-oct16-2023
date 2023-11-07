let x = 0;
console.log('x is', x);

setTimeout(() => {
  x = 10;
  console.log('inside the timeout, x is', x);
}, 1000);

console.log('bottom of file, x is', x);
