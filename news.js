const express = require('express');
const path = require('path');
const api = require('./api/server');
const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', api);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
