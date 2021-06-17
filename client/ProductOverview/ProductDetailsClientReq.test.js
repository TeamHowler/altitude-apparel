import axios from 'axios';

import {
  fetchProducts,
} from '../../client/ProductOverview/productHelpers.js';

jest.mock('axios');

describe('Product Details API client-side calls', () => {
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

    fetchProducts()
        .then((responseObj) => {
          // body info/structure - check couple key points, like id & features
          expect(responseObj.id).toBe(18078);
          // ensure features returned isn't empty
          expect(responseObj.features.length).toBeGreaterThan(0);
          // ensure request is made with headers - API key
          expect(axios.get).toHaveBeenCalledWith(
              '/products/18078',
          );
          done();
        });
  });
});
