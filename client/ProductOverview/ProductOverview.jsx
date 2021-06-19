import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Container, Col, Row, Card} from 'react-bootstrap';
import CarouselComponent from './CarouselComponent.jsx';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import CarouselOverlay from './CarouselOverlay.jsx';
import Expanded from './Expanded.jsx';


function ProductOverview() {
  const {currentProduct, updateStyles,
    styles, updateCurrentStyle, defaultStyle, setModalShow, currentStyle, active, updateActive} =
    useContext(ProductContext);

  function rightArrowClick(e) {
    e.preventDefault();
    if (currentStyle.photos.length -1 === active) {
      updateActive(0);
    } else {
      updateActive(active + 1);
    }
  }

  function leftArrowClick(e) {
    e.preventDefault();
    if (active === 0) {
      updateActive(currentStyle.photos.length -1);
    } else {
      updateActive(active - 1);
    }
  }

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
      <>
        <style>
          {`
    .control-next {
      background: transparent;
      border: transparent;
      position: absolute;
      zIndex: 2;
      right: 0;
      top: 50%;
      opacity: .5;
  }

  .control-prev {
    background: transparent;
    border: transparent;
    position: absolute;
    zIndex: 2;
    left: 0;
    top: 50%;
    opacity: .5;
}

.expand-btn {
  background: transparent;
  border: transparent;
  position: absolute;
  zIndex: 2;
  right: 0;
  top: 0;
  opacity: .5;
}
    `}
        </style>
        <Container style={{background: '#f3f7f0', padding: '2rem', margin: 'auto'}}>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Card style={{height: '30rem', width: '25rem',
                    overflow: 'hidden', marginBottom: '2rem'}}>
                    <Card.Body>
                      <CarouselComponent />
                      <CarouselOverlay />
                    </Card.Body>

                    <span className="expand-btn" onClick={(e) => {
                      e.preventDefault();
                      setModalShow(true);
                    }}><i className="fas fa-expand fa-2x"></i></span>
                    <button className="control-next" onClick={rightArrowClick}>
                      <i className="far fa-arrow-alt-circle-right fa-2x"></i>
                    </button>
                    <button className="control-prev" onClick={leftArrowClick}>
                      <i className="far fa-arrow-alt-circle-left fa-2x"></i>
                    </button>
                  </Card>
                </Col>
                <Col>
                  <ProductInfo />
                </Col>
              </Row>
              <Row>
                <Card style={{height: '10rem'}}><Card.Body>
                  <h3>{currentProduct.slogan}</h3>
                  <p>{currentProduct.description}</p>
                </Card.Body></Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ProductOverview;
