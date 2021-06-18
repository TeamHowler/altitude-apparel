import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../context.js';
import {Card, ListGroup, ProgressBar} from 'react-bootstrap/';

function StarBars() {
  const {reviewsByStars, updateReviewsByStars, reviews, count} = useContext(ProductContext);

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



  useEffect(() => {
    sortStarReviews();
  }, []);

  return (
    <Card >
      <Card.Header>Sort By Star Ratings:</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          5 stars
          <ProgressBar striped variant="info" now={fiveStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item>
          4 stars
          <ProgressBar striped variant="info" now={fourStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item>
          3 stars
          <ProgressBar striped variant="info" now={threeStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item>
          2 stars
          <ProgressBar striped variant="info" now={twoStarPercentage * 100} />
        </ListGroup.Item>
        <ListGroup.Item>
          1 stars
          <ProgressBar striped variant="info" now={oneStarPercentage * 100} />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default StarBars;
