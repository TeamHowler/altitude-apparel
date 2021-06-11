import React, {useContext, useState, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Container, Col, Row, Button, Dropdown} from 'react-bootstrap';
import CarouselComponent from './CarouselComponent.jsx';
import axios from 'axios';
import Thumbnails from './Thumbnails.jsx';

function ProductDetails() {
  const {currentProduct, updateStyles,
    styles, currentStyle, updateCurrentStyle, defaultStyle} =
    useContext(ProductContext);

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
    if (defaultStyle) {
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
            <h3>{currentProduct.slogan}</h3>
            <p>{currentProduct.description}</p>
          </Col>
          <Col>
            <Row >
              <div>
                <p>{currentProduct.category}</p>
                <h1>{currentProduct.name}</h1>
                <h3>${currentProduct.default_price}</h3>
              </div>
            </Row>
            <Row>
              <Thumbnails />
            </Row>
            <Row>
              <Dropdown style={{background: '#f3f7f0', borderColor: 'black',
                color: 'black'}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select A Size
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown style={{background: '#f3f7f0', borderColor: 'black',
                color: 'black'}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    1
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button style={{background: '#f3f7f0', borderColor: 'black',
                color: 'black'}}>
                Add To Cart</Button>
              <Button>&#8902;</Button>
              {console.log('currentProduct, ', currentStyle)}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductDetails;
