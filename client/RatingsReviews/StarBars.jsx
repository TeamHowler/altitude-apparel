import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Card, ListGroup, ProgressBar, Button} from 'react-bootstrap/';
import {every} from 'underscore';

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
    event.preventDefault();
    const selectedStarIndex = parseInt(event.target.value);
    console.log('selected star index', selectedStarIndex);
    // if all star bar toggles are false - then this is the first click 'on'
    if (every(starBarToggle, function(starToggle) {
      return starToggle === false;
    })) {
      // reassign review contents to be this star's reviews
      const fiveStar = reviewsByStars[selectedStarIndex];
      updateReview(fiveStar);
      // ensure sortingByStars is true
      updateSortingByStars(true);
      // change bool val of starBarToggle for this star ranking
      starBarToggle[selectedStarIndex] = !starBarToggle[selectedStarIndex];
    } else {
      // change bool val of starBarToggle for this star ranking
      starBarToggle[selectedStarIndex] = !starBarToggle[selectedStarIndex];
      // if starBarToggle bool is true:
      if (starBarToggle[selectedStarIndex]) {
        // concat selected starbar toggle's reviewsByStars at same index to the reviews storage
        const concatStarVals = reviews.concat(reviewsByStars[selectedStarIndex]);
        console.log('reviews of addtl star', reviewsByStars[selectedStarIndex]);
        console.log('reviews before adding another star', reviews);
        console.log('concatted selected star reviews with empty (?) reviews', concatStarVals);
        // update reviews to be these newly concatted reviews
        updateReview(concatStarVals);
        // else if starBarToggle became false:
      } else {
        // empty reviews storage
        updateReview([]);
        // iterate through starBarToggle values - if ALL values are false
        if (every(starBarToggle, function(starToggle) {
          return starToggle === false;
        })) {
          // change sortingByStars to be false
          updateSortingByStars(false);
        // else, if even one is true
        } else {
          let concatStarValues;
          // iterate through starBarToggle, if true - concat associated reviewsByStars arr to reviews storage
          starBarToggle.forEach(function(starSort, index) {
            if (starSort) {
              concatStarValues = reviews.concat(reviewsByStars[index]);
              updateReview(concatStarValues);
            }
          });
        }
      };
    }
  };

  useEffect(() => {
    sortStarReviews();
  }, []);

  return (
    <Card >
      <Card.Header>Click To Sort By Star Ratings:</Card.Header>
      <Button value="4" onClick={handleSelectStar} variant="secondary">
        5 stars <ProgressBar striped variant="info" now={fiveStarPercentage * 100} />
      </Button>
      <Button value="3" onClick={handleSelectStar} variant="secondary">
        4 stars
        <ProgressBar striped variant="info" now={fourStarPercentage * 100} />
      </Button>
      <Button value="2" onClick={handleSelectStar} variant="secondary">
        3 stars
        <ProgressBar striped variant="info" now={threeStarPercentage * 100} />
      </Button>
      <Button value="1" onClick={handleSelectStar} variant="secondary">
        2 stars
        <ProgressBar striped variant="info" now={twoStarPercentage * 100} />
      </Button>
      <Button value="0" onClick={handleSelectStar} variant="secondary">
        1 stars
        <ProgressBar striped variant="info" now={oneStarPercentage * 100} />
      </Button>
      {/* <ListGroup variant="flush">
        <ListGroup.Item action value="4" onClick={handleSelectStar}>
          5 stars
          <ProgressBar striped variant="info" now={fiveStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item value="3" onClick={handleSelectStar}>
          4 stars
          <ProgressBar striped variant="info" now={fourStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item value="2" onClick={handleSelectStar}>
          3 stars
          <ProgressBar striped variant="info" now={threeStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item value="1" onClick={handleSelectStar}>
          2 stars
          <ProgressBar striped variant="info" now={twoStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item value="0" onClick={handleSelectStar}>
          1 stars
          <ProgressBar striped variant="info" now={oneStarPercentage * 100} />
        </ListGroup.Item>
      </ListGroup> */}
    </Card>
  );
}

export default StarBars;
