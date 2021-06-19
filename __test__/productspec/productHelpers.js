const axios = require('axios');

const fetchProducts = () => {
  return axios.get(`/products/18078`)
      .then((response) => response.data);
};

const getStyles = () => {
  return axios.get(`/products/18078/styles`)
      .then((response) => response.data);
};

module.exports = {
  fetchProducts,
  getStyles,
};
