const express = require('express');
const next = require('next');

console.log('----------------------------------');
console.log('Server environment = ' + process.env.NODE_ENV);
console.log('----------------------------------');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes');
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(handle);

  server.listen(port, error => {
    if (error) throw error;
  });
});
