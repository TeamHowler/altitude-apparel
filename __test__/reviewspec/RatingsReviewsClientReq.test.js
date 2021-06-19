const axios = require('axios');
const productsAPIReqs = require('./rrHelpers.js');
const fetchRating = productsAPIReqs.fetchRating;
const fetchReviews = productsAPIReqs.fetchReviews;
const postReview = productsAPIReqs.postReview;

jest.mock('axios');

describe('Ratings & Reviews API client-side calls', () => {
  test('Should get ONE specific products meta - ratings, recommend, characteristics', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so that in case the server is down our tests wouldn't fail
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        'product_id': 18078,
        'ratings': {
          '1': '11',
          '2': '13',
          '3': '10',
          '4': '18',
          '5': '44',
          '6': '1',
        },
        'recommended': {
          'false': '51',
          'true': '46',
        },
        'characteristics': {
          'Fit': {},
          'Length': {},
          'Comfort': {},
          'Quality': {},
        },
      },
    }));

    fetchRating()
        .then((responseObj) => {
          // body info/structure - check couple key points, like product id ratings
          expect(responseObj.product_id).toBe(18078);
          // ensure ratings returned isn't empty
          expect(Object.keys(responseObj.ratings).length).toBeGreaterThan(0);
          // ensure request is made with proper URI/params (if any params)
          expect(axios.get).toHaveBeenCalledWith(
              '/reviews/meta/18078',
          );
          done();
        });
  });


  test('Should get ONE specific products first 5 reviews', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so that in case the server is down our tests wouldn't fail
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        'product_id': 18078,
        'page': 0,
        'count': 5,
        'results': [{}],
      },
    }));

    fetchReviews()
        .then((responseObj) => {
          // body info/structure - check couple key points, like product id results
          expect(responseObj.product_id).toBe(18078);
          // ensure results returned isn't empty
          expect(responseObj.results.length).toBeGreaterThan(0);
          // ensure request is made with proper URI/params (if any params)
          expect(axios.get).toHaveBeenCalledWith(
              '/reviews/18078',
          );
          done();
        });
  });


  test('Should post review for a product', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so that in case the server is down our tests wouldn't fail
    axios.post.mockImplementationOnce(() => Promise.resolve({
      data: 'Created',
    }));

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

    postReview()
        .then((responseObj) => {
          // ensure review posted - checking for 'success' response message
          expect(responseObj).toBe('Created');
          // ensure request is made with proper URI/params (if any params)
          expect(axios.post).toHaveBeenCalledWith(
              '/reviews/', newReview,
          );
          done();
        });
  });
});
