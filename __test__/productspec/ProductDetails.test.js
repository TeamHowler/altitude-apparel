const supertest = require('supertest');
const axios = require('axios');
const app = require('../../server/server.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const config = require('../../config.js');

jest.mock('axios');
const request = supertest(app);

describe('Product Details Routes', () => {
  test('Should get ONE specific products details', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so that in case the server is down our tests wouldn't fail
    axios.mockImplementationOnce(() => Promise.resolve({
      data: {
        'id': 18078,
        'campus': 'hr-bld',
        'name': 'Camo Onesie',
        'slogan': 'Blend in to your crowd',
        'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        'category': 'Jackets',
        'default_price': '140.00',
        'created_at': '2021-02-23T05:08:00.350Z',
        'updated_at': '2021-02-23T05:08:00.350Z',
        'features': [
          {
            'feature': 'Fabric',
            'value': 'Canvas',
          },
          {
            'feature': 'Buttons',
            'value': 'Brass',
          },
        ],
      },
    }));

    request.get('/products/18078')
        .then((response) => {
        // success response code
          expect(response.status).toBe(200);
          // body info/structure
          expect(response.body).toEqual(
              expect.objectContaining({
                'id': 18078,
                'campus': 'hr-bld',
                'name': 'Camo Onesie',
                'slogan': 'Blend in to your crowd',
                'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
                'category': 'Jackets',
                'default_price': '140.00',
                'created_at': '2021-02-23T05:08:00.350Z',
                'updated_at': '2021-02-23T05:08:00.350Z',
                'features': [
                  {
                    'feature': 'Fabric',
                    'value': 'Canvas',
                  },
                  {
                    'feature': 'Buttons',
                    'value': 'Brass',
                  },
                ],
              }),
          );
          // ensure results isn't empty
          expect(Object.keys(response.body).length).toBeGreaterThan(0);
          // ensure request is made with headers - API key
          expect(axios).toHaveBeenCalledWith(
              options = {
                method: 'GET',
                // url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products',
                url: `${url}/products/18078`,
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


  test('Should get ALL products on page 0', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so that in case the server is down our tests wouldn't fail
    axios.mockImplementationOnce(() => Promise.resolve({
      data: [
        {
          'id': 18078,
          'campus': 'hr-bld',
          'name': 'Camo Onesie',
          'slogan': 'Blend in to your crowd',
          'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
          'category': 'Jackets',
          'default_price': '140.00',
          'created_at': '2021-02-23T05:08:00.350Z',
          'updated_at': '2021-02-23T05:08:00.350Z',
        },
        {
          'id': 18079,
          'campus': 'hr-bld',
          'name': 'Bright Future Sunglasses',
          'slogan': 'You\'ve got to wear shades',
          'description': 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
          'category': 'Accessories',
          'default_price': '69.00',
          'created_at': '2021-02-23T05:08:00.350Z',
          'updated_at': '2021-02-23T05:08:00.350Z',
        },
        {
          'id': 18080,
          'campus': 'hr-bld',
          'name': 'Morning Joggers',
          'slogan': 'Make yourself a morning person',
          'description': 'Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.',
          'category': 'Pants',
          'default_price': '40.00',
          'created_at': '2021-02-23T05:08:00.350Z',
          'updated_at': '2021-02-23T05:08:00.350Z',
        },
        {
          'id': 18081,
          'campus': 'hr-bld',
          'name': 'Slacker\'s Slacks',
          'slogan': 'Comfortable for everything, or nothing',
          'description': 'I\'ll tell you how great they are after I nap for a bit.',
          'category': 'Pants',
          'default_price': '65.00',
          'created_at': '2021-02-23T05:08:00.350Z',
          'updated_at': '2021-02-23T05:08:00.350Z',
        },
        {
          'id': 18082,
          'campus': 'hr-bld',
          'name': 'Heir Force Ones',
          'slogan': 'A sneaker dynasty',
          'description': 'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
          'category': 'Kicks',
          'default_price': '99.00',
          'created_at': '2021-02-23T05:08:00.350Z',
          'updated_at': '2021-02-23T05:08:00.350Z',
        },
      ],
    }));

    request.get('/products')
        .then((response) => {
        // success response code
          expect(response.status).toBe(200);
          // body info/structure
          expect(response.body).toEqual(
              expect.arrayContaining([
                {
                  'id': 18078,
                  'campus': 'hr-bld',
                  'name': 'Camo Onesie',
                  'slogan': 'Blend in to your crowd',
                  'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
                  'category': 'Jackets',
                  'default_price': '140.00',
                  'created_at': '2021-02-23T05:08:00.350Z',
                  'updated_at': '2021-02-23T05:08:00.350Z',
                },
                {
                  'id': 18079,
                  'campus': 'hr-bld',
                  'name': 'Bright Future Sunglasses',
                  'slogan': 'You\'ve got to wear shades',
                  'description': 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
                  'category': 'Accessories',
                  'default_price': '69.00',
                  'created_at': '2021-02-23T05:08:00.350Z',
                  'updated_at': '2021-02-23T05:08:00.350Z',
                },
                {
                  'id': 18080,
                  'campus': 'hr-bld',
                  'name': 'Morning Joggers',
                  'slogan': 'Make yourself a morning person',
                  'description': 'Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.',
                  'category': 'Pants',
                  'default_price': '40.00',
                  'created_at': '2021-02-23T05:08:00.350Z',
                  'updated_at': '2021-02-23T05:08:00.350Z',
                },
                {
                  'id': 18081,
                  'campus': 'hr-bld',
                  'name': 'Slacker\'s Slacks',
                  'slogan': 'Comfortable for everything, or nothing',
                  'description': 'I\'ll tell you how great they are after I nap for a bit.',
                  'category': 'Pants',
                  'default_price': '65.00',
                  'created_at': '2021-02-23T05:08:00.350Z',
                  'updated_at': '2021-02-23T05:08:00.350Z',
                },
                {
                  'id': 18082,
                  'campus': 'hr-bld',
                  'name': 'Heir Force Ones',
                  'slogan': 'A sneaker dynasty',
                  'description': 'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
                  'category': 'Kicks',
                  'default_price': '99.00',
                  'created_at': '2021-02-23T05:08:00.350Z',
                  'updated_at': '2021-02-23T05:08:00.350Z',
                },
              ]),
          );
          // ensure results isn't empty
          expect(response.body.length).toBeGreaterThan(0);
          // ensure request is made with headers - API key
          expect(axios).toHaveBeenCalledWith(
              options = {
                method: 'GET',
                // url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products',
                url: `${url}/products`,
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

  test('Should get styles for a specific product', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so that in case the server is down our tests wouldn't fail
    axios.mockImplementationOnce(() => Promise.resolve({
      data: {
        'product_id': '18078',
        'results': [{}],
      },
    }));

    request.get('/products/18078/styles')
        .then((response) => {
        // success response code
          expect(response.status).toBe(200);
          // body info/structure
          expect(response.body).toEqual(
              expect.objectContaining({
                'product_id': '18078',
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
                url: `${url}/products`,
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

