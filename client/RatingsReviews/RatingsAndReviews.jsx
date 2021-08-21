import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import {ProductContext} from '../context.js';
import {Row, Col, Button} from 'react-bootstrap/';
import ReviewTiles from './ReviewTiles.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import StarRatingComponent from 'react-star-rating-component';
import StarBars from './StarBars.jsx';


function RatingsAndReviews() {
  const {currentId, reviews, rating, count, updateReview,
    updateRating, updateCount, clickCount, reviewsCuedToDisplay,
    updateReviewsCuedToDisplay, updateClickCount,
    setReviewModalShow, setMeta, sortingByStars,
    updateReviewsByNewness} = useContext(ProductContext);

  const fetchAllReviews = () => {
    if (!sortingByStars) {
      axios.get(`/reviews/${currentId}&count=${count}`)
          .then((response) => {
            console.log('response from axios get req for reviews', response);
            updateReview(response.data.results);
            updateReviewsCuedToDisplay(response.data.results.length);
            updateCount(response.data.results.length);
          })
          .catch((err) => {
            console.log(err);
          });
    } else {
      return;
    }
  };


  const fetchRating = () => {
    axios.get(`/reviews/meta/${currentId}`)
        .then((response) => {
          setMeta(response.data);
          const rate = response.data.ratings;
          const productRatings = Object.keys(rate);
          let sumOfRatings = 0;
          let numOfRatings = 0;
          productRatings.forEach(function(value) {
            if (value === '1' || value === '2' || value === '3' ||
              value === '4' || value === '5') {
              sumOfRatings += parseInt(rate[value]) * parseInt(value);
              numOfRatings += parseInt(rate[value]);
            }
          });
          const ave = Math.round(sumOfRatings/numOfRatings);
          if (reviews.length === 0) {
            updateCount(numOfRatings);
          };
          updateRating(ave);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  function handleMoreReviewsClick() {
    updateClickCount((prevCount) => prevCount + 1);
  };

  function handleAddReviewClick() {
    setReviewModalShow(true);
  };

  function sortReviewsNewness() {
    const newnessSort = reviews.sort(function(a, b) {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return bDate - aDate;
    });
    updateReviewsByNewness(newnessSort);
  }

  useEffect(() => {
    fetchRating();
  }, []);

  useEffect(() => {
    if (count === 0) {
      return;
    } else {
      fetchAllReviews();
    }
  }, [count]);

  // useEffect(() => {
  //   sortReviewsNewness();
  // }, [reviews]);

  if (reviews.length === 0) {
    return (
      <center>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </center>
    );
  } else {
    sortReviewsNewness();
    return (
      <div id="ratings/reviews" style={{background: '#f3f7f0'}}>
        <style type="text/css">
          {`
            #roundedDivider {
              border-top: 8px solid #bbb;
              border-radius: 5px;
              background: '#f3f7f0';
            }
          `}
        </style>
        <hr id="roundedDivider"/>
        <h2>  Ratings and Reviews</h2>
        <Row >
          {/* Graphs: */}
          <Col border="primary" md={4}>
            {/* <Image thumbnail /> */}
            <h6>Rating Rounded to Nearest Whole Number:</h6>
            <span>
              <h4>{rating}</h4>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                emptyStarColor={'#778899'}
              />
            </span>

            {/* Star Bars */}
            <StarBars />

          </Col>

          {/* Reviews: */}
          <Col style={{background: '#f3f7f0'}} md={8} id="reviewTilesScroll">
            {/* Reviews Heading with Dropdown: */}
            <style type="text/css">
              {`
                #reviewTilesScroll {
                  display: flex;
                  flex-direction: column;
                  max-height: 800px;
                }
              `}
            </style>
            <h5>
              {reviewsCuedToDisplay} reviews
              {/* <DropdownButton id="dropdown-basic-button" title="Sort By:">
                <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Helpful</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Newest</Dropdown.Item>
              </DropdownButton> */}
            </h5>
            {/* Review tiles: */}
            {reviews.slice(0, clickCount * 2).map((review) =>
              <ReviewTiles key={review.review_id} review={review} />)}
            {/* Review buttons: */}
            <br />
            <Row>
              <Col md={2} />
              <Col md={5}>
                <Button
                  variant="outline-secondary"
                  onClick={handleMoreReviewsClick}>
                    More Reviews
                </Button>{' '}
              </Col>
              <Col md={5}>
                <Button
                  variant="outline-secondary"
                  onClick={handleAddReviewClick}>
                    Add A Review
                </Button>{' '}
              </Col>
            </Row>
            <br />
            <AddReviewModal />
          </Col>
        </Row>
      </div>
    );
  }
};

export default RatingsAndReviews;
