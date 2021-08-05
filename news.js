import express from 'express';
import path from 'path';
import api from './api/server';
const app = express();
const port = 4000;

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
