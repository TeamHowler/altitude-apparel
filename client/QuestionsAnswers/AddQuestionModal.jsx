/* eslint-disable no-tabs */
import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {mL23} from './QAstyle.jsx';


function AddQuestionModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={mL23}
        className="shadow-none"
        variant="outline-dark"
        onClick={handleShow}>Add a Question
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					I will not close if you click outside me. Dont even try to press
					escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
						Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddQuestionModal;
