console.log('3. top of the file');

setTimeout(() => {
  console.log('1. inside the timeout');
}, 100);

setTimeout(() => {
  console.log('2. inside the second timeout');
}, 200);

for (let i = 0; i < 1000; i++) {
  const date = new Date();
  console.log(date);
}

console.log('4. bottom of the file');
