const axios = require('axios');
const config = require('../config.js');

const sendAPIRequest = (addtlUrlPath, reqMethod, callback, reqBody) => {
// console.log('args in api req helper====', addtlUrlPath, reqMethod, callback);
console.log('data inside sendAPI req', reqBody);
  const options = {
    method: reqMethod,
    // url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld' + addtlUrlPath,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`,
    },
    data: reqBody,
  };
  // console.log('options in helper=====', options);
  axios(options)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((err) => {
        callback(err, null);
      });
};

module.exports.sendAPIRequest = sendAPIRequest;
