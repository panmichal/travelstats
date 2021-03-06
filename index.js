import server from './server';

var config = {};

if (process.env.NODE_ENV === 'development') {
  config.port = 3000;
  config.host = 'localhost';
  server.locals.assetPath = 'http://localhost:8080/';
  server.locals.isDevelopment = true;
} else {
  config.port = 3000;
  config.host = '0.0.0.0';
  server.locals.assetPath = 'http://localhost:3000/';
  server.locals.isDevelopment = false;
}

server.listen(config.port, config.host, function (err) {
  if (err) throw err;
  console.log('Web server listening at http://%s:%d', config.host, config.port);
});
