import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Container, Col, Row, Card} from 'react-bootstrap';
import CarouselComponent from './CarouselComponent.jsx';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import CarouselOverlay from './CarouselOverlay.jsx';


function ProductOverview() {
  const {currentProduct, updateStyles,
    styles, updateCurrentStyle, defaultStyle, setModalShow} =
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
          ; updateCurrentStyle(result);
        }
      });
    }
    return (
      <Container style={{background: '#f3f7f0', padding: '2rem'}}>
        <Row className="mb-3">
          <Col style={{height: 'auto', width: '25rem'}}>
            <Card style={{height: '30rem', width: '25rem', overflow: 'hidden'}}>
              <Card.Body>
                <Card.ImgOverlay style={{textAlign: 'right',
                  margin: '1rem', zIndex: '100', height: '1rem'}}>
                  <span style={{color: 'grey'}} onClick={(e) => {
                    e.preventDefault();
                    setModalShow(true);
                  }}><i className="fas fa-expand fa-2x"></i></span>
                </Card.ImgOverlay>
                <CarouselComponent />
                <CarouselOverlay />
              </Card.Body>
            </Card>
          </Col>
          <Col style={{height: 'auto', width: '25rem'}}>
            <ProductInfo />
          </Col>
        </Row>
        <Card style={{height: '10rem'}}><Card.Body>
          <h3>{currentProduct.slogan}</h3>
          <p>{currentProduct.description}</p>
        </Card.Body></Card>
      </Container>
    );
  }
}

export default ProductOverview;
