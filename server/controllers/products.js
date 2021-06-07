//  build controllers to obtain product data from api

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
// post: function (req, res) {}
// a function which handles posting a message to the database
};
