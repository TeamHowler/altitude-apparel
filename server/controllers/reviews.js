const api = require('../../helpers/sendAPIRequest.js');

module.exports = {
  getAll: function(req, res) {
    const id = req.params.product_id;
    api.sendAPIRequest(`/reviews/?product_id=${id}`, 'GET', (err, result) => {
      if (err) {
        console.log('err in app.get review.js line 8====', err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  getMeta: function(req, res) {
    const id = req.params.product_id;
    api.sendAPIRequest(`/reviews/meta/?product_id=${id}`, 'GET',
        (err, result) => {
          if (err) {
            console.log('err in app.get review.js line 21====', err);
            res.send(err);
          } else {
            res.send(result);
          }
        });
  },

  postReview: function(req, res) {
    // console.log('req params====', req.body);
    api.sendAPIRequest(`/reviews/`, 'POST',
        (err, result) => {
          if (err) {
            console.log('err in app.post reviews.js=====', err);
            res.send(err);
          } else {
            res.send(result);
          }
        }, req.body);
  },
};

