const express = require('express');
const api = require('../helpers/sendAPIRequest.js');
const app = express();
const path = require('path');
const port = 3000;
const router = require('./routes.js');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Set up our routes
app.use('/classes', router);

// app.get('/products', (req, res) => {
//   api.sendAPIRequest('/products', 'GET', (err, result) => {
//     if (err) {
//       console.log('err in app.get====', err);
//       res.send(err);
//     } else {
//       console.log('result in app.get===', result);
//       res.send(result);
//     }
//   });
// });

app.get('/products/:product_id', (req, res) => {
  const id = req.params.product_id;
  console.log('url in app.get====', req.params);
  api.sendAPIRequest('/products/' + `${id}`, 'GET', (err, result) => {
    if (err) {
      console.log('err in app.get====', err);
      res.send(err);
    } else {
      console.log('result in app.get===', result);
      res.send(result);
    }
  });
});

app.get('/products/:product_id/styles', (req, res) => {
  const id = req.params.product_id;
  api.sendAPIRequest('/products/' + `${id}` + '/styles', 'GET', (err, result) => {
    if (err) {
      console.log('err in app.get====', err);
      res.send(err);
    } else {
      console.log('result in app.get===', result);
      res.send(result);
    }
  });
});

app.get('/products/:product_id/related', (req, res) => {
  const id = req.params.product_id;
  api.sendAPIRequest('/products/' + `${id}` + '/related', 'GET', (err, result) => {
    if (err) {
      console.log('err in app.get====', err);
      res.send(err);
    } else {
      console.log('result in app.get===', result);
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
