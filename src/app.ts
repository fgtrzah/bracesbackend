import express from 'express';
import { request } from './core/request'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(typeof request)
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
