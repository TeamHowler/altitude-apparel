import React, {useState, useContext} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import {mL25} from './QAstyle.jsx';
import {ProductContext} from '../context.js';

function AddQuestionModal() {
  const [show, setShow] = useState(false);
  const {currentProduct} = useContext(ProductContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={mL25}
        size='sm'
        className="shadow-none"
        variant="outline-dark"
        onClick={handleShow}>
        Add a Question
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            { `Ask your question about ${currentProduct.name}` }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Your Question</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                controlId="questionForm.question" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Nickname</Form.Label>
              <Form.Control type="text" placeholder="Example: jack543" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Example: jack@email.com" />
            </Form.Group>

          </Form>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddQuestionModal;
