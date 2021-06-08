import React, {useContext} from 'react';
import productContext from '../context.js';
import {Row, Image, Container, Col, Card, CardColumns} from 'react-bootstrap/';


function RatingsReviews({review}) {
  // const {} = useContext(productContext);
  console.log('review inside of Ratings Reviews', review);

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


{/* <Row >
<Col style={{background: 'blue'}} border="primary" md={4}>
  <Image thumbnail />
</Col>
<Col style={{background: 'blue'}} md={8}>
  <Card.Body>
    <Card.Title>{review.summary}</Card.Title>
    <Card.Text>
      {review.body}
    </Card.Text>
  </Card.Body>
  {review.date}
</Col>
</Row> */}

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
