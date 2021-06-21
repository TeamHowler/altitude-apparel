import React, {useState, useContext} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import {grey10} from './QAstyle.jsx';
import {ProductContext} from '../context.js';
import PropTypes from 'prop-types';

function AddAnswerModal({questionBody}) {
  const [show, setShow] = useState(false);
  const {currentProduct} = useContext(ProductContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={grey10}
        className="shadow-none"
        variant="link"
        onClick={handleShow}>Add Answer
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submit your Answer</Modal.Title>
        </Modal.Header>
        <Modal.Body> {`Product: ${currentProduct.name}`}</Modal.Body>
        <Modal.Body>{`Question: ${questionBody}`}</Modal.Body>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Your Answer</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                controlId="answerForm.answer" />
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

            <Form.Group>
              <Form.File
                id="answerFormControlFile" label="Upload Photos" />
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
AddAnswerModal.propTypes = {
  questionBody: PropTypes.string,
};
export default AddAnswerModal;
