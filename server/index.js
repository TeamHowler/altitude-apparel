const express = require('express');
const api = require('../helpers/sendAPIRequest.js');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/api/products/:url', (req, res) => {
  const url = req.params.url;
  api.sendAPIRequest(url, 'GET', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
