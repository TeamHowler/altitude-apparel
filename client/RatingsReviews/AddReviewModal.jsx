import React, {useContext} from 'react';
// import axios from 'axios';
import {ProductContext} from '../context.js';
import {Modal} from 'react-bootstrap/';
import AddReviewModalForm from './AddReviewModalForm.jsx';

function AddReviewModal() {
  const {modalShow, setReviewModalShow, currentProduct} = useContext(ProductContext);

  function handleCloseModalClick() {
    setReviewModalShow(false);
  };

  if (modalShow === false) {
    return (<div />);
  } else {
    return (
      <Modal
        show={modalShow}
        onHide={handleCloseModalClick}
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
          <h6>All fields with an * are required</h6>
          {/* Add form info */}
          <AddReviewModalForm />
        </Modal.Body>
        <Modal.Footer>
          <h2>Thanks for your review!</h2>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddReviewModal;
