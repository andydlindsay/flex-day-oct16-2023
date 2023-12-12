console.log('hello');

// $.ajax({
//   method: 'GET',
//   url: '/api/food-items',
//   success: (data) => {
//     console.log(data);
//   }
// });

$.ajax({
  method: 'GET',
  url: '/api/food-items'
})
  .then((data) => {
    console.log('inside the promise');
    console.log(data);
  });