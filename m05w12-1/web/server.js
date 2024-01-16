require('dotenv').config(); // populates process.env with key/value pairs from .env

const express = require('express');
const morgan = require('morgan');
const client = require('./database/connection');

const app = express();
// const port = 3001;
const port = process.env.PORT || 3001;

app.use(morgan('dev'));

// GET /movie-villains
app.get('/movie-villains', (req, res) => {
  client.query('SELECT * FROM movie_villains ORDER BY id;')
    .then((response) => {
      const villains = response.rows;

      // res.render('villains', { villains });
      // res.redirect();
      res.json(villains);
    });
});

// GET /movie-villains/:id
app.get('/movie-villains/:id', (req, res) => {
  const villainId = req.params.id;
  client.query('SELECT * FROM movie_villains WHERE id = $1;', [villainId])
    .then((response) => {
      const villain = response.rows[0];
      res.json(villain);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
