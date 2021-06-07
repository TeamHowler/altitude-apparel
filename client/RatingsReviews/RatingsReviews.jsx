import React, {useContext} from 'react';
import productContext from '../context.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RatingsReviews() {
  const {} = useContext(productContext);

  return (
    <Container>
      <Row>
        <Col sm={4}>sm=4</Col>
        <Col sm={8}>sm=8</Col>
      </Row>
    </Container>
  );
}

export default RatingsReviews;
