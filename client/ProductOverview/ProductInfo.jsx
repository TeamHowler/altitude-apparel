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

      <Card style={{height: '30rem'}}>
        <Card.Body>
          <span>
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
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              dataStep="0.25"
              mr={4}
            /><a href="#ratings/reviews">
              <font id="productRating">See All {count} Reviews</font></a></span>
          <h3>{currentProduct.category}</h3>
          <h1>{currentProduct.name}</h1>
          {currentStyle.sale_price ? <span>
            <font style={{textDecoration: 'line-through', color: 'red'}}>
              ${currentStyle.original_price}</font><br>
            </br>Sale Price: ${currentStyle.sale_price}
          </span> : `$${currentStyle.original_price}`}
          <br></br>
          <font style={{fontWeight: 'bold'}}>Style{'>'}  </font>
          {currentStyle.name}
          <span>
            <Thumbnails />
            <Size />
          </span>
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
