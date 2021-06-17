const supertest = require('supertest');
const axios = require('axios');
const app = require('../../server/server.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const config = require('../../config.js');


jest.mock('axios');
const request = supertest(app);

describe('Ratings and Reviews Routes', () => {
  test('Should get ONE specific products first 5 reviews', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so in case server is down our tests won't fail
    axios.mockImplementationOnce(() => Promise.resolve({
      data: {
        'product_id': '18078',
        'page': 0,
        'count': 5,
        'results': [{}],
      },
    }));

    request.get('/reviews/18078')
        .then((response) => {
          // success response code
          expect(response.status).toBe(200);
          // body info/structure
          expect(response.body).toEqual(
              expect.objectContaining({
                'product_id': '18078',
                'page': 0,
                'count': 5,
                'results': [{}],
              }),
          );
          // ensure results isn't empty
          expect(response.body.results.length).toBeGreaterThan(0);
          // ensure request is made with headers - API key
          expect(axios).toHaveBeenCalledWith(
              options = {
                method: 'GET',
                // url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products',
                url: `${url}/reviews/?product_id=18078`,
                headers: {
                  'User-Agent': 'request',
                  'Authorization': `${config.TOKEN}`,
                },
                data: undefined,
              },
          );
          done();
        });
  });

  test('Should get meta for specific product', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so in case server is down our tests won't fail
    axios.mockImplementationOnce(() => Promise.resolve({
      data: {
        'product_id': '18078',
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

    request.get('/reviews/meta/18078')
        .then((response) => {
          // success response code
          expect(response.status).toBe(200);
          // body info/structure
          expect(response.body).toEqual(
              expect.objectContaining({
                'product_id': '18078',
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
              }),
          );
          // ensure results isn't empty
          expect(Object.keys(response.body.ratings).length).toBeGreaterThan(0);
          expect(Object.keys(response.body.recommended).length).toBeGreaterThan(0);
          expect(Object.keys(response.body.characteristics).length).toBeGreaterThan(0);
          // ensure request is made with headers - API key
          expect(axios).toHaveBeenCalledWith(
              options = {
                method: 'GET',
                // url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products',
                url: `${url}/reviews/meta/?product_id=18078`,
                headers: {
                  'User-Agent': 'request',
                  'Authorization': `${config.TOKEN}`,
                },
                data: undefined,
              },
          );
          done();
        });
  });

  test('Should post a review', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so in case server is down our tests won't fail
    axios.mockImplementationOnce(() => Promise.resolve({
      data: 'Created',
    }));

    request.post('/reviews/')
        // send example of data I would plan to send as post
        .send({
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
        })
        .then((response) => {
          // success response message
          expect(response.text).toBe('Created');
          // ensure request is made with headers - API key
          expect(axios).toHaveBeenCalledWith(
              options = {
                method: 'POST',
                // url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products',
                url: `${url}/reviews/`,
                headers: {
                  'User-Agent': 'request',
                  'Authorization': `${config.TOKEN}`,
                },
                data: {
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
                },
              },
          );
          done();
        });
  });
});
