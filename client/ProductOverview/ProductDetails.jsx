import React, {useContext, useState, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Container, Col, Row} from 'react-bootstrap';
import CarouselComponent from './CarouselComponent.jsx';
import axios from 'axios';

function ProductDetails() {
  const {currentProduct, updateStyles, styles, updateCurrentStyle} = useContext(ProductContext);

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

  if (styles.length === 0) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    if (currentProduct) {
      styles.results.forEach((result) => {
        if (result['default?']) {
          updateCurrentStyle(result);
        }
      });
    }
    return (
      <Container style={{background: '#f3f7f0', padding: '2rem'}}>
        <Row>
          <Col style={{height: 'auto'}}>
            <CarouselComponent />
          </Col>
          <Col>
            <Row >
              <div>
                <h1>{currentProduct.name}</h1>
                <p>{currentProduct.slogan}</p>
                <h3>${currentProduct.default_price}</h3>
                {console.log(currentProduct)}
              </div>
            </Row>
            <Row>
            </Row>
            <Row>
              <div>
                {currentProduct.description}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductDetails;
