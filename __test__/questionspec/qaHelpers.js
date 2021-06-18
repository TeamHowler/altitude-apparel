const axios = require('axios');

const fetchQuestions = () => {
  return axios.get(`/qa/questions/18078`)
      .then((response) => response.data);
};

module.exports = {
  fetchQuestions,
};
