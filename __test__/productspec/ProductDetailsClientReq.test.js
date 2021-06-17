const axios = require('axios');
const productsAPIReqs = require('./productHelpers.js');
const fetchProducts = productsAPIReqs.fetchProducts;
const getStyles = productsAPIReqs.getStyles;

jest.mock('axios');

describe('Product Details API client-side calls', () => {
  test('Should get ONE specific products details', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so that in case the server is down our tests wouldn't fail
    axios.get.mockImplementationOnce(() => Promise.resolve({
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

    fetchProducts()
        .then((responseObj) => {
          // body info/structure - check couple key points, like id & features
          expect(responseObj.id).toBe(18078);
          // ensure features returned isn't empty
          expect(responseObj.features.length).toBeGreaterThan(0);
          // ensure request is made proper URI/params (if any params)
          expect(axios.get).toHaveBeenCalledWith(
              '/products/18078',
          );
          done();
        });
  });


  test('Should get ONE specific products styles', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so that in case the server is down our tests wouldn't fail
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        'product_id': 18078,
        'results': [{}],
      },
    }));

    getStyles()
        .then((responseObj) => {
          // body info/structure - check couple key points, like id & results
          expect(responseObj.product_id).toBe(18078);
          // ensure results returned isn't empty
          expect(responseObj.results.length).toBeGreaterThan(0);
          // ensure request is made proper URI/params (if any params)
          expect(axios.get).toHaveBeenCalledWith(
              '/products/18078/styles',
          );
          done();
        });
  });
});
