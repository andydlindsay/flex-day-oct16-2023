// // looping through arrays: for..of, for..in, c-style loop

// const names = ['alice', 'bob', 'carol'];

// // for..of
// for (const name of names) {
//   console.log(name);
// }

// console.log();

// // for..in
// for (const index in names) {
//   const name = names[index];
//   console.log(name);
// }

// console.log();

// // c-style loop
// for (let i = 0; i < names.length; i++) {
//   const name = names[i];
//   console.log(name);
// }

// object looping: for..in

// there is no order to the keys in an object
const myObj = {
  age: 42,
  bff: 'bob',
  name: 'alice',
};

for (const key in myObj) {
  console.log('key', key);
  const value = myObj[key];
  console.log('value', value);
}
