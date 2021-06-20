import React, {useContext} from 'react';
import {ProductContext} from '../context.js';
import {Modal, Container} from 'react-bootstrap';
import CarouselComponent from './CarouselComponent.jsx';

function Expanded() {
  const {showModal, setModalShow} = useContext(ProductContext);
  return (
    <Modal
      show={showModal}
      size='lg'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={(e) => {
        e.preventDefault();
        setModalShow(false);
      }}>
      </Modal.Header>
      <Modal.Body>
        <Container style={{height: 'auto', width: '100%'}}>
          <CarouselComponent />
        </Container>
      </Modal.Body>
    </Modal>
  );
}


export default Expanded;
