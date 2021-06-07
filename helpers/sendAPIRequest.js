const axios = require('axios');
const config = require('../config.js');

const sendAPIRequest = (addtlUrlPath, reqMethod, callback) => {
  const options = {
    method: reqMethod,
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/' + addtlUrlPath,
    // url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
    },
  };
  axios(options)
      .then((response) => {
        callback(null, response);
      })
      .catch((err) => {
        callback(err, null);
      });
};

module.exports.sendAPIRequest = sendAPIRequest;
