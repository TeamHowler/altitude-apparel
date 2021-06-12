import React from 'react';
import {Row, Col, Card, Container, Image} from 'react-bootstrap/';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

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
  return (
    <Container>
      <Row>
        <Col>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={review.rating}
            emptyStarColor={'#778899'}
          />
        </Col>
        <Col></Col>
        <Col>
          {review.reviewer_name}
          {'  |  '}
          {months[review.date.slice(6, 7)] + ' ' +
          review.date.slice(8, 10) + ', ' + review.date.slice(0, 4)}
        </Col>
      </Row>
      <Row>
        <style type="text/css">
          {`
            #reviewTilesScroll {
              flex: 1 1 auto;
              overflow-y: scroll;
            }
          `}
        </style>
        <Col id={'reviewTilesScroll'} style={{background: 'lightpink'}}>
          <Card border="secondary">
            <Card.Body>
              <Card.Title>{review.summary}</Card.Title>
              <Card.Text>
                {review.body}
              </Card.Text>
              {review.photos.map((photo) =>
                <Image key={photo['id']} src={photo['url']} thumbnail />)}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewTiles;

ReviewTiles.propTypes = {
  review: PropTypes.object.isRequired,
};
