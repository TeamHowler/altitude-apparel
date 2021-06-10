import React, {useContext} from 'react';
import {ProductContext} from '../context.js';
import {Col, Row, Image} from 'react-bootstrap';
import CarouselComponent from './CarouselComponent.jsx';

function ProductDetail() {
  const {currentStyle, currentProduct} = useContext(ProductContext);

  useEffect(() => {

  });

  return (
    <>
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
            </div>
          </Row>
          <Row>
          </Row>
          <Row>
            <div>
              {currentProduct.description}
              {currentStyle.photos.map((photo) => {
                <Image src="{photo}" roundedCircle />;
              })}
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default ProductDetail;
