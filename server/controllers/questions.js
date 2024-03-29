const api = require('../../helpers/sendAPIRequest.js');

module.exports = {
  getAll: function(req, res) {
    const id = req.params.product_id;
    api.sendAPIRequest(`/qa/questions/?product_id=${id}`, 'GET',
        (err, result) => {
          if (err) {
            // console.log('err in app.get questions.js line 9====', err);
            res.send(err);
          } else {
            res.send(result);
          }
        });
  },

  getAnswers: function(req, res) {
    const questionId = req.params.question_id;
    api.sendAPIRequest(`/qa/questions/${questionId}/answers/?count=10`,
        'GET', (err, result) => {
          if (err) {
            // console.log('err in app.get questions.js line 22====', err);
            res.send(err);
          } else {
            res.send(result);
          }
        });
  },

};
