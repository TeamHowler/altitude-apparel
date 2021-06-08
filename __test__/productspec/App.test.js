import React from 'react';
import renderer from 'react-test-renderer';

import {ProductDetails} from './App.jsx';

describe('ProductDetails', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<ProductDetails />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
