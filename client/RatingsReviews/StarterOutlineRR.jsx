import React, {useContext} from 'react';
// import productContext from '../context.js';
import {Row, Col, DropdownButton, Dropdown, Button} from 'react-bootstrap/';
import RatingsReviews from './RatingsReviews.jsx';


function StarterOutlineRR({reviews}) {
  // const {} = useContext(productContext);


  return (
    <div>
      <h4>Ratings & Reviews</h4>
      <Row >
        {/* Graphs: */}
        <Col style={{background: 'lightpurple'}} border="primary" md={4}>
          {/* <Image thumbnail /> */}
          <h6>Graph Images go here:</h6>
        </Col>

        {/* Reviews: */}
        <Col style={{background: 'lightblue'}} md={8}>
          <h5>
            {reviews.length} reviews, sorted by
            <DropdownButton id="dropdown-basic-button" title="Sort On:">
              <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Helpful</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Newest</Dropdown.Item>
            </DropdownButton>
          </h5>
          {reviews.map((review) =>
            <RatingsReviews key={review.review_id} review={review} />)}
          <Button variant="outline-secondary">More Reviews</Button>{' '}
          <Button variant="outline-secondary">Add A Review</Button>{' '}
        </Col>
      </Row>
    </div>
  );
}

export default StarterOutlineRR;


// const fetchReviews = () => {
//   const currentID = {currentProduct};
//   axios.get(`/reviews/${currentID.currentProduct.product_id}`)
//       .then((response) => {
//         console.log('response.data in app - fetch reviews', response.data.results);
//         updateReview(response.data.results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
// };


{/* <RatingsReviews /> */}
{/* <Container fluid style={{background: 'yellow'}}>
<StarterOutlineRR reviews={reviews}/>
</Container> */}
