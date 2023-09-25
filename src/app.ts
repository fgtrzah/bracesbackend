import express from 'express';
import { request } from './core/request'
import { OpenAPI } from './core/OpenAPI';

const app = express();
const port = 8888;

app.get('*', async (req, res) => {
  const data = await request(OpenAPI, { url: req.url, method: req.method })
  res.send(data);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
