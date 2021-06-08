import React, {useContext, useState, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Container, Carousel, Col, Row} from 'react-bootstrap';
import Image from './Image.jsx';
import axios from 'axios';

function ProductDetails() {
  const {currentProduct} = useContext(ProductContext);
  const [currentStyle, updateStyle] = useState([]);

  const getStyles = () => {
    axios.get(`/products/${currentProduct.id}/styles`)
        .then((response) => {
          updateStyle(response.data);
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

  if (currentStyle.length === 0) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    return (
      <Container style={{background: 'bone', padding: '2rem'}}>
        <Row>
          <Col style={{height: 'auto'}}>
            <Carousel>
              {currentStyle.results[0].photos.map((image) => {
                return (
                  <Carousel.Item style={{height: '30rem'}} key={image.url}>
                    <Image image={image} key={image.url} />;
                  </Carousel.Item>
                );
              })}
            </Carousel>
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
