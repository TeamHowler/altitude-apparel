import React, {useContext} from 'react';
import productContext from '../context.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

function RatingsReviews({review}) {
  // const {} = useContext(productContext);

  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        <Col border="primary" xs={2} md={4} lg={6}>
          Review Summary: {review.summary}
        </Col>
        <Col lg={6}>
          2 of 2
        </Col>
      </Row>
    </Container>
  );
}

export default RatingsReviews;

// <Card border="primary" style={{ width: '18rem' }}>
// <Card.Img variant="top" src="holder.js/100px180" />
// <Card.Body>
//   <Card.Title>Card Title</Card.Title>
//   <Card.Text>
//     Some quick example text to build on the card title and make up the bulk of
//     the card's content.
//   </Card.Text>
// </Card.Body>
// </Card>


{/* <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card> */}
