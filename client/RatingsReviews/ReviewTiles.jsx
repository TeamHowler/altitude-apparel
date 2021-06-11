import React from 'react';
import {Row, Col, Card, Container} from 'react-bootstrap/';
import StarRatingComponent from 'react-star-rating-component';

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

function ReviewTiles({review}) {
  console.log('review inside reviewTiles', review);
  return (
    <Container>
      <Row>
        <Col>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={review.rating}
          />
        </Col>
        <Col></Col>
        <Col>
          {review.reviewer_name}
          {'  |  '}
          {months[review.date.slice(6, 7)] + ' ' + review.date.slice(8, 10) + ', ' + review.date.slice(0, 4)}
        </Col>
      </Row>
      <Row>
        <Col style={{background: 'lightpink'}}>
          <Card.Body>
            <Card.Title>{review.summary}</Card.Title>
            <Card.Text>
              {review.body}
            </Card.Text>
          </Card.Body>

        </Col>
      </Row>
    </Container>
  );
}

export default ReviewTiles;
