import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Container, Col, Row, Button} from 'react-bootstrap';
import CarouselComponent from './CarouselComponent.jsx';
import axios from 'axios';
import Thumbnails from './Thumbnails.jsx';
import Size from './Size.jsx';
import StarRatingComponent from 'react-star-rating-component';

function ProductDetails() {
  const {currentProduct, updateStyles,
    styles, updateCurrentStyle, defaultStyle, rating} =
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
      <Container style={{background: '#f3f7f0', padding: '2rem',
        height: 'auto'}}>
        <Row>
          <Col style={{height: 'auto'}}>
            <CarouselComponent />
            <h3>{currentProduct.slogan}</h3>
            <p>{currentProduct.description}</p>
          </Col>
          <Col>
            <Container>
              <Row style={{marginBottom: '50px'}}>
                <div>
                  <style>
                    {`
                      #productRating {
                      text-decoration: underline;
                      font-size: 15px;
                      }
                      a {
                        color: black;
                      }
                    `}
                  </style>
                  <Row id="productRating">
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={rating}
                      dataStep="0.25"
                      mr={4}
                    /><a href="#ratings/reviews">  See All Reviews</a>

                  </Row>
                  <h3>{currentProduct.category}</h3>
                  <h1>{currentProduct.name}</h1>
                  <h3>${currentProduct.default_price}</h3>
                </div>
              </Row>
              <Thumbnails />
              <Row style={{marginBottom: '50px'}}>
                <Size />
              </Row>
              <Row style={{marginBottom: '50px'}}>
                <Button style={{background: '#f3f7f0', borderColor: 'black',
                  color: 'black'}}>
                Add To Cart</Button>
                {console.log('currentProduct', currentProduct)}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductDetails;
