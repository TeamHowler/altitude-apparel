import React, {useContext} from 'react';
import productContext from '../context.js';
import Container from 'react-bootstrap/Container';
import {Row, Image} from 'react-bootstrap/';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
// import images from './graph_images.png';

function RatingsReviews({review}) {
  // const {} = useContext(productContext);
  console.log('review inside of Ratings Reviews', review);

  return (
    <Container fluid>
      <Row >
        <Col border="primary" md={4}>
          <Image thumbnail />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{review.summary}</Card.Title>
            <Card.Text>
              {review.body}
            </Card.Text>
          </Card.Body>
          {review.date}
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
