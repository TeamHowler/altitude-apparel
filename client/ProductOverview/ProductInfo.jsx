import React, {useContext, useState} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import {ProductContext} from '../context.js';
import Thumbnails from './Thumbnails.jsx';
import Size from './Size.jsx';
import StarRatingComponent from 'react-star-rating-component';

function ProductInfo() {
  const {rating, currentProduct, currentStyle, count} =
  useContext(ProductContext);
  const [isFav, updateFav] = useState(false);
  let heart = '';
  if (isFav) {
    heart = <i className="fas fa-heart"></i>;
  } else {
    heart = <i className="far fa-heart"></i>;
  }

  if (currentStyle === undefined) {
    return (
      <div>Waiting...</div>
    );
  } else {
    return (
      <Card style={{height: '30rem', width: 'auto',
        margin: 'auto', marginBottom: '1rem', marginTop: '1rem'}}>
        <Card.Body>
          <Col style={{margin: 'auto'}}>
            <Row style={{height: '1rem', marginBottom: '10px'}}>
              <style>
                {`
               #productRating {
               justify-text: bottom
               text-decoration: underline;
               font-size: 10px;
               }
               a {
                 color: black;
               }
            `}
              </style>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                dataStep="0.25"
                mr={4}
              /><a href="#ratings/reviews">
                <font id="productRating">See All {count} Reviews
                </font></a></Row>
            <Row>
              <h3>{currentProduct.category}</h3>
            </Row>
            <Row>
              <h1>{currentProduct.name}</h1>
            </Row>
            <Row>
              {currentStyle.sale_price ? <span>
                <font style={{textDecoration: 'line-through', color: 'red'}}>
              ${currentStyle.original_price}  </font>
                Sale Price: ${currentStyle.sale_price}
              </span> : `$${currentStyle.original_price}`}
            </Row>
            <br></br>
            <Row>
              <font style={{fontWeight: 'bold'}}>Style{'>'}  </font>
              {currentStyle.name}
            </Row>
            <Row>
              <span>
                <Thumbnails />
                <Size />
              </span>
            </Row>
          </Col>
          <Row>
            <Col>
              <button style={{background: '#f3f7f0', borderColor: 'transparent',
                color: 'black', height: '2rem'}}>
                 Add To Cart</button>
            </Col>
            <Col>
              <button style={{background: 'transparent',
                borderColor: 'transparent',
                color: 'black', height: '2rem'}} onClick={(e) => {
                e.preventDefault();
            isFav ? updateFav(false) : updateFav(true);
              }}>{heart}</button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductInfo;
