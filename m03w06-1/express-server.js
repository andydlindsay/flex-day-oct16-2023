const express = require('express');
const morgan = require('morgan');
const port = 54322;

const app = express();

// middleware
app.use((req, res, next) => {
  req.body = ['alice'];

  next(); // tell express that our middleware is done
});
app.use(morgan('dev'));

// const morganMiddleware = morgan('dev');
// app.use(morganMiddleware);

// GET /home
app.get('/home', (request, response) => {
  // console.log(request.body); // ['alice']
  response.status(200);
  response.send('welcome to the home page!');
});

// GET /about
app.get('/about', (req, res) => {
  res.status(201);

  const username = null;

  if (!username) {
    res.send('this is the about page');
    return;
  }

  res.send('responding again');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
