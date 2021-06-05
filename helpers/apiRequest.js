const axios = require('axios');
const config = require('../config.js');

let sendAPIRequest = (addtlUrlPath, callback) => {
  let options = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/:HR-BLD17/' + addtlUrlPath,
    // url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
    .then(function(response) {
      callback(null, response);
    })
    .catch(function(err) {
      callback(err, null);
    })

}

module.exports.sendAPIRequest = sendAPIRequest;