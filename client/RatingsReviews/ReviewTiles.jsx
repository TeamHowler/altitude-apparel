import React from 'react';
import {Row, Col, Card} from 'react-bootstrap/';

function ReviewTiles({review}) {
  return (
    <Row>
      <Col style={{background: 'lightpink'}}>
        <Card.Body>
          <Card.Title>{review.summary}</Card.Title>
          <Card.Text>
            {review.body}
          </Card.Text>
        </Card.Body>
        {review.date}
      </Col>
    </Row>
  );
}

export default ReviewTiles;
