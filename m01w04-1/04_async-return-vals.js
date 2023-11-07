const higherOrderFunc = (callback) => {
  const user = {
    name: 'alice'
  };

  console.log('1. before the timeout call');
  setTimeout(() => {
    console.log('3. inside the timeout');
    user.name = 'bob';
    callback(user);
  }, 400);
  console.log('2. after the timeout call');
};

console.log('4. above the main call');
higherOrderFunc((user) => {
  console.log('6. inside the callback');
  console.log('inside the callback, user is', user);
});

console.log('5. below the main call');
