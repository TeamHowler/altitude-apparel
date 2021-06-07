//  build controllers to obtain product data from api
const api = require('../../helpers/sendAPIRequest.js');

module.exports = {
  getAll: function(req, res) {
    api.sendAPIRequest('/products', 'GET', (err, result) => {
      if (err) {
        console.log('err in app.get====', err);
        res.send(err);
      } else {
        console.log('result in app.get===', result);
        res.send(result);
      }
    });
  },

  getOne: function(req, res) {
    const id = req.params.product_id;
    api.sendAPIRequest('/products/' + `${id}`, 'GET', (err, result) => {
      if (err) {
        console.log('err in app.get====', id);
        res.send(err);
      } else {
        console.log('result in app.get===', result);
        res.send(result);
      }
    });
  },

  getStyles: function(req, res) {
    const id = req.params.product_id;
    api.sendAPIRequest('/products/' + `${id}` + '/styles',
        'GET', (err, result) => {
          if (err) {
            console.log('err in app.get====', err);
            res.send(err);
          } else {
            console.log('result in app.get===', result);
            res.send(result);
          }
        });
  },
// post: function (req, res) {}
// a function which handles posting a message to the database
};
