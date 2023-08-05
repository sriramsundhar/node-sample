import express, { Express, Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  console.log("YAA");
  
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
