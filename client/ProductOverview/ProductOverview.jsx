import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../context.js';
import axios from 'axios';
import ProductDetails from './ProductDetails.jsx';
import {Container} from 'react-bootstrap';


function ProductOverview() {
  return (
    <Container style={{background: '#ecf5eb', padding: '2rem'}}>
      <ProductDetails />
    </Container>
  );
}


export default ProductOverview;
