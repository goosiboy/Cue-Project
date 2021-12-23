/* eslint-disable */
import express from 'express';
import path from 'path';

const app = express();
const port = 5000;

app.get('/', function(req, res){
  res.send('Im alive!');
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});