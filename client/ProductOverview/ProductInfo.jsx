import React, {useContext} from 'react';
import {Card, Button} from 'react-bootstrap';
import {ProductContext} from '../context.js';
import Thumbnails from './Thumbnails.jsx';
import Size from './Size.jsx';
import StarRatingComponent from 'react-star-rating-component';

function ProductInfo() {
  const {rating, currentProduct, currentStyle, count} =
  useContext(ProductContext);

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
          <Button style={{background: '#f3f7f0', borderColor: 'transparent',
            color: 'black'}}>
                  Add To Cart</Button>

        </Card.Body>
      </Card>
    );
  }
}

export default ProductInfo;
