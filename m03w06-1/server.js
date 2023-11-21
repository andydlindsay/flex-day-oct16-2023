const http = require('http');
const port = 3000;

const server = http.createServer();

server.on('request', (request, response) => {
  console.log(request.method, request.url); // GET /

  const method = request.method;
  const url = request.url;

  if (method === 'GET' && url === '/home') {
    response.write('welcome to our website');   
  } else if (method === 'GET' && url === '/about') {
    response.write('this is the about page');
  }

  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
