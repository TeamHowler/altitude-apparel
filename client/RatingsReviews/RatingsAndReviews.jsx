import React, {useContext} from 'react';
import {ProductContext} from '../context.js';
import {Row, Col, DropdownButton, Dropdown, Button} from 'react-bootstrap/';
import ReviewTiles from './ReviewTiles.jsx';


function RatingsAndReviews() {
  const {reviews} = useContext(ProductContext);

  if (reviews.length === 0) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    return (
      <div>
        <h4>Ratings & Reviews</h4>
        <Row >
          {/* Graphs: */}
          <Col style={{background: 'lightpurple'}} border="primary" md={4}>
            {/* <Image thumbnail /> */}
            <h6>Graph Images go here:</h6>
          </Col>

          {/* Reviews: */}
          <Col style={{background: 'lightblue'}} md={8}>
            {/* Reviews Heading with Dropdown: */}
            <h5>
              {reviews.length} reviews, sorted by
              <DropdownButton id="dropdown-basic-button" title="Sort On:">
                <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Helpful</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Newest</Dropdown.Item>
              </DropdownButton>
            </h5>
            {/* Review tiles: */}
            {reviews.map((review) =>
              <ReviewTiles key={review.review_id} review={review} />)}
            {/* Review buttons: */}
            <Button variant="outline-secondary">More Reviews</Button>{' '}
            <Button variant="outline-secondary">Add A Review</Button>{' '}
          </Col>
        </Row>
      </div>
    );
  }
};

export default RatingsAndReviews;
