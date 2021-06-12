import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import {ProductContext} from '../context.js';
import {Row, Col, DropdownButton, Dropdown, Button} from 'react-bootstrap/';
import ReviewTiles from './ReviewTiles.jsx';
import StarRatingComponent from 'react-star-rating-component';


function RatingsAndReviews() {
  const {currentId, reviews, rating, count, updateReview,
    updateRating, updateCount} = useContext(ProductContext);

  const fetchAllReviews = () => {
    axios.get(`/reviews/${currentId}&count=${count}`)
        .then((response) => {
          updateReview(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const fetchRating = () => {
    axios.get(`/reviews/meta/${currentId}`)
        .then((response) => {
          const rate = response.data.ratings;
          const oneStarSum = parseInt(rate['1']);
          const twoStarSum = parseInt(rate['2']) * 2;
          const threeStarSum = parseInt(rate['3']) * 3;
          const fourStarSum = parseInt(rate['4']) * 4;
          const fiveStarSum = parseInt(rate['5']) * 5;
          const sum = oneStarSum + twoStarSum + threeStarSum + fourStarSum + fiveStarSum;
          const oneStarCt = parseInt(rate['1']);
          const twoStarCt = parseInt(rate['2']);
          const threeStarCt = parseInt(rate['3']);
          const fourStarCt = parseInt(rate['4']);
          const fiveStarCt = parseInt(rate['5']);
          const totalRatings = oneStarCt + twoStarCt + threeStarCt + fourStarCt + fiveStarCt;
          updateCount(totalRatings);
          const ave = Math.round(sum/totalRatings);
          updateRating(ave);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    fetchAllReviews();
    fetchRating();
  }, [count]);

  if (reviews.length === 0) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    return (
      <div id="ratings/reviews">
        <h4>Ratings & Reviews</h4>
        <Row >
          {/* Graphs: */}
          <Col style={{background: 'lightpurple'}} border="primary" md={4}>
            {/* <Image thumbnail /> */}
            <h6>Rating Rounded to Nearest Whole Number:</h6>
            <span>
              <h4>{rating}</h4>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
              />
            </span>
          </Col>

          {/* Reviews: */}
          <Col style={{background: 'lightblue'}} md={8}>
            {/* Reviews Heading with Dropdown: */}
            <h5>
              {count} reviews
              <DropdownButton id="dropdown-basic-button" title="Sort By:">
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
