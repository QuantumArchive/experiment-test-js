'use strict';

var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

function proxyUber(request, response) {
  console.log('Routing Uber request for ', request.params[0]);
  console.log(process.env.UBER_TOKEN);
  (requestProxy({
    url: 'https://api.uber.com/v1/products?latitude=45.5231&longitude=-122.6765',
    headers: {
      Authorization: 'Token ' + process.env.UBER_TOKEN
    }
  }))(request, response);
};

//app.get('/uber/*', proxyUber);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
