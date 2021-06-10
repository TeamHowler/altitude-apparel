import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../context.js';
import axios from 'axios';
import ProductDetails from './ProductDetails.jsx';
import {Container} from 'react-bootstrap';


function ProductOverview() {
  const {currentProduct, updateStyles} = useContext(ProductContext);

  const getStyles = () => {
    axios.get(`/products/${currentProduct.id}/styles`)
        .then((response) => {
          updateStyles(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    if (currentProduct.id === undefined) {
      return;
    } else {
      getStyles();
    }
  }, [currentProduct]);


  return (
    <Container style={{background: '#ecf5eb', padding: '2rem'}}>
      <ProductDetails />
    </Container>
  );
}


export default ProductOverview;
