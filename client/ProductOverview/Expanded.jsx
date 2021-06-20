import React, {useContext} from 'react';
import {ProductContext} from '../context.js';
import {Modal, Container} from 'react-bootstrap';
import CarouselComponent from './CarouselComponent.jsx';

function Expanded({rightArrowClick, leftArrowClick}) {
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
        <Container style={{height: '45rem', width: 'auto'}}>
          <CarouselComponent />
        </Container>
      </Modal.Body>
      <button className="control-next" onClick={rightArrowClick}>
        <i className="far fa-arrow-alt-circle-right fa-2x"></i></button>
      <button className="control-prev" onClick={leftArrowClick}>
        <i className="far fa-arrow-alt-circle-left fa-2x"></i></button>
    </Modal>
  );
}


export default Expanded;
