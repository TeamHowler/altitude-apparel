import React, {useContext, useEffect, useState} from 'react';
// import axios from 'axios';
import {ProductContext} from '../context.js';
import {Modal, Button, InputGroup, Form} from 'react-bootstrap/';
import StarRatingComponent from 'react-star-rating-component';
import AddReviewModalForm from './AddReviewModalForm.jsx';

function AddReviewModal() {
  const {modalShow, setModalShow, currentProduct} = useContext(ProductContext);
  const [newReviewRating, updateNewReviewRating] = useState(0);

  function handleCloseModalClick() {
    setModalShow(false);
  };

  function handleNewReviewStarClick(value) {
    updateNewReviewRating(value);
  };

  if (modalShow === false) {
    return (<div />);
  } else {
    return (
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Write Your Review About the {currentProduct.name}:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* Select a star value */}
          <h5>Select a star rating (required):</h5>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={newReviewRating}
            onStarClick={handleNewReviewStarClick.bind(this)}
            emptyStarColor={'#778899'}
          />

          {/* Add form info */}
          <AddReviewModalForm />


          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModalClick}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddReviewModal;
