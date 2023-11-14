const net = require('net');

const config = {
  host: 'localhost',
  port: '1337'
};

const connection = net.createConnection(config);

// set the encoding on the connection object
connection.setEncoding('utf-8');

// send a message to the server
// connection.write('nice to be here!');

// set the encoding on stdin
process.stdin.setEncoding('utf-8');

// listen for someone to write something into standard in (stdin)
process.stdin.on('data', (input) => {
  const trimmed = input.trim();
  connection.write(trimmed);
});

// listen for incoming messages
connection.on('data', (message) => {
  console.log('message from server:', message);
});
