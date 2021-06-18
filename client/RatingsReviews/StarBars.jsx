import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Card, ListGroup, ProgressBar} from 'react-bootstrap/';

function StarBars() {
  const {reviewsByStars, updateReviewsByStars, reviews, updateReview, count, sortingByStars,
    updateSortingByStars, starBarToggle, updatestarBarToggle} = useContext(ProductContext);

  const sortStarReviews = () => {
    // reset storage to be arr of 5 empty arr's
    updateReviewsByStars([[], [], [], [], []]);

    const starStorage = [[], [], [], [], []];

    reviews.forEach(function(review) {
      const index = parseInt(review.rating) - 1;
      if (index <= 4) {
        starStorage[index].push(review);
      }
    });

    updateReviewsByStars(starStorage);
  };

  const fiveStarPercentage = reviewsByStars[4].length / count;
  const fourStarPercentage = reviewsByStars[3].length / count;
  const threeStarPercentage = reviewsByStars[2].length / count;
  const twoStarPercentage = reviewsByStars[1].length / count;
  const oneStarPercentage = reviewsByStars[0].length / count;

  const handleSelectStar = (event) => {
    // if all star bar toggles are false - then this is the first click 'on'
    if (_.every(starBarToggle, function(starToggle) {
      return starToggle === false;
    })) {
      // empty reviews contents
      updateReview([]);
      // ensure sortingByStars is true
      updateSortingByStars(true);
    }

    const selectedStarIndex = parseInt(event.target.value);

    // change bool val of starBarToggle for this star ranking
    updatestarBarToggle[selectedStarIndex] = !updatestarBarToggle[selectedStarIndex];
    // if starBarToggle bool is true:
    if (starBarToggle[selectedStarIndex]) {
      // concat selected starbar toggle's reviewsByStars at same index to the reviews storage
      const concatStarVals = reviews.concat(reviewsByStars[selectedStarIndex]);

    }
    // else if starBarToggle became false:
      // empty reviews storage
      // iterate through starBarToggle values
        // if ALL values are false
          // change sortingByStars to be false
        // else, if true - concat associated reviewsByStars arr to reviews storage

  };

  useEffect(() => {
    sortStarReviews();
  }, []);

  return (
    <Card >
      <Card.Header>Sort By Star Ratings:</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item value="4">
          5 stars
          <ProgressBar striped variant="info" now={fiveStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item value="3">
          4 stars
          <ProgressBar striped variant="info" now={fourStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item value="2">
          3 stars
          <ProgressBar striped variant="info" now={threeStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item value="1">
          2 stars
          <ProgressBar striped variant="info" now={twoStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item value="0">
          1 stars
          <ProgressBar striped variant="info" now={oneStarPercentage * 100} />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default StarBars;
