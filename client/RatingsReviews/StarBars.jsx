import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Card, ProgressBar, Button} from 'react-bootstrap/';
import {every, flatten} from 'underscore';

function StarBars() {
  const {reviewsByStars, updateReviewsByStars,
    reviews, updateReview, count, updateReviewsCuedToDisplay,
    updateSortingByStars, starBarToggle, updatestarBarToggle} =
    useContext(ProductContext);

  const sortStarReviews = () => {
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
    event.preventDefault();
    const selectedStarIndex = parseInt(event.target.value);
    if (every(starBarToggle, function(starToggle) {
      return starToggle === false;
    })) {
      updateSortingByStars(true);
      const starBarCopy = starBarToggle.slice();
      starBarCopy[selectedStarIndex] = !starBarToggle[selectedStarIndex];
      updatestarBarToggle(starBarCopy);
    } else {
      const starBarCopyAddtlClick = starBarToggle.slice();
      starBarCopyAddtlClick[selectedStarIndex] =
        !starBarToggle[selectedStarIndex];
      updatestarBarToggle(starBarCopyAddtlClick);
    }
  };

  const displayStarReviews = () => {
    if (every(starBarToggle, function(starToggle) {
      return starToggle === false;
    })) {
      updateSortingByStars(false);
      updateReviewsCuedToDisplay(flatten(reviewsByStars).length);
    } else {
      let concatStarValues = [];
      starBarToggle.forEach(function(starSort, index) {
        if (starSort) {
          concatStarValues = concatStarValues.concat(reviewsByStars[index]);
        }
      });
      updateReview(concatStarValues);
      updateReviewsCuedToDisplay(concatStarValues.length);
    }
  };

  useEffect(() => {
    displayStarReviews();
  }, [starBarToggle]);

  useEffect(() => {
    sortStarReviews();
  }, []);

  return (
    <Card >
      <Card.Header>Click To Sort By Star Ratings:</Card.Header>
      <Button value="4" onClick={handleSelectStar} variant="link">
        5 stars
        <ProgressBar striped variant="info" now={fiveStarPercentage * 100} />
      </Button>
      <Button value="3" onClick={handleSelectStar} variant="link">
        4 stars
        <ProgressBar striped variant="info" now={fourStarPercentage * 100} />
      </Button>
      <Button value="2" onClick={handleSelectStar} variant="link">
        3 stars
        <ProgressBar striped variant="info" now={threeStarPercentage * 100} />
      </Button>
      <Button value="1" onClick={handleSelectStar} variant="link">
        2 stars
        <ProgressBar striped variant="info" now={twoStarPercentage * 100} />
      </Button>
      <Button value="0" onClick={handleSelectStar} variant="link">
        1 stars
        <ProgressBar striped variant="info" now={oneStarPercentage * 100} />
      </Button>
    </Card>
  );
}

export default StarBars;
