import React, {useContext, useEffect} from 'react';
// import axios from 'axios';
import {ProductContext} from '../context.js';
import {Modal, Button} from 'react-bootstrap/';

function AddReviewModal() {
  const {modalShow, setModalShow, currentProduct} = useContext(ProductContext);

  function handleCloseModalClick() {
    setModalShow(false);
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
