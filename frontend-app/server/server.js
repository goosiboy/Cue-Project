const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send(`Express.js middleware alive at port ${port}`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
