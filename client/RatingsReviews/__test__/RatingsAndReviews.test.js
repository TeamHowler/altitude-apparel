import React from 'react';
import {render, screen} from '@testing-library/react';

import RatingsAndReviews from '../RatingsAndReviews.jsx';

describe('RatingsAndReviews', () => {
  test('renders RatingsAndReviews component', () => {
    render(<RatingsAndReviews />);

    screen.debug();
  });
});
