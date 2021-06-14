import React, {useContext} from 'react';
import {ProductContext} from '../context.js';
import {Modal, Container} from 'react-bootstrap';
import CarouselComponent from './CarouselComponent.jsx';

function Expanded(props) {
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
        <Container style={{height: '45rem', width: '45rem'}}>
          <CarouselComponent />
        </Container>
      </Modal.Body>
      {console.log(showModal)}
    </Modal>
  );
}


export default Expanded;
