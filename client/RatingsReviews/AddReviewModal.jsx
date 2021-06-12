import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import {ProductContext} from '../context.js';
import {Modal} from 'react-bootstrap/';

function AddReviewModal() {
  const {modalShow, setModalShow} = useContext(ProductContext);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
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
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddReviewModal;
