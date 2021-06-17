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
        'product': '18078',
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
                url: `${url}/reviews/?product_id=${id}`,
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
});
