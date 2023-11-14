const net = require('net');

const server = net.createServer();
const port = 1337;

// create an array to hold all connections
const connections = [];

// listen for incoming connections
server.on('connection', (connection) => {
  console.log('a client has connected');

  // add this connection to the connections array
  connections.push(connection);

  // console.log(connection);
  connection.write('welcome to the chat room!');
  
  // configure the connection to accept utf-8 encoding
  connection.setEncoding('utf-8');

  // listen for incoming data
  connection.on('data', (message) => {
    console.log('client says:', message);

    if (message.includes('setName')) {
      // setName: alice ['setName:', 'alice']
      const name = message.split(' ')[1];
      connection.username = name;
      return;
    }

    // echo the message out to all connected clients
    for (const conn of connections) {
      // check if the connection object is NOT the one that sent the message
      if (conn !== connection) {
        conn.write(`${connection.username} says ${message}`);
      }
    }
  });
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
