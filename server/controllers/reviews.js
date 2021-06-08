const api = require('../../helpers/sendAPIRequest.js');

module.exports = {
  getAll: function(req, res) {
    const id = req.params.product_id;
    api.sendAPIRequest(`/reviews/?product_id=${id}`, 'GET', (err, result) => {
      if (err) {
        console.log('err in app.get====', err);
        res.send(err);
      } else {
        console.log('result in app.get===', result);
        res.send(result);
      }
    });
  },

  getMeta: function(req, res) {
    const id = req.params.product_id;
    api.sendAPIRequest(`/reviews/meta/?product_id=${id}`, 'GET',
        (err, result) => {
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

