# M03W06 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware
- [x] Common Errors
  - [x] Address in Use
  - [x] Cannot Set Headers

### Web Server
* Serve up images, videos, files, HTML, CSS, JS
* Be served over HTTP

### HTTP
* Hyper-Text Transfer Protocol
* Request/Reponse Protocol


client <===========tcp/http===========> server
response

### Request
* HTTP Method => tells the server what you would like to accomplish
  * GET => I'd like to retrieve information
  * POST => I'd like to send information to the server
* Path/url/endpoint => tells the server what resource we want to act on
  * /urls /users /cars /products/5

* GET /urls
* POST /login

* Body => the contents of the request/envelope

http://localhost:3000 /users


### Response
* Status code
  * 1xx - routing codes
  * 2xx - everything went okay
  * 3xx - redirections
  * 4xx - client made a mistake
  * 5xx - server has had an error
* Content - images, videos, HTML, CSS, JS


```js
const net = require('net');
const port = 3000;

const server = net.createServer();

server.on('connection', (connection) => {
  connection.write('hello there');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```

```js
const http = require('http');
const port = 3000;

const server = http.createServer();

server.on('request', (request, response) => {
  response.write('hello');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```

### Middleware
* Code that sits between the request and the response
                    server
client <=========> middleware <========> middleware <======> route handler
response
                  body-parser           cookie-parser
                  request.body          request.cookie
                  next()                next()


















