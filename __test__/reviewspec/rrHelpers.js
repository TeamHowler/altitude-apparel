const axios = require('axios');

const fetchRating = () => {
  return axios.get(`/reviews/meta/18078`)
      .then((response) => response.data);
};

const fetchReviews = () => {
  return axios.get(`/reviews/18078`)
      .then((response) => response.data);
};

const newReview = {
  'product_id': 18078,
  'rating': 5,
  'summary': 'Pretty neat product',
  'name': 'Billy Joe Bob',
  'body': 'Puppies really are the best! Kitties are wonderful too though! Honestly, just animals in general rock!',
  'recommend': true,
  'email': 'test@gmail.com',
  'characteristics': {
    '60618': 3,
    '60619': 3,
    '60620': 3,
    '60621': 3,
  },
};

const postReview = () => {
  return axios.post('/reviews/', newReview)
      .then((response) => response.data);
};


module.exports = {
  fetchRating,
  fetchReviews,
  postReview,
};
