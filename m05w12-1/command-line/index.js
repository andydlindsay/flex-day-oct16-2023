const pg = require('pg');

const Client = pg.Client; // single connection to the rdbms
// const Pool = pg.Pool; // collection of Clients (5); managed

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const client = new Client(config);

// console.log(process.argv);
const verb = process.argv[2];
const id = process.argv[3];
// console.log('verb', verb);

client.connect();

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    client.query('SELECT * FROM movie_villains WHERE villain = $1;', [id])
      .then((response) => {
        console.log(response.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newVillainName = process.argv[4];
    const updateQuery = 'UPDATE movie_villains SET villain = $2 WHERE id = $1;';

    client.query(updateQuery, [id, newVillainName])
      .then(() => {
        console.log('villain was updated successfully');
        client.end();
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const movie = process.argv[4];
    const insertQuery = 'INSERT INTO movie_villains (villain, movie) VALUES ($1, $2);';

    client.query(insertQuery, [villainName, movie])
      .then(() => {
        console.log(`Disney+ is creating a solo series for ${villainName}`);
        client.end();
      });

    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain has been defeated!');
        client.end();
      });
    break;

  default:
    console.log('please use a BREAD verb');
    client.end();
}
